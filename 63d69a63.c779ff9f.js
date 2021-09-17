(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(106)),i={id:"installation",title:"Installation",slug:"/"},c={unversionedId:"installation",id:"version-7.1.x/installation",isDocsHomePage:!1,title:"Installation",description:"1.  Choose how to deploy:",source:"@site/versioned_docs/version-7.1.x/installation.md",slug:"/",permalink:"/oauth2-proxy/docs/",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.1.x/installation.md",version:"7.1.x",sidebar:"version-7.1.x/docs",next:{title:"Behaviour",permalink:"/oauth2-proxy/docs/behaviour"}},p=[],l={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose how to deploy:"),Object(o.b)("p",{parentName:"li"},"a. Download ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oauth2-proxy/oauth2-proxy/releases"}),"Prebuilt Binary")," (current release is ",Object(o.b)("inlineCode",{parentName:"p"},"v7.1.3"),")"),Object(o.b)("p",{parentName:"li"},"b. Build with ",Object(o.b)("inlineCode",{parentName:"p"},"$ go get github.com/oauth2-proxy/oauth2-proxy/v7")," which will put the binary in ",Object(o.b)("inlineCode",{parentName:"p"},"$GOPATH/bin")),Object(o.b)("p",{parentName:"li"},"c. Using the prebuilt docker image ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://quay.io/oauth2-proxy/oauth2-proxy"}),"quay.io/oauth2-proxy/oauth2-proxy")," (AMD64, ARMv6 and ARM64 tags available)"),Object(o.b)("p",{parentName:"li"},"d. Using a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oauth2-proxy/manifests"}),"Kubernetes manifest")," (Helm)"))),Object(o.b)("p",null,"Prebuilt binaries can be validated by extracting the file and verifying it against the ",Object(o.b)("inlineCode",{parentName:"p"},"sha256sum.txt")," checksum file provided for each release starting with version ",Object(o.b)("inlineCode",{parentName:"p"},"v3.0.0"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ sha256sum -c sha256sum.txt 2>&1 | grep OK\noauth2-proxy-x.y.z.linux-amd64: OK\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/oauth2-proxy/docs/configuration/oauth_provider"}),"Select a Provider and Register an OAuth Application with a Provider")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/oauth2-proxy/docs/configuration/overview"}),"Configure OAuth2 Proxy using config file, command line options, or environment variables")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/oauth2-proxy/docs/configuration/tls"}),"Configure SSL or Deploy behind a SSL endpoint")," (example provided for Nginx)")))}u.isMDXComponent=!0}}]);