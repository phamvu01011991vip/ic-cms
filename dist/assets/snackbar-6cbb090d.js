import{ay as R,bB as A,bP as j,b8 as q,bk as L,aA as M,aG as H,aJ as J,bC as N,bQ as W,aB as G,bl as z,bd as Q,l as m,A as D,ae as h,aF as K,q as a,bn as X,b3 as Y,a9 as U,d as _,o as x,c as y,w as t,U as e,I as u,s as S,J as p,D as B,F as w,b as Z,n as d}from"./index-ed2f9e48.js";import{m as aa,u as ta,V as P}from"./VOverlay-bb2110ac.js";import{f as ea}from"./forwardRefs-a29b5f65.js";import{_ as na}from"./AppCardCode.vue_vue_type_style_index_0_lang-461a7749.js";import{a as g,V as la}from"./VRow-563cefa7.js";import"./lazy-ad19b40d.js";import"./easing-9f15041e.js";import"./transition-d0ff91da.js";import"./vue.runtime.esm-bundler-6d109b4a.js";import"./VCard-20e56964.js";import"./createSimpleFunctional-b8ae8fab.js";import"./VAvatar-64850002.js";import"./VImg-2cf5c854.js";import"./VDivider-0654ea99.js";const f=R()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...A({location:"bottom"}),...j(),...q(),...L(),...M(),...H(aa({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":k=>!0},setup(k,l){let{slots:c}=l;const n=J(k,"modelValue"),{locationStyles:i}=N(k),{positionClasses:b}=W(k),{scopeId:v}=ta(),{themeClasses:s}=G(k),{colorClasses:V,colorStyles:I,variantClasses:C}=z(k),{roundedClasses:o}=Q(k),r=m();D(n,$),D(()=>k.timeout,$),h(()=>{n.value&&$()});let O=-1;function $(){window.clearTimeout(O);const T=Number(k.timeout);!n.value||T===-1||(O=window.setTimeout(()=>{n.value=!1},T))}function E(){window.clearTimeout(O)}return K(()=>{const[T]=P.filterProps(k);return a(P,U({ref:r,class:["v-snackbar",{"v-snackbar--active":n.value,"v-snackbar--multi-line":k.multiLine&&!k.vertical,"v-snackbar--vertical":k.vertical},b.value,k.class],style:k.style},T,{modelValue:n.value,"onUpdate:modelValue":F=>n.value=F,contentProps:U({class:["v-snackbar__wrapper",s.value,V.value,o.value,C.value],style:[i.value,I.value],onPointerenter:E,onPointerleave:$},T.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},v),{default:()=>[X(!1,"v-snackbar"),c.default&&a("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[c.default()]),c.actions&&a(Y,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[c.actions()])]})],activator:c.activator})}),ea({},r)}}),ia={class:"demo-space-x"},oa=_({__name:"DemoSnackbarTransition",setup(k){const l=m(!1),c=m(!1),n=m(!1);return(i,b)=>(x(),y("div",ia,[a(u,{onClick:b[0]||(b[0]=v=>l.value=!0)},{default:t(()=>[e(" fade snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":b[1]||(b[1]=v=>p(l)?l.value=v:null),transition:"fade-transition",location:"top start"},{default:t(()=>[e(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[2]||(b[2]=v=>c.value=!0)},{default:t(()=>[e(" Scale snackbar ")]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":b[3]||(b[3]=v=>p(c)?c.value=v:null),transition:"scale-transition",location:"bottom end"},{default:t(()=>[e(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[4]||(b[4]=v=>n.value=!0)},{default:t(()=>[e(" scroll y reverse ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":b[5]||(b[5]=v=>p(n)?n.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:t(()=>[e(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])]))}}),sa={class:"demo-space-x"},ra=_({__name:"DemoSnackbarVariants",setup(k){const l=m(!1),c=m(!1),n=m(!1),i=m(!1),b=m(!1);return(v,s)=>(x(),y("div",sa,[a(u,{onClick:s[0]||(s[0]=V=>l.value=!0)},{default:t(()=>[e(" Default ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":s[1]||(s[1]=V=>p(l)?l.value=V:null),location:"top start"},{default:t(()=>[e(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[2]||(s[2]=V=>c.value=!0)},{default:t(()=>[e(" tonal ")]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":s[3]||(s[3]=V=>p(c)?c.value=V:null),location:"top end",variant:"tonal"},{default:t(()=>[e(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[4]||(s[4]=V=>n.value=!0)},{default:t(()=>[e(" Text ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":s[5]||(s[5]=V=>p(n)?n.value=V:null),location:"end center",variant:"text"},{default:t(()=>[e(" Pie icing biscuit soufflé liquorice topping. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[6]||(s[6]=V=>i.value=!0)},{default:t(()=>[e(" Outlined ")]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":s[7]||(s[7]=V=>p(i)?i.value=V:null),location:"bottom end",variant:"outlined",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[8]||(s[8]=V=>b.value=!0)},{default:t(()=>[e(" Flat ")]),_:1}),a(f,{modelValue:S(b),"onUpdate:modelValue":s[9]||(s[9]=V=>p(b)?b.value=V:null),location:"bottom start",variant:"flat",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])]))}}),ca={class:"demo-space-x"},ba=_({__name:"DemoSnackbarPosition",setup(k){const l=m(!1),c=m(!1),n=m(!1),i=m(!1),b=m(!1),v=m(!1),s=m(!1),V=m(!1),I=m(!1);return(C,o)=>(x(),y("div",ca,[a(u,{icon:"",variant:"text",onClick:o[0]||(o[0]=r=>c.value=!0)},{default:t(()=>[a(B,{icon:"bx-up-arrow-alt"})]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":o[1]||(o[1]=r=>p(c)?c.value=r:null),location:"top"},{default:t(()=>[e(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[2]||(o[2]=r=>n.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-top-right"})]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":o[3]||(o[3]=r=>p(n)?n.value=r:null),location:"top end"},{default:t(()=>[e(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[4]||(o[4]=r=>s.value=!0)},{default:t(()=>[a(B,{icon:"bx-right-arrow-alt"})]),_:1}),a(f,{modelValue:S(s),"onUpdate:modelValue":o[5]||(o[5]=r=>p(s)?s.value=r:null),location:"end center"},{default:t(()=>[e(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[6]||(o[6]=r=>i.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-bottom-right"})]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":o[7]||(o[7]=r=>p(i)?i.value=r:null),location:"bottom end"},{default:t(()=>[e(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[8]||(o[8]=r=>b.value=!0)},{default:t(()=>[a(B,{icon:"bx-down-arrow-alt"})]),_:1}),a(f,{modelValue:S(b),"onUpdate:modelValue":o[9]||(o[9]=r=>p(b)?b.value=r:null)},{default:t(()=>[e(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[10]||(o[10]=r=>v.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-bottom-left"})]),_:1}),a(f,{modelValue:S(v),"onUpdate:modelValue":o[11]||(o[11]=r=>p(v)?v.value=r:null),location:"bottom start"},{default:t(()=>[e(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[12]||(o[12]=r=>V.value=!0)},{default:t(()=>[a(B,{icon:"bx-left-arrow-alt"})]),_:1}),a(f,{modelValue:S(V),"onUpdate:modelValue":o[13]||(o[13]=r=>p(V)?V.value=r:null),location:"start center"},{default:t(()=>[e(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[14]||(o[14]=r=>l.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-top-left"})]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":o[15]||(o[15]=r=>p(l)?l.value=r:null),location:"top start"},{default:t(()=>[e(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[16]||(o[16]=r=>I.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-collapse-all"})]),_:1}),a(f,{modelValue:S(I),"onUpdate:modelValue":o[17]||(o[17]=r=>p(I)?I.value=r:null),location:"center"},{default:t(()=>[e(" I'm a center snackbar. ")]),_:1},8,["modelValue"])]))}}),ua=_({__name:"DemoSnackbarVertical",setup(k){const l=m(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[3]||(n[3]=i=>p(l)?l.value=i:null),vertical:""},{actions:t(()=>[a(u,{color:"success",onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Undo ")]),_:1}),a(u,{color:"error",onClick:n[2]||(n[2]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64))}}),ka=_({__name:"DemoSnackbarTimeout",setup(k){const l=m(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[1]||(n[1]=i=>p(l)?l.value=i:null),timeout:2e3},{default:t(()=>[e(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64))}}),da=_({__name:"DemoSnackbarMultiLine",setup(k){const l=m(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[2]||(n[2]=i=>p(l)?l.value=i:null),"multi-line":""},{actions:t(()=>[a(u,{onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64))}}),Va=_({__name:"DemoSnackbarWithAction",setup(k){const l=m(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[2]||(n[2]=i=>p(l)?l.value=i:null)},{actions:t(()=>[a(u,{onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64))}}),ma=_({__name:"DemoSnackbarBasic",setup(k){const l=m(!1);return(c,n)=>(x(),y(w,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[1]||(n[1]=i=>p(l)?l.value=i:null)},{default:t(()=>[e(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64))}}),Sa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},pa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn @click="isSnackbarVisible = false">
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn @click="isSnackbarVisible = false">
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},fa={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="bx-up-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="bx-right-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="bx-down-arrow-alt" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="bx-left-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="bx-up-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="bx-right-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="bx-down-arrow-alt" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="bx-left-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},va={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},Ba={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},_a={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},xa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ia={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn @click="isSnackbarVisibility = false">
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn @click="isSnackbarVisibility = false">
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ga=d("p",null,[e("The "),d("code",null,"v-snackbar"),e(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),ya=d("p",null,[e("Use "),d("code",null,"actions"),e(" slot to add action button. A "),d("code",null,"v-snackbar"),e(" in its simplest form displays a temporary and closable notification to the user.")],-1),Ta=d("p",null,[e("The "),d("code",null,"multi-line"),e(" property extends the height of the "),d("code",null,"v-snackbar"),e(" to give you a little more room for content.")],-1),wa=d("p",null,[e("The "),d("code",null,"timeout"),e(" property lets you customize the delay before the "),d("code",null,"v-snackbar"),e(" is hidden.")],-1),Ca=d("p",null,[e("The "),d("code",null,"vertical"),e(" property allows you to stack the content of your "),d("code",null,"v-snackbar"),e(".")],-1),$a=d("p",null,[e("Use "),d("code",null,"location"),e(" prop to change the position of snackbar.")],-1),Oa=d("p",null,[e("Apply different styles to the snackbar using props such as "),d("code",null,"shaped"),e(", "),d("code",null,"rounded"),e(", "),d("code",null,"color"),e(", "),d("code",null,"text"),e(", "),d("code",null,"outlined"),e(", "),d("code",null,"tile"),e(" and more.")],-1),Da=d("p",null,"Use transition prop to sets the component transition.",-1),Ga=_({__name:"snackbar",setup(k){return(l,c)=>{const n=ma,i=na,b=Va,v=da,s=ka,V=ua,I=ba,C=ra,o=oa;return x(),Z(la,{class:"match-height"},{default:t(()=>[a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Basic",code:Sa},{default:t(()=>[ga,a(n)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"With Action",code:Ia},{default:t(()=>[ya,a(b)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Multi Line",code:pa},{default:t(()=>[Ta,a(v)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Timeout",code:va},{default:t(()=>[wa,a(s)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Vertical",code:xa},{default:t(()=>[Ca,a(V)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Position",code:fa},{default:t(()=>[$a,a(I)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Variants",code:_a},{default:t(()=>[Oa,a(C)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Transition",code:Ba},{default:t(()=>[Da,a(o)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ga as default};
