import{r as n,c5 as o,c4 as t,bw as p,c6 as i}from"./index-B9Y4ZT61.js";import{u as l}from"./Texture-DzcirA1V.js";const g=({position:s})=>{const r=n.useRef([]),c=n.useCallback(e=>{e&&!r.current.includes(e)&&r.current.push(e)},[]),u=l("textures/rings.png");return o(()=>{r.current.length!==0&&(r.current.forEach(e=>{e.position.set(s[0],s[1],s[2])}),i.timeline({repeat:-1,repeatDelay:.5}).to(r.current.map(e=>e.rotation),{y:`+=${Math.PI*2}`,x:`-=${Math.PI*2}`,duration:2.5,stagger:{each:.15}}))},{dependencies:s}),t.jsx(p,{children:t.jsx("group",{scale:.5,children:Array.from({length:4},(e,a)=>t.jsxs("mesh",{ref:c,children:[t.jsx("torusGeometry",{args:[(a+1)*.5,.1]}),t.jsx("meshMatcapMaterial",{matcap:u,toneMapped:!1})]},a))})})};export{g as default};
