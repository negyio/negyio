"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=n,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},a="What's Negy?",s={unversionedId:"intro",id:"intro",title:"What's Negy?",description:"Negy is a proxy that uses the Tor protocol to hide http routing from external and destination servers. Negy sticks to the network layer and does not interfere with applications. For example, you can use Google Chrome instead of a dedicated browser. Alternatively, it can be configured on your smartphone. There is no need to sacrifice the UX of your everyday applications.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick Start\ud83c\udfc3",permalink:"/docs/category/quick-start"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"whats-negy"},"What's Negy?"),(0,n.kt)("p",null,"Negy is a proxy that uses the Tor protocol to hide http routing from external and destination servers. Negy sticks to the network layer and does not interfere with applications. For example, you can use Google Chrome instead of a dedicated browser. Alternatively, it can be configured on your smartphone. There is no need to sacrifice the UX of your everyday applications."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Note that Negy follows the Tor protocol in its implementation but it's not compatible.")),(0,n.kt)("p",null,"There are two reasons why Negy hides routing, each of which can be chosen by the user. One is that you do not want the destination server to know who you are accessing the site from (i.e. you). In this case, the contents of cookies and other transmitted information are outside Negy's jurisdiction, so you need to use a secret tab or similar in your browser at the same time as Negy. The second objective is to prevent route snooping. In this case, there is no problem in logging in to the site and creating a cookie as usual, as this can be prevented by Negy alone. Naturally, the first objective also prevents the second, 'route snooping'."))}u.isMDXComponent=!0}}]);