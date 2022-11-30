"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=o,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Version 0.1.1",description:"Announce version 0.1.1",slug:"version-0-1-1",authors:["tbrand"]},i="Version 0.1.1 released!",l={permalink:"/blog/version-0-1-1",source:"@site/blog/2022-11-02-version-0-1-1/index.md",title:"Version 0.1.1",description:"Announce version 0.1.1",date:"2022-11-02T00:00:00.000Z",formattedDate:"November 2, 2022",tags:[],readingTime:1.3,hasTruncateMarker:!0,authors:[{name:"Taichiro Suzuki",title:"Founder of Negy",url:"https://github.com/tbrand",imageURL:"https://github.com/tbrand.png",key:"tbrand"}],frontMatter:{title:"Version 0.1.1",description:"Announce version 0.1.1",slug:"version-0-1-1",authors:["tbrand"]},prevItem:{title:"Version 0.1.2",permalink:"/blog/version-0-1-2"},nextItem:{title:"Negy's official Twitter account!",permalink:"/blog/start-twitter-account"}},u={authorsImageUrls:[void 0]},s=[{value:"New features",id:"new-features",level:2},{value:"Add filtering of versions",id:"add-filtering-of-versions",level:3},{value:"Gateway authentication",id:"gateway-authentication",level:3},{value:"Document Improvement",id:"document-improvement",level:2},{value:"Others",id:"others",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today I'm excited to announce Negy's new version 0.1.1!"),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("h3",{id:"add-filtering-of-versions"},"Add filtering of versions"),(0,o.kt)("p",null,"Now gateway able to filter the node's versions by ",(0,o.kt)("inlineCode",{parentName:"p"},"--min-version=x.x.x"),". It really useful for compatibility consideration and not choosing nodes which vulnerabilities are left unchecked. I would also like to congratulate the first external contributor for being merged. (Thanks ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Darth-Ness"},"Darth-Ness"),"!)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negy/pull/18"},"https://github.com/negyio/negy/pull/18")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negy/pull/22"},"https://github.com/negyio/negy/pull/22"))),(0,o.kt)("h3",{id:"gateway-authentication"},"Gateway authentication"),(0,o.kt)("p",null,"Now gateway able to authenticate the access. This is useful for operating private gateways located in public places. This ensures that even if the url is known, others cannot use the gateway with the authenticate token."),(0,o.kt)("p",null,"If you want to activate the authentication, execute the gateway by the command below. (Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_AUTH_TOKEN")," to whatever you want.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it tbrand:negy-gateway --auth-token=MY_AUTH_TOKEN\n")),(0,o.kt)("p",null,"After the launch, access to the gateway via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://example.com -x http://MY_AUTH_TOKEN@localhost:3000\n")),(0,o.kt)("p",null,"It uses basic authentication feature, so if you want to configure it on you GUI, put the token in the username and leave the password blank."),(0,o.kt)("h2",{id:"document-improvement"},"Document Improvement"),(0,o.kt)("p",null,"There are several document improvement."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negyio.github.io/pull/3"},'Added "How to configure Negy on Windows"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negyio.github.io/pull/4"},"Other improvement (including fixing typos)"))),(0,o.kt)("h2",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I started Negy's official ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/negyio"},"Twitter account"),"! Please follow it and catch up the latest news of Negy and let's discuss the internet future!"),(0,o.kt)("li",{parentName:"ul"},"Started this blog!")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"I really appreciate the followers supports! And I think the one of the most greatest highlist is the outside contribution by Darth-Ness.\nPlease continue to support us as we continue to improve Negy."),(0,o.kt)("p",null,"Best Regards"))}p.isMDXComponent=!0}}]);