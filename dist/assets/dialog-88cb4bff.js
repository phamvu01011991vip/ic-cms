import{_ as j}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-29ba3f76.js";import{d as D,l as b,o as k,b as T,w as a,q as e,I as u,al as P,am as S,U as r,s as g,J as f,aN as Y,az as U,b1 as Z,ay as J,aF as q,b5 as ie,b6 as se,b8 as ne,aA as re,bb as ce,aD as F,ba as de,bc as ue,bd as me,aB as pe,C as K,bh as ee,b3 as I,aE as A,ax as ge,bk as be,n as h,D as fe,a9 as Ve,c as G,F as O,A as ve,af as he,a as ke}from"./index-ed2f9e48.js";import{V as y,c as v,a as ye,b as Ce}from"./VCard-20e56964.js";import{V as ae,a as V}from"./VRow-563cefa7.js";import{V as x}from"./VTextField-17c7b994.js";import{V as C}from"./VDialog-8153b926.js";import{V as De}from"./VImg-2cf5c854.js";import{V as we}from"./VSpacer-903df1cd.js";import{V as Q,d as X,a as L}from"./VList-b41f68bc.js";import{V as $}from"./VDivider-0654ea99.js";import{V as z}from"./VListItemAction-647c78c0.js";import{V as N}from"./VCheckbox-86cbe296.js";import{V as Be,a as xe}from"./VRadioGroup-b2f80917.js";import{_ as Te}from"./AppCardCode.vue_vue_type_style_index_0_lang-461a7749.js";import"./createSimpleFunctional-b8ae8fab.js";import"./VAvatar-64850002.js";/* empty css                   */import"./VField-c67db2c3.js";import"./VInput-adae660e.js";import"./transition-d0ff91da.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-1030fb28.js";import"./VOverlay-bb2110ac.js";import"./lazy-ad19b40d.js";import"./dialog-transition-a193b3ce.js";import"./ssrBoot-c93ffca9.js";import"./VCheckboxBtn-d9d39b31.js";import"./VSelectionControl-89de378e.js";import"./vue.runtime.esm-bundler-6d109b4a.js";const _e=D({__name:"DemoDialogForm",setup(s){const o=b(!1),l=b(""),t=b(""),i=b(""),n=b(""),p=b(""),m=b(),w=b("");return(_,c)=>{const B=j;return k(),T(C,{modelValue:g(o),"onUpdate:modelValue":c[10]||(c[10]=d=>f(o)?o.value=d:null),"max-width":"600"},{activator:a(({props:d})=>[e(u,P(S(d)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,{title:"User Profile"},{default:a(()=>[e(B,{variant:"text",size:"small",onClick:c[0]||(c[0]=d=>o.value=!1)}),e(v,null,{default:a(()=>[e(ae,null,{default:a(()=>[e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(x,{modelValue:g(l),"onUpdate:modelValue":c[1]||(c[1]=d=>f(l)?l.value=d:null),label:"First Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(x,{modelValue:g(t),"onUpdate:modelValue":c[2]||(c[2]=d=>f(t)?t.value=d:null),label:"Middle Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(x,{modelValue:g(i),"onUpdate:modelValue":c[3]||(c[3]=d=>f(i)?i.value=d:null),label:"Last Name","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(x,{modelValue:g(n),"onUpdate:modelValue":c[4]||(c[4]=d=>f(n)?n.value=d:null),label:"Email"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(x,{modelValue:g(p),"onUpdate:modelValue":c[5]||(c[5]=d=>f(p)?p.value=d:null),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(x,{modelValue:g(m),"onUpdate:modelValue":c[6]||(c[6]=d=>f(m)?m.value=d:null),type:"number",label:"Age"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(x,{modelValue:g(w),"onUpdate:modelValue":c[7]||(c[7]=d=>f(w)?w.value=d:null),label:"Interests"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(v,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(u,{color:"secondary",variant:"tonal",onClick:c[8]||(c[8]=d=>o.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(u,{onClick:c[9]||(c[9]=d=>o.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const je=Y({text:String,...U(),...Z()},"v-toolbar-title"),le=J()({name:"VToolbarTitle",props:je(),setup(s,o){let{slots:l}=o;return q(()=>{const t=!!(l.default||l.text||s.text);return e(s.tag,{class:["v-toolbar-title",s.class],style:s.style},{default:()=>{var i;return[t&&e("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():s.text,(i=l.default)==null?void 0:i.call(l)])]}})}),{}}}),Le=[null,"prominent","default","comfortable","compact"],Pe=Y({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:s=>Le.includes(s)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ie(),...U(),...se(),...ne(),...Z({tag:"header"}),...re()},"v-toolbar"),Se=J()({name:"VToolbar",props:Pe(),setup(s,o){var d;let{slots:l}=o;const{backgroundColorClasses:t,backgroundColorStyles:i}=ce(F(s,"color")),{borderClasses:n}=de(s),{elevationClasses:p}=ue(s),{roundedClasses:m}=me(s),{themeClasses:w}=pe(s),_=b(!!(s.extended||(d=l.extension)!=null&&d.call(l))),c=K(()=>parseInt(Number(s.height)+(s.density==="prominent"?Number(s.height):0)-(s.density==="comfortable"?8:0)-(s.density==="compact"?16:0),10)),B=K(()=>_.value?parseInt(Number(s.extensionHeight)+(s.density==="prominent"?Number(s.extensionHeight):0)-(s.density==="comfortable"?4:0)-(s.density==="compact"?8:0),10):0);return ee({VBtn:{variant:"text"}}),q(()=>{var R;const te=!!(s.title||l.title),oe=!!(l.image||s.image),M=(R=l.extension)==null?void 0:R.call(l);return _.value=!!(s.extended||M),e(s.tag,{class:["v-toolbar",{"v-toolbar--absolute":s.absolute,"v-toolbar--collapse":s.collapse,"v-toolbar--flat":s.flat,"v-toolbar--floating":s.floating,[`v-toolbar--density-${s.density}`]:!0},t.value,n.value,p.value,m.value,w.value,s.class],style:[i.value,s.style]},{default:()=>[oe&&e("div",{key:"image",class:"v-toolbar__image"},[l.image?e(I,{key:"image-defaults",disabled:!s.image,defaults:{VImg:{cover:!0,src:s.image}}},l.image):e(De,{key:"image-img",cover:!0,src:s.image},null)]),e(I,{defaults:{VTabs:{height:A(c.value)}}},{default:()=>{var H,E,W;return[e("div",{class:"v-toolbar__content",style:{height:A(c.value)}},[l.prepend&&e("div",{class:"v-toolbar__prepend"},[(H=l.prepend)==null?void 0:H.call(l)]),te&&e(le,{key:"title",text:s.title},{text:l.title}),(E=l.default)==null?void 0:E.call(l),l.append&&e("div",{class:"v-toolbar__append"},[(W=l.append)==null?void 0:W.call(l)])])]}}),e(I,{defaults:{VTabs:{height:A(B.value)}}},{default:()=>[e(ge,null,{default:()=>[_.value&&e("div",{class:"v-toolbar__extension",style:{height:A(B.value)}},[M])]})]})]})}),{contentHeight:c,extensionHeight:B}}}),Ae=J()({name:"VToolbarItems",props:{...U(),...be({variant:"text"})},setup(s,o){let{slots:l}=o;return ee({VBtn:{color:F(s,"color"),height:"inherit",variant:F(s,"variant")}}),q(()=>{var t;return e("div",{class:["v-toolbar-items",s.class],style:s.style},[(t=l.default)==null?void 0:t.call(l)])}),{}}}),Ie=D({__name:"DemoDialogFullscreen",setup(s){const o=b(!1);return(l,t)=>(k(),T(C,{modelValue:g(o),"onUpdate:modelValue":t[2]||(t[2]=i=>f(o)?o.value=i:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:i})=>[e(u,P(S(i)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,null,{default:a(()=>[h("div",null,[e(Se,{color:"primary"},{default:a(()=>[e(u,{icon:"",variant:"plain",onClick:t[0]||(t[0]=i=>o.value=!1)},{default:a(()=>[e(fe,{color:"white",icon:"bx-x"})]),_:1}),e(le,null,{default:a(()=>[r("Settings")]),_:1}),e(we),e(Ae,null,{default:a(()=>[e(u,{variant:"text",onClick:t[1]||(t[1]=i=>o.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),e(Q,{lines:"two"},{default:a(()=>[e(X,null,{default:a(()=>[r("User Controls")]),_:1}),e(L,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(L,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e($),e(Q,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(X,null,{default:a(()=>[r("General")]),_:1}),e(L,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:i})=>[e(z,{start:""},{default:a(()=>[e(N,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(L,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:i})=>[e(z,{start:""},{default:a(()=>[e(N,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(L,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:i})=>[e(z,{start:""},{default:a(()=>[e(N,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});const ze=D({__name:"DemoDialogOverflowed",setup(s){const o=b(!1);return(l,t)=>{const i=j;return k(),T(C,{modelValue:g(o),"onUpdate:modelValue":t[3]||(t[3]=n=>f(o)?o.value=n:null),class:"v-dialog-sm"},{activator:a(({props:n})=>[e(u,Ve({color:"primary"},n),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,{title:"Use Google's location service?"},{default:a(()=>[e(i,{variant:"text",size:"small",onClick:t[0]||(t[0]=n=>o.value=!1)}),e(v,null,{default:a(()=>[r(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(v,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(u,{color:"secondary",variant:"tonal",onClick:t[1]||(t[1]=n=>o.value=!1)},{default:a(()=>[r(" Disagree ")]),_:1}),e(u,{onClick:t[2]||(t[2]=n=>o.value=!1)},{default:a(()=>[r(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Ne=D({__name:"DemoDialogNesting",setup(s){const o=b(!1),l=b(!1);return(t,i)=>{const n=j;return k(),G(O,null,[e(u,{onClick:i[0]||(i[0]=p=>o.value=!0)},{default:a(()=>[r(" Open Dialog ")]),_:1}),e(C,{modelValue:g(o),"onUpdate:modelValue":i[4]||(i[4]=p=>f(o)?o.value=p:null),class:"v-dialog-sm"},{default:a(()=>[e(y,{title:"Dialog"},{default:a(()=>[e(n,{variant:"text",size:"small",onClick:i[1]||(i[1]=p=>o.value=!1)}),e(v,null,{default:a(()=>[r(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")]),_:1}),e(v,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(u,{color:"secondary",variant:"tonal",onClick:i[2]||(i[2]=p=>o.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(u,{onClick:i[3]||(i[3]=p=>l.value=!g(l))},{default:a(()=>[r(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(C,{modelValue:g(l),"onUpdate:modelValue":i[7]||(i[7]=p=>f(l)?l.value=p:null),class:"v-dialog-sm"},{default:a(()=>[e(y,{title:"Dialog 2"},{default:a(()=>[e(n,{variant:"text",size:"small",onClick:i[5]||(i[5]=p=>l.value=!1)}),e(v,null,{default:a(()=>[r("I'm a nested dialog.")]),_:1}),e(v,{class:"text-end"},{default:a(()=>[e(u,{variant:"tonal",color:"secondary",onClick:i[6]||(i[6]=p=>l.value=!1)},{default:a(()=>[r(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),Fe=D({__name:"DemoDialogLoader",setup(s){const o=b(!1);return ve(o,l=>{l&&setTimeout(()=>{o.value=!1},4e3)}),(l,t)=>(k(),G(O,null,[e(u,{disabled:g(o),onClick:t[0]||(t[0]=i=>o.value=!0)},{default:a(()=>[r(" Start loading ")]),_:1},8,["disabled"]),e(C,{modelValue:g(o),"onUpdate:modelValue":t[1]||(t[1]=i=>f(o)?o.value=i:null),width:"300"},{default:a(()=>[e(y,{color:"primary",width:"300"},{default:a(()=>[e(v,{class:"pt-3"},{default:a(()=>[r(" Please stand by "),e(he,{indeterminate:"",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),$e=D({__name:"DemoDialogScrollable",setup(s){const o=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],l=b(""),t=b(!1);return(i,n)=>{const p=j;return k(),T(C,{modelValue:g(t),"onUpdate:modelValue":n[4]||(n[4]=m=>f(t)?t.value=m:null),scrollable:"","max-width":"350"},{activator:a(({props:m})=>[e(u,P(S(m)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,null,{default:a(()=>[e(p,{variant:"text",size:"small",onClick:n[0]||(n[0]=m=>t.value=!1)}),e(ye,{class:"pb-3"},{default:a(()=>[e(Ce,null,{default:a(()=>[r("Select Country")]),_:1})]),_:1}),e($),e(v,{style:{height:"300px"}},{default:a(()=>[e(Be,{modelValue:g(l),"onUpdate:modelValue":n[1]||(n[1]=m=>f(l)?l.value=m:null),inline:!1},{default:a(()=>[(k(),G(O,null,ke(o,m=>e(xe,{key:m.label,label:m.label,value:m.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e($),e(v,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(u,{color:"secondary",variant:"tonal",onClick:n[2]||(n[2]=m=>t.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(u,{onClick:n[3]||(n[3]=m=>t.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Ue=D({__name:"DemoDialogPersistent",setup(s){const o=b(!1);return(l,t)=>{const i=j;return k(),T(C,{modelValue:g(o),"onUpdate:modelValue":t[3]||(t[3]=n=>f(o)?o.value=n:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:n})=>[e(u,P(S(n)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,{title:"Use Google's location service?"},{default:a(()=>[e(i,{variant:"text",size:"small",onClick:t[0]||(t[0]=n=>o.value=!1)}),e(v,null,{default:a(()=>[r(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(v,{class:"d-flex justify-end gap-2"},{default:a(()=>[e(u,{color:"secondary",variant:"tonal",onClick:t[1]||(t[1]=n=>o.value=!1)},{default:a(()=>[r(" Disagree ")]),_:1}),e(u,{onClick:t[2]||(t[2]=n=>o.value=!1)},{default:a(()=>[r(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Je=D({__name:"DemoDialogBasic",setup(s){const o=b(!1);return(l,t)=>{const i=j;return k(),T(C,{modelValue:g(o),"onUpdate:modelValue":t[2]||(t[2]=n=>f(o)?o.value=n:null),width:"500"},{activator:a(({props:n})=>[e(u,P(S(n)),{default:a(()=>[r(" Click Me ")]),_:2},1040)]),default:a(()=>[e(y,{title:"Privacy Policy"},{default:a(()=>[e(i,{variant:"text",size:"small",onClick:t[0]||(t[0]=n=>o.value=!1)}),e(v,null,{default:a(()=>[r(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(v,{class:"text-end"},{default:a(()=>[e(u,{onClick:t[1]||(t[1]=n=>o.value=!1)},{default:a(()=>[r(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),qe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="text-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="text-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ge={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref('')
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="age"
              type="number"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="interest"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref('')
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="age"
              type="number"
              label="Age"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="interest"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Oe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="bx-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="bx-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},Me={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Re={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>

        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogTwoShow = false"
      />

      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="text-end">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogTwoShow = false"
        >
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>

        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogTwoShow = false"
      />

      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="text-end">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogTwoShow = false"
        >
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},He={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},We={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardItem class="pb-3">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardItem class="pb-3">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end gap-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ke=h("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),Qe=h("p",null,[r("Use "),h("code",null,"persistent"),r(" prop to create persistent dialog.")],-1),Xe=h("p",null,[r("Use "),h("code",null,"scrollable"),r(" prop to create scrollable dialog.")],-1),Ye=h("p",null,[r("The "),h("code",null,"v-dialog"),r(" component makes it easy to create a customized loading experience for your application.")],-1),Ze=h("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),ea=h("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),aa=h("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),la=h("p",null,"Just a simple example of a form in a dialog.",-1),Aa=D({__name:"dialog",setup(s){return(o,l)=>{const t=Je,i=Te,n=Ue,p=$e,m=Fe,w=Ne,_=ze,c=Ie,B=_e;return k(),T(ae,{class:"match-height"},{default:a(()=>[e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Basic",code:qe},{default:a(()=>[Ke,e(t)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Persistent",code:Ee},{default:a(()=>[Qe,e(n)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Scrollable",code:We},{default:a(()=>[Xe,e(p)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Loader",code:Me},{default:a(()=>[Ye,e(m)]),_:1},8,["code"])]),_:1}),e(V,{col:"12",md:"6"},{default:a(()=>[e(i,{title:"Nesting",code:Re},{default:a(()=>[Ze,e(w)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Overflowed",code:He},{default:a(()=>[ea,e(_)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Fullscreen",code:Oe},{default:a(()=>[aa,e(c)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Form",code:Ge},{default:a(()=>[la,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Aa as default};
