"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{9403:(e,t,a)=>{a.d(t,{Ww:()=>o,tW:()=>s,ss:()=>i,l0:()=>c,Eg:()=>x,fq:()=>u,Ei:()=>h,u_:()=>w});var r=a(7437);let o=e=>{let{title:t,className:a,disabled:o,runAction:n}=e;return(0,r.jsx)("button",{type:"button",onClick:n,disabled:o,className:["border  font-medium py-1 px-4 text-white cursor-pointer",o?"bg-gray bg-opacity-20 border-gray opacity-50 cursor-progress":"hover:bg-accent hover:bg-opacity-20 border-accent ",a].join(" "),children:t})};var n=a(7138);let s=e=>{let{href:t,title:a,target:o,rel:s="",className:i}=e;return(0,r.jsx)(n.default,{href:t,target:o,rel:"_blank"===o?"noopener noreferrer":s,className:["border border-accent hover:bg-accent hover:bg-opacity-20 font-medium py-1 px-4 text-white",i].join(" "),children:a})},i=e=>{let{title:t,className:a,disabled:o}=e;return(0,r.jsx)("input",{type:"submit",value:t,disabled:o,className:["border font-medium py-1 px-4 text-white cursor-pointer block",o?"bg-gray bg-opacity-20 border-gray opacity-50 cursor-progress":"hover:bg-accent hover:bg-opacity-20 border-accent ",a].join(" ")})};var l=a(2265);let c=(0,l.memo)(e=>{let{children:t,...a}=e;return(0,r.jsx)("form",{...a,children:t})});var d=a(4446),p=a(8606);let x=e=>{let{name:t,value:a="",onChange:o,error:n="",disabled:s,maxLength:i,minLength:l,label:c,className:x,classNameInput:u}=e,h=(null==n?void 0:n.length)<1;return(0,r.jsxs)("div",{className:["w-full",x].join(" "),children:[(0,r.jsxs)("label",{htmlFor:t,className:"relative",children:[(0,r.jsx)("input",{type:"text",id:t,name:t,maxLength:i,minLength:l,onChange:o,value:a,disabled:s,autoComplete:"off",className:["h-11 border border-gray focus:border-white bg-primary  outline-none flex-1 px-4 text-16 w-full peer",h?"":"!border-red-500",s&&"cursor-progress opacity-50",u].join(" ")}),c&&(0,r.jsx)("span",{className:["absolute  left-2 translate-y-1/2  bg-primary px-2 transition-all ease-linear  cursor-text select-none","peer-focus:opacity-100 peer-focus:text-[12px] peer-focus:font-bold peer-focus:translate-y-[-0.7rem]",a.length>0?"opacity-100 text-[12px] font-bold translate-y-[-0.7rem]":"text-16 opacity-80"].join(" "),children:c})]}),(0,r.jsx)(d.M,{children:n&&(0,r.jsx)(p.E.div,{initial:{height:"0px"},animate:{height:"auto"},exit:{height:"0px"},transition:{ease:"easeIn"},className:"overflow-hidden",children:(0,r.jsx)("p",{className:"text-xs mt-2 text-red-500",children:n})})})]})},u=e=>{let{name:t,value:a="",onChange:o,error:n="",disabled:s,maxLength:i,minLength:l,label:c,className:x,classNameInput:u,rows:h}=e,m=(null==n?void 0:n.length)<1;return(0,r.jsxs)("div",{className:["w-full",x].join(" "),children:[(0,r.jsxs)("label",{htmlFor:t,className:"relative",children:[(0,r.jsx)("textarea",{id:t,name:t,maxLength:i,minLength:l,onChange:o,value:a,disabled:s,autoComplete:"off",rows:h,className:["border border-gray py-2 focus:border-white bg-primary  outline-none flex-1 px-4 text-16 w-full peer",m?"":"!border-red-500",s&&"cursor-progress opacity-50",u].join(" ")}),c&&(0,r.jsx)("span",{className:["absolute  left-2 translate-y-1/2  bg-primary px-2 transition-all ease-linear  cursor-text select-none","peer-focus:opacity-100 peer-focus:text-[12px] peer-focus:font-bold peer-focus:translate-y-[-0.7rem]",a.length>0?"opacity-100 text-[12px] font-bold translate-y-[-0.7rem]":"text-16 opacity-80"].join(" "),children:c})]}),(0,r.jsx)(d.M,{children:n&&(0,r.jsx)(p.E.div,{initial:{height:"0px"},animate:{height:"auto"},exit:{height:"0px"},transition:{ease:"easeIn"},className:"overflow-hidden",children:(0,r.jsx)("p",{className:"text-xs  text-red-500",children:n})})})]})},h=e=>{let{src:t,alt:a="",className:o,draggable:n=!1,altImg:s="/icons/johnallendechavez.svg",width:i,height:c,style:d,title:p}=e,[x,u]=(0,l.useState)(!1);return(0,r.jsx)("img",{title:p,draggable:n,onError:()=>{u(!0)},alt:a,width:i,height:c,style:d,src:x||!t?s:t,className:["select-none",o].join(" ")})};var m=a(4887),y=a(5848),g=a.n(y),f=a(6463);let b=(e,t)=>{(0,l.useEffect)(()=>{let a=a=>{!e.current||e.current.contains(a.target)||t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[e,t])},v=(0,l.forwardRef)((e,t)=>{let{children:a,title:o,isSecondModal:n=!1,exitFunc:s,isNoOutsideClick:i,isNoCloseBtn:c,initialFocus:x,classNameTitle:u}=e,y=(0,l.useRef)(null),[v,w]=(0,l.useState)(!0),j=(0,f.usePathname)(),N=()=>w(!0),E=()=>{if(w(!1),s)return s()};return(0,l.useEffect)(()=>{v&&(document.body.style.overflow="hidden");let e=e=>{v&&"Escape"===e.code&&E()};return window.addEventListener("keyup",e),()=>{v&&!n&&(document.body.style.overflowY="scroll"),window.removeEventListener("keyup",e)}},[v,n,j]),b(y,()=>{i||c||!v||E()}),(0,l.useImperativeHandle)(t,()=>({openModal:()=>N(),closeModal:()=>E(),isOpen:()=>v})),m.createPortal((0,r.jsx)(d.M,{children:v&&(0,r.jsx)(g(),{focusTrapOptions:{initialFocus:x||!1,fallbackFocus:"body"},children:(0,r.jsx)(p.E.div,{initial:{opacity:.5},animate:{opacity:1},exit:{opacity:0},style:{backdropFilter:"blur(2px)"},className:"fixed lg:max-w-[calc(100vw-8px)] inset-0 transform-gpu flex  flex-col px-4 py-8 sm:px-8  items-center bg-[#000000] bg-opacity-50 z-[100] bg-clip-padding",children:(0,r.jsxs)(p.E.div,{ref:y,initial:{opacity:.5,y:20},animate:{opacity:1,y:0,transition:{ease:"easeOut",duration:.3}},exit:{opacity:0,transition:{ease:"easeOut"}},className:"relative shadow-xl z-[60]  md:max-w-[836px] w-full origin-center my-auto sm:px-4 py-4 bg-primary  flex flex-col ",children:[!c&&(0,r.jsx)(p.E.button,{type:"button",tabIndex:0,onClick:()=>E(),initial:{rotate:90,scale:0},animate:{rotate:0,scale:1,transition:{delay:.6}},exit:{rotate:90},className:"absolute text-skin-base  top-4 z-[60] right-4  rounded-full grid place-items-center select-none",children:(0,r.jsx)(h,{src:"/icons/x.svg",className:" object-contain object-center w-6 h-6",alt:"x icon",height:"24",width:"24"})}),(0,r.jsx)("div",{className:["font-bold text-base md:text-xl lg:text-2xl text-center",u].join(" "),children:o}),(0,r.jsx)("div",{className:"max-w-[80%] mx-auto w-full flex justify-center py-4 px-8",children:(0,r.jsx)("svg",{height:"1",viewBox:"0 0 299 1",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M149.5 0L0 0.5L149.5 1L299 0.5L149.5 0Z",fill:"#C778DD"})})}),(0,r.jsx)("div",{className:"scrollable-container w-full text-base font-normal px-4 sm:px-0 overflow-auto max-h-[calc(100vh-12rem)]",children:a})]})})})}),document.body)});v.displayName="Modal";let w=v},6398:(e,t,a)=>{a.d(t,{Ji:()=>r,cR:()=>n,kr:()=>o});let r=(e,t,a,r)=>({hidden:{x:"left"===e?100:"right"===e?-100:0,y:"up"===e?100:"down"===e?-100:0,opacity:0,transition:{delay:a}},show:{x:0,y:0,opacity:1,transition:{type:t,delay:a,duration:r,ease:"easeInOut",stiffness:"spring"===t?100:void 0,damping:"spring"===t?8:void 0}}}),o=(e,t)=>({hidden:{scale:.5,opacity:0},show:{scale:1,opacity:1,transition:{type:"tween",delay:e,duration:t,ease:"easeInOut"}}}),n={hidden:{transform:"perspective(550px) rotateY(-25deg) rotateX(-15deg)",zIndex:10,opacity:0},show:{transform:"perspective(550px) rotateY(0deg) rotateX(0deg)",opacity:1,transition:{staggerChildren:.15,ease:"easeInOut",duration:.6}}}}}]);