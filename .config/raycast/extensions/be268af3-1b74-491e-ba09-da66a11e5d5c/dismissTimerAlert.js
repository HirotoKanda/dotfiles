"use strict";var a=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var T=(e,s)=>{for(var i in s)a(e,i,{get:s[i],enumerable:!0})},S=(e,s,i,t)=>{if(s&&typeof s=="object"||typeof s=="function")for(let o of g(s))!h.call(e,o)&&o!==i&&a(e,o,{get:()=>s[o],enumerable:!(t=p(s,o))||t.enumerable});return e};var y=e=>S(a({},"__esModule",{value:!0}),e);var w={};T(w,{default:()=>$});module.exports=y(w);var r=require("@raycast/api"),d=require("fs");var n=require("@raycast/api");var m=require("fs"),u=require("path");var l=e=>(e.d1=e.d1=="----"?void 0:e.d1,e.d2=e.d2=="----"?void 0:e.d2,Math.round((e.d1?new Date(e.d1):new Date).getTime()-(e.d2?new Date(e.d2):new Date).getTime())/1e3);var O=n.environment.supportPath+"/customTimers.json";function f(){let e=[];return(0,m.readdirSync)(n.environment.supportPath).forEach(i=>{if((0,u.extname)(i)==".timer"){let t={name:"",secondsSet:-99,timeLeft:-99,originalFile:i,timeEnds:new Date};t.name=(0,m.readFileSync)(n.environment.supportPath+"/"+i).toString();let o=i.split("---");t.secondsSet=Number(o[1].split(".")[0]);let c=o[0].replace(/__/g,":");t.timeLeft=Math.max(0,Math.round(t.secondsSet-l({d2:c}))),t.timeEnds=new Date(c),t.timeEnds.setSeconds(t.timeEnds.getSeconds()+t.secondsSet),e.push(t)}}),e.sort((i,t)=>i.timeLeft-t.timeLeft),e}var $=async()=>{if(!(0,r.getPreferenceValues)().ringContinuously)return await(0,r.showToast)({style:r.Toast.Style.Failure,title:"Ring Continuously setting not enabled!"});let e=f().filter(i=>i.timeLeft===0);if(e.length===0)return await(0,r.showToast)({style:r.Toast.Style.Failure,title:"No finished timers found!"});await(0,r.closeMainWindow)();let s=e[0].originalFile.replace(".timer",".dismiss");(0,d.unlinkSync)(r.environment.supportPath+"/"+s)};
