import h from"./DocumentDrivenEmpty.48bd65bf.js";import L from"./ContentRenderer.1f48d7b2.js";import R from"./DocumentDrivenNotFound.255e0023.js";import{j as g,d as c,I as x,P as C,s as b,J as k,K as B,L as u,r as N,M as y,N as S,O as T,Q as l,T as j,R as A,B as w,S as D,U as E,V as O,l as H,W as $,X as q,b as d,c as I,g as f,w as _,Y as v}from"./entry.d8a15025.js";import"./ContentRendererMarkdown.vue.8b863779.js";import"./ButtonLink.8519af32.js";import"./slot.53ff40e8.js";import"./node.676c5e99.js";const M=c({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(o,n){const e=await y[o.name]().then(t=>t.default||t);return()=>l(e,o.layoutProps,n.slots)}}),V=c({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(o,n){const e=g(),t=x(C),a=t===b()?k():t,s=B(()=>u(o.name)??a.meta.layout??"default"),r=N();n.expose({layoutRef:r});const m=e.deferHydration();return()=>{const p=s.value&&s.value in y,i=a.meta.layoutTransition??S;return T(j,p&&i,{default:()=>l(D,{suspensible:!0,onResolve:()=>{w(m)}},{default:()=>l(F,{layoutProps:A(n.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!o.name,hasTransition:!!i},n.slots)})}).default()}}}),F=c({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(o,n){const e=o.name;return o.shouldProvide&&E(O,{isCurrent:t=>e===(t.meta.layout??"default")}),()=>{var t,a;return!e||typeof e=="string"&&!(e in y)?(a=(t=n.slots).default)==null?void 0:a.call(t):l(M,{key:e,layoutProps:o.layoutProps,name:e},n.slots)}}}),J={class:"document-driven-page"},Z=c({__name:"document-driven",setup(o){const{contentHead:n}=H().public.content,{page:e,layout:t}=$();return e.value,n&&q(e),(a,s)=>{const r=h,m=L,p=R,i=V;return d(),I("div",J,[f(i,{name:u(t)||"default"},{default:_(()=>[u(e)?(d(),v(m,{key:u(e)._id,value:u(e)},{empty:_(({value:P})=>[f(r,{value:P},null,8,["value"])]),_:1},8,["value"])):(d(),v(p,{key:1}))]),_:1},8,["name"])])}}});export{Z as default};
