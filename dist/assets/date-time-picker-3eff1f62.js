import{_ as u}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-cc335408.js";import{d as r,l as _,o as c,b as p,s as m,J as D,w as n,q as l}from"./index-ed2f9e48.js";import{_ as F}from"./AppCardCode.vue_vue_type_style_index_0_lang-461a7749.js";import{a as d,V as A}from"./VRow-563cefa7.js";import"./VField-c67db2c3.js";import"./VInput-adae660e.js";import"./transition-d0ff91da.js";import"./easing-9f15041e.js";import"./vue.runtime.esm-bundler-6d109b4a.js";import"./VCard-20e56964.js";import"./createSimpleFunctional-b8ae8fab.js";import"./VAvatar-64850002.js";import"./VImg-2cf5c854.js";import"./VDivider-0654ea99.js";const V=r({__name:"DemoDateTimePickerInline",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Inline",config:{inline:!0}},null,8,["modelValue"])}}}),Y=r({__name:"DemoDateTimePickerDisabledRange",setup(s){const e=new Date,i=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=_("");return(o,f)=>{const g=u;return c(),p(g,{modelValue:m(t),"onUpdate:modelValue":f[0]||(f[0]=T=>D(t)?t.value=T:null),label:"Disabled Range",config:{dateFormat:"Y-m-d",disable:[{from:`${m(a)}-${m(i)}-20`,to:`${m(a)}-${m(i)}-25`}]}},null,8,["modelValue","config"])}}}),v=r({__name:"DemoDateTimePickerHumanFriendly",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Human Friendly",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}}),$=r({__name:"DemoDateTimePickerRange",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Range",config:{mode:"range"}},null,8,["modelValue"])}}}),R=r({__name:"DemoDateTimePickerMultipleDates",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Multiple Dates",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}}),w=r({__name:"DemoDateTimePickerDateAndTime",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Date & TIme",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])}}}),M=r({__name:"DemoDateTimePickerTimePicker",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Time picker",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])}}}),H=r({__name:"DemoDateTimePickerBasic",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Default"},null,8,["modelValue"])}}}),I={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>
`},j={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},C={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},y={ts:`<script setup lang="ts">
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},h={ts:`<script setup lang="ts">
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},B={ts:`<script setup lang="ts">
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},ee=r({__name:"date-time-picker",setup(s){return(e,i)=>{const a=H,t=F,o=M,f=w,g=R,T=$,k=v,P=Y,b=V;return c(),p(A,null,{default:n(()=>[l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Basic",code:I},{default:n(()=>[l(a)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Time Picker",code:B},{default:n(()=>[l(o)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Date and Time",code:j},{default:n(()=>[l(f)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Multiple Dates",code:y},{default:n(()=>[l(g)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Range",code:h},{default:n(()=>[l(T)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Human Friendly",code:C},{default:n(()=>[l(k)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Disabled Range",code:x},{default:n(()=>[l(P)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Inline",code:U},{default:n(()=>[l(b)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ee as default};
