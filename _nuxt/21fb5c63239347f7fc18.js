(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{364:function(t,e,n){"use strict";n.r(e);n(90);var c={data:function(){return{characters:[]}},beforeMount:function(){this.characters=[],this.addCharacter("キャラクター1"),this.addCharacter("キャラクター2"),this.addCharacter("キャラクター3")},methods:{click:function(t,e){var n=t.chips.find((function(element){return element.id===e}));n&&(n.active&&"TE"===n.span?(n.active=!0,n.span="SE"):n.active&&"SE"===n.span?(n.active=!1,n.span=null):(n.active=!0,n.span="TE"))},addCharacter:function(t){var e={name:t,chips:[]};this.addChip(e,"1","減速"),this.addChip(e,"2","不動"),this.addChip(e,"3","朦朧"),this.addChip(e,"4","幻惑"),this.addChip(e,"5","弱体"),this.addChip(e,"6","盲目"),this.addChip(e,"7","石化"),this.addChip(e,"8","伏せ"),this.addChip(e,"9","支配"),this.addChip(e,"10","聴喪"),this.addChip(e,"11","継続D"),this.characters.push(e)},addChip:function(t,e,n){var c={id:e,name:n,active:!1,initiative:0,hitpoint:0,span:null};t.chips.push(c)}}},r=n(64),d=n(89),h=n.n(d),l=n(125),o=n(327),v=n(326),C=n(359),f=n(360),_=n(361),m=n(363),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left"},t._l(t.characters,(function(e){return n("v-card",{key:e.name},[n("v-card-text",[n("v-row",[n("v-col",{attrs:{sm:"4"}},[t._v(" "+t._s(e.name))]),t._v(" "),n("v-col",{attrs:{sm:"4"}},[n("v-text-field",{staticClass:"overline",attrs:{label:"HP",dense:""},model:{value:e.hitpoint,callback:function(n){t.$set(e,"hitpoint",n)},expression:"character.hitpoint"}},[t._v("12")])],1),t._v(" "),n("v-col",{attrs:{sm:"4"}},[n("v-text-field",{staticClass:"overline",attrs:{label:"イニシアチブ",dense:""},model:{value:e.initiative,callback:function(n){t.$set(e,"initiative",n)},expression:"character.initiative"}},[t._v("12")])],1)],1),t._v(" "),t._l(e.chips,(function(c){return n("v-chip",{key:c.id,staticClass:"ma-2",attrs:{color:c.active?"indigo":"gray","text-color":"white",small:""},on:{click:function(n){return t.click(e,c.id)}}},[c.active?n("v-avatar",{class:"SE"==c.span?"green":"red",attrs:{left:""}},[t._v("\n          "+t._s(c.span)+"\n        ")]):t._e(),t._v("\n        "+t._s(c.name)+"\n      ")],1)}))],2)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VAvatar:l.a,VCard:o.a,VCardText:v.b,VChip:C.a,VCol:f.a,VRow:_.a,VTextField:m.a})}}]);