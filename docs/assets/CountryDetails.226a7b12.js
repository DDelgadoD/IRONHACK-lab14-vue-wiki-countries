import{a as _}from"./index.098598f7.js";import{u as h,r as c,b as f,h as v,d as g,o as s,c as l,a as e,t as o,i as m,F as y,e as w,f as k,g as C,w as b}from"./index.34dd9e88.js";const x={class:"column is-8"},N={key:0,class:"section"},V={class:"image is-128x128"},B=["src"],D={class:"title"},L={class:"table is-fullwidth"},F=e("td",null,"Capital",-1),A=e("td",null,"Area",-1),E=e("sup",null,"2",-1),M=e("td",null,"Borders",-1),P={key:0},q={__name:"CountryDetails",setup(R){const u=h(),a=c(void 0),t=c(void 0),n=c(!0),r=async()=>{a.value=await _(u.params.code),t.value=a.value.borders,t.value.length>0&&(t.value=await Promise.all(a.value.borders.map(async i=>await _(i)))),n.value=!1};return f(async()=>{await r()}),v(async()=>u.params.code,async i=>{n.value=!0,await r()}),(i,S)=>{const p=g("router-link");return s(),l("div",x,[n.value?k("",!0):(s(),l("section",N,[e("figure",V,[e("img",{src:`https://flagpedia.net/data/flags/icon/72x54/${a.value.alpha2Code.toLowerCase()}.png`},null,8,B)]),e("div",D,o(a.value.name.official),1),e("table",L,[e("tbody",null,[e("tr",null,[F,e("td",null,o(a.value.capital[0]),1)]),e("tr",null,[A,e("td",null,[m(o(a.value.area)+" km ",1),E])]),e("tr",null,[M,e("td",null,[t.value.length==0?(s(),l("div",P,"None")):(s(!0),l(y,{key:1},w(t.value,(d,T)=>(s(),l("ul",null,[e("li",null,[C(p,{to:{name:"details",params:{code:d.alpha3Code}},class:"media is-clickable"},{default:b(()=>[m(o(d.name.official),1)]),_:2},1032,["to"])])]))),256))])])])])]))])}}};export{q as default};
