const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CreativeToolkit-_va9Db5j.js","./index-CHKxqqKF.js","./index-Cb8Emg2-.css","./CreativeToolkit-C1Rxq5Hk.css","./InsideTheEdit-Bf6lvCWq.js","./InsideTheEdit-cEyo6PSM.css"])))=>i.map(i=>d[i]);
import{i as bn,f as Se,c as $e,e as kn,a as $t,b as qe,J as wn,V as jn,d as En,r as j,s as Gt,g as Xt,p as Yt,v as An,h as Mn,j as qt,k as Sn,n as Kt,l as Tn,m as Nn,u as De,o as Zt,q as rt,t as Qt,w as Re,M as Ke,x as Je,y as ot,z as Jt,A as Cn,B as en,C as Rn,D as Ln,E as Dn,F as On,G as zn,H as Fn,I as In,S as Bn,K as Pn,L as Ge,N as _n,O as Un,P as Wn,Q as t,R as Xe,T as jt,_ as tn}from"./index-CHKxqqKF.js";const Vn=(e,n,r)=>{const o=n-e;return((r-e)%o+o)%o+e};function nn(e,n){return bn(e)?e[Vn(0,e.length,n)]:e}class Hn{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,r){for(let o=0;o<this.animations.length;o++)this.animations[o][n]=r}attachTimeline(n){const r=this.animations.map(o=>o.attachTimeline(n));return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Et(this.animations,"duration")}get iterationDuration(){return Et(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(r=>r[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Et(e,n){let r=0;for(let o=0;o<e.length;o++){const a=e[o][n];a!==null&&a>r&&(r=a)}return r}class $n extends Hn{then(n,r){return this.finished.finally(n).then(()=>{})}}function rn(e,n){let r;const o=()=>{const{currentTime:a}=n,s=(a===null?0:a.value)/100;r!==s&&e(s),r=s};return Se.preUpdate(o,!0),()=>$e(o)}function Gn(e,n){if(e==="first")return 0;{const r=n-1;return e==="last"?r:r/2}}function Xn(e=.1,{startDelay:n=0,from:r=0,ease:o}={}){return(a,i)=>{const s=typeof r=="number"?r:Gn(r,i),u=Math.abs(s-a);let m=e*u;if(o){const x=i*e;m=kn(o)(m/x)*x}return n+m}}function Yn(...e){const n=!Array.isArray(e[0]),r=n?0:-1,o=e[0+r],a=e[1+r],i=e[2+r],s=e[3+r],u=$t(a,i,s);return n?u(o):u}function qn(e,n,r={}){const o=e.get();let a=null,i=o,s;const u=typeof o=="string"?o.replace(/[\d.-]/g,""):void 0,m=()=>{a&&(a.stop(),a=null),e.animation=void 0},x=()=>{const w=At(e.get()),E=At(i);if(w===E){m();return}const N=a?a.getGeneratorVelocity():e.getVelocity();m(),a=new wn({keyframes:[w,E],velocity:N,type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:s})},p=()=>{x(),e.animation=a??void 0,e.events.animationStart?.notify(),a?.then(()=>{e.animation=void 0,e.events.animationComplete?.notify()})};if(e.attach((w,E)=>{i=w,s=N=>E(et(N,u)),Se.postRender(p)},m),qe(n)){let w=r.skipInitialAnimation===!0;const E=n.on("change",_=>{w?(w=!1,e.jump(et(_,u),!1)):e.set(et(_,u))}),N=e.on("destroy",E);return()=>{E(),N()}}return m}function et(e,n){return n?e+n:e}function At(e){return typeof e=="number"?e:parseFloat(e)}function Kn(e,n){return e in n}class Zn extends jn{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,r){if(Kn(r,n)){const o=n[r];if(typeof o=="string"||typeof o=="number")return o}}getBaseTargetFromProps(){}removeValueFromRenderState(n,r){delete r.output[n]}measureInstanceViewportBox(){return En()}build(n,r){Object.assign(n.output,r)}renderInstance(n,{output:r}){Object.assign(n,r)}sortInstanceNodePosition(){return 0}}function Qn(e){return j.useEffect(()=>()=>e(),[])}function Ye(e){return typeof window>"u"?!1:e?Gt():Xt()}const Jn=50,Mt=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),er=()=>({time:0,x:Mt(),y:Mt()}),tr={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function St(e,n,r,o){const a=r[n],{length:i,position:s}=tr[n],u=a.current,m=r.time;a.current=Math.abs(e[`scroll${s}`]),a.scrollLength=e[`scroll${i}`]-e[`client${i}`],a.offset.length=0,a.offset[0]=0,a.offset[1]=a.scrollLength,a.progress=Yt(0,a.scrollLength,a.current);const x=o-m;a.velocity=x>Jn?0:An(a.current-u,x)}function nr(e,n,r){St(e,"x",n,r),St(e,"y",n,r),n.time=r}function rr(e,n){const r={x:0,y:0};let o=e;for(;o&&o!==n;)if(Mn(o))r.x+=o.offsetLeft,r.y+=o.offsetTop,o=o.offsetParent;else if(o.tagName==="svg"){const a=o.getBoundingClientRect();o=o.parentElement;const i=o.getBoundingClientRect();r.x+=a.left-i.left,r.y+=a.top-i.top}else if(o instanceof SVGGraphicsElement){const{x:a,y:i}=o.getBBox();r.x+=a,r.y+=i;let s=null,u=o.parentNode;for(;!s;)u.tagName==="svg"&&(s=u),u=o.parentNode;o=s}else break;return r}const st={start:0,center:.5,end:1};function Tt(e,n,r=0){let o=0;if(e in st&&(e=st[e]),typeof e=="string"){const a=parseFloat(e);e.endsWith("px")?o=a:e.endsWith("%")?e=a/100:e.endsWith("vw")?o=a/100*document.documentElement.clientWidth:e.endsWith("vh")?o=a/100*document.documentElement.clientHeight:e=a}return typeof e=="number"&&(o=n*e),r+o}const sr=[0,0];function or(e,n,r,o){let a=Array.isArray(e)?e:sr,i=0,s=0;return typeof e=="number"?a=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?a=e.split(" "):a=[e,st[e]?e:"0"]),i=Tt(a[0],r,o),s=Tt(a[1],n),i-s}const Ie={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},ar={x:0,y:0};function ir(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function cr(e,n,r){const{offset:o=Ie.All}=r,{target:a=e,axis:i="y"}=r,s=i==="y"?"height":"width",u=a!==e?rr(a,e):ar,m=a===e?{width:e.scrollWidth,height:e.scrollHeight}:ir(a),x={width:e.clientWidth,height:e.clientHeight};n[i].offset.length=0;let p=!n[i].interpolate;const w=o.length;for(let E=0;E<w;E++){const N=or(o[E],x[s],m[s],u[i]);!p&&N!==n[i].interpolatorOffsets[E]&&(p=!0),n[i].offset[E]=N}p&&(n[i].interpolate=$t(n[i].offset,qt(o),{clamp:!1}),n[i].interpolatorOffsets=[...n[i].offset]),n[i].progress=Sn(0,1,n[i].interpolate(n[i].current))}function lr(e,n=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,n!==e){let o=n;for(;o&&o!==e;)r.x.targetOffset+=o.offsetLeft,r.y.targetOffset+=o.offsetTop,o=o.offsetParent}r.x.targetLength=n===e?n.scrollWidth:n.clientWidth,r.y.targetLength=n===e?n.scrollHeight:n.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function dr(e,n,r,o={}){return{measure:a=>{lr(e,o.target,r),nr(e,r,a),(o.offset||o.target)&&cr(e,r,o)},notify:()=>n(r)}}const Ne=new WeakMap,Nt=new WeakMap,tt=new WeakMap,Ct=new WeakMap,We=new WeakMap,Rt=e=>e===document.scrollingElement?window:e;function sn(e,{container:n=document.scrollingElement,trackContentSize:r=!1,...o}={}){if(!n)return Kt;let a=tt.get(n);a||(a=new Set,tt.set(n,a));const i=er(),s=dr(n,e,i,o);if(a.add(s),!Ne.has(n)){const m=()=>{for(const E of a)E.measure(Nn.timestamp);Se.preUpdate(x)},x=()=>{for(const E of a)E.notify()},p=()=>Se.read(m);Ne.set(n,p);const w=Rt(n);window.addEventListener("resize",p),n!==document.documentElement&&Nt.set(n,Tn(n,p)),w.addEventListener("scroll",p),p()}if(r&&!We.has(n)){const m=Ne.get(n),x={width:n.scrollWidth,height:n.scrollHeight};Ct.set(n,x);const p=()=>{const E=n.scrollWidth,N=n.scrollHeight;(x.width!==E||x.height!==N)&&(m(),x.width=E,x.height=N)},w=Se.read(p,!0);We.set(n,w)}const u=Ne.get(n);return Se.read(u,!1,!0),()=>{$e(u);const m=tt.get(n);if(!m||(m.delete(s),m.size))return;const x=Ne.get(n);Ne.delete(n),x&&(Rt(n).removeEventListener("scroll",x),Nt.get(n)?.(),window.removeEventListener("resize",x));const p=We.get(n);p&&($e(p),We.delete(n)),Ct.delete(n)}}const fr=[[Ie.Enter,"entry"],[Ie.Exit,"exit"],[Ie.Any,"cover"],[Ie.All,"contain"]],Lt={start:0,end:1};function ur(e){const n=e.trim().split(/\s+/);if(n.length!==2)return;const r=Lt[n[0]],o=Lt[n[1]];if(!(r===void 0||o===void 0))return[r,o]}function hr(e){if(e.length!==2)return;const n=[];for(const r of e)if(Array.isArray(r))n.push(r);else if(typeof r=="string"){const o=ur(r);if(!o)return;n.push(o)}else return;return n}function mr(e,n){const r=hr(e);if(!r)return!1;for(let o=0;o<2;o++){const a=r[o],i=n[o];if(a[0]!==i[0]||a[1]!==i[1])return!1}return!0}function at(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[n,r]of fr)if(mr(e,n))return{rangeStart:`${r} 0%`,rangeEnd:`${r} 100%`}}const Dt=new Map;function Ot(e){const n={value:0},r=sn(o=>{n.value=o[e.axis].progress*100},e);return{currentTime:n,cancel:r}}function on({source:e,container:n,...r}){const{axis:o}=r;e&&(n=e);let a=Dt.get(n);a||(a=new Map,Dt.set(n,a));const i=r.target??"self";let s=a.get(i);s||(s={},a.set(i,s));const u=o+(r.offset??[]).join(",");return s[u]||(r.target&&Ye(r.target)?at(r.offset)?s[u]=new ViewTimeline({subject:r.target,axis:o}):s[u]=Ot({container:n,...r}):Ye()?s[u]=new ScrollTimeline({source:n,axis:o}):s[u]=Ot({container:n,...r})),s[u]}function xr(e,n){const r=on(n),o=n.target?at(n.offset):void 0,a=n.target?Ye(n.target)&&!!o:Ye();return e.attachTimeline({timeline:a?r:void 0,...o&&a&&{rangeStart:o.rangeStart,rangeEnd:o.rangeEnd},observe:i=>(i.pause(),rn(s=>{i.time=i.iterationDuration*s},r))})}function pr(e){return e&&(e.target||e.offset)}function gr(e){return e.length===2}function vr(e,n){return gr(e)||pr(n)?sn(r=>{e(r[n.axis].progress,r)},n):rn(e,on(n))}function an(e,{axis:n="y",container:r=document.scrollingElement,...o}={}){if(!r)return Kt;const a={axis:n,container:r,...o};return typeof e=="function"?vr(e,a):xr(e,a)}const yr=()=>({scrollX:Re(0),scrollY:Re(0),scrollXProgress:Re(0),scrollYProgress:Re(0)}),Le=e=>e?!e.current:!1;function zt(e,n,r,o){return{factory:a=>{let i;const s=()=>{if(Le(r)||Le(o)){rt.read(s);return}i=an(a,{...n,axis:e,container:r?.current||void 0,target:o?.current||void 0})};return rt.read(s),()=>{Qt(s),i?.()}},times:[0,1],keyframes:[0,1],ease:a=>a,duration:1}}function br(e,n){return typeof window>"u"?!1:e?Gt()&&!!at(n):Xt()}function kr({container:e,target:n,...r}={}){const o=De(yr);br(n,r.offset)&&(o.scrollXProgress.accelerate=zt("x",r,e,n),o.scrollYProgress.accelerate=zt("y",r,e,n));const a=j.useRef(null),i=j.useRef(!1),s=j.useCallback(()=>(a.current=an((u,{x:m,y:x})=>{o.scrollX.set(m.current),o.scrollXProgress.set(m.progress),o.scrollY.set(x.current),o.scrollYProgress.set(x.progress)},{...r,container:e?.current||void 0,target:n?.current||void 0}),()=>{a.current?.()}),[e,n,JSON.stringify(r.offset)]);return Zt(()=>{if(i.current=!1,Le(e)||Le(n)){i.current=!0;return}else return s()},[s]),j.useEffect(()=>{if(!i.current)return;let u;const m=()=>{const x=Le(e),p=Le(n);!x&&!p&&(u=s())};return rt.read(m),()=>{Qt(m),u?.()}},[s]),o}function cn(e){const n=De(()=>Re(e)),{isStatic:r}=j.useContext(Ke);if(r){const[,o]=j.useState(e);j.useEffect(()=>n.on("change",o),[])}return n}function ln(e,n){const r=cn(n()),o=()=>r.set(n());return o(),Zt(()=>{const a=()=>Se.preRender(o,!1,!0),i=e.map(s=>s.on("change",a));return()=>{i.forEach(s=>s()),$e(o)}}),r}function wr(e){Je.current=[],e();const n=ln(Je.current,e);return Je.current=void 0,n}function Me(e,n,r,o){if(typeof e=="function")return wr(e);if(r!==void 0&&!Array.isArray(r)&&typeof n!="function")return jr(e,n,r,o);const s=typeof n=="function"?n:Yn(n,r,o),u=Array.isArray(e)?Ft(e,s):Ft([e],([x])=>s(x)),m=Array.isArray(e)?void 0:e.accelerate;return m&&!m.isTransformed&&typeof n!="function"&&Array.isArray(r)&&o?.clamp!==!1&&(u.accelerate={...m,times:n,keyframes:r,isTransformed:!0}),u}function Ft(e,n){const r=De(()=>[]);return ln(e,()=>{r.length=0;const o=e.length;for(let a=0;a<o;a++)r[a]=e[a].get();return n(r)})}function jr(e,n,r,o){const a=De(()=>Object.keys(r)),i=De(()=>({}));for(const s of a)i[s]=Me(e,n,r[s],o);return i}function Er(e,n={}){const{isStatic:r}=j.useContext(Ke),o=()=>qe(e)?e.get():e;if(r)return Me(o);const a=cn(o());return j.useInsertionEffect(()=>qn(a,e,n),[a,JSON.stringify(n)]),a}function Ar(e,n={}){return Er(e,{type:"spring",...n})}function Mr(){const e=ot(),{reducedMotion:n}=j.useContext(Ke);return n==="never"?!1:n==="always"?!0:e}function it(e){return typeof e=="object"&&!Array.isArray(e)}function dn(e,n,r,o){return e==null?[]:typeof e=="string"&&it(n)?Jt(e,r,o):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(a=>a!=null):[e]}function Sr(e,n,r){return e*(n+1)+r*n}function It(e,n,r,o){return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?r:n.startsWith("<")?Math.max(0,r+parseFloat(n.slice(1))):o.get(n)??e}function Tr(e,n,r){for(let o=0;o<e.length;o++){const a=e[o];a.at>n&&a.at<r&&(en(e,a),o--)}}function Nr(e,n,r,o,a,i){Tr(e,a,i);for(let s=0;s<n.length;s++)e.push({value:n[s],at:Cn(a,i,o[s]),easing:nn(r,s)})}function Cr(e,n,r=0){const o=n+1+n*r;for(let a=0;a<e.length;a++)e[a]=e[a]/o}function Rr(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const Lr="easeInOut",Dr=20;function Or(e,{defaultTransition:n={},...r}={},o,a){const i=n.duration||.3,s=new Map,u=new Map,m={},x=new Map;let p=0,w=0,E=0;for(let N=0;N<e.length;N++){const _=e[N];if(typeof _=="string"){x.set(_,w);continue}else if(!Array.isArray(_)){x.set(_.name,It(w,_.at,p,x));continue}let[Q,U,D={}]=_;D.at!==void 0&&(w=It(w,D.at,p,x));let P=0;const te=(J,ie,q,ne=0,ae=0)=>{const z=zr(J),{delay:y=0,times:T=qt(z),type:h=n.type||"keyframes",repeat:$,repeatType:K,repeatDelay:fe=0,...ue}=ie;let{ease:Z=n.ease||"easeOut",duration:C}=ie;const ce=typeof y=="function"?y(ne,ae):y,xe=z.length,pe=On(h)?h:a?.[h||"keyframes"];if(xe<=2&&pe){let W=100;if(xe===2&&Br(z)){const re=z[1]-z[0];W=Math.abs(re)}const B={...n,...ue};C!==void 0&&(B.duration=zn(C));const ee=Rn(B,W,pe);Z=ee.ease,C=ee.duration}C??(C=i);const ge=w+ce;T.length===1&&T[0]===0&&(T[1]=1);const O=T.length-z.length;if(O>0&&Ln(T,O),z.length===1&&z.unshift(null),$&&$<Dr){const W=C>0?fe/C:0;C=Sr(C,$,fe);const B=[...z],ee=[...T];Z=Array.isArray(Z)?[...Z]:[Z];const re=[...Z],ve=K==="reverse"||K==="mirror";let we=B,X=re;ve&&(we=[...B].reverse(),K==="reverse"&&(X=[...re].reverse().map(F=>typeof F=="function"?Dn(F):F)));for(let F=0;F<$;F++){const je=ve&&F%2===0,se=je?we:B,k=je?X:re,Ee=(F+1)*(1+W);W>0&&(z.push(z[z.length-1]),T.push(Ee),Z.push("linear")),z.push(...se);for(let be=0;be<se.length;be++)T.push(ee[be]+Ee),Z.push(be===0?"linear":nn(k,be-1))}Cr(T,$,W)}const G=ge+C;Nr(q,z,Z,T,ge,G),P=Math.max(ce+C,P),E=Math.max(G,E)};if(qe(Q)){const J=Bt(Q,u);te(U,D,Pt("default",J))}else{const J=dn(Q,U,o,m),ie=J.length;for(let q=0;q<ie;q++){U=U,D=D;const ne=J[q],ae=Bt(ne,u);for(const z in U)te(U[z],Fr(D,z),Pt(z,ae),q,ie)}}p=w,w+=P}return u.forEach((N,_)=>{for(const Q in N){const U=N[Q];U.sort(Rr);const D=[],P=[],te=[];for(let ne=0;ne<U.length;ne++){const{at:ae,value:z,easing:y}=U[ne];D.push(z),P.push(Yt(0,E,ae)),te.push(y||"easeOut")}P[0]!==0&&(P.unshift(0),D.unshift(D[0]),te.unshift(Lr)),P[P.length-1]!==1&&(P.push(1),D.push(null)),s.has(_)||s.set(_,{keyframes:{},transition:{}});const J=s.get(_);J.keyframes[Q]=D;const{type:ie,...q}=n;J.transition[Q]={...q,duration:E,ease:te,times:P,...r}}}),s}function Bt(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function Pt(e,n){return n[e]||(n[e]=[]),n[e]}function zr(e){return Array.isArray(e)?e:[e]}function Fr(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const Ir=e=>typeof e=="number",Br=e=>e.every(Ir);function Pr(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=Fn(e)&&!In(e)?new Bn(n):new Pn(n);r.mount(e),Ge.set(e,r)}function _r(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new Zn(n);r.mount(e),Ge.set(e,r)}function Ur(e,n){return qe(e)||typeof e=="number"||typeof e=="string"&&!it(n)}function fn(e,n,r,o){const a=[];if(Ur(e,n))a.push(_n(e,it(n)&&n.default||n,r&&(r.default||r)));else{if(e==null)return a;const i=dn(e,n,o),s=i.length;for(let u=0;u<s;u++){const m=i[u],x=m instanceof Element?Pr:_r;Ge.has(m)||x(m);const p=Ge.get(m),w={...r};"delay"in w&&typeof w.delay=="function"&&(w.delay=w.delay(u,s)),a.push(...Un(p,{...n,transition:w},{}))}}return a}function Wr(e,n,r){const o=[],a=e.map(s=>{if(Array.isArray(s)&&typeof s[0]=="function"){const u=s[0],m=Re(0);return m.on("change",u),s.length===1?[m,[0,1]]:s.length===2?[m,[0,1],s[1]]:[m,s[1],s[2]]}return s});return Or(a,n,r,{spring:Wn}).forEach(({keyframes:s,transition:u},m)=>{o.push(...fn(m,s,u))}),o}function Vr(e){return Array.isArray(e)&&e.some(Array.isArray)}function un(e={}){const{scope:n,reduceMotion:r,skipAnimations:o}=e;function a(i,s,u){let m=[],x;const p={};if(r!==void 0&&(p.reduceMotion=r),o!==void 0&&(p.skipAnimations=o),Vr(i)){const{onComplete:E,...N}=s||{};typeof E=="function"&&(x=E),m=Wr(i,{...p,...N},n)}else{const{onComplete:E,...N}=u||{};typeof E=="function"&&(x=E),m=fn(i,s,{...p,...N},n)}const w=new $n(m);return x&&w.finished.then(x),n&&(n.animations.push(w),w.finished.then(()=>{en(n.animations,w)})),w}return a}un();function Hr(){const e=De(()=>({current:null,animations:[]})),n=Mr()??void 0,{skipAnimations:r}=j.useContext(Ke),o=j.useMemo(()=>un({scope:e,reduceMotion:n,skipAnimations:r}),[e,n,r]);return Qn(()=>{e.animations.forEach(a=>a.stop()),e.animations.length=0}),[e,o]}const $r={some:0,all:1};function Gr(e,n,{root:r,margin:o,amount:a="some"}={}){const i=Jt(e),s=new WeakMap,u=x=>{x.forEach(p=>{const w=s.get(p.target);if(p.isIntersecting!==!!w)if(p.isIntersecting){const E=n(p.target,p);typeof E=="function"?s.set(p.target,E):m.unobserve(p.target)}else typeof w=="function"&&(w(p),s.delete(p.target))})},m=new IntersectionObserver(u,{root:r,rootMargin:o,threshold:typeof a=="number"?a:$r[a]});return i.forEach(x=>m.observe(x)),()=>m.disconnect()}function Xr(e,{root:n,margin:r,amount:o,once:a=!1,initial:i=!1}={}){const[s,u]=j.useState(i);return j.useEffect(()=>{if(!e.current||a&&s)return;const m=()=>(u(!0),a?void 0:()=>u(!1)),x={root:n&&n.current||void 0,margin:r,amount:o};return Gr(e.current,m,x)},[n,e,r,a,o]),s}const nt=new WeakMap;let Ve;function l({text:e}){const n=j.useRef(null),[r,o]=j.useState(!1);j.useEffect(()=>{const i=n.current;if(i){if(!("IntersectionObserver"in window)){o(!0);return}return Ve??=new IntersectionObserver(s=>{s.forEach(u=>{u.isIntersecting&&(nt.get(u.target)?.(),Ve?.unobserve(u.target))})},{threshold:.05}),nt.set(i,()=>o(!0)),Ve.observe(i),()=>{Ve?.unobserve(i),nt.delete(i)}}},[]);let a=0;return j.createElement("reveal-text",{ref:n,"data-visible":String(r)},String(e).split(/(\s+)/).map((i,s)=>/\S/.test(i)?j.createElement("reveal-word",{key:s,style:{"--word-delay":`${Math.min(a++*.045,.9)}s`}},i):i))}const Yr=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hn=(...e)=>e.filter((n,r,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===r).join(" ").trim();var qr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Kr=j.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:a="",children:i,iconNode:s,...u},m)=>j.createElement("svg",{ref:m,...qr,width:n,height:n,stroke:e,strokeWidth:o?Number(r)*24/Number(n):r,className:hn("lucide",a),...u},[...s.map(([x,p])=>j.createElement(x,p)),...Array.isArray(i)?i:[i]]));const me=(e,n)=>{const r=j.forwardRef(({className:o,...a},i)=>j.createElement(Kr,{ref:i,iconNode:n,className:hn(`lucide-${Yr(e)}`,o),...a}));return r.displayName=`${e}`,r};const _t=me("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);const Oe=me("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const Zr=me("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);const Qr=me("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const Jr=me("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);const es=me("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);const ts=me("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const ns=me("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const rs=me("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const ss=me("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),os=`#define LOWQUALITY\r
\r
//==========================================================================================\r
// general utilities\r
//==========================================================================================\r
#define ZERO (min(iFrame,0))\r
\r
float sdEllipsoidY( in vec3 p, in vec2 r )\r
{\r
    float k0 = length(p/r.xyx);\r
    float k1 = length(p/(r.xyx*r.xyx));\r
    return k0*(k0-1.0)/k1;\r
}\r
float sdEllipsoid( in vec3 p, in vec3 r )\r
{\r
    float k0 = length(p/r);\r
    float k1 = length(p/(r*r));\r
    return k0*(k0-1.0)/k1;\r
}\r
\r
// return smoothstep and its derivative\r
vec2 smoothstepd( float a, float b, float x)\r
{\r
	if( x<a ) return vec2( 0.0, 0.0 );\r
	if( x>b ) return vec2( 1.0, 0.0 );\r
    float ir = 1.0/(b-a);\r
    x = (x-a)*ir;\r
    return vec2( x*x*(3.0-2.0*x), 6.0*x*(1.0-x)*ir );\r
}\r
\r
mat3 setCamera( in vec3 ro, in vec3 ta, float cr )\r
{\r
	vec3 cw = normalize(ta-ro);\r
	vec3 cp = vec3(sin(cr), cos(cr),0.0);\r
	vec3 cu = normalize( cross(cw,cp) );\r
	vec3 cv = normalize( cross(cu,cw) );\r
    return mat3( cu, cv, cw );\r
}\r
\r
//==========================================================================================\r
// hashes (low quality, do NOT use in production)\r
//==========================================================================================\r
\r
float hash1( vec2 p )\r
{\r
    p  = 50.0*fract( p*0.3183099 );\r
    return fract( p.x*p.y*(p.x+p.y) );\r
}\r
\r
float hash1( float n )\r
{\r
    return fract( n*17.0*fract( n*0.3183099 ) );\r
}\r
\r
vec2 hash2( vec2 p ) \r
{\r
    const vec2 k = vec2( 0.3183099, 0.3678794 );\r
    float n = 111.0*p.x + 113.0*p.y;\r
    return fract(n*fract(k*n));\r
}\r
\r
//==========================================================================================\r
// noises\r
//==========================================================================================\r
\r
// value noise, and its analytical derivatives\r
vec4 noised( in vec3 x )\r
{\r
    vec3 p = floor(x);\r
    vec3 w = fract(x);\r
    #if 1\r
    vec3 u = w*w*w*(w*(w*6.0-15.0)+10.0);\r
    vec3 du = 30.0*w*w*(w*(w-2.0)+1.0);\r
    #else\r
    vec3 u = w*w*(3.0-2.0*w);\r
    vec3 du = 6.0*w*(1.0-w);\r
    #endif\r
\r
    float n = p.x + 317.0*p.y + 157.0*p.z;\r
    \r
    float a = hash1(n+0.0);\r
    float b = hash1(n+1.0);\r
    float c = hash1(n+317.0);\r
    float d = hash1(n+318.0);\r
    float e = hash1(n+157.0);\r
	float f = hash1(n+158.0);\r
    float g = hash1(n+474.0);\r
    float h = hash1(n+475.0);\r
\r
    float k0 =   a;\r
    float k1 =   b - a;\r
    float k2 =   c - a;\r
    float k3 =   e - a;\r
    float k4 =   a - b - c + d;\r
    float k5 =   a - c - e + g;\r
    float k6 =   a - b - e + f;\r
    float k7 = - a + b + c - d + e - f - g + h;\r
\r
    return vec4( -1.0+2.0*(k0 + k1*u.x + k2*u.y + k3*u.z + k4*u.x*u.y + k5*u.y*u.z + k6*u.z*u.x + k7*u.x*u.y*u.z), \r
                      2.0* du * vec3( k1 + k4*u.y + k6*u.z + k7*u.y*u.z,\r
                                      k2 + k5*u.z + k4*u.x + k7*u.z*u.x,\r
                                      k3 + k6*u.x + k5*u.y + k7*u.x*u.y ) );\r
}\r
\r
float noise( in vec3 x )\r
{\r
    vec3 p = floor(x);\r
    vec3 w = fract(x);\r
    \r
    #if 1\r
    vec3 u = w*w*w*(w*(w*6.0-15.0)+10.0);\r
    #else\r
    vec3 u = w*w*(3.0-2.0*w);\r
    #endif\r
    \r
\r
\r
    float n = p.x + 317.0*p.y + 157.0*p.z;\r
    \r
    float a = hash1(n+0.0);\r
    float b = hash1(n+1.0);\r
    float c = hash1(n+317.0);\r
    float d = hash1(n+318.0);\r
    float e = hash1(n+157.0);\r
	float f = hash1(n+158.0);\r
    float g = hash1(n+474.0);\r
    float h = hash1(n+475.0);\r
\r
    float k0 =   a;\r
    float k1 =   b - a;\r
    float k2 =   c - a;\r
    float k3 =   e - a;\r
    float k4 =   a - b - c + d;\r
    float k5 =   a - c - e + g;\r
    float k6 =   a - b - e + f;\r
    float k7 = - a + b + c - d + e - f - g + h;\r
\r
    return -1.0+2.0*(k0 + k1*u.x + k2*u.y + k3*u.z + k4*u.x*u.y + k5*u.y*u.z + k6*u.z*u.x + k7*u.x*u.y*u.z);\r
}\r
\r
vec3 noised( in vec2 x )\r
{\r
    vec2 p = floor(x);\r
    vec2 w = fract(x);\r
    #if 1\r
    vec2 u = w*w*w*(w*(w*6.0-15.0)+10.0);\r
    vec2 du = 30.0*w*w*(w*(w-2.0)+1.0);\r
    #else\r
    vec2 u = w*w*(3.0-2.0*w);\r
    vec2 du = 6.0*w*(1.0-w);\r
    #endif\r
    \r
    float a = hash1(p+vec2(0,0));\r
    float b = hash1(p+vec2(1,0));\r
    float c = hash1(p+vec2(0,1));\r
    float d = hash1(p+vec2(1,1));\r
\r
    float k0 = a;\r
    float k1 = b - a;\r
    float k2 = c - a;\r
    float k4 = a - b - c + d;\r
\r
    return vec3( -1.0+2.0*(k0 + k1*u.x + k2*u.y + k4*u.x*u.y), \r
                 2.0*du * vec2( k1 + k4*u.y,\r
                            k2 + k4*u.x ) );\r
}\r
\r
float noise( in vec2 x )\r
{\r
    vec2 p = floor(x);\r
    vec2 w = fract(x);\r
    #if 1\r
    vec2 u = w*w*w*(w*(w*6.0-15.0)+10.0);\r
    #else\r
    vec2 u = w*w*(3.0-2.0*w);\r
    #endif\r
\r
    float a = hash1(p+vec2(0,0));\r
    float b = hash1(p+vec2(1,0));\r
    float c = hash1(p+vec2(0,1));\r
    float d = hash1(p+vec2(1,1));\r
    \r
    return -1.0+2.0*(a + (b-a)*u.x + (c-a)*u.y + (a - b - c + d)*u.x*u.y);\r
}\r
\r
//==========================================================================================\r
// fbm constructions\r
//==========================================================================================\r
\r
const mat3 m3  = mat3( 0.00,  0.80,  0.60,\r
                      -0.80,  0.36, -0.48,\r
                      -0.60, -0.48,  0.64 );\r
const mat3 m3i = mat3( 0.00, -0.80, -0.60,\r
                       0.80,  0.36, -0.48,\r
                       0.60, -0.48,  0.64 );\r
const mat2 m2 = mat2(  0.80,  0.60,\r
                      -0.60,  0.80 );\r
const mat2 m2i = mat2( 0.80, -0.60,\r
                       0.60,  0.80 );\r
\r
//------------------------------------------------------------------------------------------\r
\r
float fbm_4( in vec2 x )\r
{\r
    float f = 1.9;\r
    float s = 0.55;\r
    float a = 0.0;\r
    float b = 0.5;\r
    for( int i=ZERO; i<4; i++ )\r
    {\r
        float n = noise(x);\r
        a += b*n;\r
        b *= s;\r
        x = f*m2*x;\r
    }\r
	return a;\r
}\r
\r
float fbm_4( in vec3 x )\r
{\r
    float f = 2.0;\r
    float s = 0.5;\r
    float a = 0.0;\r
    float b = 0.5;\r
    for( int i=ZERO; i<4; i++ )\r
    {\r
        float n = noise(x);\r
        a += b*n;\r
        b *= s;\r
        x = f*m3*x;\r
    }\r
	return a;\r
}\r
\r
vec4 fbmd_7( in vec3 x )\r
{\r
    float f = 1.92;\r
    float s = 0.5;\r
    float a = 0.0;\r
    float b = 0.5;\r
    vec3  d = vec3(0.0);\r
    mat3  m = mat3(1.0,0.0,0.0,\r
                   0.0,1.0,0.0,\r
                   0.0,0.0,1.0);\r
    for( int i=ZERO; i<7; i++ )\r
    {\r
        vec4 n = noised(x);\r
        a += b*n.x;          // accumulate values		\r
        d += b*m*n.yzw;      // accumulate derivatives\r
        b *= s;\r
        x = f*m3*x;\r
        m = f*m3i*m;\r
    }\r
	return vec4( a, d );\r
}\r
\r
vec4 fbmd_8( in vec3 x )\r
{\r
    float f = 2.0;\r
    float s = 0.65;\r
    float a = 0.0;\r
    float b = 0.5;\r
    vec3  d = vec3(0.0);\r
    mat3  m = mat3(1.0,0.0,0.0,\r
                   0.0,1.0,0.0,\r
                   0.0,0.0,1.0);\r
    for( int i=ZERO; i<8; i++ )\r
    {\r
        vec4 n = noised(x);\r
        a += b*n.x;          // accumulate values		\r
        if( i<4 )\r
        d += b*m*n.yzw;      // accumulate derivatives\r
        b *= s;\r
        x = f*m3*x;\r
        m = f*m3i*m;\r
    }\r
	return vec4( a, d );\r
}\r
\r
float fbm_9( in vec2 x )\r
{\r
    float f = 1.9;\r
    float s = 0.55;\r
    float a = 0.0;\r
    float b = 0.5;\r
    for( int i=ZERO; i<9; i++ )\r
    {\r
        float n = noise(x);\r
        a += b*n;\r
        b *= s;\r
        x = f*m2*x;\r
    }\r
    \r
	return a;\r
}\r
\r
vec3 fbmd_9( in vec2 x )\r
{\r
    float f = 1.9;\r
    float s = 0.55;\r
    float a = 0.0;\r
    float b = 0.5;\r
    vec2  d = vec2(0.0);\r
    mat2  m = mat2(1.0,0.0,0.0,1.0);\r
    for( int i=ZERO; i<9; i++ )\r
    {\r
        vec3 n = noised(x);\r
        a += b*n.x;          // accumulate values		\r
        d += b*m*n.yz;       // accumulate derivatives\r
        b *= s;\r
        x = f*m2*x;\r
        m = f*m2i*m;\r
    }\r
\r
	return vec3( a, d );\r
}\r
\r
//==========================================================================================\r
// specifics to the actual painting\r
//==========================================================================================\r
\r
\r
//------------------------------------------------------------------------------------------\r
// global\r
//------------------------------------------------------------------------------------------\r
\r
const vec3  kSunDir = vec3(-0.624695,0.468521,-0.624695);\r
const float kMaxTreeHeight = 4.8;\r
const float kMaxHeight = 840.0;\r
\r
vec3 fog( in vec3 col, float t )\r
{\r
    vec3 ext = exp2(-t*0.00025*vec3(1,1.5,4)); \r
    return col*ext + (1.0-ext)*vec3(0.55,0.55,0.58); // 0.55\r
}\r
\r
//------------------------------------------------------------------------------------------\r
// clouds\r
//------------------------------------------------------------------------------------------\r
\r
vec4 cloudsFbm( in vec3 pos )\r
{\r
    return fbmd_8(pos*0.0015+vec3(2.0,1.1,1.0)+0.07*vec3(iTime,0.5*iTime,-0.15*iTime));\r
}\r
\r
vec4 cloudsMap( in vec3 pos, out float nnd )\r
{\r
    float d = abs(pos.y-900.0)-40.0;\r
    vec3 gra = vec3(0.0,sign(pos.y-900.0),0.0);\r
    \r
    vec4 n = cloudsFbm(pos);\r
    d += 400.0*n.x * (0.7+0.3*gra.y);\r
    \r
    if( d>0.0 ) return vec4(-d,0.0,0.0,0.0);\r
    \r
    nnd = -d;\r
    d = min(-d/100.0,0.25);\r
    \r
    //gra += 0.1*n.yzw *  (0.7+0.3*gra.y);\r
    \r
    return vec4( d, gra );\r
}\r
\r
float cloudsShadowFlat( in vec3 ro, in vec3 rd )\r
{\r
    float t = (900.0-ro.y)/rd.y;\r
    if( t<0.0 ) return 1.0;\r
    vec3 pos = ro + rd*t;\r
    return cloudsFbm(pos).x;\r
}\r
\r
float terrainShadow( in vec3 ro, in vec3 rd, in float mint );\r
\r
vec4 renderClouds( in vec3 ro, in vec3 rd, float tmin, float tmax, inout float resT, in vec2 px )\r
{\r
    vec4 sum = vec4(0.0);\r
\r
    // bounding volume!!\r
    float tl = ( 600.0-ro.y)/rd.y;\r
    float th = (1200.0-ro.y)/rd.y;\r
    if( tl>0.0 ) tmin = max( tmin, tl ); else return sum;\r
    if( th>0.0 ) tmax = min( tmax, th );\r
\r
    float t = tmin;\r
    //t += 1.0*hash1(gl_FragCoord.xy);\r
    float lastT = -1.0;\r
    float thickness = 0.0;\r
    for(int i=ZERO; i<128; i++)\r
    { \r
        vec3  pos = ro + t*rd; \r
        float nnd;\r
        vec4  denGra = cloudsMap( pos, nnd ); \r
        float den = denGra.x;\r
        float dt = max(0.2,0.011*t);\r
        //dt *= hash1(px+float(i));\r
        if( den>0.001 ) \r
        { \r
            float kk;\r
            cloudsMap( pos+kSunDir*70.0, kk );\r
            float sha = 1.0-smoothstep(-200.0,200.0,kk); sha *= 1.5;\r
            \r
            vec3 nor = normalize(denGra.yzw);\r
            float dif = clamp( 0.4+0.6*dot(nor,kSunDir), 0.0, 1.0 )*sha; \r
            float fre = clamp( 1.0+dot(nor,rd), 0.0, 1.0 )*sha;\r
            float occ = 0.2+0.7*max(1.0-kk/200.0,0.0) + 0.1*(1.0-den);\r
            // lighting\r
            vec3 lin  = vec3(0.0);\r
                 lin += vec3(0.70,0.80,1.00)*1.0*(0.5+0.5*nor.y)*occ;\r
                 lin += vec3(0.10,0.40,0.20)*1.0*(0.5-0.5*nor.y)*occ;\r
                 lin += vec3(1.00,0.95,0.85)*3.0*dif*occ + 0.1;\r
\r
            // color\r
            vec3 col = vec3(0.8,0.8,0.8)*0.45;\r
\r
            col *= lin;\r
\r
            col = fog( col, t );\r
\r
            // front to back blending    \r
            float alp = clamp(den*0.5*0.125*dt,0.0,1.0);\r
            col.rgb *= alp;\r
            sum = sum + vec4(col,alp)*(1.0-sum.a);\r
\r
            thickness += dt*den;\r
            if( lastT<0.0 ) lastT = t;            \r
        }\r
        else \r
        {\r
            dt = abs(den)+0.2;\r
\r
        }\r
        t += dt;\r
        if( sum.a>0.995 || t>tmax ) break;\r
    }\r
    \r
    //resT = min(resT, (150.0-ro.y)/rd.y );\r
    if( lastT>0.0 ) resT = min(resT,lastT);\r
    //if( lastT>0.0 ) resT = mix( resT, lastT, sum.w );\r
    \r
    \r
    sum.xyz += max(0.0,1.0-0.0125*thickness)*vec3(1.00,0.60,0.40)*0.3*pow(clamp(dot(kSunDir,rd),0.0,1.0),32.0);\r
\r
    return clamp( sum, 0.0, 1.0 );\r
}\r
\r
\r
//------------------------------------------------------------------------------------------\r
// terrain\r
//------------------------------------------------------------------------------------------\r
\r
vec2 terrainMap( in vec2 p )\r
{\r
    float e = fbm_9( p/2000.0 + vec2(1.0,-2.0) );\r
    float a = 1.0-smoothstep( 0.12, 0.13, abs(e+0.12) ); // flag high-slope areas (-0.25, 0.0)\r
    e = 600.0*e + 600.0;\r
    \r
    // cliff\r
    e += 90.0*smoothstep( 552.0, 594.0, e );\r
    //e += 90.0*smoothstep( 550.0, 600.0, e );\r
    \r
    return vec2(e,a);\r
}\r
\r
vec4 terrainMapD( in vec2 p )\r
{\r
    vec3 e = fbmd_9( p/2000.0 + vec2(1.0,-2.0) );\r
    e.x  = 600.0*e.x + 600.0;\r
    e.yz = 600.0*e.yz;\r
\r
    // cliff\r
    vec2 c = smoothstepd( 550.0, 600.0, e.x );\r
	e.x  = e.x  + 90.0*c.x;\r
	e.yz = e.yz + 90.0*c.y*e.yz;     // chain rule\r
    \r
    e.yz /= 2000.0;\r
    return vec4( e.x, normalize( vec3(-e.y,1.0,-e.z) ) );\r
}\r
\r
vec3 terrainNormal( in vec2 pos )\r
{\r
#if 1\r
    return terrainMapD(pos).yzw;\r
#else    \r
    vec2 e = vec2(0.03,0.0);\r
	return normalize( vec3(terrainMap(pos-e.xy).x - terrainMap(pos+e.xy).x,\r
                           2.0*e.x,\r
                           terrainMap(pos-e.yx).x - terrainMap(pos+e.yx).x ) );\r
#endif    \r
}\r
\r
float terrainShadow( in vec3 ro, in vec3 rd, in float mint )\r
{\r
    float res = 1.0;\r
    float t = mint;\r
#ifdef LOWQUALITY\r
    for( int i=ZERO; i<32; i++ )\r
    {\r
        vec3  pos = ro + t*rd;\r
        vec2  env = terrainMap( pos.xz );\r
        float hei = pos.y - env.x;\r
        res = min( res, 32.0*hei/t );\r
        if( res<0.0001 || pos.y>kMaxHeight ) break;\r
        t += clamp( hei, 2.0+t*0.1, 100.0 );\r
    }\r
#else\r
    for( int i=ZERO; i<128; i++ )\r
    {\r
        vec3  pos = ro + t*rd;\r
        vec2  env = terrainMap( pos.xz );\r
        float hei = pos.y - env.x;\r
        res = min( res, 32.0*hei/t );\r
        if( res<0.0001 || pos.y>kMaxHeight  ) break;\r
        t += clamp( hei, 0.5+t*0.05, 25.0 );\r
    }\r
#endif\r
    return clamp( res, 0.0, 1.0 );\r
}\r
\r
vec2 raymarchTerrain( in vec3 ro, in vec3 rd, float tmin, float tmax )\r
{\r
    // bounding plane\r
    float tp = (kMaxHeight+kMaxTreeHeight-ro.y)/rd.y;\r
    if( tp>0.0 ) tmax = min( tmax, tp );\r
    \r
    // raymarch\r
    float dis, th;\r
    float t2 = -1.0;\r
    float t = tmin; \r
    float ot = t;\r
    float odis = 0.0;\r
    float odis2 = 0.0;\r
    for( int i=ZERO; i<400; i++ )\r
    {\r
        th = 0.001*t;\r
\r
        vec3  pos = ro + t*rd;\r
        vec2  env = terrainMap( pos.xz );\r
        float hei = env.x;\r
\r
        // tree envelope\r
        float dis2 = pos.y - (hei+kMaxTreeHeight*1.1);\r
        if( dis2<th ) \r
        {\r
            if( t2<0.0 )\r
            {\r
                t2 = ot + (th-odis2)*(t-ot)/(dis2-odis2); // linear interpolation for better accuracy\r
            }\r
        }\r
        odis2 = dis2;\r
        \r
        // terrain\r
        dis = pos.y - hei;\r
        if( dis<th ) break;\r
        \r
        ot = t;\r
        odis = dis;\r
        t += dis*0.8*(1.0-0.75*env.y); // slow down in step areas\r
        if( t>tmax ) break;\r
    }\r
\r
    if( t>tmax ) t = -1.0;\r
    else t = ot + (th-odis)*(t-ot)/(dis-odis); // linear interpolation for better accuracy\r
    \r
    return vec2(t,t2);\r
}\r
\r
//------------------------------------------------------------------------------------------\r
// trees\r
//------------------------------------------------------------------------------------------\r
\r
float treesMap( in vec3 p, in float rt, out float oHei, out float oMat, out float oDis )\r
{\r
    oHei = 1.0;\r
    oDis = 0.0;\r
    oMat = 0.0;\r
        \r
    float base = terrainMap(p.xz).x; \r
    \r
    float bb = fbm_4(p.xz*0.075);\r
\r
    float d = 20.0;\r
    vec2 n = floor( p.xz/2.0 );\r
    vec2 f = fract( p.xz/2.0 );\r
    for( int j=0; j<=1; j++ )\r
    for( int i=0; i<=1; i++ )\r
    {\r
        vec2  g = vec2( float(i), float(j) ) - step(f,vec2(0.5));\r
        vec2  o = hash2( n + g );\r
        vec2  v = hash2( n + g + vec2(13.1,71.7) );\r
        vec2  r = g - f + o;\r
\r
        float height = kMaxTreeHeight * (0.4+0.8*v.x);\r
        float width = 0.5 + 0.2*v.x + 0.3*v.y;\r
\r
        if( bb<0.0 ) width *= 0.5; else height *= 0.7;\r
        \r
        vec3  q = vec3(r.x,p.y-base-height*0.5,r.y);\r
        \r
        float k = sdEllipsoidY( q, vec2(width,0.5*height) );\r
\r
        if( k<d )\r
        { \r
            d = k;\r
            oMat = 0.5*hash1(n+g+111.0);\r
            if( bb>0.0 ) oMat += 0.5;\r
            oHei = (p.y - base)/height;\r
            oHei *= 0.5 + 0.5*length(q) / width;\r
        }\r
    }\r
\r
    // distort ellipsoids to make them look like trees (works only in the distance really)\r
    if( rt<1200.0 )\r
    {\r
        p.y -= 600.0;\r
        float s = fbm_4( p*3.0 );\r
        s = s*s;\r
        float att = 1.0-smoothstep(100.0,1200.0,rt);\r
        d += 4.0*s*att;\r
        oDis = s*att;\r
    }\r
    \r
    return d;\r
}\r
\r
float treesShadow( in vec3 ro, in vec3 rd )\r
{\r
    float res = 1.0;\r
    float t = 0.02;\r
#ifdef LOWQUALITY\r
    for( int i=ZERO; i<64; i++ )\r
    {\r
        float kk1, kk2, kk3;\r
        vec3 pos = ro + rd*t;\r
        float h = treesMap( pos, t, kk1, kk2, kk3 );\r
        res = min( res, 32.0*h/t );\r
        t += h;\r
        if( res<0.001 || t>50.0 || pos.y>kMaxHeight+kMaxTreeHeight ) break;\r
    }\r
#else\r
    for( int i=ZERO; i<150; i++ )\r
    {\r
        float kk1, kk2, kk3;\r
        float h = treesMap( ro + rd*t, t, kk1, kk2, kk3 );\r
        res = min( res, 32.0*h/t );\r
        t += h;\r
        if( res<0.001 || t>120.0 ) break;\r
    }\r
#endif\r
    return clamp( res, 0.0, 1.0 );\r
}\r
\r
vec3 treesNormal( in vec3 pos, in float t )\r
{\r
    float kk1, kk2, kk3;\r
#if 0    \r
    const float eps = 0.005;\r
    vec2 e = vec2(1.0,-1.0)*0.5773*eps;\r
    return normalize( e.xyy*treesMap( pos + e.xyy, t, kk1, kk2, kk3 ) + \r
                      e.yyx*treesMap( pos + e.yyx, t, kk1, kk2, kk3 ) + \r
                      e.yxy*treesMap( pos + e.yxy, t, kk1, kk2, kk3 ) + \r
                      e.xxx*treesMap( pos + e.xxx, t, kk1, kk2, kk3 ) );            \r
#else\r
    // inspired by tdhooper and klems - a way to prevent the compiler from inlining map() 4 times\r
    vec3 n = vec3(0.0);\r
    for( int i=ZERO; i<4; i++ )\r
    {\r
        vec3 e = 0.5773*(2.0*vec3((((i+3)>>1)&1),((i>>1)&1),(i&1))-1.0);\r
        n += e*treesMap(pos+0.005*e, t, kk1, kk2, kk3);\r
    }\r
    return normalize(n);\r
#endif    \r
}\r
\r
//------------------------------------------------------------------------------------------\r
// sky\r
//------------------------------------------------------------------------------------------\r
\r
vec3 renderSky( in vec3 ro, in vec3 rd )\r
{\r
    // background sky     \r
    //vec3 col = vec3(0.45,0.6,0.85)/0.85 - rd.y*vec3(0.4,0.36,0.4);\r
    //vec3 col = vec3(0.4,0.6,1.1) - rd.y*0.4;\r
    vec3 col = vec3(0.42,0.62,1.1) - rd.y*0.4;\r
\r
    // clouds\r
    float t = (2500.0-ro.y)/rd.y;\r
    if( t>0.0 )\r
    {\r
        vec2 uv = (ro+t*rd).xz;\r
        float cl = fbm_9( uv*0.00104 );\r
        float dl = smoothstep(-0.2,0.6,cl);\r
        col = mix( col, vec3(1.0), 0.12*dl );\r
    }\r
    \r
	// sun glare    \r
    float sun = clamp( dot(kSunDir,rd), 0.0, 1.0 );\r
    col += 0.2*vec3(1.0,0.6,0.3)*pow( sun, 32.0 );\r
    \r
	return col;\r
}\r
\r
//------------------------------------------------------------------------------------------\r
// main image making function\r
//------------------------------------------------------------------------------------------\r
\r
void mainImage( out vec4 fragColor, in vec2 fragCoord )\r
{\r
    vec2 o = hash2( vec2(iFrame,1) ) - 0.5;\r
    \r
    vec2 p = (2.0*(fragCoord+o)-iResolution.xy)/ iResolution.y;\r
    \r
    //----------------------------------\r
    // setup\r
    //----------------------------------\r
\r
    // camera\r
    float time = iTime;\r
    vec3 ro = vec3(0.0, 401.5, 6.0);\r
    vec3 ta = vec3(0.0, 403.5, -90.0 + ro.z );\r
    \r
    //ro += vec3(10.0*sin(0.02*time),0.0,-10.0*sin(0.2+0.031*time))\r
    \r
    ro.x -= 80.0*sin(0.01*time);\r
    ta.x -= 86.0*sin(0.01*time);\r
\r
    // ray\r
    mat3 ca = setCamera( ro, ta, 0.0 );\r
    vec3 rd = ca * normalize( vec3(p,1.5));\r
\r
	float resT = 2000.0;\r
\r
    //----------------------------------\r
    // sky\r
    //----------------------------------\r
\r
    vec3 col = renderSky( ro, rd );\r
\r
\r
    //----------------------------------\r
    // raycast terrain and tree envelope\r
    //----------------------------------\r
    {\r
    const float tmax = 2000.0;\r
    int   obj = 0;\r
    vec2 t = raymarchTerrain( ro, rd, 15.0, tmax );\r
    if( t.x>0.0 )\r
    {\r
        resT = t.x;\r
        obj = 1;\r
    }\r
\r
    //----------------------------------\r
    // raycast trees, if needed\r
    //----------------------------------\r
    float hei, mid, displa;\r
    \r
    if( t.y>0.0 )\r
    {\r
        float tf = t.y;\r
        float tfMax = (t.x>0.0)?t.x:tmax;\r
        for(int i=ZERO; i<64; i++) \r
        { \r
            vec3  pos = ro + tf*rd; \r
            float dis = treesMap( pos, tf, hei, mid, displa); \r
            if( dis<(0.000125*tf) ) break;\r
            tf += dis;\r
            if( tf>tfMax ) break;\r
        }\r
        if( tf<tfMax )\r
        {\r
            resT = tf;\r
            obj = 2;\r
        }\r
    }\r
\r
    //----------------------------------\r
    // shade\r
    //----------------------------------\r
    if( obj>0 )\r
    {\r
        vec3 pos  = ro + resT*rd;\r
        vec3 epos = pos + vec3(0.0,4.8,0.0);\r
\r
        float sha1  = terrainShadow( pos+vec3(0,0.02,0), kSunDir, 0.02 );\r
        //sha1 *= smoothstep(-0.3,0.0,cloudsShadowFlat(epos, kSunDir));\r
        sha1 *= smoothstep(-0.325,-0.075,cloudsShadowFlat(epos, kSunDir));\r
        \r
        #ifndef LOWQUALITY\r
        float sha2  = treesShadow( pos+vec3(0,0.02,0), kSunDir );\r
        #endif\r
\r
        vec3 tnor = terrainNormal( pos.xz );\r
        vec3 nor;\r
        \r
        vec3 speC = vec3(1.0);\r
        //----------------------------------\r
        // terrain\r
        //----------------------------------\r
        if( obj==1 )\r
        {\r
            // bump map\r
            nor = normalize( tnor + 0.8*(1.0-abs(tnor.y))*0.8*fbmd_7( (pos-vec3(0,600,0))*0.15*vec3(1.0,0.2,1.0) ).yzw );\r
\r
            col = vec3(0.18,0.12,0.10)*.85;\r
\r
            col = 1.0*mix( col, vec3(0.1,0.1,0.0)*0.2, smoothstep(0.7,0.9,nor.y) );      \r
            float dif = clamp( dot( nor, kSunDir), 0.0, 1.0 ); \r
            dif *= sha1;\r
            #ifndef LOWQUALITY\r
            dif *= sha2;\r
            #endif\r
\r
            float bac = clamp( dot(normalize(vec3(-kSunDir.x,0.0,-kSunDir.z)),nor), 0.0, 1.0 );\r
            float foc = clamp( (pos.y/2.0-180.0)/130.0, 0.0,1.0);\r
            float dom = clamp( 0.5 + 0.5*nor.y, 0.0, 1.0 );\r
            vec3  lin  = 1.0*0.2*mix(0.1*vec3(0.1,0.2,0.1),vec3(0.7,0.9,1.5)*3.0,dom)*foc;\r
                  lin += 1.0*8.5*vec3(1.0,0.9,0.8)*dif;        \r
                  lin += 1.0*0.27*vec3(1.1,1.0,0.9)*bac*foc;\r
            speC = vec3(4.0)*dif*smoothstep(20.0,0.0,abs(pos.y/2.0-310.0)-20.0);\r
\r
            col *= lin;\r
        }\r
        //----------------------------------\r
        // trees\r
        //----------------------------------\r
        else //if( obj==2 )\r
        {\r
            vec3 gnor = treesNormal( pos, resT );\r
            \r
            nor = normalize( gnor + 2.0*tnor );\r
\r
            // --- lighting ---\r
            vec3  ref = reflect(rd,nor);\r
            float occ = clamp(hei,0.0,1.0) * pow(1.0-2.0*displa,3.0);\r
            float dif = clamp( 0.1 + 0.9*dot( nor, kSunDir), 0.0, 1.0 ); \r
            dif *= sha1;\r
            if( dif>0.0001 )\r
            {\r
                float a = clamp( 0.5+0.5*dot(tnor,kSunDir), 0.0, 1.0);\r
                a = a*a;\r
                a *= occ;\r
                a *= 0.6;\r
                a *= smoothstep(60.0,200.0,resT);\r
                // tree shadows with fake transmission\r
                #ifdef LOWQUALITY\r
                float sha2  = treesShadow( pos+kSunDir*0.1, kSunDir );\r
                #endif\r
                dif *= a+(1.0-a)*sha2;\r
            }\r
            float dom = clamp( 0.5 + 0.5*nor.y, 0.0, 1.0 );\r
            float bac = clamp( 0.5+0.5*dot(normalize(vec3(-kSunDir.x,0.0,-kSunDir.z)),nor), 0.0, 1.0 );                 \r
            float fre = clamp(1.0+dot(nor,rd),0.0,1.0);\r
            //float spe = pow( clamp(dot(ref,kSunDir),0.0, 1.0), 9.0 )*dif*(0.2+0.8*pow(fre,5.0))*occ;\r
\r
            // --- lights ---\r
            vec3 lin  = 12.0*vec3(1.2,1.0,0.7)*dif*occ*(2.5-1.5*smoothstep(0.0,120.0,resT));\r
                 lin += 0.55*mix(0.1*vec3(0.1,0.2,0.0),vec3(0.6,1.0,1.0),dom*occ);\r
                 lin += 0.07*vec3(1.0,1.0,0.9)*bac*occ;\r
                 lin += 1.10*vec3(0.9,1.0,0.8)*pow(fre,5.0)*occ*(1.0-smoothstep(100.0,200.0,resT));\r
            speC = dif*vec3(1.0,1.1,1.5)*1.2;\r
\r
            // --- material ---\r
            float brownAreas = fbm_4( pos.zx*0.015 );\r
            col = vec3(0.2,0.2,0.05);\r
            col = mix( col, vec3(0.32,0.2,0.05), smoothstep(0.2,0.9,fract(2.0*mid)) );\r
            col *= (mid<0.5)?0.65+0.35*smoothstep(300.0,600.0,resT)*smoothstep(700.0,500.0,pos.y):1.0;\r
            col = mix( col, vec3(0.25,0.16,0.01)*0.825, 0.7*smoothstep(0.1,0.3,brownAreas)*smoothstep(0.5,0.8,tnor.y) );\r
            col *= 1.0-0.5*smoothstep(400.0,700.0,pos.y);\r
            col *= lin;\r
        }\r
\r
        // spec\r
        vec3  ref = reflect(rd,nor);            \r
        float fre = clamp(1.0+dot(nor,rd),0.0,1.0);\r
        float spe = 3.0*pow( clamp(dot(ref,kSunDir),0.0, 1.0), 9.0 )*(0.05+0.95*pow(fre,5.0));\r
        col += spe*speC;\r
\r
        col = fog(col,resT);\r
    }\r
    }\r
\r
\r
\r
    float isCloud = 0.0;\r
    //----------------------------------\r
    // clouds\r
    //----------------------------------\r
    {\r
        vec4 res = renderClouds( ro, rd, 0.0, resT, resT, fragCoord );\r
        col = col*(1.0-res.w) + res.xyz;\r
        isCloud = res.w;\r
    }\r
\r
    //----------------------------------\r
    // final\r
    //----------------------------------\r
    \r
    // sun glare    \r
    float sun = clamp( dot(kSunDir,rd), 0.0, 1.0 );\r
    col += 0.25*vec3(0.8,0.4,0.2)*pow( sun, 4.0 );\r
 \r
\r
    // gamma\r
    //col = sqrt( clamp(col,0.0,1.0) );\r
    col = pow( clamp(col*1.1-0.02,0.0,1.0), vec3(0.4545) );\r
\r
    // contrast\r
    col = col*col*(3.0-2.0*col);            \r
    \r
    // color grade    \r
    col = pow( col, vec3(1.0,0.92,1.0) );   // soft green\r
    col *= vec3(1.02,0.99,0.9 );            // tint red\r
    col.z = col.z+0.1;                      // bias blue\r
    \r
    //------------------------------------------\r
	// reproject from previous frame and average\r
    //------------------------------------------\r
\r
    mat3x4 oldCam = mat3x4( texelFetch(iChannel0,ivec2(0,0), 0),\r
                            texelFetch(iChannel0,ivec2(1,0), 0),\r
                            texelFetch(iChannel0,ivec2(2,0), 0) );\r
    \r
    // world space\r
    vec4 wpos = vec4(ro + rd*resT,1.0);\r
    // camera space\r
    vec3 cpos = (wpos*oldCam); // note inverse multiply\r
    // ndc space\r
    vec2 npos = 1.5 * cpos.xy / cpos.z;\r
    // screen space\r
    vec2 spos = 0.5 + 0.5*npos*vec2(iResolution.y/iResolution.x,1.0);\r
    // undo dither\r
    spos -= o/iResolution.xy;\r
	// raster space\r
    vec2 rpos = spos * iResolution.xy;\r
    \r
    if( rpos.y<1.0 && rpos.x<3.0 )\r
    {\r
    }\r
	else\r
    {\r
        vec3 ocol = textureLod( iChannel0, spos, 0.0 ).xyz;\r
    	if( iFrame==0 ) ocol = col;\r
        col = mix( ocol, col, 0.1+0.8*isCloud );\r
    }\r
\r
    //----------------------------------\r
    ivec2 ip = ivec2(fragCoord);\r
	if( ip.y==0 && ip.x<=2 )\r
    {\r
        fragColor = vec4( ca[ip.x], -dot(ca[ip.x],ro) );\r
    }\r
    else\r
    {\r
        fragColor = vec4( col, 1.0 );\r
    }\r
}`,as=`void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = fragCoord/iResolution.xy;
    vec3 col = texture( iChannel0, p ).xyz;
    col *= 0.5 + 0.5*pow( 16.0*p.x*p.y*(1.0-p.x)*(1.0-p.y), 0.05 );
    fragColor = vec4( col, 1.0 );
}
`,is=`#version 300 es
in vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`,cs=e=>`#version 300 es
precision highp float;
precision highp int;
uniform vec3 iResolution;
uniform float iTime;
uniform int iFrame;
uniform sampler2D iChannel0;
out vec4 outputColor;
${e}
void main() { mainImage(outputColor, gl_FragCoord.xy); }
`;function ls(){const e=j.useRef(null),[n,r]=j.useState("loading"),[o,a]=j.useState(0);return j.useEffect(()=>{const i=e.current;if(!i)return;const s=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power",preserveDrawingBuffer:!1});if(!s||!s.getExtension("EXT_color_buffer_float")){r("fallback");return}const u=[],m=[],x=[],p=[];let w=null,E=null,N=0,_=!1,Q=!1,U=!0,D=0,P=0,te=0,J=0,ie=-1/0;const q=window.matchMedia("(prefers-reduced-motion: reduce)"),ne=()=>{p.forEach(y=>s.deleteFramebuffer(y)),x.forEach(y=>s.deleteTexture(y)),m.forEach(y=>s.deleteProgram(y)),u.forEach(y=>s.deleteShader(y)),s.deleteBuffer(w),s.deleteVertexArray(E)},ae=(y,T)=>{const h=s.createShader(y);if(!h)throw new Error("Shader allocation failed");if(u.push(h),s.shaderSource(h,T),s.compileShader(h),!s.getShaderParameter(h,s.COMPILE_STATUS))throw new Error(s.getShaderInfoLog(h)||"Shader compilation failed");return h},z=y=>{const T=s.createProgram();if(!T)throw new Error("Program allocation failed");if(m.push(T),s.attachShader(T,ae(s.VERTEX_SHADER,is)),s.attachShader(T,ae(s.FRAGMENT_SHADER,cs(y))),s.bindAttribLocation(T,0,"a_position"),s.linkProgram(T),!s.getProgramParameter(T,s.LINK_STATUS))throw new Error(s.getProgramInfoLog(T)||"Shader linking failed");return{program:T,resolution:s.getUniformLocation(T,"iResolution"),time:s.getUniformLocation(T,"iTime"),frame:s.getUniformLocation(T,"iFrame"),channel:s.getUniformLocation(T,"iChannel0")}};try{const y=z(os),T=z(as);if(E=s.createVertexArray(),w=s.createBuffer(),!E||!w)throw new Error("Geometry allocation failed");s.bindVertexArray(E),s.bindBuffer(s.ARRAY_BUFFER,w),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),s.STATIC_DRAW),s.enableVertexAttribArray(0),s.vertexAttribPointer(0,2,s.FLOAT,!1,0,0);const h=!!s.getExtension("OES_texture_float_linear");for(let O=0;O<2;O++){const G=s.createTexture(),W=s.createFramebuffer();if(!G||!W)throw s.deleteTexture(G),s.deleteFramebuffer(W),new Error("Feedback allocation failed");x.push(G),p.push(W),s.bindTexture(s.TEXTURE_2D,G),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,h?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,h?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}const $=()=>{!_&&!Q&&U&&!document.hidden&&!N&&(N=requestAnimationFrame(K))},K=O=>{if(N=0,_||Q||!U||document.hidden)return;if(O-ie<1e3/18){$();return}ie=O,J&&!q.matches&&(te+=Math.min((O-J)/1e3,.2)),J=O;const G=1-P;s.bindVertexArray(E),s.viewport(0,0,i.width,i.height),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,x[P]),s.bindFramebuffer(s.FRAMEBUFFER,p[G]),s.useProgram(y.program),s.uniform3f(y.resolution,i.width,i.height,1),s.uniform1f(y.time,q.matches?0:te),s.uniform1i(y.frame,D),s.uniform1i(y.channel,0),s.drawArrays(s.TRIANGLES,0,3),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindTexture(s.TEXTURE_2D,x[G]),s.useProgram(T.program),s.uniform3f(T.resolution,i.width,i.height,1),s.uniform1i(T.channel,0),s.drawArrays(s.TRIANGLES,0,3),P=G,D++,i.dataset.frame=String(D),D===1&&r("ready"),(!q.matches||D<12)&&$()},fe=()=>{cancelAnimationFrame(N),N=0,J=0,$()},ue=()=>{D=0,P=0,te=0,fe()},Z=()=>{const{width:O,height:G}=i.getBoundingClientRect();if(!O||!G)return;const W=O<=760?9e4:18e4,B=Math.min(1,640/O,Math.sqrt(W/(O*G))),ee=Math.max(4,Math.round(O*B)),re=Math.max(4,Math.round(G*B));(ee!==i.width||re!==i.height)&&(i.width=ee,i.height=re,D=0,P=0,x.forEach((ve,we)=>{if(s.bindTexture(s.TEXTURE_2D,ve),s.texImage2D(s.TEXTURE_2D,0,s.RGBA32F,ee,re,0,s.RGBA,s.FLOAT,null),s.bindFramebuffer(s.FRAMEBUFFER,p[we]),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0),s.checkFramebufferStatus(s.FRAMEBUFFER)!==s.FRAMEBUFFER_COMPLETE)throw new Error("Floating-point render target unavailable");s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT)}),s.bindFramebuffer(s.FRAMEBUFFER,null)),fe()},C=()=>{try{Z()}catch(O){console.warn("Landscape shader:",O),Q=!0,cancelAnimationFrame(N),r("fallback")}},ce=new ResizeObserver(C),xe=new IntersectionObserver(([O])=>{U=O.isIntersecting,fe()}),pe=O=>{O.preventDefault(),Q=!0,cancelAnimationFrame(N),N=0,r("fallback")},ge=()=>{r("loading"),a(O=>O+1)};return ce.observe(i),xe.observe(i),i.addEventListener("webglcontextlost",pe),i.addEventListener("webglcontextrestored",ge),document.addEventListener("visibilitychange",fe),q.addEventListener("change",ue),C(),()=>{_=!0,cancelAnimationFrame(N),ce.disconnect(),xe.disconnect(),i.removeEventListener("webglcontextlost",pe),i.removeEventListener("webglcontextrestored",ge),document.removeEventListener("visibilitychange",fe),q.removeEventListener("change",ue),ne()}}catch(y){_=!0,cancelAnimationFrame(N),ne(),console.warn("Landscape shader:",y),r("fallback")}},[o]),t.jsx("div",{className:"landscape-shader","data-shader-status":n,"aria-hidden":"true",children:t.jsx("canvas",{ref:e,className:"landscape-shader-canvas"})})}const ds="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Ut=8,Wt=22,de=(e,n,r,o)=>e+(n-e)*(1-Math.exp(-r/o)),fs=e=>{let n=String(e||"").replace("#","");n.length===3&&(n=n.replace(/./g,o=>o+o));const r=parseInt(n.slice(0,6),16);return Number.isNaN(r)?[255,255,255]:[r>>16&255,r>>8&255,r&255]},ye=(e,n)=>{const[r,o,a]=fs(e);return`rgba(${r}, ${o}, ${a}, ${n})`},Ce=(...e)=>{let n=2166136261;for(const r of e)n=Math.imul(n^(r|0),16777619),n^=n>>>13,n=Math.imul(n,1540483477),n^=n>>>15;return(n>>>0)/4294967296},Vt=e=>e>0?`+${e}`:e<0?`−${-e}`:"0",us=({text:e="React Bits",fontFamily:n="",fontWeight:r=600,fontSize:o=150,letterSpacing:a=-.05,color:i="#ffffff",accentColor:s="#ffffff",reach:u=200,softness:m=.7,dashLength:x=4,dashGap:p=2,strokeWidth:w=1.5,lineStyle:E="dashed",reveal:N="letter",specks:_=15,selection:Q=!0,labels:U=!0,draggable:D=!0,sweep:P=!0,speed:te=1,className:J="",style:ie})=>{const q=j.useRef(null),ne=j.useRef(null),ae=j.useRef(null),z=j.useRef(()=>{});return j.useEffect(()=>{ae.current={text:e,fontFamily:n,fontWeight:r,fontSize:o,letterSpacing:a,color:i,accentColor:s,reach:u,softness:m,dashLength:x,dashGap:p,strokeWidth:w,lineStyle:E,reveal:N,specks:_,selection:Q,labels:U,draggable:D,sweep:P,speed:te},z.current()}),j.useEffect(()=>{const y=q.current,T=ne.current,h=T?.getContext("2d"),$=document.createElement("canvas"),K=$.getContext("2d");if(!y||!T||!h||!K)return;const fe=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;let ue=1,Z=1,C=1,ce=0,xe=performance.now(),pe=!0,ge=!0,O="",G="",W=null,B=[],ee=0,re=0,ve=0,we=!1,X=-1;const F={x:0,y:0,inside:!1},je={x:0,y:0},se={x:0,y:0},k={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},Ee=()=>{O="",z.current()},be=c=>c.fontFamily||getComputedStyle(y).fontFamily||"sans-serif",ct=(c,d)=>`${c.fontWeight} ${d}px ${be(c)}`,Ze=(c,d,f)=>{c.font=ct(d,f),"letterSpacing"in c&&(c.letterSpacing=`${d.letterSpacing*f}px`),c.textAlign="left",c.textBaseline="alphabetic"},lt=(c,d,f,v)=>{const b=Math.ceil(c.strokeWidth*2+4),R=f.box.x1-b,L=f.box.y1-b,S=f.box.x2-f.box.x1+b*2,I=f.box.y2-f.box.y1+b*2,A=document.createElement("canvas");A.width=Math.max(1,Math.ceil(S*C)),A.height=Math.max(1,Math.ceil(I*C));const M=A.getContext("2d");return M?(M.setTransform(C,0,0,C,-R*C,-L*C),Ze(M,c,d.size),v?(M.lineJoin="round",M.lineWidth=c.strokeWidth*2,M.lineCap="butt",M.strokeStyle=c.color,c.lineStyle!=="solid"&&M.setLineDash([Math.max(1,c.dashLength),Math.max(1,c.dashGap)]),M.strokeText(f.char,f.x,d.baseline),M.setLineDash([]),M.globalCompositeOperation="destination-out",M.fillStyle="#000000",M.fillText(f.char,f.x,d.baseline),M.globalCompositeOperation="source-over"):(M.fillStyle=c.color,M.fillText(f.char,f.x,d.baseline)),{image:A,left:R,top:L}):{image:A,left:R,top:L}},xn=c=>{const d=[c.text,be(c),c.fontWeight,c.fontSize,c.letterSpacing,c.color,c.dashLength,c.dashGap,c.strokeWidth,c.lineStyle,ue,Z,C].join("|");if(d===O&&W)return W;O=d;const f=ct(c,64);document.fonts&&f!==G&&(G=f,document.fonts.load(f,c.text).then(Ee,Ee));const v=K;Ze(v,c,c.fontSize);let b=v.measureText(c.text);const R=Math.min(1,ue*.9/Math.max(b.actualBoundingBoxLeft+b.actualBoundingBoxRight,1),Z*.66/Math.max(b.actualBoundingBoxAscent+b.actualBoundingBoxDescent,1)),L=c.fontSize*R;Ze(v,c,L),b=v.measureText(c.text);const S=b.actualBoundingBoxLeft+b.actualBoundingBoxRight,I=b.actualBoundingBoxAscent+b.actualBoundingBoxDescent,A=(ue-S)/2+b.actualBoundingBoxLeft,M=(Z-I)/2+b.actualBoundingBoxAscent,g={size:L,baseline:M,left:A-b.actualBoundingBoxLeft,right:A+b.actualBoundingBoxRight,top:M-b.actualBoundingBoxAscent,bottom:M+b.actualBoundingBoxDescent};W=g;const V=Array.from(c.text),H=B;B=[];let Y="";return V.forEach((he,le)=>{Y+=he;const oe=v.measureText(he),ke=A+v.measureText(Y).width-oe.width;if(!he.trim())return;const Te={char:he,x:ke,box:{x1:ke-oe.actualBoundingBoxLeft,y1:M-oe.actualBoundingBoxAscent,x2:ke+oe.actualBoundingBoxRight,y2:M+oe.actualBoundingBoxDescent}},ze=H[B.length];B.push({...Te,offset:ze?.char===he?ze.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,index:le,fill:lt(c,g,Te,!1),dashes:lt(c,g,Te,!0)})}),X=-1,k.index=-1,g},dt=(c,d)=>{if(!W||d<W.top-24||d>W.bottom+24)return-1;let f=-1,v=1/0;return B.forEach((b,R)=>{const L=b.box.x1+b.offset.x,S=b.box.x2+b.offset.x,I=c<L?L-c:c>S?c-S:0;I<v&&(v=I,f=R)}),v<28?f:-1},ft=(c,d,f,v,b,R)=>{const L=Math.min(1,Math.max(0,1-R)),S=c.createRadialGradient(d,f,0,d,f,v);if(S.addColorStop(0,`rgba(0, 0, 0, ${b})`),L>.995)return S.addColorStop(.995,`rgba(0, 0, 0, ${b})`),S.addColorStop(1,"rgba(0, 0, 0, 0)"),S;for(let I=0;I<=Ut;I++){const A=I/Ut,M=A*A*(3-2*A);S.addColorStop(L+(1-L)*A,`rgba(0, 0, 0, ${b*(1-M)})`)}return S},Be=(c,d,f,v,b,R)=>{c.drawImage(d.image,Math.round((d.left+f)*C-b),Math.round((d.top+v)*C-R))},pn=c=>{const d=c.reach*C,f=se.x*C,v=se.y*C;h.globalCompositeOperation="destination-out",h.fillStyle=ft(h,f,v,d,ee,c.softness),h.fillRect(f-d,v-d,d*2,d*2),h.globalCompositeOperation="source-over";const b=Math.max(0,Math.floor(f-d)),R=Math.max(0,Math.floor(v-d)),L=Math.min(T.width,Math.ceil(f+d)),S=Math.min(T.height,Math.ceil(v+d));if(L<=b||S<=R)return;const I=L-b,A=S-R;($.width<I||$.height<A)&&($.width=Math.max($.width,I),$.height=Math.max($.height,A)),K.setTransform(1,0,0,1,0,0),K.globalCompositeOperation="source-over",K.clearRect(0,0,I,A);for(const M of B)Be(K,M.dashes,M.offset.x,M.offset.y,b,R);K.globalCompositeOperation="destination-in",K.fillStyle=ft(K,f-b,v-R,d,1,c.softness),K.fillRect(0,0,I,A),K.globalCompositeOperation="source-over",h.globalAlpha=ee,h.drawImage($,0,0,I,A,b,R,I,A),h.globalAlpha=1},Pe=c=>(Math.round(c*C)+.5)/C,ut=(c,d,f)=>{let v=(c%(2*(d+f))+2*(d+f))%(2*(d+f));return v<d?[k.x1+v,k.y1,0,-1]:(v-=d,v<f?[k.x2,k.y1+v,1,0]:(v-=f,v<d?[k.x2-v,k.y2,0,1]:(v-=d,[k.x1,k.y2-v,-1,0])))},gn=(c,d)=>{const f=k.x2-k.x1,v=k.y2-k.y1;if(f<2||v<2)return;const b=2*(f+v),R=k.index+1,L=3;for(let S=0;S<c.specks;S++){const I=.5+Ce(R,S,11)*1.2,A=ve/I+Ce(R,S,17),M=Math.floor(A),g=A-M;if(g>.7)continue;const[V,H,Y,he]=ut(Ce(R,S,M)*b,f,v),le=Ce(R,S,M,2),oe=le<.46?2:le<.7?3:le<.84?5:le<.94?8:11,ke=oe>=8,Te=(ke?9:4)+Math.floor(Ce(R,S,M,1)*5)*L,ze=k.x1+Math.round((V+Y*Te-k.x1)/L)*L,bt=k.y1+Math.round((H+he*Te-k.y1)/L)*L,Fe=Ce(R,S,M,3),yn=g<.06||g>.32&&g<.36?.35:1,Qe=d*(ke?.3+.4*Fe:.3+.6*Fe)*yn,kt=Math.round(ze-oe/2),wt=Math.round(bt-oe/2);Fe<.26||ke&&Fe<.78?(h.strokeStyle=ye(c.accentColor,Qe),h.strokeRect(kt+.5,wt+.5,oe,oe),ke&&Fe>.5&&(h.fillStyle=ye(c.accentColor,Qe),h.fillRect(Math.round(ze)-1,Math.round(bt)-1,2,2))):(h.fillStyle=ye(c.accentColor,Qe),h.fillRect(kt,wt,oe,oe))}for(let S=0;S<2;S++){const I=(ve*.42*c.speed+S*.5)*b;for(let A=0;A<4;A++){const[M,g]=ut(I-A*6,f,v),V=A===0?3:2;h.fillStyle=ye(c.accentColor,d*[.95,.55,.32,.16][A]),h.fillRect(Math.round(M-V/2),Math.round(g-V/2),V,V)}}},vn=c=>{const d=B[k.index];if(!d||k.alpha<.01)return;const f=k.alpha,v=Pe(k.x1),b=Pe(k.y1),R=Pe(k.x2),L=Pe(k.y2);h.setTransform(C,0,0,C,0,0);const S=Math.hypot(d.offset.x,d.offset.y);if(S>1){const A=(d.box.x1+d.box.x2)/2,M=(d.box.y1+d.box.y2)/2;h.beginPath(),h.moveTo(A,M),h.lineTo(A+d.offset.x,M+d.offset.y),h.setLineDash([3,4]),h.lineWidth=1,h.strokeStyle=ye(c.accentColor,.45*f),h.stroke(),h.setLineDash([]),h.beginPath(),h.rect(Math.round(A)-2,Math.round(M)-2,4,4),h.fillStyle=ye(c.accentColor,.7*f),h.fill()}h.beginPath(),h.rect(v,b,R-v,L-b),h.lineWidth=1,h.strokeStyle=ye(c.accentColor,.5*f),h.stroke(),h.beginPath();for(const[A,M]of[[v,b],[R,b],[R,L],[v,L]])h.rect(Math.round(A)-2,Math.round(M)-2,5,5);if(h.fillStyle=ye(c.accentColor,.95*f),h.fill(),c.specks>0&&(h.lineWidth=1,gn(c,f)),!c.labels)return;h.font=ds,h.textAlign="left",h.textBaseline="bottom",h.fillStyle=ye(c.accentColor,.62*f);const I=S>1?`${Vt(Math.round(d.offset.x))}, ${Vt(Math.round(-d.offset.y))}`:`${d.char}  ${Math.round(d.box.x2-d.box.x1)} × ${Math.round(d.box.y2-d.box.y1)}`;h.fillText(I,Math.round(k.x1),Math.round(k.y1)-7)},ht=c=>{ce=0;const d=ae.current;if(!d)return;const f=Math.min(.05,Math.max(.001,(c-xe)/1e3));xe=c;const v=xn(d),b=d.sweep&&!fe&&!F.inside&&X<0;b&&(re+=f*d.speed),ve+=f;let R=F.x,L=F.y;b&&(R=v.left+(v.right-v.left)*(.5-.5*Math.cos(re*.45)),L=v.top+(v.bottom-v.top)*(.45+.1*Math.sin(re*.8)));const S=F.inside||b||X>=0;if(S&&!we&&(se.x=R,se.y=L),S){const g=F.inside?.05:.22;se.x=de(se.x,R,f,g),se.y=de(se.y,L,f,g)}we=S,ee=de(ee,d.reveal==="area"&&S&&X<0?1:0,f,.16);let I=!1;B.forEach((g,V)=>{if(V===X){g.offset.x=de(g.offset.x,F.x-je.x,f,.03),g.offset.y=de(g.offset.y,F.y-je.y,f,.03),g.velocity.x=0,g.velocity.y=0,I=!0;return}const{offset:H,velocity:Y}=g;if(Math.abs(H.x)<.05&&Math.abs(H.y)<.05&&Math.hypot(Y.x,Y.y)<.5){H.x=0,H.y=0,Y.x=0,Y.y=0;return}Y.x+=(-320*H.x-Wt*Y.x)*f,Y.y+=(-320*H.y-Wt*Y.y)*f,H.x+=Y.x*f,H.y+=Y.y*f,I=!0});const A=X>=0?X:S?dt(se.x,se.y):-1;if(A>=0&&d.selection){const g=B[A],V=g.box.x1+g.offset.x-6,H=g.box.y1+g.offset.y-6,Y=g.box.x2+g.offset.x+6,he=g.box.y2+g.offset.y+6;(k.index<0||k.alpha<.02)&&(k.x1=V,k.y1=H,k.x2=Y,k.y2=he);const le=A===X?.02:.08;k.x1=de(k.x1,V,f,le),k.y1=de(k.y1,H,f,le),k.x2=de(k.x2,Y,f,le),k.y2=de(k.y2,he,f,le),k.index=A}k.alpha=de(k.alpha,A>=0&&d.selection?1:0,f,.1),B.forEach((g,V)=>{const H=d.reveal==="letter"&&V===A&&V!==X?1:0;g.outline=de(g.outline,H,f,.09),Math.abs(g.outline-H)>.002?I=!0:g.outline=H}),d.draggable&&(y.style.cursor=X>=0?"grabbing":A>=0&&F.inside?"grab":""),h.setTransform(1,0,0,1,0,0),h.globalCompositeOperation="source-over",h.clearRect(0,0,T.width,T.height);for(const g of B){const V=Math.hypot(g.offset.x,g.offset.y);V>1&&(h.globalAlpha=Math.min(1,V/24)*.55,Be(h,g.dashes,0,0,0,0),h.globalAlpha=1)}for(const g of B)g.outline<.999&&(h.globalAlpha=1-g.outline,Be(h,g.fill,g.offset.x,g.offset.y,0,0)),g.outline>.001&&(h.globalAlpha=g.outline,Be(h,g.dashes,g.offset.x,g.offset.y,0,0)),h.globalAlpha=1;ee>.001&&pn(d),vn(d);const M=I||Math.abs(ee-(d.reveal==="area"&&S&&X<0?1:0))>.002||k.alpha>.01&&k.alpha<.99;(S||M)&&pe&&ge&&(ce=requestAnimationFrame(ht))},Ae=()=>{ce||!pe||!ge||(xe=performance.now(),ce=requestAnimationFrame(ht))};z.current=Ae;const mt=()=>{ue=Math.max(1,y.clientWidth),Z=Math.max(1,y.clientHeight),C=Math.min(window.devicePixelRatio||1,2),T.width=Math.round(ue*C),T.height=Math.round(Z*C),O="",Ae()},xt=c=>{const d=y.getBoundingClientRect();F.x=c.clientX-d.left,F.y=c.clientY-d.top},_e=c=>{xt(c),F.inside=!0,Ae()},pt=()=>{X>=0||(F.inside=!1,Ae())},gt=c=>{if(xt(c),F.inside=!0,ae.current?.draggable&&(c.pointerType!=="mouse"||c.button===0)){const f=dt(F.x,F.y);f>=0&&(X=f,je.x=F.x-B[f].offset.x,je.y=F.y-B[f].offset.y,y.setPointerCapture?.(c.pointerId))}Ae()},Ue=c=>{if(X>=0){X=-1,y.releasePointerCapture?.(c.pointerId);const d=y.getBoundingClientRect();F.inside=c.clientX>=d.left&&c.clientX<=d.right&&c.clientY>=d.top&&c.clientY<=d.bottom}c.pointerType!=="mouse"&&(F.inside=!1),Ae()};y.addEventListener("pointermove",_e,{passive:!0}),y.addEventListener("pointerenter",_e,{passive:!0}),y.addEventListener("pointerdown",gt,{passive:!0}),y.addEventListener("pointerup",Ue,{passive:!0}),y.addEventListener("pointercancel",Ue,{passive:!0}),y.addEventListener("pointerleave",pt,{passive:!0});const vt=new ResizeObserver(mt);vt.observe(y);const yt=new IntersectionObserver(([c])=>{pe=c.isIntersecting,Ae()});return yt.observe(y),document.fonts&&document.fonts.ready.then(Ee,Ee),mt(),()=>{ge=!1,cancelAnimationFrame(ce),z.current=()=>{},vt.disconnect(),yt.disconnect(),y.removeEventListener("pointermove",_e),y.removeEventListener("pointerenter",_e),y.removeEventListener("pointerdown",gt),y.removeEventListener("pointerup",Ue),y.removeEventListener("pointercancel",Ue),y.removeEventListener("pointerleave",pt)}},[]),t.jsx("div",{ref:q,className:`tech-text ${J}`.trim(),style:ie,role:"img","aria-label":e,children:t.jsx("canvas",{ref:ne,className:"tech-text-canvas"})})},Ht={warm:{color:"#20231e",accentColor:"#55614b"},dark:{color:"#f1eee7",accentColor:"#aaa99f"},editorial:{color:"#292624",accentColor:"#985b48"}};function hs({theme:e="warm",fontFamily:n="Manrope, sans-serif"}){const r=Ht[e]||Ht.warm;return t.jsxs("div",{className:"nived-name",style:{color:r.color,fontFamily:n},children:[t.jsx("h1",{className:"nived-name-heading",children:"Nived Mehta"}),t.jsx("div",{className:"nived-name-animation","aria-hidden":"true",children:t.jsx(us,{text:"Nived Mehta",fontWeight:600,fontSize:150,reveal:"letter",dashLength:4,dashGap:2,specks:15,fontFamily:n,color:r.color,accentColor:r.accentColor,letterSpacing:-.05,reach:200,softness:.7,strokeWidth:1.5,speed:1,lineStyle:"dashed",selection:!0,labels:!0,draggable:!0,sweep:!0})})]})}function ms(){return t.jsxs("section",{className:"portfolio-hero portfolio-hero-landscape","aria-label":"Nived Mehta — video editor and filmmaker",children:[t.jsx("div",{className:"portfolio-hero-background","aria-hidden":"true",children:t.jsx(ls,{})}),t.jsxs("div",{className:"portfolio-hero-foreground",children:[t.jsxs("div",{className:"hero-topline",children:[t.jsxs("p",{className:"portfolio-hero-role",children:[t.jsx("span",{}),t.jsx(l,{text:" Video editor & filmmaker"})]}),t.jsx("span",{className:"hero-index",children:t.jsx(l,{text:"PORTFOLIO / SELECTED WORK"})})]}),t.jsx(hs,{theme:"dark"}),t.jsxs("div",{className:"hero-bottomline",children:[t.jsxs("p",{className:"portfolio-hero-description",children:[t.jsx(l,{text:"Motion with purpose."}),t.jsx("br",{}),t.jsx("span",{children:t.jsx(l,{text:"Stories with feeling."})})]}),t.jsxs("div",{className:"hero-actions",children:[t.jsxs("a",{href:"#work",className:"hero-work-button",children:[t.jsx(l,{text:"Explore my work "}),t.jsx(_t,{size:16})]}),t.jsxs("a",{className:"hero-connect",href:"https://wa.me/918669659620",target:"_blank",rel:"noopener noreferrer",children:[t.jsx(l,{text:"Let’s create together "}),t.jsx(Oe,{size:16})]})]})]}),t.jsxs("div",{className:"hero-footnote",children:[t.jsx("span",{children:t.jsx(l,{text:"AFTER EFFECTS · PREMIERE PRO · DIRECTION"})}),t.jsxs("a",{href:"#work",children:[t.jsx(l,{text:"SCROLL TO EXPLORE "}),t.jsx(_t,{size:12})]})]})]})]})}const xs=[["esc","◌","☀","▤","⌕","◉","☾","◀","▶","▶▶","◂","▸","◉"],["~","1","2","3","4","5","6","7","8","9","0","−","+","delete"],["tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\"],["caps","A","S","D","F","G","H","J","K","L",";","'","return"],["shift","Z","X","C","V","B","N","M",",",".","/","shift"],["fn","ctrl","option","⌘","space","⌘","option","◀","▲","▼","▶"]];function ps({src:e,showGradient:n=!1,title:r,badge:o,alt:a="Selected motion design work by Nived Mehta"}){const i=j.useRef(null),s=ot(),[u,m]=j.useState(!1);j.useEffect(()=>{const U=window.matchMedia("(max-width: 760px)"),D=()=>m(U.matches);return D(),U.addEventListener("change",D),()=>U.removeEventListener("change",D)},[]);const{scrollYProgress:x}=kr({target:i,offset:["start start","end end"]}),p=Ar(x,{stiffness:85,damping:26,mass:.6}),w=Me(p,[.08,.85],[1,u?1.04:1.38]),E=Me(p,[.08,.8],[-25,0]),N=Me(p,[.08,.85],[0,u?360:500]),_=Me(p,[0,.5],[0,-25]),Q=Me(p,[.1,.45],[1,0]);return t.jsx("div",{ref:i,className:"macbook-scroll","data-reduced-motion":!!s,children:t.jsxs("div",{className:"macbook-sticky",children:[t.jsx(Xe.h2,{id:"macbook-title",className:"macbook-title",style:{y:s?0:_,opacity:s?1:Q},children:r}),t.jsxs("div",{className:"macbook-project-caption",children:[t.jsx("span",{children:t.jsx(l,{text:"Featured edit / A-Quant State Capitalism"})}),t.jsx("span",{children:t.jsx(l,{text:"Scroll to reveal ↓"})})]}),t.jsxs("div",{className:"macbook-device",children:[t.jsxs("div",{className:"macbook-lid",children:[t.jsx("div",{className:"macbook-camera","aria-hidden":"true"}),t.jsx("div",{className:"macbook-display",children:t.jsx("span",{className:"macbook-screen-monogram","aria-hidden":"true",children:"nm."})}),t.jsx("span",{className:"macbook-screen-label","aria-hidden":"true",children:"Made to move you."})]}),t.jsx(Xe.div,{className:"macbook-artwork",style:s?{rotateX:-25}:{scale:w,rotateX:E,y:N},children:t.jsx("img",{src:e,alt:a,width:"490",height:"335",loading:"lazy"})}),t.jsxs("div",{className:"macbook-deck","aria-hidden":"true",children:[t.jsx("div",{className:"macbook-hinge"}),t.jsx("div",{className:"macbook-speaker macbook-speaker-left"}),t.jsx("div",{className:"macbook-keyboard",children:xs.map((U,D)=>t.jsx("div",{className:"macbook-key-row",children:U.map((P,te)=>t.jsx("span",{className:P==="space"?"macbook-key macbook-space":"macbook-key",children:P==="space"?"":P},`${D}-${te}`))},D))}),t.jsx("div",{className:"macbook-speaker macbook-speaker-right"}),t.jsx("div",{className:"macbook-trackpad"}),t.jsx("div",{className:"macbook-notch"}),o&&t.jsx("div",{className:"macbook-badge",children:o}),n&&t.jsx("div",{className:"macbook-deck-gradient"})]})]})]})})}function gs(){return t.jsxs("section",{className:"featured-macbook","aria-labelledby":"macbook-title",children:[t.jsx("p",{className:"section-kicker",children:t.jsx(l,{text:"A CLOSER LOOK / MOTION DESIGN"})}),t.jsx(ps,{title:t.jsxs("span",{children:[t.jsx(l,{text:"From the timeline."}),t.jsx("br",{}),t.jsx("span",{children:t.jsx(l,{text:"To your screen."})})]}),src:"./thumbnails/02-a-quant-state-capitalism.png",alt:"A-Quant State Capitalism: Nived Mehta's After Effects work with two chairs and a central logo",badge:t.jsx("span",{className:"macbook-nm-badge",children:t.jsx(l,{text:"nm."})}),showGradient:!1}),t.jsxs("a",{className:"featured-macbook-watch",href:"https://www.instagram.com/reel/Dbm0s34BnLX/",target:"_blank",rel:"noopener noreferrer",children:[t.jsx(l,{text:"Watch the featured edit "}),t.jsx(Oe,{size:16})]})]})}const He=[{id:"core-reveal",title:"Core Reveal",category:"After Effects",url:"https://www.instagram.com/p/Dc7sC1NTbto/",thumbnail:"/thumbnails/01-core-reveal.png",alt:"Core Reveal frame showing a woman seated outdoors with a laptop",frame:"instagram-crop",width:807,height:440},{id:"a-quant-state-capitalism",title:"A-Quant State Capitalism",category:"After Effects",url:"https://www.instagram.com/reel/Dbm0s34BnLX/",thumbnail:"/thumbnails/02-a-quant-state-capitalism.png",alt:"A-Quant logo between two chairs and microphones in a dark studio scene",width:490,height:335},{id:"daud-oppo-reno-land",title:"DAUD × OPPO Reno Land",category:"Premiere Pro",url:"https://www.instagram.com/reel/Da5gJ2ChPUK/",thumbnail:"/thumbnails/03-daud-oppo-reno-land.png",alt:"DAUD runners gathered beneath OPPO Reno Land and DAUD titles",width:548,height:418},{id:"daud-vendi-silver",title:"DAUD × Vendi Silver",category:"Premiere Pro",url:"https://www.instagram.com/reel/Dcng58Hu9ux/",thumbnail:"/thumbnails/04-daud-vendi-silver.png",alt:"DAUD participants warming up outdoors for the Vendi Silver collaboration",width:755,height:488},{id:"daud-running-community",title:"DAUD Running Community",category:"Community content",url:"https://www.instagram.com/reel/DeE9sYTS6d5/",thumbnail:"/thumbnails/05-daud-running-community.png",alt:"Smiling DAUD participant outdoors beneath trees",width:477,height:815}];function vs(){const[e,n]=j.useState("All work"),r=["All work","After Effects","Premiere Pro","Community content"],o=e==="All work"?He:He.filter(i=>i.category===e),a={"core-reveal":["21,145","491"],"a-quant-state-capitalism":["4,200","105"],"daud-oppo-reno-land":["~123k","572"],"daud-vendi-silver":["22,379","287"],"daud-running-community":["~15k","314"]};return t.jsxs("section",{className:"work-gallery",id:"work","aria-labelledby":"work-gallery-title",children:[t.jsxs("div",{className:"work-gallery-heading",children:[t.jsxs("div",{children:[t.jsx("p",{className:"section-kicker",children:t.jsx(l,{text:"01 / THE WORK"})}),t.jsxs("h2",{id:"work-gallery-title",children:[t.jsx(l,{text:"Good stories."}),t.jsx("br",{}),t.jsx("span",{children:t.jsx(l,{text:"Even better in motion."})})]})]}),t.jsxs("p",{className:"work-gallery-intro",children:[t.jsx(l,{text:"A selection of edits, experiments, and brand stories."}),t.jsx("br",{}),t.jsx(l,{text:"Made to be watched. Built to be felt."})]})]}),t.jsx("div",{className:"work-filters",role:"group","aria-label":"Filter videos by editing tool",children:r.map(i=>t.jsxs("button",{type:"button","aria-pressed":e===i,onClick:()=>n(i),children:[t.jsx(l,{text:i==="Community content"?"Community":i}),t.jsx("span",{children:t.jsx(l,{text:i==="All work"?"05":String(He.filter(s=>s.category===i).length).padStart(2,"0")})})]},i))}),t.jsxs("p",{className:"gallery-announcement",role:"status",children:[t.jsx(l,{text:"Showing "}),t.jsx(l,{text:o.length})," ",t.jsx(l,{text:o.length===1?"video":"videos"})]}),t.jsx("div",{className:`work-gallery-grid ${e==="All work"?"all-work":""}`,children:o.map(i=>t.jsxs("article",{className:"work-card",children:[t.jsxs("a",{className:"work-card-link",href:i.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Watch ${i.title} on Instagram (opens in a new tab)`,children:[t.jsxs("div",{className:"work-card-media",children:[t.jsx("div",{className:i.frame==="instagram-crop"?"work-card-instagram-crop":"work-card-image-frame",children:t.jsx("img",{src:`./${i.thumbnail.replace(/^\/+/,"")}`,alt:i.alt,width:i.width,height:i.height,loading:"lazy",decoding:"async"})}),t.jsx("span",{className:"work-card-play","aria-hidden":"true",children:t.jsx(rs,{size:16,fill:"currentColor"})})]}),t.jsxs("div",{className:"work-card-meta",children:[t.jsx("span",{children:t.jsx(l,{text:i.category})}),t.jsx("span",{children:t.jsx(l,{text:String(He.indexOf(i)+1).padStart(2,"0")})})]}),t.jsxs("div",{className:"work-card-title",children:[t.jsx("h3",{children:t.jsx(l,{text:i.title})}),t.jsx(Oe,{size:20})]}),t.jsx("span",{className:"work-card-watch",children:t.jsx(l,{text:"Watch on Instagram"})})]}),t.jsxs("p",{className:"work-card-metrics",children:[t.jsxs("span",{children:[t.jsx(Qr,{size:12})," ",t.jsx(l,{text:a[i.id][0]}),t.jsx(l,{text:" views"})]}),t.jsxs("span",{children:[t.jsx(Jr,{size:11})," ",t.jsx(l,{text:a[i.id][1]}),t.jsx(l,{text:" likes"})]})]})]},i.id))}),t.jsx("p",{className:"work-metrics-note",children:t.jsx(l,{text:"Reel metrics recorded 14 Oct 2026. “~” indicates a rounded count. Counts may have changed."})})]})}function ys({words:e,className:n="",filter:r=!0,duration:o=.5}){const[a,i]=Hr(),s=Xr(a,{once:!0,amount:.2}),u=ot(),m=e.trim().split(/\s+/).filter(Boolean);return j.useEffect(()=>{if(!a.current||!e.trim()||u||!s)return;const x=i("span",{opacity:1,filter:"blur(0px)"},{duration:Math.max(0,o),delay:Xn(.055)});return()=>x.stop()},[i,a,s,u,e,o,r]),t.jsxs("p",{className:`text-generate-effect ${n}`,children:[t.jsx("span",{className:"text-generate-accessible",children:e}),t.jsx(Xe.span,{ref:a,"aria-hidden":"true",className:"text-generate-visual",children:m.map((x,p)=>t.jsxs(Xe.span,{style:{opacity:u?1:0,filter:r&&!u?"blur(6px)":"none"},children:[x," "]},`${x}-${p}`))})]})}const bs="I’m Nived Mehta, a video editor and filmmaker proficient in After Effects and Premiere Pro. I create motion-led edits, brand content, and community stories, and I’ve edited and directed two short films.";function ks(){return t.jsxs("section",{className:"portfolio-intro",id:"about","aria-labelledby":"portfolio-intro-title",children:[t.jsxs("div",{className:"intro-portrait",children:[t.jsx("img",{src:"./images/nived-mehta-portrait.jpeg",alt:"Nived Mehta wearing headphones outdoors in warm sunlight",width:"1024",height:"1024",loading:"lazy"}),t.jsx("span",{children:t.jsx(l,{text:"NIVED MEHTA / BEHIND THE EDIT"})})]}),t.jsxs("div",{className:"intro-copy",children:[t.jsx("p",{className:"section-kicker",children:t.jsx(l,{text:"03 / THE PERSON BEHIND THE PIXELS"})}),t.jsxs("h2",{id:"portfolio-intro-title",children:[t.jsx(l,{text:"A little instinct."}),t.jsx("br",{}),t.jsx(l,{text:"A lot of intention."})]}),t.jsx(ys,{words:bs,duration:.45}),t.jsx("p",{className:"intro-detail",children:t.jsx(l,{text:"From the energy of a community run to the rhythm of a short film, I care about how an edit feels. I’m also exploring AI video creation with Higgsfield and HeyGen."})}),t.jsxs("div",{className:"intro-signature",children:[t.jsx(l,{text:"Nived Mehta"}),t.jsx("span",{children:t.jsx(l,{text:"Video editor & filmmaker"})})]})]})]})}const ws=["MuscleBlaze","OPPO Reno Land","Vendi Silver","Phoenix Mall of Asia, Bengaluru"];function js(){return t.jsx("section",{className:"daud-case-study",id:"daud","aria-labelledby":"daud-case-title",children:t.jsxs("div",{className:"daud-case-inner",children:[t.jsx("p",{className:"daud-case-eyebrow",children:t.jsx(l,{text:"02 / Content & community"})}),t.jsxs("div",{className:"daud-case-layout",children:[t.jsxs("div",{className:"daud-case-copy",children:[t.jsxs("h2",{id:"daud-case-title",children:[t.jsx(l,{text:"More than a run."}),t.jsx("br",{}),t.jsx(l,{text:"A community in motion."})]}),t.jsx("p",{className:"daud-case-description",children:t.jsx(l,{text:"As Content Head at DAUD, I helped grow the brand page from 20,000 to 42,200 followers in less than three months. Editing was part of a bigger picture: creating content for a community that kept growing."})}),t.jsxs("dl",{className:"daud-case-details",children:[t.jsxs("div",{children:[t.jsx("dt",{children:t.jsx(l,{text:"My role"})}),t.jsx("dd",{children:t.jsx(l,{text:"Content Head & video editor"})})]}),t.jsxs("div",{children:[t.jsx("dt",{children:t.jsx(l,{text:"Page management"})}),t.jsx("dd",{children:t.jsx(l,{text:"DAUD Run Club · June–August"})})]})]}),t.jsxs("a",{className:"daud-case-link",href:"https://www.instagram.com/daudrunclub/",target:"_blank",rel:"noopener noreferrer",children:[t.jsx(l,{text:"Meet the community"}),t.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M6 18 18 6M6 6h12v12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t.jsx("span",{className:"daud-case-visually-hidden",children:t.jsx(l,{text:" on Instagram (opens in a new tab)"})})]})]}),t.jsxs("div",{className:"daud-growth-panel","aria-label":"DAUD audience growth, from 20,000 to 42,200 followers in less than three months",children:[t.jsxs("div",{className:"daud-growth-topline",children:[t.jsx("span",{children:t.jsx(l,{text:"DAUD / The growth story"})}),t.jsx("span",{className:"daud-growth-period",children:t.jsx(l,{text:"Under 3 months"})})]}),t.jsxs("div",{className:"daud-growth-headline",children:[t.jsxs("span",{className:"daud-growth-percentage",children:[t.jsx(l,{text:"+111"}),t.jsx("span",{children:t.jsx(l,{text:"%"})})]}),t.jsx("span",{className:"daud-growth-label",children:t.jsx(l,{text:"Audience growth"})})]}),t.jsxs("div",{className:"daud-growth-endpoints",children:[t.jsxs("div",{children:[t.jsx("span",{className:"daud-growth-endpoint-label",children:t.jsx(l,{text:"Started at"})}),t.jsx("span",{className:"daud-growth-count",children:t.jsx(l,{text:"20k"})})]}),t.jsx("svg",{className:"daud-growth-arrow",viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M5 16h22M18 7l9 9-9 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t.jsxs("div",{children:[t.jsx("span",{className:"daud-growth-endpoint-label",children:t.jsx(l,{text:"Grew to"})}),t.jsx("span",{className:"daud-growth-count",children:t.jsx(l,{text:"42.2k"})})]})]}),t.jsxs("div",{className:"daud-growth-track","aria-hidden":"true",children:[t.jsx("span",{}),t.jsx("span",{})]}),t.jsxs("div",{className:"daud-growth-footnote",children:[t.jsx("span",{children:t.jsx(l,{text:"Followers"})}),t.jsx("span",{children:t.jsx(l,{text:"+22,200 people"})})]})]})]}),t.jsxs("div",{className:"daud-collaborations",children:[t.jsx("p",{children:t.jsx(l,{text:"Collaborations through DAUD Run Club"})}),t.jsx("ul",{"aria-label":"Brand and venue collaborations",children:ws.map(e=>t.jsx("li",{children:t.jsx(l,{text:e})},e))})]})]})})}const mn="https://wa.me/918669659620";function Es({className:e=""}){return t.jsxs("a",{className:e,href:mn,target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with Nived Mehta on WhatsApp (opens in a new tab)",children:[t.jsx(l,{text:"Let’s talk on WhatsApp "}),t.jsx("span",{"aria-hidden":"true",children:"↗"})]})}function As(){return t.jsx("section",{className:"contact-cta",id:"contact","aria-labelledby":"contact-cta-title",children:t.jsxs("div",{className:"contact-cta-inner",children:[t.jsxs("div",{className:"contact-cta-copy",children:[t.jsx("p",{className:"contact-cta-eyebrow",children:t.jsx(l,{text:"Let’s create together"})}),t.jsxs("h2",{id:"contact-cta-title",children:[t.jsx(l,{text:"Your next story."}),t.jsx("br",{}),t.jsx(l,{text:"Let’s make it move."})]}),t.jsx("p",{className:"contact-cta-description",children:t.jsx(l,{text:"Have a reel, brand film, or creative idea in mind? Tell me what you’re working on, and let’s shape it into a video worth watching."})}),t.jsxs("dl",{className:"contact-cta-proof",children:[t.jsxs("div",{children:[t.jsx("dt",{children:t.jsx(l,{text:"200,000"})}),t.jsx("dd",{children:t.jsx(l,{text:"Total views across my work"})})]}),t.jsxs("div",{children:[t.jsx("dt",{children:t.jsx(l,{text:"2 short films"})}),t.jsx("dd",{children:t.jsx(l,{text:"Edited & directed"})})]})]})]}),t.jsxs("div",{className:"contact-cta-action",children:[t.jsx(Es,{className:"contact-cta-button"}),t.jsx("p",{children:t.jsx(l,{text:"Direct chat with Nived Mehta"})})]})]})})}const Ms=j.lazy(()=>tn(()=>import("./CreativeToolkit-_va9Db5j.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),Ss=j.lazy(()=>tn(()=>import("./InsideTheEdit-Bf6lvCWq.js"),__vite__mapDeps([4,1,2,5]),import.meta.url));function Ts(){const[e,n]=j.useState(!1),r=()=>n(!1);return t.jsxs("header",{className:"site-header",children:[t.jsxs("a",{className:"wordmark",href:"#top",onClick:r,"aria-label":"Nived Mehta — back to top",children:[t.jsx(l,{text:"nived mehta"}),t.jsx("span",{className:"wordmark-dot",children:t.jsx(l,{text:"."})})]}),t.jsxs("nav",{className:`site-nav ${e?"is-open":""}`,"aria-label":"Main navigation",id:"main-nav",children:[t.jsx("a",{href:"#work",onClick:r,children:t.jsx(l,{text:"Work"})}),t.jsx("a",{href:"#daud",onClick:r,children:t.jsx(l,{text:"Impact"})}),t.jsx("a",{href:"#about",onClick:r,children:t.jsx(l,{text:"About"})}),t.jsxs("a",{href:"#contact",className:"nav-contact",onClick:r,children:[t.jsx(l,{text:"Let’s talk "}),t.jsx(Oe,{size:15})]})]}),t.jsx("button",{className:"menu-toggle",onClick:()=>n(!e),"aria-expanded":e,"aria-controls":"main-nav","aria-label":e?"Close menu":"Open menu",children:e?t.jsx(ss,{size:22}):t.jsx(ns,{size:22})})]})}function Ns(){return t.jsxs(t.Fragment,{children:[t.jsx("a",{className:"skip-link",href:"#main",children:t.jsx(l,{text:"Skip to content"})}),t.jsx("div",{id:"top"}),t.jsx(Ts,{}),t.jsxs("main",{id:"main",children:[t.jsx(ms,{}),t.jsxs("div",{className:"portfolio-results","aria-label":"Portfolio highlights",children:[t.jsxs("div",{children:[t.jsx("strong",{children:t.jsx(l,{text:"200,000"})}),t.jsx("p",{children:t.jsx(l,{text:"Total views across my work"})})]}),t.jsxs("div",{children:[t.jsxs("strong",{children:[t.jsx(l,{text:"42.2"}),t.jsx("span",{children:t.jsx(l,{text:"k"})})]}),t.jsx("p",{children:t.jsx(l,{text:"DAUD followers grown from 20k"})})]}),t.jsxs("div",{children:[t.jsx("strong",{children:t.jsx(l,{text:"02"})}),t.jsx("p",{children:t.jsx(l,{text:"Short films edited & directed"})})]}),t.jsxs("a",{href:"#work",className:"results-note",children:[t.jsxs("span",{children:[t.jsx(l,{text:"A few numbers."}),t.jsx("br",{}),t.jsx(l,{text:"A lot of stories."})]}),t.jsx(Oe,{size:22})]})]}),t.jsx(gs,{}),t.jsx(vs,{}),t.jsx(js,{}),t.jsx(ks,{}),t.jsx(j.Suspense,{fallback:t.jsx(jt,{}),children:t.jsx(Ms,{})}),t.jsx(j.Suspense,{fallback:t.jsx(jt,{}),children:t.jsx(Ss,{})}),t.jsx(As,{})]}),t.jsxs("footer",{className:"site-footer",children:[t.jsxs("a",{href:"#top",className:"wordmark",children:[t.jsx(l,{text:"nived mehta"}),t.jsx("span",{className:"wordmark-dot",children:t.jsx(l,{text:"."})})]}),t.jsx("p",{children:t.jsx(l,{text:"Made to move you."})}),t.jsxs("div",{className:"footer-links",children:[t.jsxs("a",{href:"https://www.instagram.com/nived_mehta/",target:"_blank",rel:"noopener noreferrer","aria-label":"Nived Mehta on Instagram",children:[t.jsx(es,{size:18}),t.jsx(l,{text:" Instagram"})]}),t.jsxs("a",{href:"https://www.linkedin.com/in/nived-mehta-7073b1374/",target:"_blank",rel:"noopener noreferrer","aria-label":"Nived Mehta on LinkedIn",children:[t.jsx(ts,{size:18}),t.jsx(l,{text:" LinkedIn"})]}),t.jsxs("a",{href:mn,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(l,{text:"WhatsApp "}),t.jsx(Oe,{size:16})]})]}),t.jsx("a",{href:"#top",className:"back-top","aria-label":"Back to top",children:t.jsx(Zr,{size:18})})]})]})}const Rs=Object.freeze(Object.defineProperty({__proto__:null,default:Ns},Symbol.toStringTag,{value:"Module"}));export{Rs as A,l as T,Xr as u};
