import{m as Z,u as ee,a as le,V as ae,b as J,g as Y}from"./VSliderTrack-bd0fb1bc.js";import{c as te,m as se,u as oe,a as q,V as ue}from"./VInput-adae660e.js";import{ay as ne,l as _,aJ as re,C as E,aF as ie,q as a,F as de,a9 as ce,d as S,o as R,b as x,s as $,J as w,w as i,D as me,n as d,U as p}from"./index-ed2f9e48.js";import{_ as pe}from"./AppCardCode.vue_vue_type_style_index_0_lang-461a7749.js";import{a as k,V as ve}from"./VRow-563cefa7.js";import"./transition-d0ff91da.js";import"./vue.runtime.esm-bundler-6d109b4a.js";import"./VCard-20e56964.js";import"./createSimpleFunctional-b8ae8fab.js";import"./VAvatar-64850002.js";import"./VImg-2cf5c854.js";import"./VDivider-0654ea99.js";const y=ne()({name:"VRangeSlider",props:{...te(),...se(),...Z(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=_(),n=_(),h=_();function j(c){if(!l.value||!n.value)return;const v=Y(c,l.value.$el,e.direction),b=Y(c,n.value.$el,e.direction),r=Math.abs(v),m=Math.abs(b);return r<m||r===m&&v<0?l.value.$el:n.value.$el}const P=ee(e),t=re(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(v=>P.roundValue(v)):[0,0]),{activeThumbRef:V,hasLabels:G,max:z,min:I,mousePressed:H,onSliderMousedown:K,onSliderTouchstart:Q,position:L,trackContainerRef:X}=le({props:e,steps:P,onSliderStart:()=>{o("start",t.value)},onSliderEnd:c=>{var r;let{value:v}=c;const b=V.value===((r=l.value)==null?void 0:r.$el)?[v,t.value[1]]:[t.value[0],v];t.value=b,o("end",b)},onSliderMove:c=>{var m,f,D,T;let{value:v}=c;const[b,r]=t.value;!e.strict&&b===r&&b!==I.value&&(V.value=v>b?(m=n.value)==null?void 0:m.$el:(f=l.value)==null?void 0:f.$el,(D=V.value)==null||D.focus()),V.value===((T=l.value)==null?void 0:T.$el)?t.value=[Math.min(v,r),r]:t.value=[b,Math.max(b,v)]},getActiveThumb:j}),{isFocused:M,focus:A,blur:N}=oe(e),O=E(()=>L(t.value[0])),W=E(()=>L(t.value[1]));return ie(()=>{const[c,v]=q.filterProps(e),b=!!(e.label||u.label||u.prepend);return a(q,ce({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||G.value,"v-slider--focused":M.value,"v-slider--pressed":H.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:h},c,{focused:M.value}),{...u,prepend:b?r=>{var m,f;return a(de,null,[((m=u.label)==null?void 0:m.call(u,r))??e.label?a(ue,{class:"v-slider__label",text:e.label},null):void 0,(f=u.prepend)==null?void 0:f.call(u,r)])}:void 0,default:r=>{var D,T;let{id:m,messagesId:f}=r;return a("div",{class:"v-slider__container",onMousedown:K,onTouchstartPassive:Q},[a("input",{id:`${m.value}_start`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${m.value}_stop`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:t.value[1]},null),a(ae,{ref:X,start:O.value,stop:W.value},{"tick-label":u["tick-label"]}),a(J,{ref:l,"aria-describedby":f.value,focused:M&&V.value===((D=l.value)==null?void 0:D.$el),modelValue:t.value[0],"onUpdate:modelValue":g=>t.value=[g,t.value[1]],onFocus:g=>{var C,F,U,B;A(),V.value=(C=l.value)==null?void 0:C.$el,t.value[0]===t.value[1]&&t.value[1]===I.value&&g.relatedTarget!==((F=n.value)==null?void 0:F.$el)&&((U=l.value)==null||U.$el.blur(),(B=n.value)==null||B.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:I.value,max:t.value[1],position:O.value},{"thumb-label":u["thumb-label"]}),a(J,{ref:n,"aria-describedby":f.value,focused:M&&V.value===((T=n.value)==null?void 0:T.$el),modelValue:t.value[1],"onUpdate:modelValue":g=>t.value=[t.value[0],g],onFocus:g=>{var C,F,U,B;A(),V.value=(C=n.value)==null?void 0:C.$el,t.value[0]===t.value[1]&&t.value[0]===z.value&&g.relatedTarget!==((F=l.value)==null?void 0:F.$el)&&((U=n.value)==null||U.$el.blur(),(B=l.value)==null||B.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:t.value[0],max:z.value,position:W.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),be=S({__name:"DemoRangeSliderVertical",setup(e){const s=_([20,40]);return(u,o)=>(R(),x(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}}),Ve=S({__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["bx-wind","bx-leaf","bxs-hot","bx-water"],o=_([1,2]);return(l,n)=>(R(),x(y,{modelValue:$(o),"onUpdate:modelValue":n[0]||(n[0]=h=>w(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:h})=>[a(me,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),_e=S({__name:"DemoRangeSliderStep",setup(e){const s=_([20,40]);return(u,o)=>(R(),x(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}}),fe=S({__name:"DemoRangeSliderColor",setup(e){const s=_([10,60]);return(u,o)=>(R(),x(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}}),he=S({__name:"DemoRangeSliderDisabled",setup(e){const s=_([30,60]);return(u,o)=>(R(),x(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),ge=S({__name:"DemoRangeSliderBasic",setup(e){const s=_([10,60]);return(u,o)=>(R(),x(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null)},null,8,["modelValue"]))}}),Se={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Re={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['bx-wind', 'bx-leaf', 'bxs-hot', 'bx-water']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'bx-wind',
  'bx-leaf',
  'bxs-hot',
  'bx-water',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},ye=d("p",null,[p("The "),d("code",null,"v-slider"),p(" component is a better visualization of the number input.")],-1),De=d("p",null,[p("You cannot interact with "),d("code",null,"disabled"),p(" sliders.")],-1),Te=d("p",null,[p("Use "),d("code",null,"color"),p(" prop to the sets the slider color. "),d("code",null,"track-color"),p(" prop to sets the color of slider's unfilled track.")],-1),Ce=d("p",null,[d("code",null,"v-range-slider"),p(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Fe=d("p",null,[p(" Using the "),d("code",null,"tick-labels"),p(" prop along with the "),d("code",null,"thumb-label"),p(" slot, you can create a very customized solution. ")],-1),Ue=d("p",null,[p("You can use the "),d("code",null,"vertical"),p(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Ye=S({__name:"range-slider",setup(e){return(s,u)=>{const o=ge,l=pe,n=he,h=fe,j=_e,P=Ve,t=be;return R(),x(ve,null,{default:i(()=>[a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:Se},{default:i(()=>[ye,a(o)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Disabled",code:xe},{default:i(()=>[De,a(n)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Color",code:Re},{default:i(()=>[Te,a(h)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Step",code:ke},{default:i(()=>[Ce,a(j)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Thumb label",code:$e},{default:i(()=>[Fe,a(P)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Vertical",code:we},{default:i(()=>[Ue,a(t)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ye as default};
