"use strict";var Ln=Object.create;var D=Object.defineProperty;var Fn=Object.getOwnPropertyDescriptor;var Mn=Object.getOwnPropertyNames;var Bn=Object.getPrototypeOf,jn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Un=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},ke=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Mn(t))!jn.call(e,o)&&o!==r&&D(e,o,{get:()=>t[o],enumerable:!(n=Fn(t,o))||n.enumerable});return e};var W=(e,t,r)=>(r=e!=null?Ln(Bn(e)):{},ke(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e)),Dn=e=>ke(D({},"__esModule",{value:!0}),e);var Be=c((Ko,Me)=>{Me.exports=Fe;Fe.sync=Xn;var _e=require("fs");function Wn(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var o=r[n].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Le(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:Wn(t,r)}function Fe(e,t,r){_e.stat(e,function(n,o){r(n,n?!1:Le(o,e,t))})}function Xn(e,t){return Le(_e.statSync(e),e,t)}});var Xe=c((zo,We)=>{We.exports=Ue;Ue.sync=Hn;var je=require("fs");function Ue(e,t,r){je.stat(e,function(n,o){r(n,n?!1:De(o,t))})}function Hn(e,t){return De(je.statSync(e),t)}function De(e,t){return e.isFile()&&Kn(e,t)}function Kn(e,t){var r=e.mode,n=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=a|u,h=r&l||r&u&&o===i||r&a&&n===s||r&f&&s===0;return h}});var Ke=c((Yo,He)=>{var Vo=require("fs"),X;process.platform==="win32"||global.TESTING_WINDOWS?X=Be():X=Xe();He.exports=le;le.sync=zn;function le(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,o){le(e,t||{},function(s,i){s?o(s):n(i)})})}X(e,t||{},function(n,o){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,o=!1),r(n,o)})}function zn(e,t){try{return X.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var et=c((Qo,Je)=>{var T=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",ze=require("path"),Vn=T?";":":",Ve=Ke(),Ye=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Qe=(e,t)=>{let r=t.colon||Vn,n=e.match(/\//)||T&&e.match(/\\/)?[""]:[...T?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],o=T?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=T?o.split(r):[""];return T&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:n,pathExt:s,pathExtExe:o}},Ze=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:o,pathExtExe:s}=Qe(e,t),i=[],a=l=>new Promise((f,h)=>{if(l===n.length)return t.all&&i.length?f(i):h(Ye(e));let p=n[l],g=/^".*"$/.test(p)?p.slice(1,-1):p,y=ze.join(g,e),S=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;f(u(S,l,0))}),u=(l,f,h)=>new Promise((p,g)=>{if(h===o.length)return p(a(f+1));let y=o[h];Ve(l+y,{pathExt:s},(S,v)=>{if(!S&&v)if(t.all)i.push(l+y);else return p(l+y);return p(u(l,f,h+1))})});return r?a(0).then(l=>r(null,l),r):a(0)},Yn=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:o}=Qe(e,t),s=[];for(let i=0;i<r.length;i++){let a=r[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=ze.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<n.length;h++){let p=f+n[h];try{if(Ve.sync(p,{pathExt:o}))if(t.all)s.push(p);else return p}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Ye(e)};Je.exports=Ze;Ze.sync=Yn});var fe=c((Zo,de)=>{"use strict";var tt=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};de.exports=tt;de.exports.default=tt});var st=c((Jo,ot)=>{"use strict";var nt=require("path"),Qn=et(),Zn=fe();function rt(e,t){let r=e.options.env||process.env,n=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Qn.sync(e.command,{path:r[Zn({env:r})],pathExt:t?nt.delimiter:void 0})}catch{}finally{s&&process.chdir(n)}return i&&(i=nt.resolve(o?e.options.cwd:"",i)),i}function Jn(e){return rt(e)||rt(e,!0)}ot.exports=Jn});var it=c((es,pe)=>{"use strict";var me=/([()\][%!^"`<>&|;, *?])/g;function er(e){return e=e.replace(me,"^$1"),e}function tr(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(me,"^$1"),t&&(e=e.replace(me,"^$1")),e}pe.exports.command=er;pe.exports.argument=tr});var ct=c((ts,at)=>{"use strict";at.exports=/^#!(.*)/});var lt=c((ns,ut)=>{"use strict";var nr=ct();ut.exports=(e="")=>{let t=e.match(nr);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?n:n?`${o} ${n}`:o}});var ft=c((rs,dt)=>{"use strict";var he=require("fs"),rr=lt();function or(e){let r=Buffer.alloc(150),n;try{n=he.openSync(e,"r"),he.readSync(n,r,0,150,0),he.closeSync(n)}catch{}return rr(r.toString())}dt.exports=or});var gt=c((os,ht)=>{"use strict";var sr=require("path"),mt=st(),pt=it(),ir=ft(),ar=process.platform==="win32",cr=/\.(?:com|exe)$/i,ur=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function lr(e){e.file=mt(e);let t=e.file&&ir(e.file);return t?(e.args.unshift(e.file),e.command=t,mt(e)):e.file}function dr(e){if(!ar)return e;let t=lr(e),r=!cr.test(t);if(e.options.forceShell||r){let n=ur.test(t);e.command=sr.normalize(e.command),e.command=pt.command(e.command),e.args=e.args.map(s=>pt.argument(s,n));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function fr(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:dr(n)}ht.exports=fr});var xt=c((ss,St)=>{"use strict";var ge=process.platform==="win32";function ye(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function mr(e,t){if(!ge)return;let r=e.emit;e.emit=function(n,o){if(n==="exit"){let s=yt(o,t,"spawn");if(s)return r.call(e,"error",s)}return r.apply(e,arguments)}}function yt(e,t){return ge&&e===1&&!t.file?ye(t.original,"spawn"):null}function pr(e,t){return ge&&e===1&&!t.file?ye(t.original,"spawnSync"):null}St.exports={hookChildProcess:mr,verifyENOENT:yt,verifyENOENTSync:pr,notFoundError:ye}});var Et=c((is,P)=>{"use strict";var wt=require("child_process"),Se=gt(),xe=xt();function bt(e,t,r){let n=Se(e,t,r),o=wt.spawn(n.command,n.args,n.options);return xe.hookChildProcess(o,n),o}function hr(e,t,r){let n=Se(e,t,r),o=wt.spawnSync(n.command,n.args,n.options);return o.error=o.error||xe.verifyENOENTSync(o.status,n),o}P.exports=bt;P.exports.spawn=bt;P.exports.sync=hr;P.exports._parse=Se;P.exports._enoent=xe});var vt=c((as,It)=>{"use strict";It.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var Ct=c((cs,k)=>{"use strict";var q=require("path"),Tt=fe(),Pt=e=>{e={cwd:process.cwd(),path:process.env[Tt()],execPath:process.execPath,...e};let t,r=q.resolve(e.cwd),n=[];for(;t!==r;)n.push(q.join(r,"node_modules/.bin")),t=r,r=q.resolve(r,"..");let o=q.resolve(e.cwd,e.execPath,"..");return n.push(o),n.concat(e.path).join(q.delimiter)};k.exports=Pt;k.exports.default=Pt;k.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=Tt({env:t});return e.path=t[r],t[r]=k.exports(e),t}});var At=c((us,we)=>{"use strict";var Gt=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};we.exports=Gt;we.exports.default=Gt});var Rt=c((ls,K)=>{"use strict";var gr=At(),H=new WeakMap,Ot=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(H.set(s,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return gr(s,e),H.set(s,n),s};K.exports=Ot;K.exports.default=Ot;K.exports.callCount=e=>{if(!H.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return H.get(e)}});var Nt=c(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.SIGNALS=void 0;var yr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];z.SIGNALS=yr});var be=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.SIGRTMAX=C.getRealtimeSignals=void 0;var Sr=function(){let e=qt-$t+1;return Array.from({length:e},xr)};C.getRealtimeSignals=Sr;var xr=function(e,t){return{name:`SIGRT${t+1}`,number:$t+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},$t=34,qt=64;C.SIGRTMAX=qt});var kt=c(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.getSignals=void 0;var wr=require("os"),br=Nt(),Er=be(),Ir=function(){let e=(0,Er.getRealtimeSignals)();return[...br.SIGNALS,...e].map(vr)};V.getSignals=Ir;var vr=function({name:e,number:t,description:r,action:n,forced:o=!1,standard:s}){let{signals:{[e]:i}}=wr.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:o,standard:s}}});var Lt=c(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.signalsByNumber=G.signalsByName=void 0;var Tr=require("os"),_t=kt(),Pr=be(),Cr=function(){return(0,_t.getSignals)().reduce(Gr,{})},Gr=function(e,{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}}},Ar=Cr();G.signalsByName=Ar;var Or=function(){let e=(0,_t.getSignals)(),t=Pr.SIGRTMAX+1,r=Array.from({length:t},(n,o)=>Rr(o,e));return Object.assign({},...r)},Rr=function(e,t){let r=Nr(e,t);if(r===void 0)return{};let{name:n,description:o,supported:s,action:i,forced:a,standard:u}=r;return{[e]:{name:n,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},Nr=function(e,t){let r=t.find(({name:n})=>Tr.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},$r=Or();G.signalsByNumber=$r});var Mt=c((hs,Ft)=>{"use strict";var{signalsByName:qr}=Lt(),kr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",_r=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let p=o===void 0?void 0:qr[o].description,g=n&&n.code,S=`Command ${kr({timedOut:u,timeout:h,errorCode:g,signal:o,signalDescription:p,exitCode:s,isCanceled:l})}: ${i}`,v=Object.prototype.toString.call(n)==="[object Error]",j=v?`${S}
${n.message}`:S,U=[j,t,e].filter(Boolean).join(`
`);return v?(n.originalMessage=n.message,n.message=U):n=new Error(U),n.shortMessage=j,n.command=i,n.escapedCommand=a,n.exitCode=s,n.signal=o,n.signalDescription=p,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=!!u,n.isCanceled=l,n.killed=f&&!u,n};Ft.exports=_r});var jt=c((gs,Ee)=>{"use strict";var Y=["stdin","stdout","stderr"],Lr=e=>Y.some(t=>e[t]!==void 0),Bt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return Y.map(n=>e[n]);if(Lr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Y.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,Y.length);return Array.from({length:r},(n,o)=>t[o])};Ee.exports=Bt;Ee.exports.node=e=>{let t=Bt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Ut=c((ys,Q)=>{Q.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&Q.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&Q.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Kt=c((Ss,R)=>{var d=global.process,E=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};E(d)?(Dt=require("assert"),A=Ut(),Wt=/^win/i.test(d.platform),_=require("events"),typeof _!="function"&&(_=_.EventEmitter),d.__signal_exit_emitter__?m=d.__signal_exit_emitter__:(m=d.__signal_exit_emitter__=new _,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),R.exports=function(e,t){if(!E(global.process))return function(){};Dt.equal(typeof e,"function","a callback must be provided for exit handler"),O===!1&&Ie();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){m.removeListener(r,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&Z()};return m.on(r,e),n},Z=function(){!O||!E(global.process)||(O=!1,A.forEach(function(t){try{d.removeListener(t,J[t])}catch{}}),d.emit=ee,d.reallyExit=ve,m.count-=1)},R.exports.unload=Z,I=function(t,r,n){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,r,n))},J={},A.forEach(function(e){J[e]=function(){if(E(global.process)){var r=d.listeners(e);r.length===m.count&&(Z(),I("exit",null,e),I("afterexit",null,e),Wt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),R.exports.signals=function(){return A},O=!1,Ie=function(){O||!E(global.process)||(O=!0,m.count+=1,A=A.filter(function(t){try{return d.on(t,J[t]),!0}catch{return!1}}),d.emit=Ht,d.reallyExit=Xt)},R.exports.load=Ie,ve=d.reallyExit,Xt=function(t){E(global.process)&&(d.exitCode=t||0,I("exit",d.exitCode,null),I("afterexit",d.exitCode,null),ve.call(d,d.exitCode))},ee=d.emit,Ht=function(t,r){if(t==="exit"&&E(global.process)){r!==void 0&&(d.exitCode=r);var n=ee.apply(this,arguments);return I("exit",d.exitCode,null),I("afterexit",d.exitCode,null),n}else return ee.apply(this,arguments)}):R.exports=function(){return function(){}};var Dt,A,Wt,_,m,Z,I,J,O,Ie,ve,Xt,ee,Ht});var Vt=c((xs,zt)=>{"use strict";var Fr=require("os"),Mr=Kt(),Br=1e3*5,jr=(e,t="SIGTERM",r={})=>{let n=e(t);return Ur(e,t,r,n),n},Ur=(e,t,r,n)=>{if(!Dr(t,r,n))return;let o=Xr(r),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Dr=(e,{forceKillAfterTimeout:t},r)=>Wr(e)&&t!==!1&&r,Wr=e=>e===Fr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Xr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Br;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Hr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Kr=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},zr=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Kr(e,r,u)},t)}),i=n.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Vr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Yr=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let o=Mr(()=>{e.kill()});return n.finally(()=>{o()})};zt.exports={spawnedKill:jr,spawnedCancel:Hr,setupTimeout:zr,validateTimeout:Vr,setExitHandler:Yr}});var Qt=c((ws,Yt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Yt.exports=x});var Jt=c((bs,Zt)=>{"use strict";var{PassThrough:Qr}=require("stream");Zt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);let s=new Qr({objectMode:o});r&&s.setEncoding(r);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var en=c((Es,L)=>{"use strict";var{constants:Zr}=require("buffer"),Jr=require("stream"),{promisify:eo}=require("util"),to=Jt(),no=eo(Jr.pipeline),te=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Te(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=to(t);return await new Promise((o,s)=>{let i=a=>{a&&n.getBufferedLength()<=Zr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),s(a)};(async()=>{try{await no(e,n),o()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new te)})}),n.getBufferedValue()}L.exports=Te;L.exports.buffer=(e,t)=>Te(e,{...t,encoding:"buffer"});L.exports.array=(e,t)=>Te(e,{...t,array:!0});L.exports.MaxBufferError=te});var nn=c((Is,tn)=>{"use strict";var{PassThrough:ro}=require("stream");tn.exports=function(){var e=[],t=new ro({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),t;function r(s){return Array.isArray(s)?(s.forEach(r),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function n(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var an=c((vs,sn)=>{"use strict";var on=Qt(),rn=en(),oo=nn(),so=(e,t)=>{t===void 0||e.stdin===void 0||(on(t)?t.pipe(e.stdin):e.stdin.end(t))},io=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=oo();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},Pe=async(e,t)=>{if(e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},Ce=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?rn(e,{encoding:t,maxBuffer:n}):rn.buffer(e,{maxBuffer:n})},ao=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:o,maxBuffer:s},i)=>{let a=Ce(e,{encoding:n,buffer:o,maxBuffer:s}),u=Ce(t,{encoding:n,buffer:o,maxBuffer:s}),l=Ce(r,{encoding:n,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},Pe(e,a),Pe(t,u),Pe(r,l)])}},co=({input:e})=>{if(on(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};sn.exports={handleInput:so,makeAllStream:io,getSpawnedResult:ao,validateInputSync:co}});var un=c((Ts,cn)=>{"use strict";var uo=(async()=>{})().constructor.prototype,lo=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(uo,e)]),fo=(e,t)=>{for(let[r,n]of lo){let o=typeof t=="function"?(...s)=>Reflect.apply(n.value,t(),s):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:o})}return e},mo=e=>new Promise((t,r)=>{e.on("exit",(n,o)=>{t({exitCode:n,signal:o})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});cn.exports={mergePromise:fo,getSpawnedPromise:mo}});var fn=c((Ps,dn)=>{"use strict";var ln=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],po=/^[\w.-]+$/,ho=/"/g,go=e=>typeof e!="string"||po.test(e)?e:`"${e.replace(ho,'\\"')}"`,yo=(e,t)=>ln(e,t).join(" "),So=(e,t)=>ln(e,t).map(r=>go(r)).join(" "),xo=/ +/g,wo=e=>{let t=[];for(let r of e.trim().split(xo)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};dn.exports={joinCommand:yo,getEscapedCommand:So,parseCommand:wo}});var xn=c((Cs,N)=>{"use strict";var bo=require("path"),Ge=require("child_process"),Eo=Et(),Io=vt(),vo=Ct(),To=Rt(),ne=Mt(),pn=jt(),{spawnedKill:Po,spawnedCancel:Co,setupTimeout:Go,validateTimeout:Ao,setExitHandler:Oo}=Vt(),{handleInput:Ro,getSpawnedResult:No,makeAllStream:$o,validateInputSync:qo}=an(),{mergePromise:mn,getSpawnedPromise:ko}=un(),{joinCommand:hn,parseCommand:gn,getEscapedCommand:yn}=fn(),_o=1e3*1e3*100,Lo=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:o})=>{let s=t?{...process.env,...e}:e;return r?vo.env({env:s,cwd:n,execPath:o}):s},Sn=(e,t,r={})=>{let n=Eo._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:_o,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=Lo(r),r.stdio=pn(r),process.platform==="win32"&&bo.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},F=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?Io(t):t,re=(e,t,r)=>{let n=Sn(e,t,r),o=hn(e,t),s=yn(e,t);Ao(n.options);let i;try{i=Ge.spawn(n.file,n.args,n.options)}catch(g){let y=new Ge.ChildProcess,S=Promise.reject(ne({error:g,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return mn(y,S)}let a=ko(i),u=Go(i,n.options,a),l=Oo(i,n.options,u),f={isCanceled:!1};i.kill=Po.bind(null,i.kill.bind(i)),i.cancel=Co.bind(null,i,f);let p=To(async()=>{let[{error:g,exitCode:y,signal:S,timedOut:v},j,U,_n]=await No(i,n.options,l),Re=F(n.options,j),Ne=F(n.options,U),$e=F(n.options,_n);if(g||y!==0||S!==null){let qe=ne({error:g,exitCode:y,signal:S,stdout:Re,stderr:Ne,all:$e,command:o,escapedCommand:s,parsed:n,timedOut:v,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return qe;throw qe}return{command:o,escapedCommand:s,exitCode:0,stdout:Re,stderr:Ne,all:$e,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Ro(i,n.options.input),i.all=$o(i,n.options),mn(i,p)};N.exports=re;N.exports.sync=(e,t,r)=>{let n=Sn(e,t,r),o=hn(e,t),s=yn(e,t);qo(n.options);let i;try{i=Ge.spawnSync(n.file,n.args,n.options)}catch(l){throw ne({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=F(n.options,i.stdout,i.error),u=F(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=ne({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};N.exports.command=(e,t)=>{let[r,...n]=gn(e);return re(r,n,t)};N.exports.commandSync=(e,t)=>{let[r,...n]=gn(e);return re.sync(r,n,t)};N.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=pn.node(r),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=r;return re(s,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var Xo={};Un(Xo,{default:()=>kn});module.exports=Dn(Xo);var ue=require("react");var ce=require("@raycast/api");var b=require("react");var wn=W(require("node:process"),1),bn=W(xn(),1);async function En(e,{humanReadableOutput:t=!0}={}){if(wn.default.platform!=="darwin")throw new Error("macOS only");let r=t?[]:["-ss"],{stdout:n}=await(0,bn.default)("osascript",["-e",e,r]);return n}var M="commandWindow",Fo=()=>`
  if windows of application "iTerm" is {} then 
    set ${M} to (create window with default profile)
  else
    set ${M} to current window
  end if
  `,Mo=()=>`set ${M} to (create window with default profile)`,Bo=()=>`tell ${M} to create tab with default profile`,jo=({command:e,location:t})=>{let r=e.replace(/"/g,'\\"');return`
  tell application "iTerm"
    launch
    repeat until application "iTerm" is running
      delay 0.1
    end repeat

    ${t==="new-window"?Mo():Fo()}
    ${t==="new-tab"?Bo():""}

    tell current session of ${M}
        write text "${r}"
    end tell
    activate
  end tell`},In=e=>{let[t,r]=(0,b.useState)(!0),[n,o]=(0,b.useState)(),[s,i]=(0,b.useState)(!1),a=(0,b.useMemo)(()=>jo(e),[e]);return(0,b.useEffect)(()=>{En(a).then(()=>i(!0)).catch(u=>o(u))},[a]),(0,b.useEffect)(()=>{(n||s)&&r(!1)},[n,s]),{loading:t,error:n,success:s}};var w=require("@raycast/api"),Tn=W(require("path"));var vn=W(require("path"),1);function Ae(e,t={}){if(typeof e!="string")throw new TypeError(`Expected a string, got ${typeof e}`);let{resolve:r=!0}=t,n=e;return r&&(n=vn.default.resolve(e)),n=n.replace(/\\/g,"/"),n[0]!=="/"&&(n=`/${n}`),encodeURI(`file://${n}`).replace(/[?#]/g,encodeURIComponent)}var $=require("react/jsx-runtime"),Uo=()=>(0,$.jsx)(w.Action.Open,{title:"Open System Preferences",icon:w.Icon.Gear,target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}),Do=()=>(0,$.jsx)(w.ActionPanel,{children:(0,$.jsx)(Uo,{})}),Wo=`## Raycast needs automation access to iTerm.

1. Open **System Settings**
1. Open the **Privacy & Security** Preferences pane 
1. Then select the **Automation** tab
1. Expand **Raycast** from the list of applications
1. Ensure the **iTerm**  toggle is enabled as shown in the image below
1. When prompted enter your password

![Full Disk Access Preferences Pane](${Ae(Tn.default.join(w.environment.assetsPath,"permission-raycast-automation.png"))})
`,Pn=e=>e.indexOf("Command failed with exit code 1: osascript -e")!==-1,Cn=()=>(0,$.jsx)(w.Detail,{markdown:Wo,navigationTitle:"Permission Issue with Raycast",actions:(0,$.jsx)(Do,{})});var Gn=require("react"),oe=require("@raycast/api"),se=({error:e})=>((0,Gn.useEffect)(()=>{(async()=>await(0,oe.showToast)({style:oe.Toast.Style.Failure,title:"Error",message:e.message}))()},[]),null);var Rn=require("react");var ie=require("@raycast/api"),An=require("react"),On=({message:e})=>((0,An.useEffect)(()=>{(async()=>await(0,ie.showToast)({style:ie.Toast.Style.Animated,title:"Loading",message:e}))()},[]),null);var ae=require("react/jsx-runtime"),Nn=({loadingMessage:e="Sending iTerm command...",location:t="new-window",...r})=>{let{loading:n,success:o,error:s}=In({...r,location:t});return(0,Rn.useEffect)(()=>{o&&(async()=>(await(0,ce.closeMainWindow)(),await(0,ce.popToRoot)()))()},[o]),n?(0,ae.jsx)(On,{message:e}):s?Pn(s.message)?(0,ae.jsx)(Cn,{}):(0,ae.jsx)(se,{error:s}):null};var $n=require("@raycast/api"),B=require("react"),qn=()=>{let[e,t]=(0,B.useState)([]),[r,n]=(0,B.useState)();return(0,B.useEffect)(()=>{(0,$n.getSelectedFinderItems)().then(o=>o.length===0?n(new Error("No files selected")):t(o)).catch(o=>n(o))},[]),{items:e,error:r}};var Oe=require("react/jsx-runtime");function kn(){let[e,t]=(0,ue.useState)(""),{items:r,error:n}=qn();return(0,ue.useEffect)(()=>{r.length&&t(`$EDITOR ${r.map(o=>`"${o.path}"`).join(" ")}`)},[r]),n?(0,Oe.jsx)(se,{error:n}):e?(0,Oe.jsx)(Nn,{command:e,loadingMessage:"Getting selected file(s)..."}):null}
