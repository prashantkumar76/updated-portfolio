import{r as c,u as T,aM as u,bg as f,ab as i}from"./index-B9Y4ZT61.js";const n=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!="function";function l(e,s){const a=T(t=>t.gl),r=u(f,n(e)?Object.values(e):e);return c.useLayoutEffect(()=>{s==null||s(r)},[s]),c.useEffect(()=>{if("initTexture"in a){let t=[];Array.isArray(r)?t=r:r instanceof i?t=[r]:n(r)&&(t=Object.values(r)),t.forEach(o=>{o instanceof i&&a.initTexture(o)})}},[a,r]),c.useMemo(()=>{if(n(e)){const t={};let o=0;for(const x in e)t[x]=r[o++];return t}else return r},[e,r])}l.preload=e=>u.preload(f,e);l.clear=e=>u.clear(f,e);const b=({children:e,input:s,onLoad:a})=>{const r=l(s,a);return c.createElement(c.Fragment,null,e==null?void 0:e(r))};export{n as I,b as T,l as u};
