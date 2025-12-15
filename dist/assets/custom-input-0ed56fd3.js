import{a as g,V as v}from"./VRow-563cefa7.js";import{V as f}from"./VInput-adae660e.js";import{V as w}from"./VCheckbox-86cbe296.js";import{d as b,l as _,bs as I,A as y,s as i,o as a,b as d,w as n,c as h,F as R,a as V,a9 as W,q as c,t as j,n as m,J as p,E as k,a5 as $,D as U,y as x}from"./index-ed2f9e48.js";import{a as D,V as S}from"./VRadioGroup-b2f80917.js";import{V as z}from"./VSpacer-903df1cd.js";import{_ as A}from"./AppCardCode.vue_vue_type_style_index_0_lang-461a7749.js";import{_ as O}from"./CustomRadios-9b939b5f.js";import"./transition-d0ff91da.js";import"./VCheckboxBtn-d9d39b31.js";import"./VSelectionControl-89de378e.js";import"./createSimpleFunctional-b8ae8fab.js";import"./vue.runtime.esm-bundler-6d109b4a.js";import"./VCard-20e56964.js";import"./VAvatar-64850002.js";import"./VImg-2cf5c854.js";import"./VDivider-0654ea99.js";const P=["src"],N=b({__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(r,{emit:u}){const o=r,t=_(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{u("update:selectedCheckbox",t.value)}),(l,s)=>o.checkboxContent&&i(t)?(a(),d(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(a(!0),h(R,null,V(o.checkboxContent,e=>(a(),d(g,W({key:e.value},r.gridColumn),{default:n(()=>[c(f,{class:j(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:n(()=>[m("div",null,[c(w,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=C=>p(t)?t.value=C:null),value:e.value},null,8,["modelValue","value"])]),m("img",{src:e.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,P)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):k("",!0)}});const T=$(N,[["__scopeId","data-v-95f35bf8"]]),B=""+new URL("background-1-ceba94e3.jpg",import.meta.url).href,G=""+new URL("background-2-d22b51b2.jpg",import.meta.url).href,E=""+new URL("background-3-fdf5581c.jpg",import.meta.url).href,q=b({__name:"DemoCustomInputCustomCheckboxesWithImage",setup(r){const u=[{bgImage:B,value:"basic"},{bgImage:G,value:"premium"},{bgImage:E,value:"enterprise"}],o=_(["basic"]);return(t,l)=>{const s=T;return a(),d(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":l[0]||(l[0]=e=>p(o)?o.value=e:null),"checkbox-content":u,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),J=["src"],H=b({__name:"CustomRadiosWithImage",props:{selectedRadio:null,radioContent:null,gridColumn:null},emits:["update:selectedRadio"],setup(r,{emit:u}){const o=r,t=_(structuredClone(I(o.selectedRadio)));return y(t,()=>{u("update:selectedRadio",t.value)}),(l,s)=>o.radioContent?(a(),d(S,{key:0,modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=e=>p(t)?t.value=e:null)},{default:n(()=>[c(v,null,{default:n(()=>[(a(!0),h(R,null,V(o.radioContent,e=>(a(),d(g,W({key:e.bgImage},r.gridColumn),{default:n(()=>[c(f,{class:j(["custom-input custom-radio rounded cursor-pointer",i(t)===e.value?"active":""])},{default:n(()=>[m("img",{src:e.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,J),c(D,{value:e.value},null,8,["value"])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):k("",!0)}});const K=$(H,[["__scopeId","data-v-6564e2cf"]]),M=b({__name:"DemoCustomInputCustomRadiosWithImage",setup(r){const u=[{bgImage:B,value:"basic"},{bgImage:G,value:"premium"},{bgImage:E,value:"enterprise"}],o=_("basic");return(t,l)=>{const s=K;return a(),d(s,{"selected-radio":i(o),"onUpdate:selectedRadio":l[0]||(l[0]=e=>p(o)?o.value=e:null),"radio-content":u,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),Q={class:"d-flex flex-column align-center text-center gap-2"},X={class:"cr-title text-base"},Y={class:"text-sm mb-0"},Z=b({__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(r,{emit:u}){const o=r,t=_(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{u("update:selectedCheckbox",t.value)}),(l,s)=>o.checkboxContent&&i(t)?(a(),d(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(a(!0),h(R,null,V(o.checkboxContent,e=>(a(),d(g,W({key:e.title},r.gridColumn),{default:n(()=>[c(f,{class:j(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:n(()=>[m("div",Q,[c(U,{size:"32",icon:e.icon,class:"text-high-emphasis"},null,8,["icon"]),m("h6",X,x(e.title),1),m("p",Y,x(e.desc),1)]),m("div",null,[c(w,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=C=>p(t)?t.value=C:null),value:e.value},null,8,["modelValue","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):k("",!0)}});const ee=$(Z,[["__scopeId","data-v-2a6d77eb"]]),te=b({__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(r){const u=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:"bx-server"},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:"bx-shield"},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:"bx-lock-alt"}],o=_(["basic"]);return(t,l)=>{const s=ee;return a(),d(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":l[0]||(l[0]=e=>p(o)?o.value=e:null),"checkbox-content":u,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),oe={class:"d-flex flex-column align-center text-center gap-2"},se={class:"cr-title text-base"},ce={class:"text-sm mb-0"},ne=b({__name:"CustomRadiosWithIcon",props:{selectedRadio:null,radioContent:null,gridColumn:null},emits:["update:selectedRadio"],setup(r,{emit:u}){const o=r,t=_(structuredClone(I(o.selectedRadio)));return y(t,()=>{u("update:selectedRadio",t.value)}),(l,s)=>o.radioContent?(a(),d(S,{key:0,modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=e=>p(t)?t.value=e:null)},{default:n(()=>[c(v,null,{default:n(()=>[(a(!0),h(R,null,V(o.radioContent,e=>(a(),d(g,W({key:e.title},r.gridColumn),{default:n(()=>[c(f,{class:j(["custom-input custom-radio rounded cursor-pointer",i(t)===e.value?"active":""])},{default:n(()=>[m("div",oe,[c(U,{size:"32",icon:e.icon,class:"text-high-emphasis"},null,8,["icon"]),m("h6",se,x(e.title),1),m("p",ce,x(e.desc),1)]),m("div",null,[c(D,{value:e.value},null,8,["value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):k("",!0)}});const le=$(ne,[["__scopeId","data-v-99624cb7"]]),ae=b({__name:"DemoCustomInputCustomRadiosWithIcon",setup(r){const u=[{title:"Starter",desc:"A simple start for everyone.",value:"starter",icon:"bx-rocket"},{title:"Standard",desc:"For small to medium businesses.",value:"standard",icon:"bx-user"},{title:"Enterprise",desc:"Solution for big organizations.",value:"enterprise",icon:"bx-crown"}],o=_("basic");return(t,l)=>{const s=le;return a(),d(s,{"selected-radio":i(o),"onUpdate:selectedRadio":l[0]||(l[0]=e=>p(o)?o.value=e:null),"radio-content":u,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),ue={class:"flex-grow-1"},ie={class:"d-flex align-center mb-1"},re={class:"cr-title text-base"},de={key:0},me={class:"text-sm mb-0"},pe=b({__name:"CustomCheckboxes",props:{selectedCheckbox:null,checkboxContent:null,gridColumn:null},emits:["update:selectedCheckbox"],setup(r,{emit:u}){const o=r,t=_(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{u("update:selectedCheckbox",t.value)}),(l,s)=>o.checkboxContent&&i(t)?(a(),d(v,{key:0,modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=e=>p(t)?t.value=e:null)},{default:n(()=>[(a(!0),h(R,null,V(o.checkboxContent,e=>(a(),d(g,W({key:e.title},r.gridColumn),{default:n(()=>[c(f,{class:j(["custom-input custom-checkbox rounded cursor-pointer",i(t).includes(e.value)?"active":""])},{default:n(()=>[m("div",null,[c(w,{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=C=>p(t)?t.value=C:null),value:e.value},null,8,["modelValue","value"])]),m("div",ue,[m("div",ie,[m("h6",re,x(e.title),1),c(z),e.subtitle?(a(),h("span",de,x(e.subtitle),1)):k("",!0)]),m("p",me,x(e.desc),1)])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):k("",!0)}});const be=$(pe,[["__scopeId","data-v-0fc050d9"]]),ge=b({__name:"DemoCustomInputCustomCheckboxes",setup(r){const u=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],o=_(["basic"]);return(t,l)=>{const s=be;return a(),d(s,{"selected-checkbox":i(o),"onUpdate:selectedCheckbox":l[0]||(l[0]=e=>p(o)?o.value=e:null),"checkbox-content":u,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}}),_e=b({__name:"DemoCustomInputCustomRadios",setup(r){const u=[{title:"Basic",desc:"Get 2 projects with 2 team members.",value:"basic"},{title:"Premium",subtitle:"$5.00",desc:"Get 8 projects with 8 team members.",value:"premium"}],o=_("basic");return(t,l)=>{const s=O;return a(),d(s,{"selected-radio":i(o),"onUpdate:selectedRadio":l[0]||(l[0]=e=>p(o)?o.value=e:null),"radio-content":u,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}}),Ce={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},xe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'bx-server',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'bx-shield',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'bx-lock-alt',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'bx-server',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'bx-shield',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'bx-lock-alt',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ke={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},ve={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'bx-rocket',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'bx-user',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'bx-crown',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'bx-rocket',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'bx-user',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'bx-crown',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},fe={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ae=b({__name:"custom-input",setup(r){return(u,o)=>{const t=_e,l=A,s=ge,e=ae,C=te,F=M,L=q;return a(),d(v,null,{default:n(()=>[c(g,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Radios",code:ke},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Checkboxes",code:Ce},{default:n(()=>[c(s)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Radios With Icon",code:ve},{default:n(()=>[c(e)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Checkboxes With Icon",code:xe},{default:n(()=>[c(C)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Radios With Image",code:fe},{default:n(()=>[c(F)]),_:1},8,["code"])]),_:1}),c(g,{cols:"12",md:"6"},{default:n(()=>[c(l,{title:"Custom Checkboxes With Image",code:he},{default:n(()=>[c(L)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ae as default};
