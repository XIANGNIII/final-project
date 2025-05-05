(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function kc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},ts=[],cn=()=>{},wy=()=>!1,fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Dc=t=>t.startsWith("onUpdate:"),Et=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ty=Object.prototype.hasOwnProperty,Ce=(t,e)=>Ty.call(t,e),pe=Array.isArray,ns=t=>pa(t)==="[object Map]",np=t=>pa(t)==="[object Set]",me=t=>typeof t=="function",Qe=t=>typeof t=="string",lr=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",rp=t=>(Fe(t)||me(t))&&me(t.then)&&me(t.catch),sp=Object.prototype.toString,pa=t=>sp.call(t),Iy=t=>pa(t).slice(8,-1),ip=t=>pa(t)==="[object Object]",Nc=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ii=kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ay=/-(\w)/g,zt=ga(t=>t.replace(Ay,(e,n)=>n?n.toUpperCase():"")),by=/\B([A-Z])/g,cr=ga(t=>t.replace(by,"-$1").toLowerCase()),ma=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),fl=ga(t=>t?`on${ma(t)}`:""),Qn=(t,e)=>!Object.is(t,e),Po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},op=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$l=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nh;const _a=()=>Nh||(Nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bi(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?Cy(r):Bi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Fe(t))return t}const Ry=/;(?![^(]*\))/g,Sy=/:([^]+)/,Py=/\/\*[^]*?\*\//g;function Cy(t){const e={};return t.replace(Py,"").split(Ry).forEach(n=>{if(n){const r=n.split(Sy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wi(t){let e="";if(Qe(t))e=t;else if(pe(t))for(let n=0;n<t.length;n++){const r=wi(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ky="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dy=kc(ky);function ap(t){return!!t||t===""}const lp=t=>!!(t&&t.__v_isRef===!0),ie=t=>Qe(t)?t:t==null?"":pe(t)||Fe(t)&&(t.toString===sp||!me(t.toString))?lp(t)?ie(t.value):JSON.stringify(t,cp,2):String(t),cp=(t,e)=>lp(e)?cp(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[pl(r,i)+" =>"]=s,n),{})}:np(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pl(n))}:lr(e)?pl(e):Fe(e)&&!pe(e)&&!ip(e)?String(e):e,pl=(t,e="")=>{var n;return lr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class Vy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ny(){return Nt}let Me;const gl=new WeakSet;class up{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gl.has(this)&&(gl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oh(this),fp(this);const e=Me,n=Qt;Me=this,Qt=!0;try{return this.fn()}finally{pp(this),Me=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mc(e);this.deps=this.depsTail=void 0,Oh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let hp=0,oi,ai;function dp(t,e=!1){if(t.flags|=8,e){t.next=ai,ai=t;return}t.next=oi,oi=t}function Oc(){hp++}function xc(){if(--hp>0)return;if(ai){let e=ai;for(ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oi;){let e=oi;for(oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Mc(r),Oy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function jl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ti))return;t.globalVersion=Ti;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!jl(t)){t.flags&=-3;return}const n=Me,r=Qt;Me=t,Qt=!0;try{fp(t);const s=t.fn(t._value);(e.version===0||Qn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Qt=r,pp(t),t.flags&=-3}}function Mc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Oy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const mp=[];function ur(){mp.push(Qt),Qt=!1}function hr(){const t=mp.pop();Qt=t===void 0?!0:t}function Oh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Ti=0;class xy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!Qt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new xy(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,_p(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Ti++,this.notify(e)}notify(e){Oc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xc()}}}function _p(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_p(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ql=new WeakMap,Pr=Symbol(""),Hl=Symbol(""),Ii=Symbol("");function gt(t,e,n){if(Qt&&Me){let r=ql.get(t);r||ql.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Lc),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const o=ql.get(t);if(!o){Ti++;return}const l=c=>{c&&c.trigger()};if(Oc(),e==="clear")o.forEach(l);else{const c=pe(t),h=c&&Nc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ii||!lr(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Ii)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Pr)),ns(t)&&l(o.get(Hl)));break;case"delete":c||(l(o.get(Pr)),ns(t)&&l(o.get(Hl)));break;case"set":ns(t)&&l(o.get(Pr));break}}xc()}function zr(t){const e=Pe(t);return e===t?e:(gt(e,"iterate",Ii),Ht(t)?e:e.map(mt))}function ya(t){return gt(t=Pe(t),"iterate",Ii),t}const My={__proto__:null,[Symbol.iterator](){return ml(this,Symbol.iterator,mt)},concat(...t){return zr(this).concat(...t.map(e=>pe(e)?zr(e):e))},entries(){return ml(this,"entries",t=>(t[1]=mt(t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(mt),arguments)},find(t,e){return vn(this,"find",t,e,mt,arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,mt,arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return _l(this,"includes",t)},indexOf(...t){return _l(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return _l(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return xh(this,"reduce",t,e)},reduceRight(t,...e){return xh(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return ml(this,"values",mt)}};function ml(t,e,n){const r=ya(t),s=r[e]();return r!==t&&!Ht(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ly=Array.prototype;function vn(t,e,n,r,s,i){const o=ya(t),l=o!==t&&!Ht(t),c=o[e];if(c!==Ly[e]){const p=c.apply(t,i);return l?mt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,mt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function xh(t,e,n,r){const s=ya(t);let i=n;return s!==t&&(Ht(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,mt(l),c,t)}),s[e](i,...r)}function _l(t,e,n){const r=Pe(t);gt(r,"iterate",Ii);const s=r[e](...n);return(s===-1||s===!1)&&Bc(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function Gs(t,e,n=[]){ur(),Oc();const r=Pe(t)[e].apply(t,n);return xc(),hr(),r}const Uy=kc("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lr));function Fy(t){lr(t)||(t=String(t));const e=Pe(this);return gt(e,"has",t),e.hasOwnProperty(t)}class vp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Qy:Ip:i?Tp:wp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=pe(e);if(!s){let c;if(o&&(c=My[n]))return c;if(n==="hasOwnProperty")return Fy}const l=Reflect.get(e,n,vt(e)?e:r);return(lr(n)?yp.has(n):Uy(n))||(s||gt(e,"get",n),i)?l:vt(l)?o&&Nc(n)?l:l.value:Fe(l)?s?bp(l):va(l):l}}class Ep extends vp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Cr(i);if(!Ht(r)&&!Cr(r)&&(i=Pe(i),r=Pe(r)),!pe(e)&&vt(i)&&!vt(r))return c?!1:(i.value=r,!0)}const o=pe(e)&&Nc(n)?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,r,vt(e)?e:s);return e===Pe(s)&&(o?Qn(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!lr(n)||!yp.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",pe(e)?"length":Pr),Reflect.ownKeys(e)}}class By extends vp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $y=new Ep,jy=new By,qy=new Ep(!0);const zl=t=>t,_o=t=>Reflect.getPrototypeOf(t);function Hy(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=ns(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?zl:e?Wl:mt;return!e&&gt(i,"iterate",c?Hl:Pr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zy(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);t||(Qn(s,l)&&gt(o,"get",s),gt(o,"get",l));const{has:c}=_o(o),h=e?zl:t?Wl:mt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&gt(Pe(s),"iterate",Pr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);return t||(Qn(s,l)&&gt(o,"has",s),gt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Pe(l),h=e?zl:t?Wl:mt;return!t&&gt(c,"iterate",Pr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return Et(n,t?{add:yo("add"),set:yo("set"),delete:yo("delete"),clear:yo("clear")}:{add(s){!e&&!Ht(s)&&!Cr(s)&&(s=Pe(s));const i=Pe(this);return _o(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!Ht(i)&&!Cr(i)&&(i=Pe(i));const o=Pe(this),{has:l,get:c}=_o(o);let h=l.call(o,s);h||(s=Pe(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?Qn(i,d)&&Tn(o,"set",s,i):Tn(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:l}=_o(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Tn(i,"delete",s,void 0),h},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&Tn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Hy(s,t,e)}),n}function Uc(t,e){const n=zy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const Wy={get:Uc(!1,!1)},Ky={get:Uc(!1,!0)},Gy={get:Uc(!0,!1)};const wp=new WeakMap,Tp=new WeakMap,Ip=new WeakMap,Qy=new WeakMap;function Yy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jy(t){return t.__v_skip||!Object.isExtensible(t)?0:Yy(Iy(t))}function va(t){return Cr(t)?t:Fc(t,!1,$y,Wy,wp)}function Ap(t){return Fc(t,!1,qy,Ky,Tp)}function bp(t){return Fc(t,!0,jy,Gy,Ip)}function Fc(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Jy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function rs(t){return Cr(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Cr(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function Bc(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function Xy(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&op(t,"__v_skip",!0),t}const mt=t=>Fe(t)?va(t):t,Wl=t=>Fe(t)?bp(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function ke(t){return Rp(t,!1)}function Zy(t){return Rp(t,!0)}function Rp(t,e){return vt(t)?t:new ev(t,e)}class ev{constructor(e,n){this.dep=new Lc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:mt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ht(e)||Cr(e);e=r?e:Pe(e),Qn(e,n)&&(this._rawValue=e,this._value=r?e:mt(e),this.dep.trigger())}}function de(t){return vt(t)?t.value:t}const tv={get:(t,e,n)=>e==="__v_raw"?t:de(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sp(t){return rs(t)?t:new Proxy(t,tv)}class nv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Lc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return dp(this,!0),!0}get value(){const e=this.dep.track();return gp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rv(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new nv(r,s,n)}const vo={},jo=new WeakMap;let Tr;function sv(t,e=!1,n=Tr){if(n){let r=jo.get(n);r||jo.set(n,r=[]),r.push(t)}}function iv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=F=>s?F:Ht(F)||s===!1||s===0?In(F,1):In(F);let d,p,g,y,R=!1,k=!1;if(vt(t)?(p=()=>t.value,R=Ht(t)):rs(t)?(p=()=>h(t),R=!0):pe(t)?(k=!0,R=t.some(F=>rs(F)||Ht(F)),p=()=>t.map(F=>{if(vt(F))return F.value;if(rs(F))return h(F);if(me(F))return c?c(F,2):F()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){ur();try{g()}finally{hr()}}const F=Tr;Tr=d;try{return c?c(t,3,[y]):t(y)}finally{Tr=F}}:p=cn,e&&s){const F=p,q=s===!0?1/0:s;p=()=>In(F(),q)}const D=Ny(),L=()=>{d.stop(),D&&D.active&&Vc(D.effects,d)};if(i&&e){const F=e;e=(...q)=>{F(...q),L()}}let M=k?new Array(t.length).fill(vo):vo;const N=F=>{if(!(!(d.flags&1)||!d.dirty&&!F))if(e){const q=d.run();if(s||R||(k?q.some((z,w)=>Qn(z,M[w])):Qn(q,M))){g&&g();const z=Tr;Tr=d;try{const w=[q,M===vo?void 0:k&&M[0]===vo?[]:M,y];c?c(e,3,w):e(...w),M=q}finally{Tr=z}}}else d.run()};return l&&l(N),d=new up(p),d.scheduler=o?()=>o(N,!1):N,y=F=>sv(F,!1,d),g=d.onStop=()=>{const F=jo.get(d);if(F){if(c)c(F,4);else for(const q of F)q();jo.delete(d)}},e?r?N(!0):M=d.run():o?o(N.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function In(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,vt(t))In(t.value,e,n);else if(pe(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(np(t)||ns(t))t.forEach(r=>{In(r,e,n)});else if(ip(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $i(t,e,n,r){try{return r?t(...r):t()}catch(s){Ea(s,e,n)}}function pn(t,e,n,r){if(me(t)){const s=$i(t,e,n,r);return s&&rp(s)&&s.catch(i=>{Ea(i,e,n)}),s}if(pe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pn(t[i],e,n,r));return s}}function Ea(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){ur(),$i(i,null,10,[t,c,h]),hr();return}}ov(t,n,s,r,o)}function ov(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const bt=[];let sn=-1;const ss=[];let $n=null,Wr=0;const Pp=Promise.resolve();let qo=null;function Cp(t){const e=qo||Pp;return t?e.then(this?t.bind(this):t):e}function av(t){let e=sn+1,n=bt.length;for(;e<n;){const r=e+n>>>1,s=bt[r],i=Ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function $c(t){if(!(t.flags&1)){const e=Ai(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=Ai(n)?bt.push(t):bt.splice(av(e),0,t),t.flags|=1,kp()}}function kp(){qo||(qo=Pp.then(Vp))}function lv(t){pe(t)?ss.push(...t):$n&&t.id===-1?$n.splice(Wr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),kp()}function Mh(t,e,n=sn+1){for(;n<bt.length;n++){const r=bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Dp(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>Ai(n)-Ai(r));if(ss.length=0,$n){$n.push(...e);return}for($n=e,Wr=0;Wr<$n.length;Wr++){const n=$n[Wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$n=null,Wr=0}}const Ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vp(t){try{for(sn=0;sn<bt.length;sn++){const e=bt[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<bt.length;sn++){const e=bt[sn];e&&(e.flags&=-2)}sn=-1,bt.length=0,Dp(),qo=null,(bt.length||ss.length)&&Vp()}}let xt=null,Np=null;function Ho(t){const e=xt;return xt=t,Np=t&&t.type.__scopeId||null,e}function Yn(t,e=xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wh(-1);const i=Ho(e);let o;try{o=t(...s)}finally{Ho(i),r._d&&Wh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ar(t,e){if(xt===null)return t;const n=ba(xt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&In(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(ur(),pn(c,n,8,[t.el,l,t,e]),hr())}}const cv=Symbol("_vte"),uv=t=>t.__isTeleport;function jc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Op(t,e){return me(t)?Et({name:t.name},e,{setup:t}):t}function xp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function zo(t,e,n,r,s=!1){if(pe(t)){t.forEach((R,k)=>zo(R,e&&(pe(e)?e[k]:e),n,r,s));return}if(li(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ba(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===xe?l.refs={}:l.refs,p=l.setupState,g=Pe(p),y=p===xe?()=>!1:R=>Ce(g,R);if(h!=null&&h!==c&&(Qe(h)?(d[h]=null,y(h)&&(p[h]=null)):vt(h)&&(h.value=null)),me(c))$i(c,l,12,[o,d]);else{const R=Qe(c),k=vt(c);if(R||k){const D=()=>{if(t.f){const L=R?y(c)?p[c]:d[c]:c.value;s?pe(L)&&Vc(L,i):pe(L)?L.includes(i)||L.push(i):R?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else R?(d[c]=o,y(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Vt(D,n)):D()}}}_a().requestIdleCallback;_a().cancelIdleCallback;const li=t=>!!t.type.__asyncLoader,Mp=t=>t.type.__isKeepAlive;function hv(t,e){Lp(t,"a",e)}function dv(t,e){Lp(t,"da",e)}function Lp(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Mp(s.parent.vnode)&&fv(r,e,n,s),s=s.parent}}function fv(t,e,n,r){const s=wa(e,t,r,!0);Ta(()=>{Vc(r[e],s)},n)}function wa(t,e,n=yt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ur();const l=ji(n),c=pn(e,n,t,o);return l(),hr(),c});return r?s.unshift(i):s.push(i),i}}const Vn=t=>(e,n=yt)=>{(!Ri||t==="sp")&&wa(t,(...r)=>e(...r),n)},pv=Vn("bm"),Is=Vn("m"),gv=Vn("bu"),mv=Vn("u"),_v=Vn("bum"),Ta=Vn("um"),yv=Vn("sp"),vv=Vn("rtg"),Ev=Vn("rtc");function wv(t,e=yt){wa("ec",t,e)}const Tv="components";function As(t,e){return Av(Tv,t,!0,e)||t}const Iv=Symbol.for("v-ndc");function Av(t,e,n=!0,r=!1){const s=xt||yt;if(s){const i=s.type;{const l=hE(i,!1);if(l&&(l===e||l===zt(e)||l===ma(zt(e))))return i}const o=Lh(s[t]||i[t],e)||Lh(s.appContext[t],e);return!o&&r?i:o}}function Lh(t,e){return t&&(t[e]||t[zt(e)]||t[ma(zt(e))])}function qc(t,e,n,r){let s;const i=n,o=pe(t);if(o||Qe(t)){const l=o&&rs(t);let c=!1;l&&(c=!Ht(t),t=ya(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?mt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Kl=t=>t?sg(t)?ba(t):Kl(t.parent):null,ci=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kl(t.parent),$root:t=>Kl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Fp(t),$forceUpdate:t=>t.f||(t.f=()=>{$c(t.update)}),$nextTick:t=>t.n||(t.n=Cp.bind(t.proxy)),$watch:t=>zv.bind(t)}),yl=(t,e)=>t!==xe&&!t.__isScriptSetup&&Ce(t,e),bv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(yl(r,e))return o[e]=1,r[e];if(s!==xe&&Ce(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ce(h,e))return o[e]=3,i[e];if(n!==xe&&Ce(n,e))return o[e]=4,n[e];Gl&&(o[e]=0)}}const d=ci[e];let p,g;if(d)return e==="$attrs"&&gt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&Ce(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Ce(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return yl(s,e)?(s[e]=n,!0):r!==xe&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==xe&&Ce(t,o)||yl(e,o)||(l=i[0])&&Ce(l,o)||Ce(r,o)||Ce(ci,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uh(t){return pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Gl=!0;function Rv(t){const e=Fp(t),n=t.proxy,r=t.ctx;Gl=!1,e.beforeCreate&&Fh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:y,updated:R,activated:k,deactivated:D,beforeDestroy:L,beforeUnmount:M,destroyed:N,unmounted:F,render:q,renderTracked:z,renderTriggered:w,errorCaptured:_,serverPrefetch:E,expose:A,inheritAttrs:b,components:P,directives:I,filters:Tt}=e;if(h&&Sv(h,r,null),o)for(const Te in o){const ve=o[Te];me(ve)&&(r[Te]=ve.bind(n))}if(s){const Te=s.call(n,n);Fe(Te)&&(t.data=va(Te))}if(Gl=!0,i)for(const Te in i){const ve=i[Te],kt=me(ve)?ve.bind(n,n):me(ve.get)?ve.get.bind(n,n):cn,Wt=!me(ve)&&me(ve.set)?ve.set.bind(n):cn,Ft=Ye({get:kt,set:Wt});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:Be=>Ft.value=Be})}if(l)for(const Te in l)Up(l[Te],r,n,Te);if(c){const Te=me(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ve=>{Co(ve,Te[ve])})}d&&Fh(d,t,"c");function We(Te,ve){pe(ve)?ve.forEach(kt=>Te(kt.bind(n))):ve&&Te(ve.bind(n))}if(We(pv,p),We(Is,g),We(gv,y),We(mv,R),We(hv,k),We(dv,D),We(wv,_),We(Ev,z),We(vv,w),We(_v,M),We(Ta,F),We(yv,E),pe(A))if(A.length){const Te=t.exposed||(t.exposed={});A.forEach(ve=>{Object.defineProperty(Te,ve,{get:()=>n[ve],set:kt=>n[ve]=kt})})}else t.exposed||(t.exposed={});q&&t.render===cn&&(t.render=q),b!=null&&(t.inheritAttrs=b),P&&(t.components=P),I&&(t.directives=I),E&&xp(t)}function Sv(t,e,n=cn){pe(t)&&(t=Ql(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Fh(t,e,n){pn(pe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Up(t,e,n,r){let s=r.includes(".")?Zp(n,r):()=>n[r];if(Qe(t)){const i=e[t];me(i)&&ui(s,i)}else if(me(t))ui(s,t.bind(n));else if(Fe(t))if(pe(t))t.forEach(i=>Up(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&ui(s,i,t)}}function Fp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Wo(c,h,o,!0)),Wo(c,e,o)),Fe(e)&&i.set(e,c),c}function Wo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wo(t,i,n,!0),s&&s.forEach(o=>Wo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Pv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Pv={data:Bh,props:$h,emits:$h,methods:Js,computed:Js,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Js,directives:Js,watch:kv,provide:Bh,inject:Cv};function Bh(t,e){return e?t?function(){return Et(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function Cv(t,e){return Js(Ql(t),Ql(e))}function Ql(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?Et(Object.create(null),t,e):e}function $h(t,e){return t?pe(t)&&pe(e)?[...new Set([...t,...e])]:Et(Object.create(null),Uh(t),Uh(e??{})):e}function kv(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Bp(){return{app:null,config:{isNativeTag:wy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Vv(t,e){return function(r,s=null){me(r)||(r=Et({},r)),s!=null&&!Fe(s)&&(s=null);const i=Bp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Dv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(h,...p)):me(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const y=h._ceVNode||ze(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,d,g),c=!0,h._container=d,d.__vue_app__=h,ba(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(pn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=is;is=h;try{return d()}finally{is=p}}};return h}}let is=null;function Co(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=yt||xt;if(r||is){const s=is?is._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}const $p={},jp=()=>Object.create($p),qp=t=>Object.getPrototypeOf(t)===$p;function Nv(t,e,n,r=!1){const s={},i=jp();t.propsDefaults=Object.create(null),Hp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ap(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ov(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Pe(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Ia(t.emitsOptions,g))continue;const y=e[g];if(c)if(Ce(i,g))y!==i[g]&&(i[g]=y,h=!0);else{const R=zt(g);s[R]=Yl(c,l,R,y,t,!1)}else y!==i[g]&&(i[g]=y,h=!0)}}}else{Hp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Ce(e,p)&&((d=cr(p))===p||!Ce(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Yl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],h=!0)}h&&Tn(t.attrs,"set","")}function Hp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ii(c))continue;const h=e[c];let d;s&&Ce(s,d=zt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Ia(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Pe(n),h=l||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Yl(s,c,p,h[p],t,!Ce(h,p))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ce(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=ji(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===cr(n))&&(r=!0))}return r}const xv=new WeakMap;function zp(t,e,n=!1){const r=n?xv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const d=p=>{c=!0;const[g,y]=zp(p,e,!0);Et(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Fe(t)&&r.set(t,ts),ts;if(pe(i))for(let d=0;d<i.length;d++){const p=zt(i[d]);jh(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=zt(d);if(jh(p)){const g=i[d],y=o[p]=pe(g)||me(g)?{type:g}:Et({},g),R=y.type;let k=!1,D=!0;if(pe(R))for(let L=0;L<R.length;++L){const M=R[L],N=me(M)&&M.name;if(N==="Boolean"){k=!0;break}else N==="String"&&(D=!1)}else k=me(R)&&R.name==="Boolean";y[0]=k,y[1]=D,(k||Ce(y,"default"))&&l.push(p)}}const h=[o,l];return Fe(t)&&r.set(t,h),h}function jh(t){return t[0]!=="$"&&!ii(t)}const Wp=t=>t[0]==="_"||t==="$stable",Hc=t=>pe(t)?t.map(an):[an(t)],Mv=(t,e,n)=>{if(e._n)return e;const r=Yn((...s)=>Hc(e(...s)),n);return r._c=!1,r},Kp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Wp(s))continue;const i=t[s];if(me(i))e[s]=Mv(s,i,r);else if(i!=null){const o=Hc(i);e[s]=()=>o}}},Gp=(t,e)=>{const n=Hc(e);t.slots.default=()=>n},Qp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Lv=(t,e,n)=>{const r=t.slots=jp();if(t.vnode.shapeFlag&32){const s=e._;s?(Qp(r,e,n),n&&op(r,"_",s,!0)):Kp(e,r)}else e&&Gp(t,e)},Uv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Qp(s,e,n):(i=!e.$stable,Kp(e,s)),o=e}else e&&(Gp(t,e),o={default:1});if(i)for(const l in s)!Wp(l)&&o[l]==null&&delete s[l]},Vt=Xv;function Fv(t){return Bv(t)}function Bv(t,e){const n=_a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=cn,insertStaticContent:R}=t,k=(v,T,S,x=null,j=null,B=null,Y=void 0,G=null,K=!!T.dynamicChildren)=>{if(v===T)return;v&&!Qs(v,T)&&(x=O(v),Be(v,j,B,!0),v=null),T.patchFlag===-2&&(K=!1,T.dynamicChildren=null);const{type:W,ref:ae,shapeFlag:X}=T;switch(W){case Aa:D(v,T,S,x);break;case kr:L(v,T,S,x);break;case El:v==null&&M(T,S,x,Y);break;case jt:P(v,T,S,x,j,B,Y,G,K);break;default:X&1?q(v,T,S,x,j,B,Y,G,K):X&6?I(v,T,S,x,j,B,Y,G,K):(X&64||X&128)&&W.process(v,T,S,x,j,B,Y,G,K,re)}ae!=null&&j&&zo(ae,v&&v.ref,B,T||v,!T)},D=(v,T,S,x)=>{if(v==null)r(T.el=l(T.children),S,x);else{const j=T.el=v.el;T.children!==v.children&&h(j,T.children)}},L=(v,T,S,x)=>{v==null?r(T.el=c(T.children||""),S,x):T.el=v.el},M=(v,T,S,x)=>{[v.el,v.anchor]=R(v.children,T,S,x,v.el,v.anchor)},N=({el:v,anchor:T},S,x)=>{let j;for(;v&&v!==T;)j=g(v),r(v,S,x),v=j;r(T,S,x)},F=({el:v,anchor:T})=>{let S;for(;v&&v!==T;)S=g(v),s(v),v=S;s(T)},q=(v,T,S,x,j,B,Y,G,K)=>{T.type==="svg"?Y="svg":T.type==="math"&&(Y="mathml"),v==null?z(T,S,x,j,B,Y,G,K):E(v,T,j,B,Y,G,K)},z=(v,T,S,x,j,B,Y,G)=>{let K,W;const{props:ae,shapeFlag:X,transition:se,dirs:ue}=v;if(K=v.el=o(v.type,B,ae&&ae.is,ae),X&8?d(K,v.children):X&16&&_(v.children,K,null,x,j,vl(v,B),Y,G),ue&&Er(v,null,x,"created"),w(K,v,v.scopeId,Y,x),ae){for(const _e in ae)_e!=="value"&&!ii(_e)&&i(K,_e,null,ae[_e],B,x);"value"in ae&&i(K,"value",null,ae.value,B),(W=ae.onVnodeBeforeMount)&&rn(W,x,v)}ue&&Er(v,null,x,"beforeMount");const le=$v(j,se);le&&se.beforeEnter(K),r(K,T,S),((W=ae&&ae.onVnodeMounted)||le||ue)&&Vt(()=>{W&&rn(W,x,v),le&&se.enter(K),ue&&Er(v,null,x,"mounted")},j)},w=(v,T,S,x,j)=>{if(S&&y(v,S),x)for(let B=0;B<x.length;B++)y(v,x[B]);if(j){let B=j.subTree;if(T===B||tg(B.type)&&(B.ssContent===T||B.ssFallback===T)){const Y=j.vnode;w(v,Y,Y.scopeId,Y.slotScopeIds,j.parent)}}},_=(v,T,S,x,j,B,Y,G,K=0)=>{for(let W=K;W<v.length;W++){const ae=v[W]=G?jn(v[W]):an(v[W]);k(null,ae,T,S,x,j,B,Y,G)}},E=(v,T,S,x,j,B,Y)=>{const G=T.el=v.el;let{patchFlag:K,dynamicChildren:W,dirs:ae}=T;K|=v.patchFlag&16;const X=v.props||xe,se=T.props||xe;let ue;if(S&&wr(S,!1),(ue=se.onVnodeBeforeUpdate)&&rn(ue,S,T,v),ae&&Er(T,v,S,"beforeUpdate"),S&&wr(S,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&d(G,""),W?A(v.dynamicChildren,W,G,S,x,vl(T,j),B):Y||ve(v,T,G,null,S,x,vl(T,j),B,!1),K>0){if(K&16)b(G,X,se,S,j);else if(K&2&&X.class!==se.class&&i(G,"class",null,se.class,j),K&4&&i(G,"style",X.style,se.style,j),K&8){const le=T.dynamicProps;for(let _e=0;_e<le.length;_e++){const Ie=le[_e],ct=X[Ie],nt=se[Ie];(nt!==ct||Ie==="value")&&i(G,Ie,ct,nt,j,S)}}K&1&&v.children!==T.children&&d(G,T.children)}else!Y&&W==null&&b(G,X,se,S,j);((ue=se.onVnodeUpdated)||ae)&&Vt(()=>{ue&&rn(ue,S,T,v),ae&&Er(T,v,S,"updated")},x)},A=(v,T,S,x,j,B,Y)=>{for(let G=0;G<T.length;G++){const K=v[G],W=T[G],ae=K.el&&(K.type===jt||!Qs(K,W)||K.shapeFlag&70)?p(K.el):S;k(K,W,ae,null,x,j,B,Y,!0)}},b=(v,T,S,x,j)=>{if(T!==S){if(T!==xe)for(const B in T)!ii(B)&&!(B in S)&&i(v,B,T[B],null,j,x);for(const B in S){if(ii(B))continue;const Y=S[B],G=T[B];Y!==G&&B!=="value"&&i(v,B,G,Y,j,x)}"value"in S&&i(v,"value",T.value,S.value,j)}},P=(v,T,S,x,j,B,Y,G,K)=>{const W=T.el=v?v.el:l(""),ae=T.anchor=v?v.anchor:l("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:ue}=T;ue&&(G=G?G.concat(ue):ue),v==null?(r(W,S,x),r(ae,S,x),_(T.children||[],S,ae,j,B,Y,G,K)):X>0&&X&64&&se&&v.dynamicChildren?(A(v.dynamicChildren,se,S,j,B,Y,G),(T.key!=null||j&&T===j.subTree)&&Yp(v,T,!0)):ve(v,T,S,ae,j,B,Y,G,K)},I=(v,T,S,x,j,B,Y,G,K)=>{T.slotScopeIds=G,v==null?T.shapeFlag&512?j.ctx.activate(T,S,x,Y,K):Tt(T,S,x,j,B,Y,K):Ut(v,T,K)},Tt=(v,T,S,x,j,B,Y)=>{const G=v.component=oE(v,x,j);if(Mp(v)&&(G.ctx.renderer=re),aE(G,!1,Y),G.asyncDep){if(j&&j.registerDep(G,We,Y),!v.el){const K=G.subTree=ze(kr);L(null,K,T,S)}}else We(G,v,T,S,j,B,Y)},Ut=(v,T,S)=>{const x=T.component=v.component;if(Yv(v,T,S))if(x.asyncDep&&!x.asyncResolved){Te(x,T,S);return}else x.next=T,x.update();else T.el=v.el,x.vnode=T},We=(v,T,S,x,j,B,Y)=>{const G=()=>{if(v.isMounted){let{next:X,bu:se,u:ue,parent:le,vnode:_e}=v;{const ut=Jp(v);if(ut){X&&(X.el=_e.el,Te(v,X,Y)),ut.asyncDep.then(()=>{v.isUnmounted||G()});return}}let Ie=X,ct;wr(v,!1),X?(X.el=_e.el,Te(v,X,Y)):X=_e,se&&Po(se),(ct=X.props&&X.props.onVnodeBeforeUpdate)&&rn(ct,le,X,_e),wr(v,!0);const nt=Hh(v),Bt=v.subTree;v.subTree=nt,k(Bt,nt,p(Bt.el),O(Bt),v,j,B),X.el=nt.el,Ie===null&&Jv(v,nt.el),ue&&Vt(ue,j),(ct=X.props&&X.props.onVnodeUpdated)&&Vt(()=>rn(ct,le,X,_e),j)}else{let X;const{el:se,props:ue}=T,{bm:le,m:_e,parent:Ie,root:ct,type:nt}=v,Bt=li(T);wr(v,!1),le&&Po(le),!Bt&&(X=ue&&ue.onVnodeBeforeMount)&&rn(X,Ie,T),wr(v,!0);{ct.ce&&ct.ce._injectChildStyle(nt);const ut=v.subTree=Hh(v);k(null,ut,S,x,v,j,B),T.el=ut.el}if(_e&&Vt(_e,j),!Bt&&(X=ue&&ue.onVnodeMounted)){const ut=T;Vt(()=>rn(X,Ie,ut),j)}(T.shapeFlag&256||Ie&&li(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&v.a&&Vt(v.a,j),v.isMounted=!0,T=S=x=null}};v.scope.on();const K=v.effect=new up(G);v.scope.off();const W=v.update=K.run.bind(K),ae=v.job=K.runIfDirty.bind(K);ae.i=v,ae.id=v.uid,K.scheduler=()=>$c(ae),wr(v,!0),W()},Te=(v,T,S)=>{T.component=v;const x=v.vnode.props;v.vnode=T,v.next=null,Ov(v,T.props,x,S),Uv(v,T.children,S),ur(),Mh(v),hr()},ve=(v,T,S,x,j,B,Y,G,K=!1)=>{const W=v&&v.children,ae=v?v.shapeFlag:0,X=T.children,{patchFlag:se,shapeFlag:ue}=T;if(se>0){if(se&128){Wt(W,X,S,x,j,B,Y,G,K);return}else if(se&256){kt(W,X,S,x,j,B,Y,G,K);return}}ue&8?(ae&16&&St(W,j,B),X!==W&&d(S,X)):ae&16?ue&16?Wt(W,X,S,x,j,B,Y,G,K):St(W,j,B,!0):(ae&8&&d(S,""),ue&16&&_(X,S,x,j,B,Y,G,K))},kt=(v,T,S,x,j,B,Y,G,K)=>{v=v||ts,T=T||ts;const W=v.length,ae=T.length,X=Math.min(W,ae);let se;for(se=0;se<X;se++){const ue=T[se]=K?jn(T[se]):an(T[se]);k(v[se],ue,S,null,j,B,Y,G,K)}W>ae?St(v,j,B,!0,!1,X):_(T,S,x,j,B,Y,G,K,X)},Wt=(v,T,S,x,j,B,Y,G,K)=>{let W=0;const ae=T.length;let X=v.length-1,se=ae-1;for(;W<=X&&W<=se;){const ue=v[W],le=T[W]=K?jn(T[W]):an(T[W]);if(Qs(ue,le))k(ue,le,S,null,j,B,Y,G,K);else break;W++}for(;W<=X&&W<=se;){const ue=v[X],le=T[se]=K?jn(T[se]):an(T[se]);if(Qs(ue,le))k(ue,le,S,null,j,B,Y,G,K);else break;X--,se--}if(W>X){if(W<=se){const ue=se+1,le=ue<ae?T[ue].el:x;for(;W<=se;)k(null,T[W]=K?jn(T[W]):an(T[W]),S,le,j,B,Y,G,K),W++}}else if(W>se)for(;W<=X;)Be(v[W],j,B,!0),W++;else{const ue=W,le=W,_e=new Map;for(W=le;W<=se;W++){const rt=T[W]=K?jn(T[W]):an(T[W]);rt.key!=null&&_e.set(rt.key,W)}let Ie,ct=0;const nt=se-le+1;let Bt=!1,ut=0;const xn=new Array(nt);for(W=0;W<nt;W++)xn[W]=0;for(W=ue;W<=X;W++){const rt=v[W];if(ct>=nt){Be(rt,j,B,!0);continue}let $t;if(rt.key!=null)$t=_e.get(rt.key);else for(Ie=le;Ie<=se;Ie++)if(xn[Ie-le]===0&&Qs(rt,T[Ie])){$t=Ie;break}$t===void 0?Be(rt,j,B,!0):(xn[$t-le]=W+1,$t>=ut?ut=$t:Bt=!0,k(rt,T[$t],S,null,j,B,Y,G,K),ct++)}const xs=Bt?jv(xn):ts;for(Ie=xs.length-1,W=nt-1;W>=0;W--){const rt=le+W,$t=T[rt],eo=rt+1<ae?T[rt+1].el:x;xn[W]===0?k(null,$t,S,eo,j,B,Y,G,K):Bt&&(Ie<0||W!==xs[Ie]?Ft($t,S,eo,2):Ie--)}}},Ft=(v,T,S,x,j=null)=>{const{el:B,type:Y,transition:G,children:K,shapeFlag:W}=v;if(W&6){Ft(v.component.subTree,T,S,x);return}if(W&128){v.suspense.move(T,S,x);return}if(W&64){Y.move(v,T,S,re);return}if(Y===jt){r(B,T,S);for(let X=0;X<K.length;X++)Ft(K[X],T,S,x);r(v.anchor,T,S);return}if(Y===El){N(v,T,S);return}if(x!==2&&W&1&&G)if(x===0)G.beforeEnter(B),r(B,T,S),Vt(()=>G.enter(B),j);else{const{leave:X,delayLeave:se,afterLeave:ue}=G,le=()=>r(B,T,S),_e=()=>{X(B,()=>{le(),ue&&ue()})};se?se(B,le,_e):_e()}else r(B,T,S)},Be=(v,T,S,x=!1,j=!1)=>{const{type:B,props:Y,ref:G,children:K,dynamicChildren:W,shapeFlag:ae,patchFlag:X,dirs:se,cacheIndex:ue}=v;if(X===-2&&(j=!1),G!=null&&zo(G,null,S,v,!0),ue!=null&&(T.renderCache[ue]=void 0),ae&256){T.ctx.deactivate(v);return}const le=ae&1&&se,_e=!li(v);let Ie;if(_e&&(Ie=Y&&Y.onVnodeBeforeUnmount)&&rn(Ie,T,v),ae&6)nn(v.component,S,x);else{if(ae&128){v.suspense.unmount(S,x);return}le&&Er(v,null,T,"beforeUnmount"),ae&64?v.type.remove(v,T,S,re,x):W&&!W.hasOnce&&(B!==jt||X>0&&X&64)?St(W,T,S,!1,!0):(B===jt&&X&384||!j&&ae&16)&&St(K,T,S),x&&$e(v)}(_e&&(Ie=Y&&Y.onVnodeUnmounted)||le)&&Vt(()=>{Ie&&rn(Ie,T,v),le&&Er(v,null,T,"unmounted")},S)},$e=v=>{const{type:T,el:S,anchor:x,transition:j}=v;if(T===jt){On(S,x);return}if(T===El){F(v);return}const B=()=>{s(S),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(v.shapeFlag&1&&j&&!j.persisted){const{leave:Y,delayLeave:G}=j,K=()=>Y(S,B);G?G(v.el,B,K):K()}else B()},On=(v,T)=>{let S;for(;v!==T;)S=g(v),s(v),v=S;s(T)},nn=(v,T,S)=>{const{bum:x,scope:j,job:B,subTree:Y,um:G,m:K,a:W}=v;qh(K),qh(W),x&&Po(x),j.stop(),B&&(B.flags|=8,Be(Y,v,T,S)),G&&Vt(G,T),Vt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},St=(v,T,S,x=!1,j=!1,B=0)=>{for(let Y=B;Y<v.length;Y++)Be(v[Y],T,S,x,j)},O=v=>{if(v.shapeFlag&6)return O(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=g(v.anchor||v.el),S=T&&T[cv];return S?g(S):T};let Z=!1;const J=(v,T,S)=>{v==null?T._vnode&&Be(T._vnode,null,null,!0):k(T._vnode||null,v,T,null,null,null,S),T._vnode=v,Z||(Z=!0,Mh(),Dp(),Z=!1)},re={p:k,um:Be,m:Ft,r:$e,mt:Tt,mc:_,pc:ve,pbc:A,n:O,o:t};return{render:J,hydrate:void 0,createApp:Vv(J)}}function vl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $v(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yp(t,e,n=!1){const r=t.children,s=e.children;if(pe(r)&&pe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=jn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Yp(o,l)),l.type===Aa&&(l.el=o.el)}}function jv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Jp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jp(e)}function qh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const qv=Symbol.for("v-scx"),Hv=()=>Yt(qv);function ui(t,e,n){return Xp(t,e,n)}function Xp(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=Et({},n),c=e&&r||!e&&i!=="post";let h;if(Ri){if(i==="sync"){const y=Hv();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=cn,y.resume=cn,y.pause=cn,y}}const d=yt;l.call=(y,R,k)=>pn(y,d,R,k);let p=!1;i==="post"?l.scheduler=y=>{Vt(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,R)=>{R?y():$c(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const g=iv(t,e,l);return Ri&&(h?h.push(g):c&&g()),g}function zv(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?Zp(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=ji(this),l=Xp(s,i.bind(r),n);return o(),l}function Zp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Wv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function Kv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&Wv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Qe(d)?d.trim():d)),o.number&&(s=n.map($l)));let l,c=r[l=fl(e)]||r[l=fl(zt(e))];!c&&i&&(c=r[l=fl(cr(e))]),c&&pn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,pn(h,t,6,s)}}function eg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=h=>{const d=eg(h,e,!0);d&&(l=!0,Et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Fe(t)&&r.set(t,null),null):(pe(i)?i.forEach(c=>o[c]=null):Et(o,i),Fe(t)&&r.set(t,o),o)}function Ia(t,e){return!t||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,cr(e))||Ce(t,e))}function Hh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:y,ctx:R,inheritAttrs:k}=t,D=Ho(t);let L,M;try{if(n.shapeFlag&4){const F=s||r,q=F;L=an(h.call(q,F,d,p,y,g,R)),M=l}else{const F=e;L=an(F.length>1?F(p,{attrs:l,slots:o,emit:c}):F(p,null)),M=e.props?l:Gv(l)}}catch(F){hi.length=0,Ea(F,t,1),L=ze(kr)}let N=L;if(M&&k!==!1){const F=Object.keys(M),{shapeFlag:q}=N;F.length&&q&7&&(i&&F.some(Dc)&&(M=Qv(M,i)),N=hs(N,M,!1,!0))}return n.dirs&&(N=hs(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&jc(N,n.transition),L=N,Ho(D),L}const Gv=t=>{let e;for(const n in t)(n==="class"||n==="style"||fa(n))&&((e||(e={}))[n]=t[n]);return e},Qv=(t,e)=>{const n={};for(const r in t)(!Dc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?zh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!Ia(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?zh(r,o,h):!0:!!o;return!1}function zh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ia(n,i))return!0}return!1}function Jv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const tg=t=>t.__isSuspense;function Xv(t,e){e&&e.pendingBranch?pe(t)?e.effects.push(...t):e.effects.push(t):lv(t)}const jt=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),El=Symbol.for("v-stc"),hi=[];let Mt=null;function Ve(t=!1){hi.push(Mt=t?null:[])}function Zv(){hi.pop(),Mt=hi[hi.length-1]||null}let bi=1;function Wh(t,e=!1){bi+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function ng(t){return t.dynamicChildren=bi>0?Mt||ts:null,Zv(),bi>0&&Mt&&Mt.push(t),t}function Ne(t,e,n,r,s,i){return ng(H(t,e,n,r,s,i,!0))}function eE(t,e,n,r,s){return ng(ze(t,e,n,r,s,!0))}function Ko(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const rg=({key:t})=>t??null,ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||vt(t)||me(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,r=0,s=null,i=t===jt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rg(e),ref:e&&ko(e),scopeId:Np,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return l?(zc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),bi>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const ze=tE;function tE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Iv)&&(t=kr),Ko(t)){const l=hs(t,e,!0);return n&&zc(l,n),bi>0&&!i&&Mt&&(l.shapeFlag&6?Mt[Mt.indexOf(t)]=l:Mt.push(l)),l.patchFlag=-2,l}if(dE(t)&&(t=t.__vccOpts),e){e=nE(e);let{class:l,style:c}=e;l&&!Qe(l)&&(e.class=wi(l)),Fe(c)&&(Bc(c)&&!pe(c)&&(c=Et({},c)),e.style=Bi(c))}const o=Qe(t)?1:tg(t)?128:uv(t)?64:Fe(t)?4:me(t)?2:0;return H(t,e,n,r,s,o,i,!0)}function nE(t){return t?Bc(t)||qp(t)?Et({},t):t:null}function hs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?rE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&rg(h),ref:e&&e.ref?n&&i?pe(i)?i.concat(ko(e)):[i,ko(e)]:ko(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==jt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&jc(d,c.clone(d)),d}function Jt(t=" ",e=0){return ze(Aa,null,t,e)}function br(t="",e=!1){return e?(Ve(),eE(kr,null,t)):ze(kr,null,t)}function an(t){return t==null||typeof t=="boolean"?ze(kr):pe(t)?ze(jt,null,t.slice()):Ko(t)?jn(t):ze(Aa,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function zc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(pe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qp(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[Jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function rE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=wi([e.class,r.class]));else if(s==="style")e.style=Bi([e.style,r.style]);else if(fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(pe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){pn(t,e,7,[n,r])}const sE=Bp();let iE=0;function oE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sE,i={uid:iE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zp(r,s),emitsOptions:eg(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kv.bind(null,i),t.ce&&t.ce(i),i}let yt=null,Go,Jl;{const t=_a(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Go=e("__VUE_INSTANCE_SETTERS__",n=>yt=n),Jl=e("__VUE_SSR_SETTERS__",n=>Ri=n)}const ji=t=>{const e=yt;return Go(t),t.scope.on(),()=>{t.scope.off(),Go(e)}},Kh=()=>{yt&&yt.scope.off(),Go(null)};function sg(t){return t.vnode.shapeFlag&4}let Ri=!1;function aE(t,e=!1,n=!1){e&&Jl(e);const{props:r,children:s}=t.vnode,i=sg(t);Nv(t,r,i,e),Lv(t,s,n);const o=i?lE(t,e):void 0;return e&&Jl(!1),o}function lE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bv);const{setup:r}=n;if(r){ur();const s=t.setupContext=r.length>1?uE(t):null,i=ji(t),o=$i(r,t,0,[t.props,s]),l=rp(o);if(hr(),i(),(l||t.sp)&&!li(t)&&xp(t),l){if(o.then(Kh,Kh),e)return o.then(c=>{Gh(t,c)}).catch(c=>{Ea(c,t,0)});t.asyncDep=o}else Gh(t,o)}else ig(t)}function Gh(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Sp(e)),ig(t)}function ig(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=ji(t);ur();try{Rv(t)}finally{hr(),s()}}}const cE={get(t,e){return gt(t,"get",""),t[e]}};function uE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cE),slots:t.slots,emit:t.emit,expose:e}}function ba(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sp(Xy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ci)return ci[n](t)},has(e,n){return n in e||n in ci}})):t.proxy}function hE(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function dE(t){return me(t)&&"__vccOpts"in t}const Ye=(t,e)=>rv(t,e,Ri);function og(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!pe(e)?Ko(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ko(n)&&(n=[n]),ze(t,e,n))}const fE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xl;const Qh=typeof window<"u"&&window.trustedTypes;if(Qh)try{Xl=Qh.createPolicy("vue",{createHTML:t=>t})}catch{}const ag=Xl?t=>Xl.createHTML(t):t=>t,pE="http://www.w3.org/2000/svg",gE="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,Yh=wn&&wn.createElement("template"),mE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(pE,t):e==="mathml"?wn.createElementNS(gE,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yh.innerHTML=ag(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Yh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_E=Symbol("_vtc");function yE(t,e,n){const r=t[_E];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jh=Symbol("_vod"),vE=Symbol("_vsh"),EE=Symbol(""),wE=/(^|;)\s*display\s*:/;function TE(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Do(r,l,"")}else for(const o in e)n[o]==null&&Do(r,o,"");for(const o in n)o==="display"&&(i=!0),Do(r,o,n[o])}else if(s){if(e!==n){const o=r[EE];o&&(n+=";"+o),r.cssText=n,i=wE.test(n)}}else e&&t.removeAttribute("style");Jh in t&&(t[Jh]=i?r.display:"",t[vE]&&(r.display="none"))}const Xh=/\s*!important$/;function Do(t,e,n){if(pe(n))n.forEach(r=>Do(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=IE(t,e);Xh.test(n)?t.setProperty(cr(r),n.replace(Xh,""),"important"):t[r]=n}}const Zh=["Webkit","Moz","ms"],wl={};function IE(t,e){const n=wl[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return wl[e]=r;r=ma(r);for(let s=0;s<Zh.length;s++){const i=Zh[s]+r;if(i in t)return wl[e]=i}return e}const ed="http://www.w3.org/1999/xlink";function td(t,e,n,r,s,i=Dy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ed,e.slice(6,e.length)):t.setAttributeNS(ed,e,n):n==null||i&&!ap(n)?t.removeAttribute(e):t.setAttribute(e,i?"":lr(n)?String(n):n)}function nd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ag(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ap(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function AE(t,e,n,r){t.removeEventListener(e,n,r)}const rd=Symbol("_vei");function bE(t,e,n,r,s=null){const i=t[rd]||(t[rd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=RE(e);if(r){const h=i[e]=CE(r,s);Kr(t,l,h,c)}else o&&(AE(t,l,o,c),i[e]=void 0)}}const sd=/(?:Once|Passive|Capture)$/;function RE(t){let e;if(sd.test(t)){e={};let r;for(;r=t.match(sd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let Tl=0;const SE=Promise.resolve(),PE=()=>Tl||(SE.then(()=>Tl=0),Tl=Date.now());function CE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(kE(r,n.value),e,5,[r])};return n.value=t,n.attached=PE(),n}function kE(t,e){if(pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const id=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yE(t,r,o):e==="style"?TE(t,n,r):fa(e)?Dc(e)||bE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VE(t,e,r,o))?(nd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&td(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(r))?nd(t,zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),td(t,e,r,o))};function VE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&id(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return id(e)&&Qe(n)?!1:e in t}const od=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pe(e)?n=>Po(e,n):e};function NE(t){t.target.composing=!0}function ad(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Il=Symbol("_assign"),Rr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Il]=od(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=$l(l)),t[Il](l)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",NE),Kr(t,"compositionend",ad),Kr(t,"change",ad))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Il]=od(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?$l(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},OE=["ctrl","shift","alt","meta"],xE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>OE.some(n=>t[`${n}Key`]&&!e.includes(n))},ME=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=xE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},LE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},UE=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=cr(s.key);if(e.some(o=>o===i||LE[o]===i))return t(s)})},FE=Et({patchProp:DE},mE);let ld;function BE(){return ld||(ld=Fv(FE))}const $E=(...t)=>{const e=BE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qE(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,jE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qE(t){return Qe(t)?document.querySelector(t):t}const HE=()=>{};var cd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,y=h&63;c||(y=64,o||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new WE;const g=i<<2|l>>4;if(r.push(g),h!==64){const y=l<<4&240|h>>2;if(r.push(y),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KE=function(t){const e=lg(t);return cg.encodeByteArray(e,!0)},Qo=function(t){return KE(t).replace(/\./g,"")},ug=function(t){try{return cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=()=>GE().__FIREBASE_DEFAULTS__,YE=()=>{if(typeof process>"u"||typeof cd>"u")return;const t=cd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ug(t[1]);return e&&JSON.parse(e)},Ra=()=>{try{return HE()||QE()||YE()||JE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hg=t=>{var e,n;return(n=(e=Ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XE=t=>{const e=hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dg=()=>{var t;return(t=Ra())===null||t===void 0?void 0:t.config},fg=t=>{var e;return(e=Ra())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function nw(){var t;const e=(t=Ra())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ow(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aw(){return!nw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lw(){try{return typeof indexedDB=="object"}catch{return!1}}function cw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uw,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,l,r)}}function hw(t,e){return t.replace(dw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dw=/\{\$([^}]+)}/g;function fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ud(i)&&ud(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ud(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pw(t,e){const n=new gw(t,e);return n.subscribe.bind(n)}class gw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Al),s.error===void 0&&(s.error=Al),s.complete===void 0&&(s.complete=Al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Al(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vw(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yw(t){return t===Ir?void 0:t}function vw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _w(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const ww={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Tw=Ee.INFO,Iw={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Aw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Iw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wc{constructor(e){this.name=e,this._logLevel=Tw,this._logHandler=Aw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ww[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const bw=(t,e)=>e.some(n=>t instanceof n);let hd,dd;function Rw(){return hd||(hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sw(){return dd||(dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pg=new WeakMap,Zl=new WeakMap,gg=new WeakMap,bl=new WeakMap,Kc=new WeakMap;function Pw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pg.set(n,t)}).catch(()=>{}),Kc.set(e,t),e}function Cw(t){if(Zl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zl.set(t,e)}let ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kw(t){ec=t(ec)}function Dw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rl(this),e,...n);return gg.set(r,e.sort?e.sort():[e]),Jn(r)}:Sw().includes(t)?function(...e){return t.apply(Rl(this),e),Jn(pg.get(this))}:function(...e){return Jn(t.apply(Rl(this),e))}}function Vw(t){return typeof t=="function"?Dw(t):(t instanceof IDBTransaction&&Cw(t),bw(t,Rw())?new Proxy(t,ec):t)}function Jn(t){if(t instanceof IDBRequest)return Pw(t);if(bl.has(t))return bl.get(t);const e=Vw(t);return e!==t&&(bl.set(t,e),Kc.set(e,t)),e}const Rl=t=>Kc.get(t);function Nw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jn(o.result),c.oldVersion,c.newVersion,Jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Ow=["get","getKey","getAll","getAllKeys","count"],xw=["put","add","delete","clear"],Sl=new Map;function fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sl.get(e))return Sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ow.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Sl.set(e,i),i}kw(t=>({...t,get:(e,n,r)=>fd(e,n)||t.get(e,n,r),has:(e,n)=>!!fd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",pd="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Wc("@firebase/app"),Uw="@firebase/app-compat",Fw="@firebase/analytics-compat",Bw="@firebase/analytics",$w="@firebase/app-check-compat",jw="@firebase/app-check",qw="@firebase/auth",Hw="@firebase/auth-compat",zw="@firebase/database",Ww="@firebase/data-connect",Kw="@firebase/database-compat",Gw="@firebase/functions",Qw="@firebase/functions-compat",Yw="@firebase/installations",Jw="@firebase/installations-compat",Xw="@firebase/messaging",Zw="@firebase/messaging-compat",eT="@firebase/performance",tT="@firebase/performance-compat",nT="@firebase/remote-config",rT="@firebase/remote-config-compat",sT="@firebase/storage",iT="@firebase/storage-compat",oT="@firebase/firestore",aT="@firebase/vertexai",lT="@firebase/firestore-compat",cT="firebase",uT="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="[DEFAULT]",hT={[tc]:"fire-core",[Uw]:"fire-core-compat",[Bw]:"fire-analytics",[Fw]:"fire-analytics-compat",[jw]:"fire-app-check",[$w]:"fire-app-check-compat",[qw]:"fire-auth",[Hw]:"fire-auth-compat",[zw]:"fire-rtdb",[Ww]:"fire-data-connect",[Kw]:"fire-rtdb-compat",[Gw]:"fire-fn",[Qw]:"fire-fn-compat",[Yw]:"fire-iid",[Jw]:"fire-iid-compat",[Xw]:"fire-fcm",[Zw]:"fire-fcm-compat",[eT]:"fire-perf",[tT]:"fire-perf-compat",[nT]:"fire-rc",[rT]:"fire-rc-compat",[sT]:"fire-gcs",[iT]:"fire-gcs-compat",[oT]:"fire-fst",[lT]:"fire-fst-compat",[aT]:"fire-vertex","fire-js":"fire-js",[cT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map,dT=new Map,rc=new Map;function gd(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(rc.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of Yo.values())gd(n,t);for(const n of dT.values())gd(n,t);return!0}function Gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new qi("app","Firebase",fT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=uT;function mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Xn.create("bad-app-name",{appName:String(s)});if(n||(n=dg()),!n)throw Xn.create("no-options");const i=Yo.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw Xn.create("duplicate-app",{appName:s})}const o=new Ew(s);for(const c of rc.values())o.addComponent(c);const l=new pT(n,r,o);return Yo.set(s,l),l}function _g(t=nc){const e=Yo.get(t);if(!e&&t===nc&&dg())return mg();if(!e)throw Xn.create("no-app",{appName:t});return e}function Zn(t,e,n){var r;let s=(r=hT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(l.join(" "));return}ds(new Vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="firebase-heartbeat-database",mT=1,Si="firebase-heartbeat-store";let Pl=null;function yg(){return Pl||(Pl=Nw(gT,mT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Si)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),Pl}async function _T(t){try{const n=(await yg()).transaction(Si),r=await n.objectStore(Si).get(vg(t));return await n.done,r}catch(e){if(e instanceof Nn)Pn.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function md(t,e){try{const r=(await yg()).transaction(Si,"readwrite");await r.objectStore(Si).put(e,vg(t)),await r.done}catch(n){if(n instanceof Nn)Pn.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=1024,vT=30;class ET{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_d();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>vT){const o=IT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_d(),{heartbeatsToSend:r,unsentEntries:s}=wT(this._heartbeatsCache.heartbeats),i=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function _d(){return new Date().toISOString().substring(0,10)}function wT(t,e=yT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lw()?cw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _T(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yd(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}function IT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){ds(new Vr("platform-logger",e=>new Mw(e),"PRIVATE")),ds(new Vr("heartbeat",e=>new ET(e),"PRIVATE")),Zn(tc,pd,t),Zn(tc,pd,"esm2017"),Zn("fire-js","")}AT("");function Qc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bT=Eg,wg=new qi("auth","Firebase",Eg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Wc("@firebase/auth");function RT(t,...e){Jo.logLevel<=Ee.WARN&&Jo.warn(`Auth (${bs}): ${t}`,...e)}function Vo(t,...e){Jo.logLevel<=Ee.ERROR&&Jo.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw Yc(t,...e)}function un(t,...e){return Yc(t,...e)}function Tg(t,e,n){const r=Object.assign(Object.assign({},bT()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return Tg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wg.create(t,...e)}function ce(t,e,...n){if(!t)throw Yc(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function Cn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ST(){return vd()==="http:"||vd()==="https:"}function vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ST()||sw()||"connection"in navigator)?navigator.onLine:!0}function CT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=tw()||iw()}get(){return PT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VT=new zi(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fr(t,e,n,r,s={}){return Ag(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return rw()||(h.referrerPolicy="no-referrer"),Ig.fetch()(await bg(t,t.config.apiHost,n,l),h)})}async function Ag(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kT),e);try{const s=new OT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Eo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tg(t,d,h);Zt(t,d)}}catch(s){if(s instanceof Nn)throw s;Zt(t,"network-request-failed",{message:String(s)})}}async function Wi(t,e,n,r,s={}){const i=await fr(t,e,n,r,s);return"mfaPendingCredential"in i&&Zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function bg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Jc(t.config,s):`${t.config.apiScheme}://${s}`;return DT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function NT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),VT.get())})}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function Ed(t){return t!==void 0&&t.enterprise!==void 0}class xT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function MT(t,e){return fr(t,"GET","/v2/recaptchaConfig",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(t,e){return fr(t,"POST","/v1/accounts:delete",e)}async function Xo(t,e){return fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UT(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=Xc(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:di(Cl(s.auth_time)),issuedAtTime:di(Cl(s.iat)),expirationTime:di(Cl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cl(t){return Number(t)*1e3}function Xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ug(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wd(t){const e=Xc(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&FT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pi(t,Xo(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rg(i.providerUserInfo):[],l=jT(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ic(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function $T(t){const e=tt(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rg(t){return t.map(e=>{var{providerId:n}=e,r=Qc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(t,e){const n=await Ag(t,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await bg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ig.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HT(t,e){return fr(t,"POST","/v2/accounts:revokeToken",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=wd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new os;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ic(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UT(this,e)}reload(){return $T(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Pi(this,LT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:N,emailVerified:F,isAnonymous:q,providerData:z,stsTokenManager:w}=n;ce(N&&w,e,"internal-error");const _=os.fromJSON(this.name,w);ce(typeof N=="string",e,"internal-error"),Fn(p,e.name),Fn(g,e.name),ce(typeof F=="boolean",e,"internal-error"),ce(typeof q=="boolean",e,"internal-error"),Fn(y,e.name),Fn(R,e.name),Fn(k,e.name),Fn(D,e.name),Fn(L,e.name),Fn(M,e.name);const E=new Gt({uid:N,auth:e,email:g,emailVerified:F,displayName:p,isAnonymous:q,photoURL:R,phoneNumber:y,tenantId:k,stsTokenManager:_,createdAt:L,lastLoginAt:M});return z&&Array.isArray(z)&&(E.providerData=z.map(A=>Object.assign({},A))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new os;s.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new os;l.updateFromIdToken(r);const c=new Gt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ic(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map;function bn(t){Cn(t instanceof Function,"Expected a class definition");let e=Td.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Td.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const Id=Sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xo(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(bn(Id),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(Id);const o=No(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){let p;if(typeof d=="string"){const g=await Xo(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Gt._fromGetAccountInfoResponse(e,g,d)}else p=Gt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new as(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new as(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(Og(e))return"Webos";if(Cg(e))return"Safari";if((e.includes("chrome/")||kg(e))&&!e.includes("edge/"))return"Chrome";if(Vg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pg(t=wt()){return/firefox\//i.test(t)}function Cg(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kg(t=wt()){return/crios\//i.test(t)}function Dg(t=wt()){return/iemobile/i.test(t)}function Vg(t=wt()){return/android/i.test(t)}function Ng(t=wt()){return/blackberry/i.test(t)}function Og(t=wt()){return/webos/i.test(t)}function Zc(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zT(t=wt()){var e;return Zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WT(){return ow()&&document.documentMode===10}function xg(t=wt()){return Zc(t)||Vg(t)||Og(t)||Ng(t)||/windows phone/i.test(t)||Dg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e=[]){let n;switch(t){case"Browser":n=Ad(wt());break;case"Worker":n=`${Ad(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(t,e={}){return fr(t,"GET","/v2/passwordPolicy",dr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=6;class YT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bd(this),this.idTokenSubscription=new bd(this),this.beforeStateQueue=new KT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xo(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(Rn(this));const n=e?tt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GT(this),n=new YT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(t){return tt(t)}class bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=pw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XT(t){Sa=t}function Lg(t){return Sa.loadJS(t)}function ZT(){return Sa.recaptchaEnterpriseScript}function eI(){return Sa.gapiScript}function tI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class nI{constructor(){this.enterprise=new rI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class rI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sI="recaptcha-enterprise",Ug="NO_RECAPTCHA";class iI{constructor(e){this.type=sI,this.auth=Lr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{MT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new xT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Ed(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ug)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Ed(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ZT();c.length!==0&&(c+=l),Lg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Rd(t,e,n,r=!1,s=!1){const i=new iI(t);let o;if(s)o=Ug;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function oc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Rd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Rd(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t,e){const n=Gc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dr(i,e??{}))return s;Zt(s,"already-initialized")}return n.initialize({options:e})}function aI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lI(t,e,n){const r=Lr(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Fg(e),{host:o,port:l}=cI(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Dr(h,r.config.emulator)&&Dr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,uI()}function Fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cI(t){const e=Fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sd(o)}}}function Sd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function hI(t,e){return fr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e){return Wi(t,"POST","/v1/accounts:signInWithPassword",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}async function pI(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends eu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oc(e,n,"signInWithPassword",dI);case"emailLink":return fI(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oc(e,r,"signUpPassword",hI);case"emailLink":return pI(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return Wi(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="http://localhost";class Nr extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:gI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _I(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,r=Xs(Zs(t)).deep_link_id;return(r?Xs(Zs(r)).link:null)||r||n||e||t}class tu{constructor(e){var n,r,s,i,o,l;const c=Xs(Zs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=mI((s=c.mode)!==null&&s!==void 0?s:null);ce(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=_I(e);try{return new tu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tu.parseLink(n);return ce(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ki{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ki{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ki{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e){return Wi(t,"POST","/v1/accounts:signUp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),o=Pd(r);return new Or({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Pd(r);return new Or({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Pd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ea(e,n,r,s)}}function $g(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,r):i})}async function vI(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Or._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e,n=!1){const{auth:r}=t;if(qt(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await Pi(t,$g(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Xc(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),Or._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e,n=!1){if(qt(t.app))return Promise.reject(Rn(t));const r="signIn",s=await $g(t,r,e),i=await Or._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function wI(t,e){return jg(Lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(t){const e=Lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TI(t,e,n){if(qt(t.app))return Promise.reject(Rn(t));const r=Lr(t),o=await oc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qg(t),c}),l=await Or._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function II(t,e,n){return qt(t.app)?Promise.reject(Rn(t)):wI(tt(t),Rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qg(t),r})}function AI(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function bI(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function Pa(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function RI(t){return tt(t).signOut()}const ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=1e3,PI=10;class zg extends Hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);WT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,PI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zg.type="LOCAL";const CI=zg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Hg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wg.type="SESSION";const Kg=Wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await kI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=nu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function VI(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function NI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xI(){return Gg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="firebaseLocalStorageDb",MI=1,na="firebaseLocalStorage",Yg="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ka(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function LI(){const t=indexedDB.deleteDatabase(Qg);return new Gi(t).toPromise()}function ac(){const t=indexedDB.open(Qg,MI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(na,{keyPath:Yg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(na)?e(r):(r.close(),await LI(),e(await ac()))})})}async function Cd(t,e,n){const r=ka(t,!0).put({[Yg]:e,value:n});return new Gi(r).toPromise()}async function UI(t,e){const n=ka(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function kd(t,e){const n=ka(t,!0).delete(e);return new Gi(n).toPromise()}const FI=800,BI=3;class Jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(xI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NI(),!this.activeServiceWorker)return;this.sender=new DI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ac();return await Cd(e,ta,"1"),await kd(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ka(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jg.type="LOCAL";const $I=Jg;new zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e){return e?bn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends eu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qI(t){return jg(t.auth,new ru(t),t.bypassAuthState)}function HI(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),EI(n,new ru(t),t.bypassAuthState)}async function zI(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),vI(n,new ru(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qI;case"linkViaPopup":case"linkViaRedirect":return zI;case"reauthViaPopup":case"reauthViaRedirect":return HI;default:Zt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new zi(2e3,1e4);class Zr extends Xg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WI.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="pendingRedirect",Oo=new Map;class GI extends Xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await QI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QI(t,e){const n=XI(e),r=JI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YI(t,e){Oo.set(t._key(),e)}function JI(t){return bn(t._redirectPersistence)}function XI(t){return No(KI,t.config.apiKey,t.name)}async function ZI(t,e,n=!1){if(qt(t.app))return Promise.reject(Rn(t));const r=Lr(t),s=jI(r,e),o=await new GI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=10*60*1e3;class tA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dd(e))}saveEventToCache(e){this.cachedEventUids.add(Dd(e)),this.lastProcessedEventTime=Date.now()}}function Dd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e={}){return fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iA=/^https?/;async function oA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rA(t);for(const n of e)try{if(aA(n))return}catch{}Zt(t,"unauthorized-domain")}function aA(t){const e=sc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iA.test(n))return!1;if(sA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new zi(3e4,6e4);function Vd(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cA(t){return new Promise((e,n)=>{var r,s,i;function o(){Vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vd(),n(un(t,"network-request-failed"))},timeout:lA.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const l=tI("iframefcb");return hn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},Lg(`${eI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw xo=null,e})}let xo=null;function uA(t){return xo=xo||cA(t),xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new zi(5e3,15e3),dA="__/auth/iframe",fA="emulator/auth/iframe",pA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mA(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jc(e,fA):`https://${t.config.authDomain}/${dA}`,r={apiKey:e.apiKey,appName:t.name,v:bs},s=gA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Hi(r).slice(1)}`}async function _A(t){const e=await uA(t),n=hn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:mA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=hn().setTimeout(()=>{i(o)},hA.get());function c(){hn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vA=500,EA=600,wA="_blank",TA="http://localhost";class Nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IA(t,e,n,r=vA,s=EA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},yA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=wt().toLowerCase();n&&(l=kg(h)?wA:n),Pg(h)&&(e=e||TA,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[y,R])=>`${g}${y}=${R},`,"");if(zT(h)&&l!=="_self")return AA(e||"",l),new Nd(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Nd(p)}function AA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="__/auth/handler",RA="emulator/auth/handler",SA=encodeURIComponent("fac");async function Od(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:s};if(e instanceof Bg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ki){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${SA}=${encodeURIComponent(c)}`:"";return`${PA(t)}?${Hi(l).slice(1)}${h}`}function PA({config:t}){return t.emulator?Jc(t,RA):`https://${t.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="webStorageSupport";class CA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=ZI,this._overrideRedirectResult=YI}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Od(e,n,r,sc(),s);return IA(e,o,nu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Od(e,n,r,sc(),s);return VI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _A(e),r=new tA(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kl,{type:kl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kl];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xg()||Cg()||Zc()}}const kA=CA;var xd="@firebase/auth",Md="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NA(t){ds(new Vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(t)},h=new JT(r,s,i,c);return aI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new Vr("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new DA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(xd,Md,VA(t)),Zn(xd,Md,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=5*60,xA=fg("authIdTokenMaxAge")||OA;let Ld=null;const MA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xA)return;const s=n==null?void 0:n.token;Ld!==s&&(Ld=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function em(t=_g()){const e=Gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oI(t,{popupRedirectResolver:kA,persistence:[$I,CI,Kg]}),r=fg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=MA(i.toString());bI(n,o,()=>o(n.currentUser)),AI(n,l=>o(l))}}const s=hg("auth");return s&&lI(n,`http://${s}`),n}function LA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",LA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NA("Browser");/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof document<"u";function tm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function UA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&tm(t.default)}const Se=Object.assign;function Dl(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const fi=()=>{},en=Array.isArray,nm=/#/g,FA=/&/g,BA=/\//g,$A=/=/g,jA=/\?/g,rm=/\+/g,qA=/%5B/g,HA=/%5D/g,sm=/%5E/g,zA=/%60/g,im=/%7B/g,WA=/%7C/g,om=/%7D/g,KA=/%20/g;function su(t){return encodeURI(""+t).replace(WA,"|").replace(qA,"[").replace(HA,"]")}function GA(t){return su(t).replace(im,"{").replace(om,"}").replace(sm,"^")}function lc(t){return su(t).replace(rm,"%2B").replace(KA,"+").replace(nm,"%23").replace(FA,"%26").replace(zA,"`").replace(im,"{").replace(om,"}").replace(sm,"^")}function QA(t){return lc(t).replace($A,"%3D")}function YA(t){return su(t).replace(nm,"%23").replace(jA,"%3F")}function JA(t){return t==null?"":YA(t).replace(BA,"%2F")}function ki(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const XA=/\/$/,ZA=t=>t.replace(XA,"");function Vl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=rb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ki(o)}}function eb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ud(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fs(e.matched[r],n.matched[s])&&am(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function am(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nb(t[n],e[n]))return!1;return!0}function nb(t,e){return en(t)?Fd(t,e):en(e)?Fd(e,t):t===e}function Fd(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Di;(function(t){t.pop="pop",t.push="push"})(Di||(Di={}));var pi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pi||(pi={}));function sb(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZA(t)}const ib=/^[^#]+#/;function ob(t,e){return t.replace(ib,"#")+e}function ab(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Da=()=>({left:window.scrollX,top:window.scrollY});function lb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ab(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bd(t,e){return(history.state?history.state.position-e:-1)+t}const cc=new Map;function cb(t,e){cc.set(t,e)}function ub(t){const e=cc.get(t);return cc.delete(t),e}let hb=()=>location.protocol+"//"+location.host;function lm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Ud(c,"")}return Ud(n,t)+r+s}function db(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const y=lm(t,location),R=n.value,k=e.value;let D=0;if(g){if(n.value=y,e.value=g,o&&o===R){o=null;return}D=k?g.position-k.position:0}else r(y);s.forEach(L=>{L(n.value,R,{delta:D,type:Di.pop,direction:D?D>0?pi.forward:pi.back:pi.unknown})})};function c(){o=n.value}function h(g){s.push(g);const y=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(y),y}function d(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:Da()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function $d(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Da():null}}function fb(t){const{history:e,location:n}=window,r={value:lm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:hb()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(y){console.error(y),n[d?"replace":"assign"](g)}}function o(c,h){const d=Se({},e.state,$d(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Se({},s.value,e.state,{forward:c,scroll:Da()});i(d.current,d,!0);const p=Se({},$d(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function pb(t){t=sb(t);const e=fb(t),n=db(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:ob.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gb(t){return typeof t=="string"||t&&typeof t=="object"}function cm(t){return typeof t=="string"||typeof t=="symbol"}const um=Symbol("");var jd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jd||(jd={}));function ps(t,e){return Se(new Error,{type:t,[um]:!0},e)}function En(t,e){return t instanceof Error&&um in t&&(e==null||!!(t.type&e))}const qd="[^/]+?",mb={sensitive:!1,strict:!1,start:!0,end:!0},_b=/[.+*?^${}()[\]/\\]/g;function yb(t,e){const n=Se({},mb,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let y=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(_b,"\\$&"),y+=40;else if(g.type===1){const{value:R,repeatable:k,optional:D,regexp:L}=g;i.push({name:R,repeatable:k,optional:D});const M=L||qd;if(M!==qd){y+=10;try{new RegExp(`(${M})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${R}" (${M}): `+F.message)}}let N=k?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(N=D&&h.length<2?`(?:/${N})`:"/"+N),D&&(N+="?"),s+=N,y+=20,D&&(y+=-8),k&&(y+=-20),M===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const y=d[g]||"",R=i[g-1];p[R.name]=y&&R.repeatable?y.split("/"):y}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of g)if(y.type===0)d+=y.value;else if(y.type===1){const{value:R,repeatable:k,optional:D}=y,L=R in h?h[R]:"";if(en(L)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const M=en(L)?L.join("/"):L;if(!M)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function vb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function hm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Hd(r))return 1;if(Hd(s))return-1}return s.length-r.length}function Hd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Eb={type:0,value:""},wb=/[a-zA-Z0-9_]/;function Tb(t){if(!t)return[[]];if(t==="/")return[[Eb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:wb.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function Ib(t,e,n){const r=yb(Tb(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ab(t,e){const n=[],r=new Map;e=Gd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,y){const R=!y,k=Wd(p);k.aliasOf=y&&y.record;const D=Gd(e,p),L=[k];if("alias"in p){const F=typeof p.alias=="string"?[p.alias]:p.alias;for(const q of F)L.push(Wd(Se({},k,{components:y?y.record.components:k.components,path:q,aliasOf:y?y.record:k})))}let M,N;for(const F of L){const{path:q}=F;if(g&&q[0]!=="/"){const z=g.record.path,w=z[z.length-1]==="/"?"":"/";F.path=g.record.path+(q&&w+q)}if(M=Ib(F,g,D),y?y.alias.push(M):(N=N||M,N!==M&&N.alias.push(M),R&&p.name&&!Kd(M)&&o(p.name)),dm(M)&&c(M),k.children){const z=k.children;for(let w=0;w<z.length;w++)i(z[w],M,y&&y.children[w])}y=y||M}return N?()=>{o(N)}:fi}function o(p){if(cm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=Sb(p,n);n.splice(g,0,p),p.record.name&&!Kd(p)&&r.set(p.record.name,p)}function h(p,g){let y,R={},k,D;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw ps(1,{location:p});D=y.record.name,R=Se(zd(g.params,y.keys.filter(N=>!N.optional).concat(y.parent?y.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),p.params&&zd(p.params,y.keys.map(N=>N.name))),k=y.stringify(R)}else if(p.path!=null)k=p.path,y=n.find(N=>N.re.test(k)),y&&(R=y.parse(k),D=y.record.name);else{if(y=g.name?r.get(g.name):n.find(N=>N.re.test(g.path)),!y)throw ps(1,{location:p,currentLocation:g});D=y.record.name,R=Se({},g.params,p.params),k=y.stringify(R)}const L=[];let M=y;for(;M;)L.unshift(M.record),M=M.parent;return{name:D,path:k,params:R,matched:L,meta:Rb(L)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function zd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Wd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:bb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function bb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Kd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rb(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Gd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sb(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;hm(t,e[i])<0?r=i:n=i+1}const s=Pb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Pb(t){let e=t;for(;e=e.parent;)if(dm(e)&&hm(t,e)===0)return e}function dm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(rm," "),o=i.indexOf("="),l=ki(o<0?i:i.slice(0,o)),c=o<0?null:ki(i.slice(o+1));if(l in e){let h=e[l];en(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Qd(t){let e="";for(let n in t){const r=t[n];if(n=QA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&lc(i)):[r&&lc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Db=Symbol(""),Yd=Symbol(""),Va=Symbol(""),iu=Symbol(""),uc=Symbol("");function Ys(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(ps(4,{from:n,to:e})):g instanceof Error?c(g):gb(g)?c(ps(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function Nl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(tm(c)){const d=(c.__vccOpts||c)[e];d&&i.push(qn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=UA(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&qn(y,n,r,o,l,s)()}))}}return i}function Jd(t){const e=Yt(Va),n=Yt(iu),r=Ye(()=>{const c=de(t.to);return e.resolve(c)}),s=Ye(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(fs.bind(null,d));if(g>-1)return g;const y=Xd(c[h-2]);return h>1&&Xd(d)===y&&p[p.length-1].path!==y?p.findIndex(fs.bind(null,c[h-2])):g}),i=Ye(()=>s.value>-1&&Mb(n.params,r.value.params)),o=Ye(()=>s.value>-1&&s.value===n.matched.length-1&&am(n.params,r.value.params));function l(c={}){if(xb(c)){const h=e[de(t.replace)?"replace":"push"](de(t.to)).catch(fi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function Vb(t){return t.length===1?t[0]:t}const Nb=Op({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jd,setup(t,{slots:e}){const n=va(Jd(t)),{options:r}=Yt(Va),s=Ye(()=>({[Zd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Vb(e.default(n));return t.custom?i:og("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ob=Nb;function xb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zd=(t,e,n)=>t??e??n,Lb=Op({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(uc),s=Ye(()=>t.route||r.value),i=Yt(Yd,0),o=Ye(()=>{let h=de(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Ye(()=>s.value.matched[o.value]);Co(Yd,Ye(()=>o.value+1)),Co(Db,l),Co(uc,s);const c=ke();return ui(()=>[c.value,l.value,t.name],([h,d,p],[g,y,R])=>{d&&(d.instances[p]=h,y&&y!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),h&&d&&(!y||!fs(d,y)||!g)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return ef(n.default,{Component:g,route:h});const y=p.props[d],R=y?y===!0?h.params:typeof y=="function"?y(h):y:null,D=og(g,Se({},R,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return ef(n.default,{Component:D,route:h})||D}}});function ef(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ub=Lb;function Fb(t){const e=Ab(t.routes,t),n=t.parseQuery||Cb,r=t.stringifyQuery||Qd,s=t.history,i=Ys(),o=Ys(),l=Ys(),c=Zy(Bn);let h=Bn;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Dl.bind(null,O=>""+O),p=Dl.bind(null,JA),g=Dl.bind(null,ki);function y(O,Z){let J,re;return cm(O)?(J=e.getRecordMatcher(O),re=Z):re=O,e.addRoute(re,J)}function R(O){const Z=e.getRecordMatcher(O);Z&&e.removeRoute(Z)}function k(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function L(O,Z){if(Z=Se({},Z||c.value),typeof O=="string"){const S=Vl(n,O,Z.path),x=e.resolve({path:S.path},Z),j=s.createHref(S.fullPath);return Se(S,x,{params:g(x.params),hash:ki(S.hash),redirectedFrom:void 0,href:j})}let J;if(O.path!=null)J=Se({},O,{path:Vl(n,O.path,Z.path).path});else{const S=Se({},O.params);for(const x in S)S[x]==null&&delete S[x];J=Se({},O,{params:p(S)}),Z.params=p(Z.params)}const re=e.resolve(J,Z),be=O.hash||"";re.params=d(g(re.params));const v=eb(r,Se({},O,{hash:GA(be),path:re.path})),T=s.createHref(v);return Se({fullPath:v,hash:be,query:r===Qd?kb(O.query):O.query||{}},re,{redirectedFrom:void 0,href:T})}function M(O){return typeof O=="string"?Vl(n,O,c.value.path):Se({},O)}function N(O,Z){if(h!==O)return ps(8,{from:Z,to:O})}function F(O){return w(O)}function q(O){return F(Se(M(O),{replace:!0}))}function z(O){const Z=O.matched[O.matched.length-1];if(Z&&Z.redirect){const{redirect:J}=Z;let re=typeof J=="function"?J(O):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=M(re):{path:re},re.params={}),Se({query:O.query,hash:O.hash,params:re.path!=null?{}:O.params},re)}}function w(O,Z){const J=h=L(O),re=c.value,be=O.state,v=O.force,T=O.replace===!0,S=z(J);if(S)return w(Se(M(S),{state:typeof S=="object"?Se({},be,S.state):be,force:v,replace:T}),Z||J);const x=J;x.redirectedFrom=Z;let j;return!v&&tb(r,re,J)&&(j=ps(16,{to:x,from:re}),Ft(re,re,!0,!1)),(j?Promise.resolve(j):A(x,re)).catch(B=>En(B)?En(B,2)?B:Wt(B):ve(B,x,re)).then(B=>{if(B){if(En(B,2))return w(Se({replace:T},M(B.to),{state:typeof B.to=="object"?Se({},be,B.to.state):be,force:v}),Z||x)}else B=P(x,re,!0,T,be);return b(x,re,B),B})}function _(O,Z){const J=N(O,Z);return J?Promise.reject(J):Promise.resolve()}function E(O){const Z=On.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(O):O()}function A(O,Z){let J;const[re,be,v]=Bb(O,Z);J=Nl(re.reverse(),"beforeRouteLeave",O,Z);for(const S of re)S.leaveGuards.forEach(x=>{J.push(qn(x,O,Z))});const T=_.bind(null,O,Z);return J.push(T),St(J).then(()=>{J=[];for(const S of i.list())J.push(qn(S,O,Z));return J.push(T),St(J)}).then(()=>{J=Nl(be,"beforeRouteUpdate",O,Z);for(const S of be)S.updateGuards.forEach(x=>{J.push(qn(x,O,Z))});return J.push(T),St(J)}).then(()=>{J=[];for(const S of v)if(S.beforeEnter)if(en(S.beforeEnter))for(const x of S.beforeEnter)J.push(qn(x,O,Z));else J.push(qn(S.beforeEnter,O,Z));return J.push(T),St(J)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),J=Nl(v,"beforeRouteEnter",O,Z,E),J.push(T),St(J))).then(()=>{J=[];for(const S of o.list())J.push(qn(S,O,Z));return J.push(T),St(J)}).catch(S=>En(S,8)?S:Promise.reject(S))}function b(O,Z,J){l.list().forEach(re=>E(()=>re(O,Z,J)))}function P(O,Z,J,re,be){const v=N(O,Z);if(v)return v;const T=Z===Bn,S=Gr?history.state:{};J&&(re||T?s.replace(O.fullPath,Se({scroll:T&&S&&S.scroll},be)):s.push(O.fullPath,be)),c.value=O,Ft(O,Z,J,T),Wt()}let I;function Tt(){I||(I=s.listen((O,Z,J)=>{if(!nn.listening)return;const re=L(O),be=z(re);if(be){w(Se(be,{replace:!0,force:!0}),re).catch(fi);return}h=re;const v=c.value;Gr&&cb(Bd(v.fullPath,J.delta),Da()),A(re,v).catch(T=>En(T,12)?T:En(T,2)?(w(Se(M(T.to),{force:!0}),re).then(S=>{En(S,20)&&!J.delta&&J.type===Di.pop&&s.go(-1,!1)}).catch(fi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ve(T,re,v))).then(T=>{T=T||P(re,v,!1),T&&(J.delta&&!En(T,8)?s.go(-J.delta,!1):J.type===Di.pop&&En(T,20)&&s.go(-1,!1)),b(re,v,T)}).catch(fi)}))}let Ut=Ys(),We=Ys(),Te;function ve(O,Z,J){Wt(O);const re=We.list();return re.length?re.forEach(be=>be(O,Z,J)):console.error(O),Promise.reject(O)}function kt(){return Te&&c.value!==Bn?Promise.resolve():new Promise((O,Z)=>{Ut.add([O,Z])})}function Wt(O){return Te||(Te=!O,Tt(),Ut.list().forEach(([Z,J])=>O?J(O):Z()),Ut.reset()),O}function Ft(O,Z,J,re){const{scrollBehavior:be}=t;if(!Gr||!be)return Promise.resolve();const v=!J&&ub(Bd(O.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return Cp().then(()=>be(O,Z,v)).then(T=>T&&lb(T)).catch(T=>ve(T,O,Z))}const Be=O=>s.go(O);let $e;const On=new Set,nn={currentRoute:c,listening:!0,addRoute:y,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:k,resolve:L,options:t,push:F,replace:q,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:We.add,isReady:kt,install(O){const Z=this;O.component("RouterLink",Ob),O.component("RouterView",Ub),O.config.globalProperties.$router=Z,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>de(c)}),Gr&&!$e&&c.value===Bn&&($e=!0,F(s.location).catch(be=>{}));const J={};for(const be in Bn)Object.defineProperty(J,be,{get:()=>c.value[be],enumerable:!0});O.provide(Va,Z),O.provide(iu,Ap(J)),O.provide(uc,c);const re=O.unmount;On.add(O),O.unmount=function(){On.delete(O),On.size<1&&(h=Bn,I&&I(),I=null,c.value=Bn,$e=!1,Te=!1),re()}}};function St(O){return O.reduce((Z,J)=>Z.then(()=>E(J)),Promise.resolve())}return nn}function Bb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>fs(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>fs(h,c))||s.push(c))}return[n,r,s]}function Ss(){return Yt(Va)}function ou(t){return Yt(iu)}const $b={class:"app-container"},jb={__name:"App",setup(t){const e=Ss(),n=em();return Is(()=>{Pa(n,r=>{r&&(e.currentRoute.value.path==="/login"||e.currentRoute.value.path==="/register")&&e.push("/home")})}),(r,s)=>{const i=As("router-view");return Ve(),Ne("div",$b,[ze(i)])}}};var qb="firebase",Hb="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(qb,Hb,"app");var tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var er,fm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function E(){}E.prototype=_.prototype,w.D=_.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(A,b,P){for(var I=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)I[Tt-2]=arguments[Tt];return _.prototype[b].apply(A,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,E){E||(E=0);var A=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)A[b]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(b=0;16>b;++b)A[b]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=w.g[0],E=w.g[1],b=w.g[2];var P=w.g[3],I=_+(P^E&(b^P))+A[0]+3614090360&4294967295;_=E+(I<<7&4294967295|I>>>25),I=P+(b^_&(E^b))+A[1]+3905402710&4294967295,P=_+(I<<12&4294967295|I>>>20),I=b+(E^P&(_^E))+A[2]+606105819&4294967295,b=P+(I<<17&4294967295|I>>>15),I=E+(_^b&(P^_))+A[3]+3250441966&4294967295,E=b+(I<<22&4294967295|I>>>10),I=_+(P^E&(b^P))+A[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=P+(b^_&(E^b))+A[5]+1200080426&4294967295,P=_+(I<<12&4294967295|I>>>20),I=b+(E^P&(_^E))+A[6]+2821735955&4294967295,b=P+(I<<17&4294967295|I>>>15),I=E+(_^b&(P^_))+A[7]+4249261313&4294967295,E=b+(I<<22&4294967295|I>>>10),I=_+(P^E&(b^P))+A[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=P+(b^_&(E^b))+A[9]+2336552879&4294967295,P=_+(I<<12&4294967295|I>>>20),I=b+(E^P&(_^E))+A[10]+4294925233&4294967295,b=P+(I<<17&4294967295|I>>>15),I=E+(_^b&(P^_))+A[11]+2304563134&4294967295,E=b+(I<<22&4294967295|I>>>10),I=_+(P^E&(b^P))+A[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=P+(b^_&(E^b))+A[13]+4254626195&4294967295,P=_+(I<<12&4294967295|I>>>20),I=b+(E^P&(_^E))+A[14]+2792965006&4294967295,b=P+(I<<17&4294967295|I>>>15),I=E+(_^b&(P^_))+A[15]+1236535329&4294967295,E=b+(I<<22&4294967295|I>>>10),I=_+(b^P&(E^b))+A[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=P+(E^b&(_^E))+A[6]+3225465664&4294967295,P=_+(I<<9&4294967295|I>>>23),I=b+(_^E&(P^_))+A[11]+643717713&4294967295,b=P+(I<<14&4294967295|I>>>18),I=E+(P^_&(b^P))+A[0]+3921069994&4294967295,E=b+(I<<20&4294967295|I>>>12),I=_+(b^P&(E^b))+A[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=P+(E^b&(_^E))+A[10]+38016083&4294967295,P=_+(I<<9&4294967295|I>>>23),I=b+(_^E&(P^_))+A[15]+3634488961&4294967295,b=P+(I<<14&4294967295|I>>>18),I=E+(P^_&(b^P))+A[4]+3889429448&4294967295,E=b+(I<<20&4294967295|I>>>12),I=_+(b^P&(E^b))+A[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=P+(E^b&(_^E))+A[14]+3275163606&4294967295,P=_+(I<<9&4294967295|I>>>23),I=b+(_^E&(P^_))+A[3]+4107603335&4294967295,b=P+(I<<14&4294967295|I>>>18),I=E+(P^_&(b^P))+A[8]+1163531501&4294967295,E=b+(I<<20&4294967295|I>>>12),I=_+(b^P&(E^b))+A[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=P+(E^b&(_^E))+A[2]+4243563512&4294967295,P=_+(I<<9&4294967295|I>>>23),I=b+(_^E&(P^_))+A[7]+1735328473&4294967295,b=P+(I<<14&4294967295|I>>>18),I=E+(P^_&(b^P))+A[12]+2368359562&4294967295,E=b+(I<<20&4294967295|I>>>12),I=_+(E^b^P)+A[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=P+(_^E^b)+A[8]+2272392833&4294967295,P=_+(I<<11&4294967295|I>>>21),I=b+(P^_^E)+A[11]+1839030562&4294967295,b=P+(I<<16&4294967295|I>>>16),I=E+(b^P^_)+A[14]+4259657740&4294967295,E=b+(I<<23&4294967295|I>>>9),I=_+(E^b^P)+A[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=P+(_^E^b)+A[4]+1272893353&4294967295,P=_+(I<<11&4294967295|I>>>21),I=b+(P^_^E)+A[7]+4139469664&4294967295,b=P+(I<<16&4294967295|I>>>16),I=E+(b^P^_)+A[10]+3200236656&4294967295,E=b+(I<<23&4294967295|I>>>9),I=_+(E^b^P)+A[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=P+(_^E^b)+A[0]+3936430074&4294967295,P=_+(I<<11&4294967295|I>>>21),I=b+(P^_^E)+A[3]+3572445317&4294967295,b=P+(I<<16&4294967295|I>>>16),I=E+(b^P^_)+A[6]+76029189&4294967295,E=b+(I<<23&4294967295|I>>>9),I=_+(E^b^P)+A[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=P+(_^E^b)+A[12]+3873151461&4294967295,P=_+(I<<11&4294967295|I>>>21),I=b+(P^_^E)+A[15]+530742520&4294967295,b=P+(I<<16&4294967295|I>>>16),I=E+(b^P^_)+A[2]+3299628645&4294967295,E=b+(I<<23&4294967295|I>>>9),I=_+(b^(E|~P))+A[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=P+(E^(_|~b))+A[7]+1126891415&4294967295,P=_+(I<<10&4294967295|I>>>22),I=b+(_^(P|~E))+A[14]+2878612391&4294967295,b=P+(I<<15&4294967295|I>>>17),I=E+(P^(b|~_))+A[5]+4237533241&4294967295,E=b+(I<<21&4294967295|I>>>11),I=_+(b^(E|~P))+A[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=P+(E^(_|~b))+A[3]+2399980690&4294967295,P=_+(I<<10&4294967295|I>>>22),I=b+(_^(P|~E))+A[10]+4293915773&4294967295,b=P+(I<<15&4294967295|I>>>17),I=E+(P^(b|~_))+A[1]+2240044497&4294967295,E=b+(I<<21&4294967295|I>>>11),I=_+(b^(E|~P))+A[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=P+(E^(_|~b))+A[15]+4264355552&4294967295,P=_+(I<<10&4294967295|I>>>22),I=b+(_^(P|~E))+A[6]+2734768916&4294967295,b=P+(I<<15&4294967295|I>>>17),I=E+(P^(b|~_))+A[13]+1309151649&4294967295,E=b+(I<<21&4294967295|I>>>11),I=_+(b^(E|~P))+A[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=P+(E^(_|~b))+A[11]+3174756917&4294967295,P=_+(I<<10&4294967295|I>>>22),I=b+(_^(P|~E))+A[2]+718787259&4294967295,b=P+(I<<15&4294967295|I>>>17),I=E+(P^(b|~_))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var E=_-this.blockSize,A=this.B,b=this.h,P=0;P<_;){if(b==0)for(;P<=E;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<_;)if(A[b++]=w.charCodeAt(P++),b==this.blockSize){s(this,A),b=0;break}}else for(;P<_;)if(A[b++]=w[P++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var E=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=E&255,E/=256;for(this.u(w),w=Array(16),_=E=0;4>_;++_)for(var A=0;32>A;A+=8)w[E++]=this.g[_]>>>A&255;return w};function i(w,_){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=_(w)}function o(w,_){this.h=_;for(var E=[],A=!0,b=w.length-1;0<=b;b--){var P=w[b]|0;A&&P==_||(E[b]=P,A=!1)}this.g=E}var l={};function c(w){return-128<=w&&128>w?i(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return D(h(-w));for(var _=[],E=1,A=0;w>=E;A++)_[A]=w/E|0,E*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return D(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),A=p,b=0;b<w.length;b+=8){var P=Math.min(8,w.length-b),I=parseInt(w.substring(b,b+P),_);8>P?(P=h(Math.pow(_,P)),A=A.j(P).add(h(I))):(A=A.j(E),A=A.add(h(I)))}return A}var p=c(0),g=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var w=0,_=1,E=0;E<this.g.length;E++){var A=this.i(E);w+=(0<=A?A:4294967296+A)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(k(this))return"-"+D(this).toString(w);for(var _=h(Math.pow(w,6)),E=this,A="";;){var b=F(E,_).g;E=L(E,b.j(_));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=b,R(E))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=L(this,w),k(w)?-1:R(w)?0:1};function D(w){for(var _=w.g.length,E=[],A=0;A<_;A++)E[A]=~w.g[A];return new o(E,~w.h).add(g)}t.abs=function(){return k(this)?D(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],A=0,b=0;b<=_;b++){var P=A+(this.i(b)&65535)+(w.i(b)&65535),I=(P>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=I>>>16,P&=65535,I&=65535,E[b]=I<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function L(w,_){return w.add(D(_))}t.j=function(w){if(R(this)||R(w))return p;if(k(this))return k(w)?D(this).j(D(w)):D(D(this).j(w));if(k(w))return D(this.j(D(w)));if(0>this.l(y)&&0>w.l(y))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,E=[],A=0;A<2*_;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var P=this.i(A)>>>16,I=this.i(A)&65535,Tt=w.i(b)>>>16,Ut=w.i(b)&65535;E[2*A+2*b]+=I*Ut,M(E,2*A+2*b),E[2*A+2*b+1]+=P*Ut,M(E,2*A+2*b+1),E[2*A+2*b+1]+=I*Tt,M(E,2*A+2*b+1),E[2*A+2*b+2]+=P*Tt,M(E,2*A+2*b+2)}for(A=0;A<_;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=_;A<2*_;A++)E[A]=0;return new o(E,0)};function M(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function N(w,_){this.g=w,this.h=_}function F(w,_){if(R(_))throw Error("division by zero");if(R(w))return new N(p,p);if(k(w))return _=F(D(w),_),new N(D(_.g),D(_.h));if(k(_))return _=F(w,D(_)),new N(D(_.g),_.h);if(30<w.g.length){if(k(w)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,A=_;0>=A.l(w);)E=q(E),A=q(A);var b=z(E,1),P=z(A,1);for(A=z(A,2),E=z(E,2);!R(A);){var I=P.add(A);0>=I.l(w)&&(b=b.add(E),P=I),A=z(A,1),E=z(E,1)}return _=L(w,b.j(_)),new N(b,_)}for(b=p;0<=w.l(_);){for(E=Math.max(1,Math.floor(w.m()/_.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=h(E),I=P.j(_);k(I)||0<I.l(w);)E-=A,P=h(E),I=P.j(_);R(P)&&(P=g),b=b.add(P),w=L(w,I)}return new N(b,w)}t.A=function(w){return F(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],A=0;A<_;A++)E[A]=this.i(A)&w.i(A);return new o(E,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],A=0;A<_;A++)E[A]=this.i(A)|w.i(A);return new o(E,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],A=0;A<_;A++)E[A]=this.i(A)^w.i(A);return new o(E,this.h^w.h)};function q(w){for(var _=w.g.length+1,E=[],A=0;A<_;A++)E[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(E,w.h)}function z(w,_){var E=_>>5;_%=32;for(var A=w.g.length-E,b=[],P=0;P<A;P++)b[P]=0<_?w.i(P+E)>>>_|w.i(P+E+1)<<32-_:w.i(P+E);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,er=o}).apply(typeof tf<"u"?tf:typeof self<"u"?self:typeof window<"u"?window:{});var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pm,ei,gm,Mo,hc,mm,_m,ym;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wo=="object"&&wo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var V=f++;return{value:u(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,V){for(var Q=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)Q[Oe-2]=arguments[Oe];return u.prototype[C].apply(m,Q)}}function k(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=a.length||0,V=m.length||0;a.length=C+V;for(let Q=0;Q<V;Q++)a[C+Q]=m[Q]}else a.push(m)}}class L{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var q=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function z(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function w(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=kt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Tt{constructor(){this.h=this.g=null}add(u,f){const m=Ut.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ut=new L(()=>new We,a=>a.reset());class We{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ve=!1,kt=new Tt,Wt=()=>{const a=l.Promise.resolve(void 0);Te=()=>{a.then(Ft)}};var Ft=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){P(f)}var u=Ut;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ve=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var On=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function nn(a,u){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(q){e:{try{F(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}R(nn,$e);var St={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),Z=0;function J(a,u,f,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=C,this.key=++Z,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,u,f,m,C){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var Q=T(a,u,m,C);return-1<Q?(u=a[Q],f||(u.fa=!1)):(u=new J(u,this.src,V,!!m,C),u.fa=f,a.push(u)),u};function v(a,u){var f=u.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=C)&&Array.prototype.splice.call(m,C,1),V&&(re(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,u,f,m){for(var C=0;C<a.length;++C){var V=a[C];if(!V.da&&V.listener==u&&V.capture==!!f&&V.ha==m)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),x={};function j(a,u,f,m,C){if(Array.isArray(u)){for(var V=0;V<u.length;V++)j(a,u[V],f,m,C);return null}return f=ue(f),a&&a[O]?a.K(u,f,h(m)?!!m.capture:!1,C):B(a,u,f,!1,m,C)}function B(a,u,f,m,C,V){if(!u)throw Error("Invalid event type");var Q=h(C)?!!C.capture:!!C,Oe=X(a);if(Oe||(a[S]=Oe=new be(a)),f=Oe.add(u,f,m,Q,V),f.proxy)return f;if(m=Y(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)On||(C=Q),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(W(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return u.call(a.src,a.listener,f)}const u=ae;return a}function G(a,u,f,m,C){if(Array.isArray(u))for(var V=0;V<u.length;V++)G(a,u[V],f,m,C);else m=h(m)?!!m.capture:!!m,f=ue(f),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],f=T(V,f,m,C),-1<f&&(re(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=X(a))&&(u=a.g[u.toString()],a=-1,u&&(a=T(u,f,m,C)),(f=-1<a?u[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])v(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(W(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=X(u))?(v(f,a),f.h==0&&(f.src=null,u[S]=null)):re(a)}}}function W(a){return a in x?x[a]:x[a]="on"+a}function ae(a,u){if(a.da)a=!0;else{u=new nn(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&K(a),a=f.call(m,u)}return a}function X(a){return a=a[S],a instanceof be?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[se]||(a[se]=function(u){return a.handleEvent(u)}),a[se])}function le(){Be.call(this),this.i=new be(this),this.M=this,this.F=null}R(le,Be),le.prototype[O]=!0,le.prototype.removeEventListener=function(a,u,f,m){G(this,a,u,f,m)};function _e(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new $e(u,a);else if(u instanceof $e)u.target=u.target||a;else{var C=u;u=new $e(m,a),A(u,C)}if(C=!0,f)for(var V=f.length-1;0<=V;V--){var Q=u.g=f[V];C=Ie(Q,m,!0,u)&&C}if(Q=u.g=a,C=Ie(Q,m,!0,u)&&C,C=Ie(Q,m,!1,u)&&C,f)for(V=0;V<f.length;V++)Q=u.g=f[V],C=Ie(Q,m,!1,u)&&C}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)re(f[m]);delete a.g[u],a.h--}}this.F=null},le.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},le.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Ie(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,V=0;V<u.length;++V){var Q=u[V];if(Q&&!Q.da&&Q.capture==f){var Oe=Q.listener,st=Q.ha||Q.src;Q.fa&&v(a.i,Q),C=Oe.call(st,m)!==!1&&C}}return C&&!m.defaultPrevented}function ct(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function nt(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,nt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Bt extends Be{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:nt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Be.call(this),this.h=a,this.g={}}R(ut,Be);var xn=[];function xs(a){z(a.g,function(u,f){this.g.hasOwnProperty(f)&&K(u)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),xs(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=l.JSON.stringify,$t=l.JSON.parse,eo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xa(){}Xa.prototype.h=null;function ju(a){return a.h||(a.h=a.i())}function qu(){}var Ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Za(){$e.call(this,"d")}R(Za,$e);function el(){$e.call(this,"c")}R(el,$e);var mr={},Hu=null;function to(){return Hu=Hu||new le}mr.La="serverreachability";function zu(a){$e.call(this,mr.La,a)}R(zu,$e);function Ls(a){const u=to();_e(u,new zu(u))}mr.STAT_EVENT="statevent";function Wu(a,u){$e.call(this,mr.STAT_EVENT,a),this.stat=u}R(Wu,$e);function It(a){const u=to();_e(u,new Wu(u,a))}mr.Ma="timingevent";function Ku(a,u){$e.call(this,mr.Ma,a),this.size=u}R(Ku,$e);function Us(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function X_(a,u,f,m,C,V){a.info(function(){if(a.g)if(V)for(var Q="",Oe=V.split("&"),st=0;st<Oe.length;st++){var Re=Oe[st].split("=");if(1<Re.length){var ht=Re[0];Re=Re[1];var dt=ht.split("_");Q=2<=dt.length&&dt[1]=="type"?Q+(ht+"="+Re+"&"):Q+(ht+"=redacted&")}}else Q=null;else Q=V;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+f+`
`+Q})}function Z_(a,u,f,m,C,V,Q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+f+`
`+V+" "+Q})}function $r(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+ty(a,f)+(m?" "+m:"")})}function ey(a,u){a.info(function(){return"TIMEOUT: "+u})}Fs.prototype.info=function(){};function ty(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var Q=1;Q<C.length;Q++)C[Q]=""}}}}return rt(f)}catch{return u}}var no={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tl;function ro(){}R(ro,Xa),ro.prototype.g=function(){return new XMLHttpRequest},ro.prototype.i=function(){return{}},tl=new ro;function Mn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qu}function Qu(){this.i=null,this.g="",this.h=!1}var Yu={},nl={};function rl(a,u,f){a.L=1,a.v=ao(_n(u)),a.m=f,a.P=!0,Ju(a,null)}function Ju(a,u){a.F=Date.now(),so(a),a.A=_n(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),hh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Qu,a.g=Ch(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Bt(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(xn[0]=C.toString()),C=xn);for(var V=0;V<C.length;V++){var Q=j(f,C[V],m||u.handleEvent,!1,u.h||u);if(!Q)break;u.g[Q.key]=Q}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ls(),X_(a.i,a.u,a.A,a.l,a.R,a.m)}Mn.prototype.ca=function(a){a=a.target;const u=this.M;u&&yn(a)==3?u.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const dt=yn(this.g);var u=this.g.Ba();const Hr=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||yh(this.g)))){this.J||dt!=4||u==7||(u==8||0>=Hr?Ls(3):Ls(2)),sl(this);var f=this.g.Z();this.X=f;t:if(Xu(this)){var m=yh(this.g);a="";var C=m.length,V=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),Bs(this);var Q="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(V&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,Z_(this.i,this.u,this.A,this.l,this.R,dt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,st=this.g;if((Oe=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Oe)){var Re=Oe;break t}}Re=null}if(f=Re)$r(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,il(this,f);else{this.o=!1,this.s=3,It(12),_r(this),Bs(this);break e}}if(this.P){f=!0;let Kt;for(;!this.J&&this.C<Q.length;)if(Kt=ny(this,Q),Kt==nl){dt==4&&(this.s=4,It(14),f=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Yu){this.s=4,It(15),$r(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else $r(this.i,this.l,Kt,null),il(this,Kt);if(Xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||Q.length!=0||this.h.h||(this.s=1,It(16),f=!1),this.o=this.o&&f,!f)$r(this.i,this.l,Q,"[Invalid Chunked Response]"),_r(this),Bs(this);else if(0<Q.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),hl(ht),ht.M=!0,It(11))}}else $r(this.i,this.l,Q,null),il(this,Q);dt==4&&_r(this),this.o&&!this.J&&(dt==4?bh(this.j,this):(this.o=!1,so(this)))}else vy(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),_r(this),Bs(this)}}}catch{}finally{}};function Xu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ny(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?nl:(f=Number(u.substring(f,m)),isNaN(f)?Yu:(m+=1,m+f>u.length?nl:(u=u.slice(m,m+f),a.C=m+f,u)))}Mn.prototype.cancel=function(){this.J=!0,_r(this)};function so(a){a.S=Date.now()+a.I,Zu(a,a.I)}function Zu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Us(g(a.ba,a),u)}function sl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Mn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ey(this.i,this.A),this.L!=2&&(Ls(),It(17)),_r(this),this.s=2,Bs(this)):Zu(this,this.S-a)};function Bs(a){a.j.G==0||a.J||bh(a.j,a)}function _r(a){sl(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,xs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function il(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||ol(f.h,a))){if(!a.K&&ol(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)po(f),ho(f);else break e;ul(f),It(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Us(g(f.Za,f),6e3));if(1>=nh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else vr(f,11)}else if((a.K||f.g==a)&&po(f),!M(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Re=C[u];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const ht=Re[3];ht!=null&&(f.la=ht,f.j.info("VER="+f.la));const dt=Re[4];dt!=null&&(f.Aa=dt,f.j.info("SVER="+f.Aa));const Hr=Re[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(m=1.5*Hr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Kt=a.g;if(Kt){const mo=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var V=m.h;V.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(al(V,V.h),V.h=null))}if(m.D){const dl=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;dl&&(m.ya=dl,Le(m.I,m.D,dl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var Q=a;if(m.qa=Ph(m,m.J?m.ia:null,m.W),Q.K){rh(m.h,Q);var Oe=Q,st=m.L;st&&(Oe.I=st),Oe.B&&(sl(Oe),so(Oe)),m.g=Q}else Ih(m);0<f.i.length&&fo(f)}else Re[0]!="stop"&&Re[0]!="close"||vr(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?vr(f,7):cl(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}Ls(4)}catch{}}var ry=class{constructor(a,u){this.g=a,this.map=u}};function eh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function th(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nh(a){return a.h?1:a.g?a.g.size:0}function ol(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function al(a,u){a.g?a.g.add(u):a.h=u}function rh(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}eh.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return k(a.i)}function sy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function iy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function ih(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=iy(a),m=sy(a),C=m.length,V=0;V<C;V++)u.call(void 0,m[V],f&&f[V],a)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oy(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var V=a[f].substring(0,m);C=a[f].substring(m+1)}else V=a[f];u(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function yr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof yr){this.h=a.h,io(this,a.j),this.o=a.o,this.g=a.g,oo(this,a.s),this.l=a.l;var u=a.i,f=new qs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),ah(this,f),this.m=a.m}else a&&(u=String(a).match(oh))?(this.h=!1,io(this,u[1]||"",!0),this.o=$s(u[2]||""),this.g=$s(u[3]||"",!0),oo(this,u[4]),this.l=$s(u[5]||"",!0),ah(this,u[6]||"",!0),this.m=$s(u[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}yr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(js(u,lh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(js(u,lh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(js(f,f.charAt(0)=="/"?cy:ly,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",js(f,hy)),a.join("")};function _n(a){return new yr(a)}function io(a,u,f){a.j=f?$s(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function oo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ah(a,u,f){u instanceof qs?(a.i=u,dy(a.i,a.h)):(f||(u=js(u,uy)),a.i=new qs(u,a.h))}function Le(a,u,f){a.i.set(u,f)}function ao(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $s(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,ay),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ay(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lh=/[#\/\?@]/g,ly=/[#\?:]/g,cy=/[#\?]/g,uy=/[#\?@]/g,hy=/#/g;function qs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&oy(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=qs.prototype,t.add=function(a,u){Ln(this),this.i=null,a=jr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function ch(a,u){Ln(a),u=jr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function uh(a,u){return Ln(a),u=jr(a,u),a.g.has(u)}t.forEach=function(a,u){Ln(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){Ln(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const C=a[m];for(let V=0;V<C.length;V++)f.push(u[m])}return f},t.V=function(a){Ln(this);let u=[];if(typeof a=="string")uh(this,a)&&(u=u.concat(this.g.get(jr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Ln(this),this.i=null,a=jr(this,a),uh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function hh(a,u,f){ch(a,u),0<f.length&&(a.i=null,a.g.set(jr(a,u),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const V=encodeURIComponent(String(m)),Q=this.V(m);for(m=0;m<Q.length;m++){var C=V;Q[m]!==""&&(C+="="+encodeURIComponent(String(Q[m]))),a.push(C)}}return this.i=a.join("&")};function jr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function dy(a,u){u&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(ch(this,m),hh(this,C,f))},a)),a.j=u}function fy(a,u){const f=new Fs;if(l.Image){const m=new Image;m.onload=y(Un,f,"TestLoadImage: loaded",!0,u,m),m.onerror=y(Un,f,"TestLoadImage: error",!1,u,m),m.onabort=y(Un,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=y(Un,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function py(a,u){const f=new Fs,m=new AbortController,C=setTimeout(()=>{m.abort(),Un(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(C),V.ok?Un(f,"TestPingServer: ok",!0,u):Un(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Un(f,"TestPingServer: error",!1,u)})}function Un(a,u,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function gy(){this.g=new eo}function my(a,u,f){const m=f||"";try{ih(a,function(C,V){let Q=C;h(C)&&(Q=rt(C)),u.push(m+V+"="+encodeURIComponent(Q))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function lo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(lo,Xa),lo.prototype.g=function(){return new co(this.l,this.j)},lo.prototype.i=function(a){return function(){return a}}({});function co(a,u){le.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(co,le),t=co.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Hs(this):zs(this),this.readyState==3&&dh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Hs(this))},t.Qa=function(a){this.g&&(this.response=a,Hs(this))},t.ga=function(){this.g&&Hs(this)};function Hs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fh(a){let u="";return z(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function ll(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=fh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Le(a,u,f))}function qe(a){le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(qe,le);var _y=/^https?$/i,yy=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tl.g(),this.v=this.o?ju(this.o):ju(tl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){ph(this,V);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())f.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yy,u,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Q]of f)this.g.setRequestHeader(V,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_h(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){ph(this,V)}};function ph(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,gh(a),uo(a)}function gh(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uo(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?mh(this):this.bb())},t.bb=function(){mh(this)};function mh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)ct(a.Ea,0,a);else if(_e(a,"readystatechange"),yn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=Q===0){var C=String(a.D).match(oh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!_y.test(C?C.toLowerCase():"")}f=m}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var V=2<yn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",gh(a)}}finally{uo(a)}}}}function uo(a,u){if(a.g){_h(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||_e(a,"ready");try{f.onreadystatechange=m}catch{}}}function _h(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),$t(u)}};function yh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function vy(a){const u={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var f=b(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=u[C]||[];u[C]=V,V.push(f)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function vh(a){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,a),this.cb=Ws("retryDelaySeedMs",1e4,a),this.Wa=Ws("forwardChannelMaxRetries",2,a),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new eh(a&&a.concurrentRequestLimit),this.Da=new gy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){It(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Ph(this,null,this.W),fo(this)};function cl(a){if(Eh(a),a.G==3){var u=a.U++,f=_n(a.I);if(Le(f,"SID",a.K),Le(f,"RID",u),Le(f,"TYPE","terminate"),Ks(a,f),u=new Mn(a,a.j,u),u.L=2,u.v=ao(_n(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Ch(u.j,null),u.g.ea(u.v)),u.F=Date.now(),so(u)}Sh(a)}function ho(a){a.g&&(hl(a),a.g.cancel(),a.g=null)}function Eh(a){ho(a),a.u&&(l.clearTimeout(a.u),a.u=null),po(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fo(a){if(!th(a.h)&&!a.s){a.s=!0;var u=a.Ga;Te||Wt(),ve||(Te(),ve=!0),kt.add(u,a),a.B=0}}function Ey(a,u){return nh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Us(g(a.Ga,a,u),Rh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Mn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=_(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Th(this,C,u),f=_n(this.I),Le(f,"RID",a),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),Ks(this,f),V&&(this.O?u="headers="+encodeURIComponent(String(fh(V)))+"&"+u:this.m&&ll(f,this.m,V)),al(this.h,C),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",u),Le(f,"SID","null"),C.T=!0,rl(C,f,null)):rl(C,f,u),this.G=2}}else this.G==3&&(a?wh(this,a):this.i.length==0||th(this.h)||wh(this))};function wh(a,u){var f;u?f=u.l:f=a.U++;const m=_n(a.I);Le(m,"SID",a.K),Le(m,"RID",f),Le(m,"AID",a.T),Ks(a,m),a.m&&a.o&&ll(m,a.m,a.o),f=new Mn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Th(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),al(a.h,f),rl(f,m,u)}function Ks(a,u){a.H&&z(a.H,function(f,m){Le(u,m,f)}),a.l&&ih({},function(f,m){Le(u,m,f)})}function Th(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let V=-1;for(;;){const Q=["count="+f];V==-1?0<f?(V=C[0].g,Q.push("ofs="+V)):V=0:Q.push("ofs="+V);let Oe=!0;for(let st=0;st<f;st++){let Re=C[st].g;const ht=C[st].map;if(Re-=V,0>Re)V=Math.max(0,C[st].g-100),Oe=!1;else try{my(ht,Q,"req"+Re+"_")}catch{m&&m(ht)}}if(Oe){m=Q.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function Ih(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Te||Wt(),ve||(Te(),ve=!0),kt.add(u,a),a.v=0}}function ul(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Us(g(a.Fa,a),Rh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ah(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Us(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),ho(this),Ah(this))};function hl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ah(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=_n(a.qa);Le(u,"RID","rpc"),Le(u,"SID",a.K),Le(u,"AID",a.T),Le(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(u,"TO",a.ja),Le(u,"TYPE","xmlhttp"),Ks(a,u),a.m&&a.o&&ll(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ao(_n(u)),f.m=null,f.P=!0,Ju(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ho(this),ul(this),It(19))};function po(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function bh(a,u){var f=null;if(a.g==u){po(a),hl(a),a.g=null;var m=2}else if(ol(a.h,u))f=u.D,rh(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=to(),_e(m,new Ku(m,f)),fo(a)}else Ih(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&Ey(a,u)||m==2&&ul(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),C){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function Rh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function vr(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const C=!m;m=new yr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||io(m,"https"),ao(m),C?fy(m.toString(),f):py(m.toString(),f)}else It(2);a.G=0,a.l&&a.l.sa(u),Sh(a),Eh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Sh(a){if(a.G=0,a.ka=[],a.l){const u=sh(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Ph(a,u,f){var m=f instanceof yr?_n(f):new yr(f);if(m.g!="")u&&(m.g=u+"."+m.g),oo(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var V=new yr(null);m&&io(V,m),u&&(V.g=u),C&&oo(V,C),f&&(V.l=f),m=V}return f=a.D,u=a.ya,f&&u&&Le(m,f,u),Le(m,"VER",a.la),Ks(a,m),m}function Ch(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new qe(new lo({eb:f})):new qe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kh(){}t=kh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function go(){}go.prototype.g=function(a,u){return new Dt(a,u)};function Dt(a,u){le.call(this),this.g=new vh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!M(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new qr(this)}R(Dt,le),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){cl(this.g)},Dt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=rt(a),a=f);u.i.push(new ry(u.Ya++,a)),u.G==3&&fo(u)},Dt.prototype.N=function(){this.g.l=null,delete this.j,cl(this.g),delete this.g,Dt.aa.N.call(this)};function Dh(a){Za.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}R(Dh,Za);function Vh(){el.call(this),this.status=1}R(Vh,el);function qr(a){this.g=a}R(qr,kh),qr.prototype.ua=function(){_e(this.g,"a")},qr.prototype.ta=function(a){_e(this.g,new Dh(a))},qr.prototype.sa=function(a){_e(this.g,new Vh)},qr.prototype.ra=function(){_e(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,ym=function(){return new go},_m=function(){return to()},mm=mr,hc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},no.NO_ERROR=0,no.TIMEOUT=8,no.HTTP_ERROR=6,Mo=no,Gu.COMPLETE="complete",gm=Gu,qu.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",le.prototype.listen=le.prototype.K,ei=qu,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,pm=qe}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});const nf="@firebase/firestore",rf="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Wc("@firebase/firestore");function Qr(){return xr.logLevel}function ee(t,...e){if(xr.logLevel<=Ee.DEBUG){const n=e.map(au);xr.debug(`Firestore (${Ps}): ${t}`,...n)}}function kn(t,...e){if(xr.logLevel<=Ee.ERROR){const n=e.map(au);xr.error(`Firestore (${Ps}): ${t}`,...n)}}function gs(t,...e){if(xr.logLevel<=Ee.WARN){const n=e.map(au);xr.warn(`Firestore (${Ps}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function De(t,e){t||he()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class Wb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Kb{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new vm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new pt(e)}}class Gb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Qb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Gb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yb{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,qt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){De(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new sf(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new sf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Jb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function dc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=Em(),o=Xb(i.encode(of(t,n)),i.encode(of(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function of(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Xb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=-62135596800,lf=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*lf);return new Je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<af)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lf}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-af;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Je(0,0))}static max(){return new fe(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=on.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),s=on.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?on.extractNumericId(e).compare(on.extractNumericId(n)):dc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return er.fromString(e.substring(4,e.length-2))}}class Ue extends on{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const Zb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends on{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return Zb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cf}static keyField(){return new at([cf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new te(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Ue.fromString(e))}static fromName(e){return new oe(Ue.fromString(e).popFirst(5))}static empty(){return new oe(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=-1;function eR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new nr(s,oe.empty(),e)}function tR(t){return new nr(t.readTime,t.key,Vi)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(fe.min(),oe.empty(),Vi)}static max(){return new nr(fe.max(),oe.empty(),Vi)}}function nR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==rR)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function iR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Na.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=-1;function Oa(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function oR(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="";function aR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=uf(e)),e=lR(t.get(n),e);return uf(e)}function lR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Tm:n+="";break;default:n+=i}}return n}function uf(t){return t+Tm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Im(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new df(this.data.getIterator())}getIteratorFrom(e){return new df(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class df{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Xe(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Am("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const cR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(De(!!t),typeof t=="string"){let e=0;const n=cR.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="server_timestamp",Rm="__type__",Sm="__previous_value__",Pm="__local_write_time__";function cu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rm])===null||n===void 0?void 0:n.stringValue)===bm}function xa(t){const e=t.mapValue.fields[Sm];return cu(e)?xa(e):e}function Ni(t){const e=rr(t.mapValue.fields[Pm].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const sa="(default)";class Oi{constructor(e,n){this.projectId=e,this.database=n||sa}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database===sa}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="__type__",hR="__max__",Io={mapValue:{}},km="__vector__",ia="value";function ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cu(t)?4:fR(t)?9007199254740991:dR(t)?10:11:he()}function gn(t,e){if(t===e)return!0;const n=ir(t);if(n!==ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=rr(s.timestampValue),l=rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return sr(s.bytesValue).isEqual(sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),l=He(i.doubleValue);return o===l?ra(o)===ra(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(hf(o)!==hf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!gn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function xi(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=ir(t),r=ir(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=He(i.integerValue||i.doubleValue),c=He(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return ff(t.timestampValue,e.timestampValue);case 4:return ff(Ni(t),Ni(e));case 5:return dc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=sr(i),c=sr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ye(l[h],c[h]);if(d!==0)return d}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(He(i.latitude),He(o.latitude));return l!==0?l:ye(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},g=o.fields||{},y=(l=p[ia])===null||l===void 0?void 0:l.arrayValue,R=(c=g[ia])===null||c===void 0?void 0:c.arrayValue,k=ye(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:pf(y,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Io.mapValue&&o===Io.mapValue)return 0;if(i===Io.mapValue)return 1;if(o===Io.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=dc(c[p],d[p]);if(g!==0)return g;const y=_s(l[c[p]],h[d[p]]);if(y!==0)return y}return ye(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function ff(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=rr(t),r=rr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function pf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function ys(t){return fc(t)}function fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Lo(t){switch(ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xa(t);return e?16+Lo(e):16;case 5:return 2*t.stringValue.length;case 6:return sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Lo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return pr(r.fields,(i,o)=>{s+=i.length+Lo(o)}),s}(t.mapValue);default:throw he()}}function gf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pc(t){return!!t&&"integerValue"in t}function uu(t){return!!t&&"arrayValue"in t}function mf(t){return!!t&&"nullValue"in t}function _f(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function dR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cm])===null||n===void 0?void 0:n.stringValue)===km}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===hR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=gi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){pr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(gi(this.value))}}function Dm(t){const e=[];return pr(t.fields,(n,r)=>{const s=new at([n]);if(Uo(r)){const i=Dm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,fe.min(),fe.min(),fe.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,fe.min(),fe.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,fe.min(),fe.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function yf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function pR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{}class Ge extends Vm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mR(e,n,r):n==="array-contains"?new vR(e,r):n==="in"?new ER(e,r):n==="not-in"?new wR(e,r):n==="array-contains-any"?new TR(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _R(e,r):new yR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&ir(this.value)===ir(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Vm{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new tn(e,n)}matches(e){return Nm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Nm(t){return t.op==="and"}function Om(t){return gR(t)&&Nm(t)}function gR(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function gc(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(Om(t))return t.filters.map(e=>gc(e)).join(",");{const e=t.filters.map(n=>gc(n)).join(",");return`${t.op}(${e})`}}function xm(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&xm(o,s.filters[l]),!0):!1}(t,e):void he()}function Mm(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Mm).join(" ,")+"}"}(t):"Filter"}class mR extends Ge{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class _R extends Ge{constructor(e,n){super(e,"in",n),this.keys=Lm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yR extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Lm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class vR extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uu(n)&&xi(n.arrayValue,this.value)}}class ER extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xi(this.value.arrayValue,n)}}class wR extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xi(this.value.arrayValue,n)}}class TR extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Ef(t,e=null,n=[],r=[],s=null,i=null,o=null){return new IR(t,e,n,r,s,i,o)}function hu(t){const e=ge(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.le=n}return e.le}function du(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vf(t.startAt,e.startAt)&&vf(t.endAt,e.endAt)}function mc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function AR(t,e,n,r,s,i,o,l){return new Ds(t,e,n,r,s,i,o,l)}function fu(t){return new Ds(t)}function wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Um(t){return t.collectionGroup!==null}function mi(t){const e=ge(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xe(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Mi(i,r))}),n.has(at.keyField().canonicalString())||e.he.push(new Mi(at.keyField(),r))}return e.he}function dn(t){const e=ge(t);return e.Pe||(e.Pe=bR(e,mi(t))),e.Pe}function bR(t,e){if(t.limitType==="F")return Ef(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mi(s.field,i)});const n=t.endAt?new oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oa(t.startAt.position,t.startAt.inclusive):null;return Ef(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _c(t,e){const n=t.filters.concat([e]);return new Ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yc(t,e,n){return new Ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ma(t,e){return du(dn(t),dn(e))&&t.limitType===e.limitType}function Fm(t){return`${hu(dn(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Mm(s)).join(", ")}]`),Oa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function La(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of mi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=yf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,mi(r),s)||r.endAt&&!function(o,l,c){const h=yf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,mi(r),s))}(t,e)}function RR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bm(t){return(e,n)=>{let r=!1;for(const s of mi(t)){const i=SR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function SR(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?_s(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Im(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=new je(oe.comparator);function Dn(){return PR}const $m=new je(oe.comparator);function ti(...t){let e=$m;for(const n of t)e=e.insert(n.key,n);return e}function jm(t){let e=$m;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return _i()}function qm(){return _i()}function _i(){return new Ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const CR=new je(oe.comparator),kR=new Xe(oe.comparator);function we(...t){let e=kR;for(const n of t)e=e.add(n);return e}const DR=new Xe(ye);function VR(){return DR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function Hm(t){return{integerValue:""+t}}function NR(t,e){return oR(e)?Hm(e):pu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this._=void 0}}function OR(t,e,n){return t instanceof Li?function(s,i){const o={fields:{[Rm]:{stringValue:bm},[Pm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cu(i)&&(i=xa(i)),i&&(o.fields[Sm]=i),{mapValue:o}}(n,e):t instanceof Ui?Wm(t,e):t instanceof Fi?Km(t,e):function(s,i){const o=zm(s,i),l=Tf(o)+Tf(s.Ie);return pc(o)&&pc(s.Ie)?Hm(l):pu(s.serializer,l)}(t,e)}function xR(t,e,n){return t instanceof Ui?Wm(t,e):t instanceof Fi?Km(t,e):n}function zm(t,e){return t instanceof aa?function(r){return pc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Li extends Ua{}class Ui extends Ua{constructor(e){super(),this.elements=e}}function Wm(t,e){const n=Gm(e);for(const r of t.elements)n.some(s=>gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends Ua{constructor(e){super(),this.elements=e}}function Km(t,e){let n=Gm(e);for(const r of t.elements)n=n.filter(s=>!gn(s,r));return{arrayValue:{values:n}}}class aa extends Ua{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Tf(t){return He(t.integerValue||t.doubleValue)}function Gm(t){return uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.field=e,this.transform=n}}function LR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ui&&s instanceof Ui||r instanceof Fi&&s instanceof Fi?ms(r.elements,s.elements,gn):r instanceof aa&&s instanceof aa?gn(r.Ie,s.Ie):r instanceof Li&&s instanceof Li}(t.transform,e.transform)}class UR{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fa{}function Qm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jm(t.key,Xt.none()):new Qi(t.key,t.data,Xt.none());{const n=t.data,r=Ct.empty();let s=new Xe(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gr(t.key,r,new Lt(s.toArray()),Xt.none())}}function FR(t,e,n){t instanceof Qi?function(s,i,o){const l=s.value.clone(),c=Af(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(s,i,o){if(!Fo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Af(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ym(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yi(t,e,n,r){return t instanceof Qi?function(i,o,l,c){if(!Fo(i.precondition,o))return l;const h=i.value.clone(),d=bf(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(i,o,l,c){if(!Fo(i.precondition,o))return l;const h=bf(i.fieldTransforms,c,o),d=o.data;return d.setAll(Ym(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Fo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function BR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=zm(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function If(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,(i,o)=>LR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qi extends Fa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gr extends Fa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ym(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Af(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,xR(o,l,n[s]))}return r}function bf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OR(i,o,e))}return r}class Jm extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $R extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Qm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>If(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>If(n,r))}}class gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return CR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Ae;function zR(t){switch(t){case U.OK:return he();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return he()}}function Xm(t){if(t===void 0)return kn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ke.OK:return U.OK;case Ke.CANCELLED:return U.CANCELLED;case Ke.UNKNOWN:return U.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return U.INTERNAL;case Ke.UNAVAILABLE:return U.UNAVAILABLE;case Ke.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ke.NOT_FOUND:return U.NOT_FOUND;case Ke.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ke.ABORTED:return U.ABORTED;case Ke.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ke.DATA_LOSS:return U.DATA_LOSS;default:return he()}}(Ae=Ke||(Ke={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=new er([4294967295,4294967295],0);function Rf(t){const e=Em().encode(t),n=new fm;return n.update(e),new Uint8Array(n.digest())}function Sf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new er([n,r],0),new er([s,i],0)]}class mu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ni(`Invalid padding: ${n}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ni(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=er.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(er.fromNumber(r)));return s.compare(WR)===1&&(s=new er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Rf(e),[r,s]=Sf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=Rf(e),[r,s]=Sf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Yi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ba(fe.min(),s,new je(ye),Dn(),we())}}class Yi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yi(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class Zm{constructor(e,n){this.targetId=e,this.ge=n}}class e_{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pf{constructor(){this.pe=0,this.ye=Cf(),this.we=lt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=we(),n=we(),r=we();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Yi(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Cf()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,De(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class KR{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Dn(),this.$e=Ao(),this.Ue=Ao(),this.Ke=new je(ye)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(mc(i))if(r===0){const o=new oe(i.path);this.ze(n,o,_t.newNoDocument(o,fe.min()))}else De(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=sr(r).toUint8Array()}catch(c){if(c instanceof Am)return gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new mu(o,s,i)}catch(c){return gs(c instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&mc(l.target)){const c=new oe(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,_t.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=we();this.Ue.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Ba(e,n,this.Ke,this.Qe,r);return this.Qe=Dn(),this.$e=Ao(),this.Ue=Ao(),this.Ke=new je(ye),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Pf,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Xe(ye),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Xe(ye),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Pf),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Ao(){return new je(oe.comparator)}function Cf(){return new je(oe.comparator)}const GR={asc:"ASCENDING",desc:"DESCENDING"},QR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YR={and:"AND",or:"OR"};class JR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vc(t,e){return t.useProto3Json||Oa(e)?e:{value:e}}function la(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XR(t,e){return la(t,e.toTimestamp())}function fn(t){return De(!!t),fe.fromTimestamp(function(n){const r=rr(n);return new Je(r.seconds,r.nanos)}(t))}function _u(t,e){return Ec(t,e).canonicalString()}function Ec(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function n_(t){const e=Ue.fromString(t);return De(a_(e)),e}function wc(t,e){return _u(t.databaseId,e.path)}function Ol(t,e){const n=n_(e);if(n.get(1)!==t.databaseId.projectId)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(s_(n))}function r_(t,e){return _u(t.databaseId,e)}function ZR(t){const e=n_(t);return e.length===4?Ue.emptyPath():s_(e)}function Tc(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function s_(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kf(t,e,n){return{name:wc(t,e),fields:n.value.mapValue.fields}}function e0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(De(d===void 0||typeof d=="string"),lt.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),lt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?U.UNKNOWN:Xm(h.code);return new te(d,h.message||"")}(o);n=new e_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ol(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):fe.min(),l=new Ct({mapValue:{fields:r.document.fields}}),c=_t.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Bo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ol(t,r.document),i=r.readTime?fn(r.readTime):fe.min(),o=_t.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Bo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ol(t,r.document),i=r.removedTargetIds||[];n=new Bo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new HR(s,i),l=r.targetId;n=new Zm(l,o)}}return n}function t0(t,e){let n;if(e instanceof Qi)n={update:kf(t,e.key,e.value)};else if(e instanceof Jm)n={delete:wc(t,e.key)};else if(e instanceof gr)n={update:kf(t,e.key,e.data),updateMask:u0(e.fieldMask)};else{if(!(e instanceof $R))return he();n={verify:wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:XR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function n0(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(fe.min())&&(o=fn(i)),new UR(o,s.transformResults||[])}(n,e))):[]}function r0(t,e){return{documents:[r_(t,e.path)]}}function s0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=r_(t,s);const i=function(h){if(h.length!==0)return o_(tn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:Jr(g.field),direction:a0(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function i0(t){let e=ZR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=i_(p);return g instanceof tn&&Om(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new Mi(Xr(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Oa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,y=p.values||[];return new oa(y,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,y=p.values||[];return new oa(y,g)}(n.endAt)),AR(e,s,o,i,l,"F",c,h)}function o0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function i_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>i_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function a0(t){return GR[t]}function l0(t){return QR[t]}function c0(t){return YR[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return at.fromServerFormat(t.fieldPath)}function o_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(_f(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(mf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_f(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(mf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:l0(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>o_(s));return r.length===1?r[0]:{compositeFilter:{op:c0(n.op),filters:r}}}(t):he()}function u0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function a_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.Tt=e}}function d0(t){const e=i0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.Tn=new p0}addToCollectionParentIndex(e,n){return this.Tn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(nr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class p0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l_=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(l_,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new vs(0)}static Kn(){return new vs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="LruGarbageCollector",g0=1048576;function Nf([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class m0{constructor(e){this.Hn=e,this.buffer=new Xe(Nf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Nf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ee(Vf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ks(n)?ee(Vf,"Ignoring IndexedDB error during garbage collection: ",n):await Cs(n)}await this.er(3e5)})}}class y0{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Na.ae);const r=new m0(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Df)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Df):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Qr()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function v0(t,e){return new y0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.changes=new Ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&yi(r.mutation,s,Lt.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Sr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ti();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Dn();const o=_i(),l=function(){return _i()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof gr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),yi(d.mutation,h,d.mutation.getFieldMask(),Je.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new w0(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=_i();let s=new je((o,l)=>o-l),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Lt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||we()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=qm();d.forEach(g=>{if(!i.has(g)){const y=Qm(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Um(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Sr());let l=Vi,c=i;return o.next(h=>$.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,we())).next(d=>({batchId:l,changes:jm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const h=function(p,g){return new Ds(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let l=ti();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&yi(d.mutation,h,Lt.empty(),Je.now()),La(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return $.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:d0(s.bundledQuery),readTime:fn(s.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.overlays=new je(oe.comparator),this.Rr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Sr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Sr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return $.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qR(n,r));let i=this.Rr.get(n);i===void 0&&(i=we(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.Vr=new Xe(Ze.mr),this.gr=new Xe(Ze.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ze(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new oe(new Ue([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new oe(new Ue([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=we();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return oe.comparator(e.key,n.key)||ye(e.Cr,n.Cr)}static pr(e,n){return ye(e.Cr,n.Cr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Xe(Ze.mr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?lu:this.Fr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const l=this.Or(o.Cr);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(ye);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{r=r.add(l.Cr)})}),$.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new oe(i),0);let l=new Xe(ye);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},o),$.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return $.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Mr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.kr=e,this.docs=function(){return new je(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,l=new oe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||nR(tR(d),r)<=0||(s.has(d.key)||La(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}qr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new P0(this)}getSize(e){return $.resolve(this.size)}}class P0 extends E0{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.persistence=e,this.Qr=new Ur(n=>hu(n),du),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.$r=0,this.Ur=new yu,this.targetCount=0,this.Kr=vs.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),$.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.zn(n),$.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Na(0),this.zr=!1,this.zr=!0,this.jr=new b0,this.referenceDelegate=e(this),this.Hr=new C0(this),this.indexManager=new f0,this.remoteDocumentCache=function(s){return new S0(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new h0(n),this.Yr=new I0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new A0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new R0(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new k0(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return $.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class k0 extends sR{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.ti=new yu,this.ni=null}static ri(e){return new vu(e)}get ii(){if(this.ni)return this.ni;throw he()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),$.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ii,r=>{const s=oe.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return $.or([()=>$.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ca{constructor(e,n){this.persistence=e,this.oi=new Ur(r=>aR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=v0(this,n)}static ri(e,n){return new ca(e,n)}Zr(){}Xr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return $.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),$.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Lo(e.data.value)),n}ar(e,n,r){return $.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return aw()?8:iR(wt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new D0;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Qr()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),$.resolve()):(Qr()<=Ee.DEBUG&&ee("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Qr()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):$.resolve())}rs(e,n){if(wf(n))return $.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=yc(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(n,l);return this.ls(n,h,o,c.readTime)?this.rs(e,yc(n,null,"F")):this.hs(e,h,n,c)}))})))}ss(e,n,r,s){return wf(n)||s.isEqual(fe.min())?$.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?$.resolve(null):(Qr()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(n)),this.hs(e,o,n,eR(s,Vi)).next(l=>l))})}cs(e,n){let r=new Xe(Bm(e));return n.forEach((s,i)=>{La(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Qr()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.ns.getDocumentsMatchingQuery(e,n,nr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="LocalStore",N0=3e8;class O0{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new je(ye),this.Is=new Ur(i=>hu(i),du),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T0(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function x0(t,e,n,r){return new O0(t,e,n,r)}async function u_(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=we();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:l}))})})}function M0(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let y=$.resolve();return g.forEach(R=>{y=y.next(()=>d.getEntry(c,R)).next(k=>{const D=h.docVersions.get(R);De(D!==null),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=we();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function h_(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function L0(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(lt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(k,D,L){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=N0?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,y,d)&&l.push(n.Hr.updateTargetData(i,y))});let c=Dn(),h=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(U0(i,o,e.documentUpdates).next(d=>{c=d.Vs,h=d.fs})),!r.isEqual(fe.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return $.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Ts=s,i))}function U0(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee(wu,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function F0(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function B0(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Ic(t,e,n){const r=ge(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ks(o))throw o;ee(wu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Of(t,e,n){const r=ge(t);let s=fe.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=ge(c),g=p.Is.get(d);return g!==void 0?$.resolve(p.Ts.get(g)):p.Hr.getTargetData(h,d)}(r,o,dn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:we())).next(l=>($0(r,RR(e),l),{documents:l,gs:i})))}function $0(t,e,n){let r=t.Es.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class xf{constructor(){this.activeTargetIds=VR()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class j0{constructor(){this.ho=new xf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new xf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="ConnectivityMonitor";class Lf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ee(Mf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ee(Mf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo=null;function Ac(){return bo===null?bo=function(){return 268435456+Math.round(2147483648*Math.random())}():bo++,"0x"+bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="RestConnection",H0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class z0{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===sa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=Ac(),l=this.bo(e,n.toUriEncodedString());ee(xl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(h=>(ee(xl,`Received RPC '${e}' ${o}: `,h),h),h=>{throw gs(xl,`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=H0[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class K0 extends z0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Ac();return new Promise((o,l)=>{const c=new pm;c.setWithCredentials(!0),c.listenOnce(gm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Mo.NO_ERROR:const d=c.getResponseJson();ee(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Mo.TIMEOUT:ee(ft,`RPC '${e}' ${i} timed out`),l(new te(U.DEADLINE_EXCEEDED,"Request time out"));break;case Mo.HTTP_ERROR:const p=c.getStatus();if(ee(ft,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const R=function(D){const L=D.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(L)>=0?L:U.UNKNOWN}(y.status);l(new te(R,y.message))}else l(new te(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new te(U.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee(ft,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(ft,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=Ac(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ym(),l=_m(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ee(ft,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,y=!1;const R=new W0({Fo:D=>{y?ee(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(ee(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(ft,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Mo:()=>p.close()}),k=(D,L,M)=>{D.listen(L,N=>{try{M(N)}catch(F){setTimeout(()=>{throw F},0)}})};return k(p,ei.EventType.OPEN,()=>{y||(ee(ft,`RPC '${e}' stream ${s} transport opened.`),R.Qo())}),k(p,ei.EventType.CLOSE,()=>{y||(y=!0,ee(ft,`RPC '${e}' stream ${s} transport closed`),R.Uo())}),k(p,ei.EventType.ERROR,D=>{y||(y=!0,gs(ft,`RPC '${e}' stream ${s} transport errored:`,D),R.Uo(new te(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,ei.EventType.MESSAGE,D=>{var L;if(!y){const M=D.data[0];De(!!M);const N=M,F=(N==null?void 0:N.error)||((L=N[0])===null||L===void 0?void 0:L.error);if(F){ee(ft,`RPC '${e}' stream ${s} received error:`,F);const q=F.status;let z=function(E){const A=Ke[E];if(A!==void 0)return Xm(A)}(q),w=F.message;z===void 0&&(z=U.INTERNAL,w="Unknown error status: "+q+" with message "+F.message),y=!0,R.Uo(new te(z,w)),p.close()}else ee(ft,`RPC '${e}' stream ${s} received:`,M),R.Ko(M)}}),k(l,mm.STAT_EVENT,D=>{D.stat===hc.PROXY?ee(ft,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===hc.NOPROXY&&ee(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.$o()},0),R}}function Ml(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){return new JR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="PersistentStream";class f_{constructor(e,n,r,s,i,o,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new d_(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new te(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ee(Uf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ee(Uf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G0 extends f_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=e0(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?fn(o.readTime):fe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Tc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=mc(c)?{documents:r0(i,c)}:{query:s0(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=t_(i,o.resumeToken);const h=vc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=la(i,o.snapshotVersion.toTimestamp());const h=vc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=o0(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Tc(this.serializer),n.removeTarget=e,this.I_(n)}}class Q0 extends f_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=n0(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Tc(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>t0(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{}class J0 extends Y0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Ec(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(U.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,Ec(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(U.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class X0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(kn(n),this.N_=!1):ee("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="RemoteStore";class Z0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(ee(Mr,"Restarting streams for network reachability change."),await async function(c){const h=ge(c);h.W_.add(4),await Ji(h),h.j_.set("Unknown"),h.W_.delete(4),await ja(h)}(this))})}),this.j_=new X0(r,s)}}async function ja(t){if(Fr(t))for(const e of t.G_)await e(!0)}async function Ji(t){for(const e of t.G_)await e(!1)}function p_(t,e){const n=ge(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),bu(n)?Au(n):Vs(n).c_()&&Iu(n,e))}function Tu(t,e){const n=ge(t),r=Vs(n);n.K_.delete(e),r.c_()&&g_(n,e),n.K_.size===0&&(r.c_()?r.P_():Fr(n)&&n.j_.set("Unknown"))}function Iu(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).y_(e)}function g_(t,e){t.H_.Ne(e),Vs(t).w_(e)}function Au(t){t.H_=new KR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.j_.B_()}function bu(t){return Fr(t)&&!Vs(t).u_()&&t.K_.size>0}function Fr(t){return ge(t).W_.size===0}function m_(t){t.H_=void 0}async function eS(t){t.j_.set("Online")}async function tS(t){t.K_.forEach((e,n)=>{Iu(t,e)})}async function nS(t,e){m_(t),bu(t)?(t.j_.q_(e),Au(t)):t.j_.set("Unknown")}async function rS(t,e,n){if(t.j_.set("Online"),e instanceof e_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.K_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){ee(Mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ua(t,r)}else if(e instanceof Bo?t.H_.We(e):e instanceof Zm?t.H_.Ze(e):t.H_.je(e),!n.isEqual(fe.min()))try{const r=await h_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(h);d&&i.K_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(lt.EMPTY_BYTE_STRING,d.snapshotVersion)),g_(i,c);const p=new Gn(d.target,c,h,d.sequenceNumber);Iu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee(Mr,"Failed to raise snapshot:",r),await ua(t,r)}}async function ua(t,e,n){if(!ks(e))throw e;t.W_.add(1),await Ji(t),t.j_.set("Offline"),n||(n=()=>h_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Mr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await ja(t)})}function __(t,e){return e().catch(n=>ua(t,n,e))}async function qa(t){const e=ge(t),n=or(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:lu;for(;sS(e);)try{const s=await F0(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,iS(e,s)}catch(s){await ua(e,s)}y_(e)&&v_(e)}function sS(t){return Fr(t)&&t.U_.length<10}function iS(t,e){t.U_.push(e);const n=or(t);n.c_()&&n.S_&&n.b_(e.mutations)}function y_(t){return Fr(t)&&!or(t).u_()&&t.U_.length>0}function v_(t){or(t).start()}async function oS(t){or(t).C_()}async function aS(t){const e=or(t);for(const n of t.U_)e.b_(n.mutations)}async function lS(t,e,n){const r=t.U_.shift(),s=gu.from(r,e,n);await __(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qa(t)}async function cS(t,e){e&&or(t).S_&&await async function(r,s){if(function(o){return zR(o)&&o!==U.ABORTED}(s.code)){const i=r.U_.shift();or(r).h_(),await __(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qa(r)}}(t,e),y_(t)&&v_(t)}async function Ff(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ee(Mr,"RemoteStore received new credentials");const r=Fr(n);n.W_.add(3),await Ji(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await ja(n)}async function uS(t,e){const n=ge(t);e?(n.W_.delete(2),await ja(n)):e||(n.W_.add(2),await Ji(n),n.j_.set("Unknown"))}function Vs(t){return t.J_||(t.J_=function(n,r,s){const i=ge(n);return i.M_(),new G0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:eS.bind(null,t),No:tS.bind(null,t),Lo:nS.bind(null,t),p_:rS.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),bu(t)?Au(t):t.j_.set("Unknown")):(await t.J_.stop(),m_(t))})),t.J_}function or(t){return t.Y_||(t.Y_=function(n,r,s){const i=ge(n);return i.M_(),new Q0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:oS.bind(null,t),Lo:cS.bind(null,t),D_:aS.bind(null,t),v_:lS.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await qa(t)):(await t.Y_.stop(),t.U_.length>0&&(ee(Mr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ru(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(t,e){if(kn("AsyncQueue",`${e}: ${t}`),ks(t))return new te(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=ti(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.Z_=new je(oe.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):he():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Es(e,n,cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class dS{constructor(){this.queries=$f(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=$f(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(r)})})(this,new te(U.ABORTED,"Firestore shutting down"))}}function $f(){return new Ur(t=>Fm(t),Ma)}async function E_(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new hS,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Su(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Pu(n)}async function w_(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function fS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ta)l.oa(s)&&(r=!0);o.ea=s}}r&&Pu(n)}function pS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Pu(t){t.ia.forEach(e=>{e.next()})}var bc,jf;(jf=bc||(bc={}))._a="default",jf.Cache="cache";class T_{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==bc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class gS{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=we(),this.mutatedKeys=we(),this.ya=Bm(e),this.wa=new cs(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new Bf,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),y=La(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;g&&y?g.data.isEqual(y.data)?R!==k&&(r.track({type:3,doc:y}),D=!0):this.va(g,y)||(r.track({type:2,doc:y}),D=!0,(c&&this.ya(y,c)>0||h&&this.ya(y,h)<0)&&(l=!0)):!g&&y?(r.track({type:0,doc:y}),D=!0):g&&!y&&(r.track({type:1,doc:g}),D=!0,(c||h)&&(l=!0)),D&&(y?(o=o.add(y),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(y,R){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return k(y)-k(R)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,h=c!==this.ga;return this.ga=c,o.length!==0||h?{snapshot:new Es(this.query,e.wa,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Bf,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=we(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new A_(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new I_(r))}),n}Oa(e){this.fa=e.gs,this.pa=we();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Es.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Cu="SyncEngine";class mS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _S{constructor(e){this.key=e,this.Ba=!1}}class yS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Ur(l=>Fm(l),Ma),this.qa=new Map,this.Qa=new Set,this.$a=new je(oe.comparator),this.Ua=new Map,this.Ka=new yu,this.Wa={},this.Ga=new Map,this.za=vs.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function vS(t,e,n=!0){const r=k_(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await b_(r,e,n,!0),s}async function ES(t,e){const n=k_(t);await b_(n,e,!0,!1)}async function b_(t,e,n,r){const s=await B0(t.localStore,dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await wS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&p_(t.remoteStore,s),l}async function wS(t,e,n,r,s){t.Ha=(p,g,y)=>async function(k,D,L,M){let N=D.view.ba(L);N.ls&&(N=await Of(k.localStore,D.query,!1).then(({documents:w})=>D.view.ba(w,N)));const F=M&&M.targetChanges.get(D.targetId),q=M&&M.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(N,k.isPrimaryClient,F,q);return Hf(k,D.targetId,z.Ma),z.snapshot}(t,p,g,y);const i=await Of(t.localStore,e,!0),o=new gS(e,i.gs),l=o.ba(i.documents),c=Yi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Hf(t,n,h.Ma);const d=new mS(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function TS(t,e,n){const r=ge(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Ma(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ic(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Tu(r.remoteStore,s.targetId),Rc(r,s.targetId)}).catch(Cs)):(Rc(r,s.targetId),await Ic(r.localStore,s.targetId,!0))}async function IS(t,e){const n=ge(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tu(n.remoteStore,r.targetId))}async function AS(t,e,n){const r=DS(t);try{const s=await function(o,l){const c=ge(o),h=Je.now(),d=l.reduce((y,R)=>y.add(R.key),we());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=Dn(),k=we();return c.ds.getEntries(y,d).next(D=>{R=D,R.forEach((L,M)=>{M.isValidDocument()||(k=k.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,R)).next(D=>{p=D;const L=[];for(const M of l){const N=BR(M,p.get(M.key).overlayedDocument);N!=null&&L.push(new gr(M.key,N,Dm(N.value.mapValue),Xt.exists(!0)))}return c.mutationQueue.addMutationBatch(y,h,L,l)}).next(D=>{g=D;const L=D.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(y,D.batchId,L)})}).then(()=>({batchId:g.batchId,changes:jm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Wa[o.currentUser.toKey()];h||(h=new je(ye)),h=h.insert(l,c),o.Wa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Xi(r,s.changes),await qa(r.remoteStore)}catch(s){const i=Su(s,"Failed to persist write");n.reject(i)}}async function R_(t,e){const n=ge(t);try{const r=await L0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?De(o.Ba):s.removedDocuments.size>0&&(De(o.Ba),o.Ba=!1))}),await Xi(n,r,e)}catch(r){await Cs(r)}}function qf(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.ta)g.sa(l)&&(h=!0)}),h&&Pu(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new je(oe.comparator);o=o.insert(i,_t.newNoDocument(i,fe.min()));const l=we().add(i),c=new Ba(fe.min(),new Map,new je(ye),o,l);await R_(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),ku(r)}else await Ic(r.localStore,e,!1).then(()=>Rc(r,e,n)).catch(Cs)}async function RS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await M0(n.localStore,e);P_(n,r,null),S_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xi(n,s)}catch(s){await Cs(s)}}async function SS(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(De(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);P_(r,e,n),S_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xi(r,s)}catch(s){await Cs(s)}}function S_(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function P_(t,e,n){const r=ge(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Rc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||C_(t,r)})}function C_(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Tu(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),ku(t))}function Hf(t,e,n){for(const r of n)r instanceof I_?(t.Ka.addReference(r.key,e),PS(t,r)):r instanceof A_?(ee(Cu,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||C_(t,r.key)):he()}function PS(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(ee(Cu,"New document in limbo: "+n),t.Qa.add(r),ku(t))}function ku(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new oe(Ue.fromString(e)),r=t.za.next();t.Ua.set(r,new _S(n)),t.$a=t.$a.insert(n,r),p_(t.remoteStore,new Gn(dn(fu(n.path)),r,"TargetPurposeLimboResolution",Na.ae))}}async function Xi(t,e,n){const r=ge(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{o.push(r.Ha(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Eu.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,h){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(h,g=>$.forEach(g.Hi,y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>$.forEach(g.Ji,y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!ks(p))throw p;ee(wu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const y=d.Ts.get(g),R=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(R);d.Ts=d.Ts.insert(g,k)}}}(r.localStore,i))}async function CS(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ee(Cu,"User change. New user:",e.toKey());const r=await u_(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new te(U.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xi(n,r.Rs)}}function kS(t,e){const n=ge(t),r=n.Ua.get(e);if(r&&r.Ba)return we().add(r.key);{let s=we();const i=n.qa.get(e);if(!i)return s;for(const o of i){const l=n.ka.get(o);s=s.unionWith(l.view.Sa)}return s}}function k_(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=R_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bS.bind(null,e),e.La.p_=fS.bind(null,e.eventManager),e.La.Ja=pS.bind(null,e.eventManager),e}function DS(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SS.bind(null,e),e}class ha{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$a(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return x0(this.persistence,new V0,e.initialUser,this.serializer)}Xa(e){return new c_(vu.ri,this.serializer)}Za(e){return new j0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ha.provider={build:()=>new ha};class VS extends ha{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){De(this.persistence.referenceDelegate instanceof ca);const r=this.persistence.referenceDelegate.garbageCollector;return new _0(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new c_(r=>ca.ri(r,n),this.serializer)}}class Sc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CS.bind(null,this.syncEngine),await uS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dS}()}createDatastore(e){const n=$a(e.databaseInfo.databaseId),r=function(i){return new K0(i)}(e.databaseInfo);return function(i,o,l,c){return new J0(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Z0(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qf(this.syncEngine,n,0),function(){return Lf.D()?new Lf:new q0}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new yS(s,i,o,l,c,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);ee(Mr,"RemoteStore shutting down."),i.W_.add(5),await Ji(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Sc.provider={build:()=>new Sc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="FirestoreClient";class NS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=wm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Su(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ll(t,e){t.asyncQueue.verifyOperationInProgress(),ee(ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await u_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OS(t);ee(ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ff(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ff(e.remoteStore,s)),t._onlineComponents=e}async function OS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(ar,"Using user provided OfflineComponentProvider");try{await Ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await Ll(t,new ha)}}else ee(ar,"Using default OfflineComponentProvider"),await Ll(t,new VS(void 0));return t._offlineComponents}async function V_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(ar,"Using user provided OnlineComponentProvider"),await zf(t,t._uninitializedComponentsProvider._online)):(ee(ar,"Using default OnlineComponentProvider"),await zf(t,new Sc))),t._onlineComponents}function xS(t){return V_(t).then(e=>e.syncEngine)}async function N_(t){const e=await V_(t),n=e.eventManager;return n.onListen=vS.bind(null,e.syncEngine),n.onUnlisten=TS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ES.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=IS.bind(null,e.syncEngine),n}function MS(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new D_({next:g=>{d.su(),o.enqueueAndForget(()=>w_(i,p));const y=g.docs.has(l);!y&&g.fromCache?h.reject(new te(U.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&c&&c.source==="server"?h.reject(new te(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new T_(fu(l.path),d,{includeMetadataChanges:!0,Ta:!0});return E_(i,p)}(await N_(t),t.asyncQueue,e,n,r)),r.promise}function LS(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new D_({next:g=>{d.su(),o.enqueueAndForget(()=>w_(i,p)),g.fromCache&&c.source==="server"?h.reject(new te(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new T_(l,d,{includeMetadataChanges:!0,Ta:!0});return E_(i,p)}(await N_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t,e,n){if(!n)throw new te(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function US(t,e,n,r){if(e===!0&&r===!0)throw new te(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kf(t){if(!oe.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gf(t){if(oe.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ha(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ha(t);throw new te(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="firestore.googleapis.com",Qf=!0;class Yf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M_,this.ssl=Qf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Qf;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=l_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<g0)throw new te(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}US("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class za{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zb;switch(r.type){case"firstParty":return new Qb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wf.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Wf.delete(n),r.terminate())}(this),Promise.resolve()}}function FS(t,e,n,r={}){var s;const i=(t=mn(t,za))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==M_&&i.host!==l&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Dr(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=pt.MOCK_USER;else{h=ew(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new te(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new pt(p)}t._authCredentials=new Wb(new vm(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class tr extends Br{constructor(e,n,r){super(e,n,fu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new oe(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function us(t,e,...n){if(t=tt(t),x_("collection","path",e),t instanceof za){const r=Ue.fromString(e,...n);return Gf(r),new tr(t,null,r)}{if(!(t instanceof Rt||t instanceof tr))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Gf(r),new tr(t.firestore,null,r)}}function Ot(t,e,...n){if(t=tt(t),arguments.length===1&&(e=wm.newId()),x_("doc","path",e),t instanceof za){const r=Ue.fromString(e,...n);return Kf(r),new Rt(t,null,new oe(r))}{if(!(t instanceof Rt||t instanceof tr))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Kf(r),new Rt(t.firestore,t instanceof tr?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="AsyncQueue";class Xf{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new d_(this,"async_queue_retry"),this.Su=()=>{const r=Ml();r&&ee(Jf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Ml();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Sn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ks(e))throw e;ee(Jf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Ru.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&he()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Ns extends za{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xf(e),this._firestoreClient=void 0,await e}}}function BS(t,e){const n=typeof t=="object"?t:_g(),r=typeof t=="string"?t:sa,s=Gc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=XE("firestore");i&&FS(s,...i)}return s}function Du(t){if(t._terminated)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$S(t),t._firestoreClient}function $S(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new uR(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,O_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new NS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ws(lt.fromBase64String(e))}catch(n){throw new te(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ws(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=/^__.*__$/;class qS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qi(e,this.data,n,this.fieldTransforms)}}class L_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function U_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Ou{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return da(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(U_(this.Lu)&&jS.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class HS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$a(e)}ju(e,n,r,s=!1){return new Ou({Lu:e,methodName:n,zu:r,path:at.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ga(t){const e=t._freezeSettings(),n=$a(t._databaseId);return new HS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function F_(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Mu("Data must be an object, but it was:",o,r);const l=B_(r,o);let c,h;if(i.merge)c=new Lt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Pc(e,p,n);if(!o.contains(g))throw new te(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);j_(d,g)||d.push(g)}c=new Lt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new qS(new Ct(l),c,h)}class Qa extends Ka{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}class xu extends Ka{_toFieldTransform(e){return new MR(e.path,new Li)}isEqual(e){return e instanceof xu}}function zS(t,e,n,r){const s=t.ju(1,e,n);Mu("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();pr(r,(c,h)=>{const d=Lu(e,c,n);h=tt(h);const p=s.Uu(d);if(h instanceof Qa)i.push(d);else{const g=Zi(h,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Lt(i);return new L_(o,l,s.fieldTransforms)}function WS(t,e,n,r,s,i){const o=t.ju(1,e,n),l=[Pc(e,r,n)],c=[s];if(i.length%2!=0)throw new te(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Pc(e,i[g])),c.push(i[g+1]);const h=[],d=Ct.empty();for(let g=l.length-1;g>=0;--g)if(!j_(h,l[g])){const y=l[g];let R=c[g];R=tt(R);const k=o.Uu(y);if(R instanceof Qa)h.push(y);else{const D=Zi(R,k);D!=null&&(h.push(y),d.set(y,D))}}const p=new Lt(h);return new L_(d,p,o.fieldTransforms)}function KS(t,e,n,r=!1){return Zi(n,t.ju(r?4:3,e))}function Zi(t,e){if($_(t=tt(t)))return Mu("Unsupported field value:",e,t),B_(t,e);if(t instanceof Ka)return function(r,s){if(!U_(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Zi(l,s.Ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:la(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:la(s.serializer,i)}}if(r instanceof Vu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ws)return{bytesValue:t_(s.serializer,r._byteString)};if(r instanceof Rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_u(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nu)return function(o,l){return{mapValue:{fields:{[Cm]:{stringValue:km},[ia]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return pu(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Ha(r)}`)}(t,e)}function B_(t,e){const n={};return Im(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(t,(r,s)=>{const i=Zi(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function $_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Vu||t instanceof ws||t instanceof Rt||t instanceof Ka||t instanceof Nu)}function Mu(t,e,n){if(!$_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ha(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Pc(t,e,n){if((e=tt(e))instanceof Wa)return e._internalPath;if(typeof e=="string")return Lu(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const GS=new RegExp("[~\\*/\\[\\]]");function Lu(t,e,n){if(e.search(GS)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wa(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(U.INVALID_ARGUMENT,l+t+c)}function j_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ya("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QS extends q_{data(){return super.data()}}function Ya(t,e){return typeof e=="string"?Lu(t,e):e instanceof Wa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class H_ extends Uu{}function vi(t,e,...n){let r=[];e instanceof Uu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Fu).length,l=i.filter(c=>c instanceof Ja).length;if(o>1||o>0&&l>0)throw new te(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ja extends H_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ja(e,n,r)}_apply(e){const n=this._parse(e);return z_(e._query,n),new Br(e.firestore,e.converter,_c(e._query,n))}_parse(e){const n=Ga(e.firestore);return function(i,o,l,c,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new te(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ep(p,d);const R=[];for(const k of p)R.push(Zf(c,i,k));g={arrayValue:{values:R}}}else g=Zf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ep(p,d),g=KS(l,o,p,d==="in"||d==="not-in");return Ge.create(h,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function es(t,e,n){const r=e,s=Ya("where",t);return Ja._create(s,r,n)}class Fu extends Uu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Fu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)z_(o,c),o=_c(o,c)}(e._query,n),new Br(e.firestore,e.converter,_c(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bu extends H_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mi(i,o)}(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ds(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Ul(t,e="asc"){const n=e,r=Ya("orderBy",t);return Bu._create(r,n)}function Zf(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new te(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Um(e)&&n.indexOf("/")!==-1)throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!oe.isDocumentKey(r))throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gf(t,new oe(r))}if(n instanceof Rt)return gf(t,n._key);throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ha(n)}.`)}function ep(t,e){if(!Array.isArray(t)||t.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function z_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JS{convertValue(e,n="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return pr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ia].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>He(o.doubleValue));return new Nu(i)}convertGeoPoint(e){return new Vu(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=rr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);De(a_(r));const s=new Oi(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class K_ extends q_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ya("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $o extends K_{data(e={}){return super.data(e)}}class XS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $o(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new $o(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new $o(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:ZS(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){t=mn(t,Rt);const e=mn(t.firestore,Ns);return MS(Du(e),t._key).then(n=>nP(e,t,n))}class G_ extends JS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Ei(t){t=mn(t,Br);const e=mn(t.firestore,Ns),n=Du(e),r=new G_(e);return YS(t._query),LS(n,t._query).then(s=>new XS(e,r,t,s))}function si(t,e,n){t=mn(t,Rt);const r=mn(t.firestore,Ns),s=W_(t.converter,e,n);return $u(r,[F_(Ga(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Xt.none())])}function eP(t,e,n,...r){t=mn(t,Rt);const s=mn(t.firestore,Ns),i=Ga(s);let o;return o=typeof(e=tt(e))=="string"||e instanceof Wa?WS(i,"updateDoc",t._key,e,n,r):zS(i,"updateDoc",t._key,e),$u(s,[o.toMutation(t._key,Xt.exists(!0))])}function tP(t,e){const n=mn(t.firestore,Ns),r=Ot(t),s=W_(t.converter,e);return $u(n,[F_(Ga(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function $u(t,e){return function(r,s){const i=new Sn;return r.asyncQueue.enqueueAndForget(async()=>AS(await xS(r),s,i)),i.promise}(Du(t),e)}function nP(t,e,n){const r=n.docs.get(e._key),s=new G_(t);return new K_(t,s,e._key,r,new ri(n.hasPendingWrites,n.fromCache),e.converter)}function rP(){return new xu("serverTimestamp")}(function(e,n=!0){(function(s){Ps=s})(bs),ds(new Vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ns(new Kb(r.getProvider("auth-internal")),new Yb(o,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Zn(nf,rf,e),Zn(nf,rf,"esm2017")})();const sP={apiKey:"AIzaSyBELl9Kuk4S0TJR0ZfoCZXVO6t-jjuoDcQ",authDomain:"dumpling-555.firebaseapp.com",projectId:"dumpling-555",storageBucket:"dumpling-555.firebasestorage.app",messagingSenderId:"999350812221",appId:"1:999350812221:web:3b070419c898ccb250b454",measurementId:"G-746465PZRG"},Q_=mg(sP),et=BS(Q_),ln=em(Q_),iP={en:{login:"Login",username:"Username",password:"Password",enterUsername:"Enter username",enterPassword:"Enter password",loggingIn:"Logging in...",dontHaveAccount:"Don't have an account?",register:"Register",usernameNotExist:"Username does not exist",incorrectPassword:"Incorrect password",loginFailed:"Login failed, please check your username and password",registering:"Registering...",alreadyHaveAccount:"Already have an account?",passwordsNotMatch:"Passwords do not match",passwordTooShort:"Password must be at least 6 characters",usernameExists:"Username already exists, please choose another one",backToHome:"Back to home page",question:"Question",previous:"Previous",next:"Next",seeResults:"See Results",yourResult:"Your Result",loading:"Loading your result...",personalityBreakdown:"Personality Breakdown",takeQuizAgain:"Take Quiz Again",shareResult:"Share Result",resultNotFound:"Result not found",invalidResultId:"Invalid result ID",errorLoadingResult:"Error loading result",checkCompatibility:"Check Compatibility",errorCurrentUserNoResults:"Cannot check compatibility. Your results are not available.",errorSearchedUserNoResults:"Searched user's result is invalid.",resultViewedBy:"{viewer} viewed your result!",resultViewedTail:"viewed your result!"},zh:{login:"登录",username:"用户名",password:"密码",enterUsername:"输入用户名",enterPassword:"输入密码",loggingIn:"登录中...",dontHaveAccount:"没有账户？",register:"注册",usernameNotExist:"用户名不存在",incorrectPassword:"密码不正确",loginFailed:"登录失败，请检查您的用户名和密码",registering:"注册中...",alreadyHaveAccount:"已有账户？",passwordsNotMatch:"两次输入的密码不一致",passwordTooShort:"密码长度至少为6个字符",usernameExists:"用户名已被使用，请选择其他用户名",backToHome:"返回主页",question:"问题",previous:"上一题",next:"下一题",seeResults:"查看结果",yourResult:"您的结果",loading:"加载结果中...",personalityBreakdown:"个性分析",takeQuizAgain:"再次测试",shareResult:"分享结果",resultNotFound:"找不到结果数据",invalidResultId:"无效的结果ID",errorLoadingResult:"加载结果时出错",checkCompatibility:"检查匹配度",errorCurrentUserNoResults:"无法检查匹配度。你的测试结果不可用。",errorSearchedUserNoResults:"搜索用户的结果无效。",resultViewedBy:"{viewer} 查看了你的结果！",resultViewedTail:"查看了你的结果！"}};let oP="en";function ne(t,e={}){let n=iP[oP][t]||t;return Object.entries(e).forEach(([r,s])=>{n=n.replace(`{${r}}`,s)}),n}const Os=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},aP={class:"login-bg"},lP={class:"login-container"},cP={class:"login-form"},uP={key:0,class:"error-message"},hP={class:"form-group"},dP=["placeholder"],fP={class:"form-group"},pP=["placeholder"],gP=["disabled"],mP={class:"register-link"},_P={__name:"LoginView",setup(t){const e=Ss(),n=ke(""),r=ke(""),s=ke(!1),i=ke(""),o=async()=>{var l,c;if(!n.value||!r.value){i.value=ne("loginFailed")||"请输入用户名和密码";return}s.value=!0,i.value="";try{let h=null;try{const d=Ot(et,"usersList",n.value),p=await Ts(d);p.exists()&&(h=(l=p.data())==null?void 0:l.email)}catch{}if(!h){const d=us(et,"usersList"),p=vi(d,es("username","==",n.value)),g=await Ei(p);g.empty||(h=(c=g.docs[0].data())==null?void 0:c.email)}if(!h){i.value=ne("usernameNotExist")||"用户名不存在",s.value=!1;return}await II(ln,h,r.value),e.push("/home")}catch(h){h.code==="auth/user-not-found"||h.code==="auth/wrong-password"||h.code==="auth/invalid-credential"||h.code==="auth/invalid-email"?i.value=ne("incorrectPassword")||"用户名或密码错误":h.code==="auth/too-many-requests"?i.value=ne("tooManyAttempts")||"登录尝试次数过多，请稍后再试":i.value=ne("loginFailed")||"登录时发生错误，请稍后重试"}finally{s.value=!1}};return(l,c)=>{const h=As("router-link");return Ve(),Ne("div",aP,[H("div",lP,[c[2]||(c[2]=H("div",{class:"main-title"},[H("h1",null,"IN THE NIGHT GARDEN"),H("h1",null,"CHARACTER QUIZ")],-1)),H("div",cP,[H("h2",null,ie(de(ne)("login")),1),i.value?(Ve(),Ne("div",uP,ie(i.value),1)):br("",!0),H("div",hP,[H("label",null,ie(de(ne)("username")),1),Ar(H("input",{type:"text",placeholder:de(ne)("Enter Username"),"onUpdate:modelValue":c[0]||(c[0]=d=>n.value=d)},null,8,dP),[[Rr,n.value]])]),H("div",fP,[H("label",null,ie(de(ne)("password")),1),Ar(H("input",{type:"password",placeholder:de(ne)("Enter Password"),"onUpdate:modelValue":c[1]||(c[1]=d=>r.value=d)},null,8,pP),[[Rr,r.value]])]),H("button",{class:"login-btn",onClick:o,disabled:s.value},ie(s.value?de(ne)("Logging In"):de(ne)("login")),9,gP),H("div",mP,[Jt(ie(de(ne)("DontHaveAccount"))+" ",1),ze(h,{to:"/register"},{default:Yn(()=>[Jt(ie(de(ne)("register")),1)]),_:1})])])])])}}},yP=Os(_P,[["__scopeId","data-v-515dd913"]]),vP={class:"register-container"},EP={class:"auth-form"},wP={key:0,class:"error-message"},TP={class:"form-group"},IP={class:"form-group"},AP={class:"form-group"},bP={class:"form-group"},RP=["disabled"],SP={class:"auth-links"},PP={__name:"RegisterView",setup(t){const e=Ss(),n=ke(""),r=ke(""),s=ke(""),i=ke(""),o=ke(!1),l=ke(""),c=async()=>{if(l.value="",s.value!==i.value){l.value=ne("passwordsNotMatch")||"Passwords do not match";return}if(s.value.length<6){l.value=ne("passwordTooShort")||"Password must be at least 6 characters";return}const h=n.value.trim();if(!h){l.value=ne("enterUsername")||"Please enter a username.";return}if(!r.value.trim()){l.value=ne("enterEmail")||"Please enter an email.";return}o.value=!0;try{const d=us(et,"usersList"),p=vi(d,es("username","==",h));if(!(await Ei(p)).empty)throw new Error("usernameExists");const R=(await TI(ln,r.value,s.value)).user,k={uid:R.uid,email:r.value,username:h,createdAt:new Date};await si(Ot(et,"usersList",R.uid),k),e.push("/home")}catch(d){d.message==="usernameExists"?l.value=ne("usernameExists")||"Username is already taken.":d.code==="auth/email-already-in-use"?l.value=ne("emailExists")||"Email address is already registered.":d.code==="auth/invalid-email"?l.value=ne("invalidEmail")||"Please enter a valid email address.":d.code==="auth/weak-password"?l.value=ne("weakPassword")||"Password is too weak.":d.code==="firestore/permission-denied"?l.value=ne("registrationFailed")||"Registration failed due to database permission issues.":l.value=ne("registrationFailed")||"Registration failed. Please try again."}finally{o.value=!1}};return(h,d)=>{const p=As("router-link");return Ve(),Ne("div",vP,[d[9]||(d[9]=H("h1",null,"In the Night Garden Character Quiz",-1)),H("div",EP,[d[8]||(d[8]=H("h2",null,"Register",-1)),l.value?(Ve(),Ne("div",wP,ie(l.value),1)):br("",!0),H("form",{onSubmit:ME(c,["prevent"])},[H("div",TP,[d[4]||(d[4]=H("label",{for:"username"},"Username",-1)),Ar(H("input",{type:"text",id:"username","onUpdate:modelValue":d[0]||(d[0]=g=>n.value=g),required:"",placeholder:"Create username"},null,512),[[Rr,n.value]])]),H("div",IP,[d[5]||(d[5]=H("label",{for:"email"},"Email",-1)),Ar(H("input",{type:"email",id:"email","onUpdate:modelValue":d[1]||(d[1]=g=>r.value=g),required:"",placeholder:"Enter email address"},null,512),[[Rr,r.value]])]),H("div",AP,[d[6]||(d[6]=H("label",{for:"password"},"Password",-1)),Ar(H("input",{type:"password",id:"password","onUpdate:modelValue":d[2]||(d[2]=g=>s.value=g),required:"",placeholder:"Create password"},null,512),[[Rr,s.value]])]),H("div",bP,[d[7]||(d[7]=H("label",{for:"confirmPassword"},"Confirm Password",-1)),Ar(H("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":d[3]||(d[3]=g=>i.value=g),required:"",placeholder:"Enter password again"},null,512),[[Rr,i.value]])]),H("button",{type:"submit",disabled:o.value},ie(o.value?de(ne)("registering"):de(ne)("register")),9,RP)],32),H("div",SP,[H("p",null,[Jt(ie(de(ne)("AlreadyHaveAccount"))+" ",1),ze(p,{to:"/login"},{default:Yn(()=>[Jt(ie(de(ne)("login")),1)]),_:1})])])])])}}},CP=Os(PP,[["__scopeId","data-v-0b8aa666"]]),Fl={igglepiggle:{igglepiggle:80,makkapakka:75,upsydaisy:90,tombliboo:70,haahoo:60,ninkynonk:85,balanced:70},makkapakka:{igglepiggle:75,makkapakka:85,upsydaisy:65,tombliboo:80,haahoo:75,ninkynonk:55,balanced:75},upsydaisy:{igglepiggle:90,makkapakka:65,upsydaisy:75,tombliboo:75,haahoo:65,ninkynonk:80,balanced:80},tombliboo:{igglepiggle:70,makkapakka:80,upsydaisy:75,tombliboo:90,haahoo:85,ninkynonk:70,balanced:85},haahoo:{igglepiggle:60,makkapakka:75,upsydaisy:65,tombliboo:85,haahoo:80,ninkynonk:60,balanced:80},ninkynonk:{igglepiggle:85,makkapakka:55,upsydaisy:80,tombliboo:70,haahoo:60,ninkynonk:70,balanced:75},balanced:{igglepiggle:70,makkapakka:75,upsydaisy:80,tombliboo:85,haahoo:80,ninkynonk:75,balanced:80}};function kP(t,e){return!t||!e||!Fl[t]||!Fl[t][e]?(console.warn(`Invalid types for compatibility check: ${t}, ${e}`),0):Fl[t][e]}function DP(t){return t>=85?"Perfect partners! Like Igglepiggle and Upsy Daisy, natural best friends":t>=75?"Excellent companions with strong complementary traits, supporting each other's growth":t>=65?"Good friends with common interests, occasional differences but mutual understanding":t>=55?"Friendly companions requiring more communication and understanding":"Challenging relationship requiring more tolerance and adaptation"}const VP={class:"home-container"},NP={class:"header"},OP={class:"user-info"},xP={class:"content"},MP={key:0,class:"notification-banner"},LP=["title"],UP={class:"quiz-actions"},FP={key:0,class:"history-section"},BP={class:"results-list"},$P={class:"result-info"},jP={class:"result-type"},qP={class:"result-date"},HP=["onClick"],zP={class:"search-section"},WP={class:"search-box"},KP=["placeholder"],GP={key:0,class:"search-results"},QP={class:"result-item"},YP={class:"result-info"},JP={class:"result-username"},XP={class:"result-type"},ZP={class:"result-date"},eC={class:"result-actions-buttons"},tC=["disabled"],nC={key:1,class:"no-results"},rC={__name:"HomeView",setup(t){const e=Ss(),n=ke(""),r=ke(null),s=ke([]),i=ke(""),o=ke([]),l=ke(!1),c=ke([]),h=Ye(()=>c.value.length>0),d=Ye(()=>{var q;if(c.value.length>0&&((q=c.value[0])!=null&&q.viewerUsername)){const z=c.value[0].viewerUsername;if(z&&typeof z=="string"&&z.length>0)return z.charAt(0)+"***"}return""});let p=null;const g=async()=>{if(c.value.length===0)return;const q=c.value.map(z=>{const w=Ot(et,"notifications",z.id);return eP(w,{read:!0})});try{await Promise.all(q),c.value=[]}catch{alert(ne("errorDismissingNotifications")||"Could not dismiss notifications.")}},y=async q=>{if(!q){s.value=[];return}try{const z=us(et,"results"),w=vi(z,es("username","==",q),Ul("createdAt","desc")),_=await Ei(w),E=[];_.forEach(A=>{E.push({id:A.id,...A.data()})}),s.value=E}catch{s.value=[]}},R=async()=>{const q=i.value.trim();if(q){l.value=!0,o.value=[];try{const z=us(et,"results"),w=vi(z,es("username","==",q),Ul("createdAt","desc")),_=await Ei(w),E=[];_.forEach(A=>{const b=A.data();b.resultType&&b.username&&E.push({id:A.id,...b})}),o.value=E}catch{o.value=[]}}},k=async q=>{if(!q){c.value=[];return}try{const z=us(et,"notifications"),w=vi(z,es("recipientUid","==",q),es("read","==",!1),Ul("timestamp","desc")),_=await Ei(w),E=[];_.forEach(A=>{E.push({id:A.id,...A.data()})}),c.value=E}catch{c.value=[]}},D=()=>{e.push("/quiz/1")},L=q=>{e.push(`/result/${q}`)},M=q=>{if(!n.value||s.value.length===0){alert(ne("errorCurrentUserNoResults")||"Cannot check compatibility. Your results are not available.");return}const z=s.value[0];if(!z||!z.resultType){alert(ne("errorCurrentUserNoResults")||"Your latest result is invalid.");return}const w=z.resultType;if(!q||!q.resultType||!q.username){alert(ne("errorSearchedUserNoResults")||"Searched user's result is invalid or missing username.");return}const _=q.resultType,E=q.username;let A=null,b="";try{A=kP(w,_),b=DP(A)}catch{alert("Error calculating compatibility.");return}const P={userA:n.value,userB:E,score:A!==null?A:0,interpretation:encodeURIComponent(b||"")};try{e.push({name:"compatibility",params:P})}catch{alert("Failed to navigate to compatibility page.")}},N=async()=>{try{await RI(ln)}catch{}},F=q=>{if(!(q!=null&&q.toDate))return"";const z=q.toDate();return isNaN(z)?"":z.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0})};return Is(()=>{p=Pa(ln,async q=>{if(q){r.value=q.uid;try{const z=Ot(et,"usersList",q.uid),w=await Ts(z);if(w.exists()){const _=w.data();n.value=_.username||"Unknown User",await y(n.value),await k(r.value)}else n.value="Unknown User",s.value=[],await k(r.value)}catch{n.value="Error Loading User",s.value=[],c.value=[]}}else n.value="",r.value=null,s.value=[],o.value=[],l.value=!1,c.value=[],e.push("/login")})}),Ta(()=>{p&&p()}),(q,z)=>(Ve(),Ne("div",VP,[H("div",NP,[z[3]||(z[3]=H("h1",null,"In the Night Garden Character Quiz",-1)),H("div",OP,[H("span",null,ie(de(ne)("welcome"))+", "+ie(n.value||"User"),1),H("button",{onClick:N,class:"logout-btn"},ie(de(ne)("logout")),1)])]),H("div",xP,[h.value?(Ve(),Ne("div",MP,[H("span",null,[H("strong",null,ie(d.value),1),Jt(" "+ie(de(ne)("resultViewedTail")||"viewed your result!")+" ("+ie(c.value.length)+" new view"+ie(c.value.length>1?"s":"")+")",1)]),H("button",{onClick:g,class:"dismiss-btn",title:de(ne)("dismissNotification")||"Dismiss"}," × ",8,LP)])):br("",!0),H("div",UP,[H("button",{onClick:D,class:"start-quiz-btn"},ie(de(ne)("Start Quiz")),1),s.value.length>0?(Ve(),Ne("div",FP,[H("h2",null,ie(de(ne)("Test History")),1),H("div",BP,[(Ve(!0),Ne(jt,null,qc(s.value,w=>(Ve(),Ne("div",{key:w.id,class:"result-item"},[H("div",$P,[H("span",jP,ie(de(ne)(w.resultType)),1),H("span",qP,ie(F(w.createdAt)),1)]),H("button",{onClick:_=>L(w.id),class:"view-btn"},ie(de(ne)("viewResult")),9,HP)]))),128))])])):br("",!0),H("div",zP,[H("h2",null,ie(de(ne)("Search Others")),1),H("div",WP,[Ar(H("input",{type:"text","onUpdate:modelValue":z[0]||(z[0]=w=>i.value=w),placeholder:de(ne)("Enter Username (e.g. 7788)"),onKeyup:UE(R,["enter"])},null,40,KP),[[Rr,i.value]]),H("button",{onClick:R},ie(de(ne)("search")),1)]),o.value.length>0?(Ve(),Ne("div",GP,[H("div",QP,[H("div",YP,[H("span",JP,ie(o.value[0].username),1),H("span",XP,ie(de(ne)(o.value[0].resultType)),1),H("span",ZP,ie(F(o.value[0].createdAt)),1)]),H("div",eC,[H("button",{onClick:z[1]||(z[1]=w=>L(o.value[0].id)),class:"view-btn"},ie(de(ne)("View Result")),1),H("button",{onClick:z[2]||(z[2]=w=>M(o.value[0])),class:"compatibility-btn",disabled:!s.value.length},ie(de(ne)("Check Compatibility")||"Check Compatibility"),9,tC)])])])):br("",!0),l.value&&o.value.length===0?(Ve(),Ne("div",nC,ie(de(ne)("No Results")),1)):br("",!0)])])])]))}},sC=Os(rC,[["__scopeId","data-v-7a8e45f0"]]),it=[];for(let t=0;t<256;++t)it.push((t+256).toString(16).slice(1));function iC(t,e=0){return(it[t[e+0]]+it[t[e+1]]+it[t[e+2]]+it[t[e+3]]+"-"+it[t[e+4]]+it[t[e+5]]+"-"+it[t[e+6]]+it[t[e+7]]+"-"+it[t[e+8]]+it[t[e+9]]+"-"+it[t[e+10]]+it[t[e+11]]+it[t[e+12]]+it[t[e+13]]+it[t[e+14]]+it[t[e+15]]).toLowerCase()}let Bl;const oC=new Uint8Array(16);function aC(){if(!Bl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Bl=crypto.getRandomValues.bind(crypto)}return Bl(oC)}const lC=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),tp={randomUUID:lC};function Ro(t,e,n){var s;if(tp.randomUUID&&!t)return tp.randomUUID();t=t||{};const r=t.random??((s=t.rng)==null?void 0:s.call(t))??aC();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,iC(r)}const Cc={igglepiggle:{id:"igglepiggle",name:"Igglepiggle Type/Adventurer",description:"You're full of curiosity and adventurous spirit, lively and enthusiastic about new things. Although you sometimes feel uneasy, you always find the courage to move forward. You love exploring the world and discovering new things – you're a born explorer. Just like Igglepiggle always dragging his red blanket on adventures, you also like to seek excitement with a sense of security."},makkapakka:{id:"makkapakka",name:"Makka Pakka Type/Guardian",description:"You're serious, responsible, detail-oriented, and like everything to be in order. You're the organizer among friends, always ensuring things go according to plan. You're reliable and solid, trusted by everyone, just like Makka Pakka is the guardian of the garden. Your presence makes the surrounding environment more orderly and safe, an indispensable stabilizing force in the team."},upsydaisy:{id:"upsydaisy",name:"Upsy Daisy Type/Performer",description:"You're cheerful, confident, full of artistic sense and expressiveness. You like to express yourself through song and dance, with rich and outward emotions. You're optimistic and upbeat, always maintaining a positive attitude in various situations, and you're also good at socializing. Just like Upsy Daisy and her colorful pigtails, your emotions are colorful – when you're happy, the whole world can feel your joy."},tombliboo:{id:"tombliboo",name:"Tombliboo Type/Team Player",description:"You're friendly and peaceful, valuing teamwork and friendship. You like to share experiences with friends and face challenges together. You're kind and considerate, always thinking of others' feelings, an excellent listener and supporter. Just like the three Tombliboo brothers always acting together, you find a sense of belonging and security in groups, performing your best potential when with others."},haahoo:{id:"haahoo",name:"Haahoo Type/Harmonizer",description:"You have a gentle personality, a leisurely pace, and don't like to rush. Although you may be large in size, your heart is soft. You like quiet environments and are good at harmonizing the surrounding atmosphere. Your presence gives people a sense of peace and comfort. Just like the five huge pillow-shaped Haahoos in the garden, your very existence is a symbol of comfort and tranquility, making those around you feel relaxed."},ninkynonk:{id:"ninkynonk",name:"Ninky Nonk Type/Innovator",description:"Your thinking is flexible, your action routes often unconventional, but you always reach your destination. You're good at jumping thinking, often having unexpected creativity. You have both an adventurous spirit and your own unique methods, making you eye-catching. Just like the Ninky Nonk that can wobble through hedges, climb up and down tree trunks, you have a unique way of solving problems that, though seemingly unusual, often achieves unexpected good results."},balanced:{id:"balanced",name:"Harmonizer of the Garden World",description:"You're a well-rounded person with an adventurer's curiosity, a guardian's sense of responsibility, a performer's expressiveness, and a team player's spirit of cooperation. Like the garden world itself, you're a harmonious whole composed of various elements. You can display different traits in different situations – you're a person with extreme adaptability and a sense of balance. You can explore independently and cooperate with others; you value order without losing creativity. This balanced trait makes you a true harmonizer of the garden world."}},So=[{id:1,text:"When you have free time, what do you enjoy doing most?",options:[{id:"A",text:"Exploring new places, discovering corners you've never been to"},{id:"B",text:"Organizing your space, making everything neat and tidy"},{id:"C",text:"Singing, dancing, or engaging in creative activities"},{id:"D",text:"Chatting and playing with friends"}]},{id:2,text:"When facing difficulties, how do you usually handle them?",options:[{id:"A",text:"Though a bit scared, you still bravely face them"},{id:"B",text:"Analyzing the problem, making detailed solutions"},{id:"C",text:"Staying optimistic, believing problems will be solved"},{id:"D",text:"Finding friends to think of solutions together"}]},{id:3,text:"Others' first impression of you is usually:",options:[{id:"A",text:"Full of energy, always on the move"},{id:"B",text:"Reliable and serious, organized in everything you do"},{id:"C",text:"Expressive, rich in emotions"},{id:"D",text:"Friendly and easy-going, good at cooperation"}],weight:1.2},{id:4,text:"In group activities, you often:",options:[{id:"A",text:"Propose new ideas, lead others to try them"},{id:"B",text:"Take charge of planning and arrangements, ensuring everything goes smoothly"},{id:"C",text:"Liven up the atmosphere, making everyone happy"},{id:"D",text:"Coordinate different opinions, helping reach consensus"}]},{id:5,text:"Your room or workspace is usually:",options:[{id:"A",text:"Filled with interesting items, a bit messy but full of personality"},{id:"B",text:"Neat and organized, everything has its fixed place"},{id:"C",text:"Colorful, richly decorated, full of artistic sense"},{id:"D",text:"Comfortable and cozy, suitable for gathering with friends"}]},{id:6,text:"When you see beautiful scenery, you:",options:[{id:"A",text:"Want to immediately explore and see what interesting things there are"},{id:"B",text:"Appreciate its harmony and order"},{id:"C",text:"Feel inspired, want to express your feelings"},{id:"D",text:"Hope to share this beautiful moment with friends"}]},{id:7,text:"The quality you most appreciate about yourself is:",options:[{id:"A",text:"Curiosity and spirit of adventure"},{id:"B",text:"Being meticulous and responsible"},{id:"C",text:"Creativity and expressiveness"},{id:"D",text:"Ability to get along harmoniously with others"}],weight:1.5},{id:8,text:"When you need to recharge your energy, you prefer:",options:[{id:"A",text:"Going on a short adventure or exploring something new"},{id:"B",text:"Creating a peaceful space and following a relaxing routine"},{id:"C",text:"Immersing yourself in music, art, or watching performances"},{id:"D",text:"Connecting with close friends, even if just through messages"}]},{id:9,text:"When facing changes, you usually:",options:[{id:"A",text:"Excitedly accept them, looking forward to new possibilities"},{id:"B",text:"Hope to have time to adapt and prepare"},{id:"C",text:"Cope with creativity, finding fun in it"},{id:"D",text:"Face them with friends, supporting each other"}],weight:1.5},{id:10,text:"If you could choose a mode of transportation, you would choose:",options:[{id:"A",text:"A flying vehicle that can reach anywhere"},{id:"B",text:"A safe and reliable conventional vehicle"},{id:"C",text:"A colorful, eye-catching vehicle"},{id:"D",text:"A large vehicle that you can ride with friends"}],isTiebreaker:!0}];function cC(t){const e={igglepiggle:0,makkapakka:0,upsydaisy:0,tombliboo:0,haahoo:0,ninkynonk:0};Array.isArray(t)&&t.forEach(D=>{parseInt(D.questionId);const L=String(D.option),M=parseFloat(D.weight||1);switch(L){case"A":e.igglepiggle+=M;break;case"B":e.makkapakka+=M;break;case"C":e.upsydaisy+=M;break;case"D":e.tombliboo+=M;break}});const n=(e.makkapakka+e.tombliboo)/2;e.haahoo=Math.min(n,5),[2,5,8].filter(D=>{const L=t.find(M=>parseInt(M.questionId)===D);return L&&(L.option==="B"||L.option==="D")}).length>=2&&(e.haahoo=Math.min(e.haahoo+1,5)),e.ninkynonk=Math.min(e.igglepiggle/2,5),[1,4,10].filter(D=>{const L=t.find(M=>parseInt(M.questionId)===D);return L&&L.option==="A"}).length>=2&&(e.ninkynonk=Math.min(e.ninkynonk+1,5));const l=[3,6,9];let c=0;for(let D=0;D<l.length;D++){const L=l[D],M=L-1,N=t.find(q=>parseInt(q.questionId)===L),F=t.find(q=>parseInt(q.questionId)===M);N&&F&&N.option!==F.option&&c++}c>=2&&(e.ninkynonk=Math.min(e.ninkynonk+1,5));const h={igglepiggle:e.igglepiggle,makkapakka:e.makkapakka,upsydaisy:e.upsydaisy,tombliboo:e.tombliboo},d=Math.max(...Object.values(h)),p=Object.keys(h).filter(D=>h[D]===d);let g=0;const y=Object.values(h).sort((D,L)=>L-D);y.length>1&&(g=y[1]);const R=Object.values(h).every(D=>Math.abs(D-d)<=2&&D>=2);let k;if(R)k="balanced";else if(e.haahoo>d)k="haahoo";else if(e.ninkynonk>d)k="ninkynonk";else if(d>g+2)k=p[0];else{const D=t.find(L=>parseInt(L.questionId)===10);if(D)switch(D.option){case"A":k="igglepiggle";break;case"B":k="makkapakka";break;case"C":k="upsydaisy";break;case"D":k="tombliboo";break;default:k=p[0]}else k=p[0]}return{resultType:k,characterInfo:Cc[k],scores:e}}const uC={class:"quiz-main-content"},hC={class:"question-number-display"},dC={class:"question-text"},fC={class:"options-container"},pC=["onClick"],gC={class:"option-label"},mC={class:"option-text"},_C={class:"quiz-footer"},yC=["disabled"],vC=["disabled"],EC={__name:"QuizView",setup(t){const e=Ss(),n=ou(),r=Ye(()=>parseInt(n.params.questionId)||1),s=Ye(()=>So.find(N=>N.id===r.value)||So[0]),i=Ye(()=>r.value===So.length),o=ke(null),l=ke(""),c=ke(""),h=ke([]);let d=null;const p=async N=>{if(!N){l.value="Unknown User";return}try{const F=Ot(et,"usersList",N),q=await Ts(F);if(q.exists()){const z=q.data();l.value=z.username||"Unknown User"}else l.value="Unknown User"}catch{l.value="Unknown User"}},g=Ye(()=>(r.value-1)%5+1),y=async N=>{try{const F=Ot(et,"users",N,"currentTest","answers"),q=await Ts(F);if(q.exists()){const z=q.data();if(z.answers&&Array.isArray(z.answers)){h.value=z.answers,c.value=z.resultId||Ro();const w=h.value.find(_=>parseInt(_.questionId,10)===r.value);w&&(o.value=w.option)}else await R(N)}else await R(N)}catch{await R(N)}},R=async N=>{c.value=Ro(),h.value=[],o.value=null;try{const F=Ot(et,"users",N,"currentTest","answers");await si(F,{resultId:c.value,answers:[],startedAt:new Date})}catch{}},k=N=>{o.value=N},D=async()=>{if(!o.value)return!1;const N=ln.currentUser;if(!N)return!1;try{const F={questionId:r.value,option:o.value,weight:s.value.weight||1},q=h.value.findIndex(w=>parseInt(w.questionId,10)===r.value);q>=0?h.value[q]=F:h.value.push(F);const z=Ot(et,"users",N.uid,"currentTest","answers");return await si(z,{resultId:c.value||Ro(),answers:h.value},{merge:!0}),!0}catch{return!1}},L=()=>{r.value>1&&e.push(`/quiz/${r.value-1}`)},M=async()=>{if(!(!o.value||!await D()))if(i.value){if(!ln.currentUser)return;if(h.value.length===0){alert("Please answer the questions before submitting.");return}try{const q=ln.currentUser;if(!q)return;const z=cC(h.value);(!c.value||c.value==="null"||c.value==="undefined")&&(c.value=Ro());const w=Ot(et,"results",c.value);if(!l.value&&(await p(q.uid),!l.value)){alert("Error: Could not determine username to save result.");return}const _={uid:q.uid,username:l.value,answers:h.value,resultType:z.resultType,scores:z.scores,createdAt:new Date};await si(w,_);const E=Ot(et,"users",q.uid,"currentTest","answers");await si(E,{resultId:null,answers:[],startedAt:null}),e.push(`/result/${c.value}`)}catch{alert("Error saving results. Please check console and try again.")}}else e.push(`/quiz/${r.value+1}`)};return ui(()=>r.value,(N,F)=>{if(N!==F){o.value=null;const q=h.value.find(z=>parseInt(z.questionId,10)===N);q&&(o.value=q.option)}},{immediate:!0}),Is(()=>{d=Pa(ln,async N=>{N?(await p(N.uid),await y(N.uid)):e.push("/login")})}),Ta(()=>{d&&d()}),(N,F)=>{const q=As("router-link");return Ve(),Ne("div",{class:wi(["quiz-container",`bg-${g.value}`])},[ze(q,{to:"/home",class:"back-link"},{default:Yn(()=>F[0]||(F[0]=[Jt("Back to home page")])),_:1}),H("div",uC,[H("p",hC,"Question "+ie(s.value.id)+" / "+ie(de(So).length),1),H("h2",dC,ie(s.value.text),1),H("div",fC,[(Ve(!0),Ne(jt,null,qc(s.value.options,z=>(Ve(),Ne("div",{key:z.id,class:wi(["option-item",{selected:o.value===z.id}]),onClick:w=>k(z.id)},[H("div",gC,ie(z.id),1),H("div",mC,ie(z.text),1)],10,pC))),128))])]),H("div",_C,[H("button",{onClick:L,class:"nav-button previous",disabled:r.value<=1}," Previous ",8,yC),H("button",{onClick:M,class:"nav-button next",disabled:!o.value},ie(i.value?"See Results":"Next"),9,vC)])],2)}}},wC=Os(EC,[["__scopeId","data-v-71dfa48d"]]),TC="/assets/balanced-C1qyGy5M.png",IC="/assets/haahoo-DMm2qH9j.png",AC="/assets/igglepiggle-Dq8DK8hC.png",bC="/assets/makkapakka-BvcbgYJt.png",RC="/assets/ninkynonk-B6qOzmRn.png",SC="/assets/tombliboo-CAU9EOs3.png",PC="/assets/upsydaisy-DZnqP4Vw.png",CC={class:"result-container"},kC={class:"result-card"},DC={class:"result-header"},VC={key:0,class:"loading"},NC={key:1,class:"error"},OC={key:2,class:"result-content"},xC={class:"result-info"},MC={class:"character-image"},LC=["src","alt"],UC={key:1,class:"image-placeholder"},FC={class:"result-description"},BC={class:"score-breakdown"},$C={class:"score-bars"},jC={class:"score-label"},qC={class:"score-bar-container"},HC={class:"score-value"},zC={key:0,class:"result-actions"},WC={key:3,class:"error"},KC={__name:"ResultView",setup(t){const e=Ss(),n=ou(),r=ke(null),s=ke(!0),i=ke(null),o=ke(null),l=Ye(()=>{var R;return o.value&&((R=r.value)==null?void 0:R.ownerUid)&&o.value===r.value.ownerUid}),c=async(R,k,D)=>{if(!(!R||!k||!D))try{const L=us(et,"notifications");await tP(L,{recipientUid:R,viewerUsername:k,resultId:D,timestamp:rP(),read:!1})}catch{}},h=R=>{if(!R)return"";try{return new URL(Object.assign({"../assets/characters/balanced.png":TC,"../assets/characters/haahoo.png":IC,"../assets/characters/igglepiggle.png":AC,"../assets/characters/makkapakka.png":bC,"../assets/characters/ninkynonk.png":RC,"../assets/characters/tombliboo.png":SC,"../assets/characters/upsydaisy.png":PC})[`../assets/characters/${R}.png`],import.meta.url).href}catch{return""}},d=R=>{const k=Number(R)||0,D=Math.max(k*20,2);return Math.min(D,100)},p=()=>{e.push("/quiz/1")},g=R=>{navigator.clipboard.writeText(R).then(()=>{alert(ne("linkCopied")||"Link copied to clipboard!")}).catch(k=>{alert(ne("copyFailed")||"Failed to copy link.")})},y=async()=>{if(!r.value||!r.value.characterInfo)return;const R={title:ne("shareTitle")||"My Quiz Result!",text:ne("shareText",{characterType:r.value.characterInfo.name})||`I got ${r.value.characterInfo.name} on the quiz!`,url:window.location.href};if(navigator.share)try{await navigator.share(R)}catch(k){k.name!=="AbortError"&&g(R.url)}else g(R.url)};return Is(async()=>{var k;const R=n.params.resultId;if(!R||R==="undefined"||R==="null"){i.value=ne("invalidResultId")||"Invalid Result ID",s.value=!1;return}s.value=!0,i.value=null;try{const D=Ot(et,"results",R),L=await Ts(D);if(!L.exists()){i.value=ne("resultNotFound")||"Result data not found.",s.value=!1;return}const M=L.data(),N=M.resultType,F=M.uid;if(!F){i.value=ne("errorLoadingResult")||"Result owner information is missing.",s.value=!1;return}if(!N||!Cc[N]){i.value=ne("errorLoadingResult")||"Could not load result details.",s.value=!1;return}const q=ln.currentUser;if(o.value=q?q.uid:null,r.value={id:R,resultType:N,characterInfo:Cc[N],scores:M.scores||{},createdAt:(k=M.createdAt)!=null&&k.toDate?M.createdAt.toDate():new Date,ownerUid:F},q&&F&&q.uid!==F){const z=Ot(et,"usersList",q.uid),w=await Ts(z);if(w.exists()){const _=w.data().username;await c(F,_,R)}else await c(F,`User (${q.uid.substring(0,5)})`,R)}}catch{i.value=ne("errorLoadingResult")||"An error occurred."}finally{s.value=!1}}),(R,k)=>{const D=As("router-link");return Ve(),Ne("div",CC,[H("div",kC,[H("div",DC,[H("h1",null,ie(de(ne)("Your Result")),1),ze(D,{to:"/home",class:"home-link"},{default:Yn(()=>[Jt(ie(de(ne)("Back To Home")),1)]),_:1})]),s.value?(Ve(),Ne("div",VC,[H("p",null,ie(de(ne)("loading")),1)])):i.value?(Ve(),Ne("div",NC,[H("p",null,ie(i.value),1),ze(D,{to:"/home"},{default:Yn(()=>[Jt(ie(de(ne)("Back To Home")),1)]),_:1})])):r.value?(Ve(),Ne("div",OC,[H("div",xC,[H("h2",null,ie(r.value.characterInfo.name),1),H("div",MC,[h(r.value.resultType)?(Ve(),Ne("img",{key:0,src:h(r.value.resultType),alt:r.value.characterInfo.name},null,8,LC)):(Ve(),Ne("div",UC,"?"))]),H("div",FC,[H("p",null,ie(r.value.characterInfo.description),1)])]),H("div",BC,[H("h3",null,ie(de(ne)("Personality Breakdown")),1),H("div",$C,[(Ve(!0),Ne(jt,null,qc(r.value.scores,(L,M)=>(Ve(),Ne("div",{key:M,class:"score-bar-item"},[H("div",jC,ie(de(ne)(M)||M),1),H("div",qC,[H("div",{class:"score-bar",style:Bi({width:`${d(L)}%`})},null,4)]),H("div",HC,ie(L??0),1)]))),128))]),l.value?(Ve(),Ne("div",zC,[H("button",{onClick:p,class:"action-button"},ie(de(ne)("takeQuizAgain")),1),H("button",{onClick:y,class:"action-button share-button"},ie(de(ne)("shareResult")),1)])):br("",!0)])])):(Ve(),Ne("div",WC,[H("p",null,ie(de(ne)("errorLoadingResult")),1),ze(D,{to:"/home"},{default:Yn(()=>[Jt(ie(de(ne)("backToHome")),1)]),_:1})]))])])}}},GC=Os(KC,[["__scopeId","data-v-f11da1a9"]]),QC={class:"compatibility-container"},YC={class:"compatibility-card"},JC={class:"header"},XC={key:0,class:"content"},ZC={class:"score-display"},ek={class:"score"},tk={class:"score-bar-container"},nk={class:"interpretation"},rk={key:1,class:"content error"},sk={__name:"CompatibilityView",setup(t){const e=ou(),n=ke(""),r=ke(""),s=ke(0),i=ke(""),o=Ye(()=>{try{return decodeURIComponent(i.value)}catch{return"Compatibility interpretation unavailable."}});return Is(()=>{n.value=e.params.userA||"User A",r.value=e.params.userB||"User B",s.value=parseInt(e.params.score,10)||0,i.value=e.params.interpretation||""}),(l,c)=>{const h=As("router-link");return Ve(),Ne("div",QC,[H("div",YC,[H("div",JC,[c[1]||(c[1]=H("h1",null,"Compatibility Check",-1)),ze(h,{to:"/home",class:"home-link"},{default:Yn(()=>c[0]||(c[0]=[Jt("Back to Home")])),_:1})]),n.value&&r.value?(Ve(),Ne("div",XC,[H("h2",null,ie(n.value)+" & "+ie(r.value),1),H("div",ZC,[H("span",ek,ie(s.value)+"%",1),H("div",tk,[H("div",{class:"score-bar",style:Bi({width:`${s.value}%`})},null,4)])]),H("p",nk,ie(o.value),1)])):(Ve(),Ne("div",rk,c[2]||(c[2]=[H("p",null,"Could not load compatibility data.",-1)])))])])}}},ik=Os(sk,[["__scopeId","data-v-ec6f2c4d"]]),ok=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:yP},{path:"/register",name:"register",component:CP},{path:"/home",name:"home",component:sC,meta:{requiresAuth:!0}},{path:"/quiz/:questionId",name:"quiz",component:wC,meta:{requiresAuth:!0}},{path:"/result/:resultId",name:"result",component:GC,meta:{requiresAuth:!0}},{path:"/compatibility/:userA/:userB/:score/:interpretation",name:"compatibility",component:ik,props:!0,meta:{requiresAuth:!0}}],Y_=Fb({history:pb(),routes:ok,scrollBehavior(t,e,n){return n||{top:0}}});Y_.beforeEach((t,e,n)=>{if(t.path===e.path){n(!1);return}t.matched.some(s=>s.meta.requiresAuth)?Pa(ln,s=>{s?n():n({name:"login"})},s=>{n({name:"login"})}):n()});const J_=$E(jb);J_.use(Y_);J_.mount("#app");
