import{d,r as t,b as p,c as _,e as s,g as m,n,L as l,am as f,an as v,a8 as g,k as h}from"./entry.d8a15025.js";import{r}from"./slot.53ff40e8.js";import"./node.676c5e99.js";const y={class:"summary"},C={class:"content"},V=d({__name:"Callout",props:{type:{type:String,default:"info",validator(a){return["info","success","warning","danger","primary"].includes(a)}},modelValue:{required:!1,default:()=>t(!1)}},emits:["update:modelValue"],setup(a,{emit:c}){const e=t(a.modelValue),u=()=>{e.value=!e.value,c("update:modelValue",e.value)};return(o,w)=>{const i=g;return p(),_("div",{class:n(["callout",[a.type]])},[s("span",{class:"preview",onClick:u},[s("span",y,[r(o.$slots,"summary",{},void 0,!0)]),m(i,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),f(s("div",C,[r(o.$slots,"content",{},void 0,!0)],512),[[v,l(e)]])],2)}}});const I=h(V,[["__scopeId","data-v-64cc15a3"]]);export{I as default};
