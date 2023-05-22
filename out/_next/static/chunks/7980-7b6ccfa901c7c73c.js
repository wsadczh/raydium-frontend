"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7980],{72259:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(85893),o=n(67294),r=n(66180),s=n(27993),i=n(31139),a=n(54592),c=n(32029),u=n(82727);function d(e){var t;let{decimalMode:n,className:d,disabled:m,noDisableStyle:f,label:h,labelClassName:v,inputProps:p,renderInput:x,...b}=e,g=(0,o.useRef)(null);return(0,l.jsxs)(a.Z,{onClick:function(){var e,t,n,l;null===(e=g.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),null===(n=g.current)||void 0===n||null===(l=n.click)||void 0===l||l.call(n)},className:(0,r.m)("bg-[#141041] justify-between rounded-xl mobile:rounded-lg py-3 px-6 mobile:py-2 mobile:px-4 cursor-text ".concat(m&&!f?"pointer-events-none-entirely cursor-default opacity-50":""),d),children:[h&&(0,l.jsx)("div",{className:(0,r.m)("text-xs mobile:text-2xs text-[#abc4ff80] font-medium ",v),children:h}),null!==(t=(0,s.u)(x,[g]))&&void 0!==t?t:n?(0,l.jsx)(c.Z,{noCSSInputDefaultWidth:!0,...b,...p,className:(0,r.m)("w-full py-1 mobile:py-1 font-medium",null==p?void 0:p.className),componentRef:(0,i.Z)(g,null==p?void 0:p.componentRef)}):(0,l.jsx)(u.Z,{noCSSInputDefaultWidth:!0,...b,...p,className:(0,r.m)("w-full py-1 mobile:py-1 font-medium",null==p?void 0:p.className),componentRef:(0,i.Z)(g,null==p?void 0:p.componentRef)})]})}},50321:function(e,t,n){n.d(t,{Z:function(){return x}});var l=n(85893),o=n(67294),r=n(37012),s=n(31139),i=n(50352),a=n(27993),c=n(99779),u=n(61247),d=n(47857),m=n(52719),f=n(54592),h=n(65286),v=n(11788);function p(e){let{observeHeight:t=!0,observeWidth:n=!1,show:r,className:s,domRef:i,children:a}=e,[c,u]=(0,o.useState)(),[m,f]=(0,o.useState)(),p=(0,h.Z)({onAttach(e){x(e)}}),{observe:x}=function(e,t){let n=(0,o.useRef)("ResizeObserver"in globalThis?new globalThis.ResizeObserver(e=>{e.forEach(e=>null==t?void 0:t({entry:e,el:e.target}))}):void 0);(0,o.useEffect)(()=>{var t;let l=(0,v.f)(e);l&&(null===(t=n.current)||void 0===t||t.observe(l))},[]);let l=(0,d.z)(e=>{var t;e&&(null===(t=n.current)||void 0===t||t.observe(e))});return{observe:l}}(p,e=>{let{el:t}=e;b(t)}),b=(0,d.z)(e=>{e&&r&&(u(e.clientHeight),f(e.clientWidth))});return(0,l.jsx)("div",{ref:i,className:s,style:{height:t?c:void 0,width:n?m:void 0},children:r&&(null==a?void 0:a(p))})}function x(e){var t;let{increaseRenderCount:n=30,initRenderCount:a=30,reachBottomMargin:h=50,renderAllAtOnce:v,domRef:p,className:b,children:g,style:y}=e,k=(0,o.useRef)(null),{observe:Z,stop:w}=function(e){let t=(0,o.useRef)(new WeakMap),n=(0,o.useRef)();(0,m.L)(()=>{var l,o;let r=new IntersectionObserver(e=>{e.forEach(e=>{let n=e.target,l=t.current.get(n);null==l||l({el:n,entry:e})})},{...e.options,root:e.rootRef.current,rootMargin:null!==(o=null===(l=e.options)||void 0===l?void 0:l.rootMargin)&&void 0!==o?o:"500px"});n.current=r},[]);let l=(0,d.z)((e,l)=>{var o;return null===(o=n.current)||void 0===o||o.observe(e),t.current.set(e,l),{abort(){var l;t.current.delete(e),null===(l=n.current)||void 0===l||l.unobserve(e)}}}),r=(0,d.z)(()=>{var e;null===(e=n.current)||void 0===e||e.disconnect()});return{observe:l,stop:r}}({rootRef:k,options:{rootMargin:"100%"}}),j=(0,o.useMemo)(()=>(0,i.lY)(g,x.Item,(e,n)=>(0,r.Z)(e,{key:null!==(t=e.key)&&void 0!==t?t:n,$isRenderByMain:!0,$observeFn:Z})),[g]);(0,o.useEffect)(()=>w,[]);let[N,C]=(0,o.useState)(v?j.length:a);return(0,u.r)(k,{onReachBottom:()=>{C(e=>e>=j.length?j.length:e+n)},reachBottomMargin:h}),(0,c.P)(e=>{let[t]=e,n=new Set(null==t?void 0:t.map(e=>null==e?void 0:e.key)),l=j.map(e=>null==e?void 0:e.key);t&&!v&&l.some(e=>!n.has(e))&&C(a)},[j,v]),(0,l.jsx)(f.Z,{domRef:(0,s.Z)(p,k),className:"List overflow-y-scroll ".concat(null!=b?b:""),style:y,children:j.slice(0,N)})}x.Item=function(e){let{$observeFn:t,$isRenderByMain:n,children:r,className:i="",style:c,domRef:u}=e;if(!n)return null;let d=(0,o.useRef)(),[m,f]=(0,o.useState)(!0),h=(0,o.useMemo)(()=>({isIntersecting:m}),[m]);return(0,o.useEffect)(()=>{d.current&&(null==t||t(d.current,e=>{let{entry:{isIntersecting:t}}=e;f(t)}))},[d]),(0,l.jsx)(p,{show:m,domRef:(0,s.Z)(u,d),className:"w-full shrink-0",children:e=>(0,l.jsx)("div",{className:"ListItem w-full ".concat(i),ref:e,style:c,children:(0,a.u)(r,[h])})})}},15144:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(85893),o=n(67294),r=n(66180),s=n(36798);function i(e){var t;let{defaultChecked:n,checked:i,disable:a,domRef:c,className:u="",thumbClassName:d="",style:m,onToggle:f}=e,[h,v]=(0,o.useState)(!!(null!=n?n:i));return(0,o.useEffect)(()=>{null!=i&&v(i)},[i]),(0,l.jsx)(s.r,{ref:c,checked:h,onChange:null!==(t=e=>{a||(v(e=>!e),null==f||f(e))})&&void 0!==t?t:()=>{},className:(0,r.m)("Switch ".concat(h?a?"bg-[#7ba4a7]":"bg-[#39D0D8]":"bg-[#1B1659]"," relative flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full ").concat(a?"cursor-not-allowed opacity-20":"cursor-pointer"," transition-all ease-in-out duration-200 focus:outline-none"),u),style:m,children:(0,l.jsx)("span",{className:"".concat(h?"left-full -translate-x-full":"left-0","\n            pointer-events-none absolute top-1/2 h-4 w-4  rounded-full ").concat(h?"bg-white":"bg-[rgba(171,196,255,0.5)]"," shadow-lg transform -translate-y-1/2 transition-all duration-200 ").concat(d)})})}},56603:function(e,t,n){n.d(t,{D:function(){return r},P:function(){return o}});let l=()=>new Date().getTime();function o(e,t){var n;let o=[],r=null,s=null,i=null!==(n=null==t?void 0:t.delay)&&void 0!==n?n:400,a=()=>{var n;e(...o[o.length-1]),o.length=0,r=null,i=null!==(n=null==t?void 0:t.delay)&&void 0!==n?n:400};return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];o.push(t);let c=l();r&&(clearTimeout(r),i-=s?c-s:0),i<=0?a():r=setTimeout(a,i),s=c}}function r(e,t){let n;return function(){for(var l,o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];n&&window.clearTimeout(n);let i=window.setTimeout(()=>e(...r),null!==(l=null==t?void 0:t.delay)&&void 0!==l?l:400);n=i}}},61247:function(e,t,n){n.d(t,{r:function(){return r}});var l=n(67294),o=n(47857);function r(e,t){let n=(0,l.useRef)(!1),r=(0,o.z)(()=>{var l,o;if(!e.current)return;let{scrollHeight:r,scrollTop:s,clientHeight:i}=e.current,a=s+i+(null!==(l=null==t?void 0:t.reachBottomMargin)&&void 0!==l?l:0)>=r;a&&!n.current&&(null==t||null===(o=t.onReachBottom)||void 0===o||o.call(t),n.current=!0),!a&&n.current&&(n.current=!1)});(0,l.useEffect)(()=>{var t;return r(),null===(t=e.current)||void 0===t||t.addEventListener("scroll",r,{passive:!0}),()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.removeEventListener("scroll",r)}},[e])}},87980:function(e,t,n){n.d(t,{Z:function(){return D}});var l=n(85893),o=n(67294),r=n(91371),s=n(94355),i=n(18559),a=n(42186),c=n(31166),u=n(25647),d=n(80582),m=n(53002),f=n(99522),h=n(43067),v=n(6994),p=n(70745),x=n(54592),b=n(48162),g=n(40471),y=n(82727),k=n(72259),Z=n(50321),w=n(31139),j=n(99779);function N(e){let{increaseRenderCount:t=30,initRenderCount:n=30,reachBottomMargin:r=50,renderAllAtOnce:s,sourceData:i,renderItem:a,getKey:c,domRef:u,className:d,style:m}=e,[f,h]=(0,o.useState)(s?i.length:n),v=(0,o.useRef)(null);return!function(e,t){let n=(0,o.useRef)(!1),l=(0,o.useCallback)(()=>{var l,o;if(!e.current)return;let{scrollHeight:r,scrollTop:s,clientHeight:i}=e.current,a=s+i+(null!==(l=null==t?void 0:t.reachBottomMargin)&&void 0!==l?l:0)>=r;a&&!n.current&&(null==t||null===(o=t.onReachBottom)||void 0===o||o.call(t),n.current=!0),!a&&n.current&&(n.current=!1)},[e,t]);(0,o.useEffect)(()=>{var t;return l(),null===(t=e.current)||void 0===t||t.addEventListener("scroll",l,{passive:!0}),()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.removeEventListener("scroll",l)}},[e,l])}(v,{onReachBottom:()=>{h(e=>e>=i.length?i.length:e+t)},reachBottomMargin:r}),(0,j.P)(e=>{let[t]=e,l=new Set(null==t?void 0:t.map(c)),o=i.map(c);t&&!s&&o.some(e=>!l.has(e))&&h(n)},[i,s]),(0,l.jsx)(x.Z,{domRef:(0,w.Z)(u,v),className:"List overflow-y-scroll ".concat(null!=d?d:""),style:{...m,contentVisibility:"auto"},children:i.slice(0,f).map((e,t)=>(0,l.jsx)(o.Fragment,{children:a(e,t)},c(e,t)))})}var C=n(6325),S=n(51800),P=n(15144),T=n(56603),L=n(3363),R=n(4465),E=n(72573),F=n(27993),A=n(26842),B=n(47857),M=n(92224);function D(e){return(0,l.jsx)(C.Z,{maskNoBlur:!0,transitionSpeed:"fast",placement:"from-top",open:e.open,onClose:e.onClose,children:t=>{let{close:n}=t;return(0,l.jsx)(I,{...e,onClose:n})}})}function I(e){var t,n;let{open:f,onClose:g,onSelectToken:w,enableTokens:j,turnOnTokenVerification:C,disableTokens:P,canSelectQuantumSOL:E,canSelectIfInWhiteList:D}=e,I=(0,c.ZP)(e=>e.tokenListSettings),O=(0,c.ZP)(e=>e.getToken),W=(0,r.ZP)(e=>e.isMobile),$=(0,m.Z)(e=>e.balances),[_,V]=(0,o.useState)(""),Y=(0,T.P)(s.Z.getState().logWarning),[q,{off:G,on:H}]=(0,M.ZP)(),K=(0,B.z)(()=>{V(""),null==g||g()}),X=(0,B.z)(async e=>{let t=I["Raydium Token List"][(0,L.ZP)(e.mint)]||I["Solana Token List"][(0,L.ZP)(e.mint)],n=!C||!!t||await (0,i.WX)(e.mint,{canWhiteList:D});n?(null==w||w(e),setTimeout(()=>{K()},200)):K()});function J(e){return j?!j.some(t=>t.mint.equals(e.mint)):!!P&&P.some(t=>E&&(0,a.$F)(t)?!!((0,a.Dn)(t)&&(0,a.Dn)(e)||(0,a.Ee)(t)&&(0,a.Ee)(e)):(0,R.aT)(t,e))}let Q=(0,c.ZP)(e=>e.allSelectableTokens),ee=j||Q,et=(null==P?void 0:P.length)?ee.filter(e=>!J(e)):ee,en=(0,o.useMemo)(()=>_?function(e,t){let n=e.filter(e=>{var n;return(null===(n=e.symbol)||void 0===n?void 0:n.toLowerCase())===t.toLowerCase()});return[...n,...e.filter(e=>!n.some(t=>(0,R.aT)(t.mint,e.mint)&&(0,R.X0)(t.symbol,e.symbol)))]}(et.filter(e=>_.split(" ").every(n=>{var l;return(0,L.ZP)(e.id).startsWith(n)||new RegExp("^.*".concat(n.toLowerCase(),".*$")).test(null!==(t=null===(l=e.symbol)||void 0===l?void 0:l.toLowerCase())&&void 0!==t?t:"")})),_):et,[_,et,$]),el=(0,o.useDeferredValue)(en),eo=el.length>0,er=function(e,t,n){let[l,r]=(0,o.useState)(t),s=(0,o.useRef)(0);return(0,A.Z)(async()=>{let t=s.current;s.current=t+1;let n=await (0,F.u)(e),l=s.current-1===t;l&&void 0!==n&&r(n)},null!=n?n:[]),l}(!eo&&_?(0,i.U7)(_):void 0,void 0,[_,eo]),[es,ei]=(0,o.useState)(0),[ea,ec]=(0,o.useState)({symbol:"",name:""}),eu=(0,o.useMemo)(()=>(0,l.jsx)(N,{className:"flex-grow flex flex-col px-4 mobile:px-2 mx-2 gap-2 overflow-auto my-2",sourceData:el,getKey:(e,t)=>null!==(n=(0,a.$F)(e)?e.symbol:(0,L.ZP)(null==e?void 0:e.mint))&&void 0!==n?n:t,renderItem:(e,t)=>(0,l.jsx)("div",{children:(0,l.jsx)(S.Z,{className:"".concat(es===t?"clickable no-clicable-transform-effect clickable-mask-offset-2 before:bg-[rgba(0,0,0,0.2)]":""),onHoverChange:e=>{let{is:n}=e;"start"===n&&ei(t)},children:(0,l.jsx)(z,{onClick:()=>{X(e)},token:e})})})}),[el,es,ei]),ed=(0,m.Z)(e=>e.connected),em=e=>{if(!e.symbol)return;let{addUserAddedToken:t}=c.ZP.getState(),n=null==er?void 0:er.decimals,l=!!(null==er?void 0:er.freezeAuthorityOption);if(!er||void 0===n){Y("the mint address is invalid");return}let o=(0,u.LP)({mint:_,symbol:e.symbol.slice(0,8),decimals:n,icon:"",extensions:{},name:e.name?e.name.slice(0,16):e.symbol.slice(0,8),userAdded:!0,hasFreeze:l});t(o)};return(0,l.jsx)(v.Z,{className:"flex flex-col rounded-3xl mobile:rounded-none w-[min(468px,100vw)] mobile:w-full h-[min(680px,100vh)] mobile:h-screen border-1.5 border-[rgba(99,130,202,0.2)] bg-cyberpunk-card-bg shadow-cyberpunk-card",size:"lg",htmlProps:{onKeyDown:e=>{"ArrowUp"===e.key?ei(e=>Math.max(e-1,0)):"ArrowDown"===e.key?ei(e=>Math.min(e+1,el.length-1)):"Enter"===e.key&&X(el[es])}},children:q?(0,l.jsxs)("div",{className:"px-8 mobile:px-6 pt-6 pb-5",children:[(0,l.jsxs)(S.Z,{className:"justify-between items-center mb-6",children:[(0,l.jsx)(b.Z,{className:"text-[#ABC4FF] cursor-pointer clickable clickable-mask-offset-2",heroIconName:"chevron-left",onClick:G}),(0,l.jsx)("div",{className:"text-xl font-semibold text-white",children:"Token List Settings"}),(0,l.jsx)("div",{})]}),(0,l.jsx)(Z.Z,{className:"p-2 grid mt-2 overflow-auto max-h-[70vh]",children:Object.entries(I).map(e=>{let[t]=e;return t}).map(e=>(0,l.jsx)(Z.Z.Item,{children:(0,l.jsx)(U,{tokenListName:e})},e))})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"px-8 mobile:px-6 pt-6 pb-5",children:[(0,l.jsxs)(S.Z,{className:"justify-between items-center mb-6",children:[(0,l.jsx)("div",{className:"text-xl font-semibold text-white",children:"Select a token"}),(0,l.jsx)(b.Z,{className:"text-[#ABC4FF] cursor-pointer clickable clickable-mask-offset-2",heroIconName:"x",onClick:K})]}),(0,l.jsx)(y.Z,{value:_,placeholder:"Search name or mint address",onUserInput:e=>{V(e),ei(0)},className:"py-3 px-4 rounded-xl bg-[#141041]",inputClassName:"placeholder-[rgba(196,214,255,0.5)] text-sm text-[#ABC4FF]",labelText:"input for searching coins",suffix:(0,l.jsx)(b.Z,{heroIconName:"search",size:"sm",className:"text-[#C4D6FF]"})}),(0,l.jsx)("div",{className:"text-xs font-medium text-[rgba(171,196,255,.5)] my-3",children:"Popular tokens"}),(0,l.jsx)(S.Z,{className:"justify-between",children:[d.PD,a.aF,d.q3,d.LA].map((e,t)=>{var n;let o=(0,a.$F)(e)?a.aF:O(e);return(0,l.jsxs)(S.Z,{className:"gap-1 py-1 px-2 mobile:py-1.5 mobile:px-2.5 rounded ring-1 ring-inset ring-[rgba(171,196,255,.3)] items-center flex-wrap ".concat((null==o?void 0:o.mint)&&J(o)?"not-clickable":"clickable clickable-filter-effect"),onClick:()=>{!(o&&J(o))&&o&&X(o)},children:[(0,l.jsx)(p.Z,{size:W?"xs":"sm",token:o}),(0,l.jsx)("div",{className:"text-base mobile:text-sm font-normal text-[#ABC4FF]",children:null!==(n=null==o?void 0:o.symbol)&&void 0!==n?n:"--"})]},(0,L.ZP)((0,a.$F)(e)?e.mint:e))})})]}),(0,l.jsx)("div",{className:"mobile:mx-6 border-t-1.5 border-[rgba(171,196,255,0.2)]"}),(0,l.jsxs)(x.Z,{className:"flex-1 overflow-hidden border-b-1.5 py-3 border-[rgba(171,196,255,0.2)]",children:[(0,l.jsxs)(S.Z,{className:"px-8 mobile:px-6 justify-between",children:[(0,l.jsx)("div",{className:"text-xs font-medium text-[rgba(171,196,255,.5)]",children:"Token"}),(0,l.jsx)(S.Z,{className:"text-xs font-medium text-[rgba(171,196,255,.5)] items-center gap-1",children:"Balance / Address"})]}),eo?eu:er?(0,l.jsxs)(x.Z,{className:"p-8  gap-4",children:[(0,l.jsx)(k.Z,{label:"input a symbol for this token",onUserInput:e=>{ec(t=>({...t,symbol:e}))}}),(0,l.jsx)(k.Z,{label:"input a name for this token (optional)",onUserInput:e=>{ec(t=>({...t,name:e}))}}),(0,l.jsx)(h.Z,{className:"frosted-glass-teal",onClick:()=>{em(ea)},validators:[{should:ed,forceActive:!0,fallbackProps:{onClick:()=>r.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}},{should:ea.symbol}],children:"Add User Token"})]}):null]}),(0,l.jsx)(h.Z,{type:"text",className:"w-full py-4 rounded-none font-bold text-xs text-[#ABC4FF]",onClick:H,children:"View Token List"})]})})}function z(e){var t;let{token:n,onClick:s}=e,[i,a]=(0,o.useState)(!1);(0,c.ZP)(e=>e.userFlaggedTokenMints);let u=(0,c.ZP)(e=>e.canFlaggedTokenMints),d=(0,c.ZP)(e=>e.userAddedTokens),v=(0,c.ZP)(e=>e.tokens),g=!!(d[(0,L.ZP)(n.mint)]&&!v[(0,L.ZP)(n.mint)]);(0,c.ZP)(e=>e.toggleFlaggedToken);let y=(0,c.ZP)(e=>e.deleteUserAddedToken),Z=(0,c.ZP)(e=>e.editUserAddedToken),w=(0,m.Z)(e=>e.getBalance),j=(0,m.Z)(e=>e.connected),N=(0,c.ZP)(e=>e.userCustomTokenSymbol),C=(0,c.ZP)(e=>e.updateUserCustomTokenSymbol);N[(0,L.ZP)(n.mint)];let[P,T]=(0,o.useState)(!1),[R,F]=(0,o.useState)({symbol:n.symbol||"",name:n.name||""}),A=w(n);return(0,l.jsxs)("div",{className:"group w-full",children:[(0,l.jsxs)(S.Z,{onClick:s,className:"group w-full gap-4 justify-between items-center p-2",children:[(0,l.jsxs)(S.Z,{children:[(0,l.jsx)(p.Z,{token:n,className:"mr-2"}),(0,l.jsxs)(x.Z,{className:"mr-2",children:[(0,l.jsxs)(S.Z,{children:[(0,l.jsx)("div",{className:"text-base  max-w-[7em] overflow-hidden text-ellipsis  font-normal text-[#ABC4FF]",children:n.symbol}),g&&!u.has((0,L.ZP)(n.mint))?(0,l.jsxs)(S.Z,{onClick:e=>{y(n.mint),e.stopPropagation()},className:"group-hover:flex hidden items-center text-sm mobile:text-xs text-[rgba(57,208,216,1)] font-medium flex-nowrap px-2 gap-1",children:[(0,l.jsx)(b.Z,{className:"w-4 h-4",iconClassName:"w-4 h-4",iconSrc:"/icons/delete-token.svg"}),(0,l.jsx)("div",{className:"whitespace-nowrap",children:"Delete Token"})]}):null]}),(0,l.jsx)("div",{className:"text-xs  max-w-[12em] overflow-hidden text-ellipsis whitespace-nowrap  font-medium text-[rgba(171,196,255,.5)]",children:n.name})]})]}),(0,l.jsxs)(x.Z,{className:"self-stretch items-end",children:[A&&(0,l.jsx)("div",{className:"grow  text-sm text-[#ABC4FF] justify-self-end",children:(0,E.B)(null==A?void 0:null===(t=A.toExact)||void 0===t?void 0:t.call(A),{decimalLength:"auto 2"})}),(0,l.jsx)(f.U,{className:"grow",showDigitCount:5,addressType:"token",showCopyIcon:!1,canExternalLink:!0,iconSize:"sm",textClassName:"flex leading-[normal] text-2xs self-center px-1.5 py-0.5 border border-[#abc4ff] rounded-sm text-[#abc4ff] justify-center",iconClassName:"text-[#abc4ff]",iconRowClassName:"ml-1.5 gap-0.5",children:(0,L.ZP)(n.mint)})]})]}),P&&(0,l.jsxs)(x.Z,{className:"p-1  gap-4",children:[(0,l.jsx)(k.Z,{value:R.symbol,label:"input a symbol for this token",onUserInput:e=>{F(t=>({...t,symbol:e}))}}),(0,l.jsx)(k.Z,{value:R.name,label:"input a name for this token (optional)",onUserInput:e=>{F(t=>({...t,name:e}))}}),(0,l.jsx)(h.Z,{className:"frosted-glass-teal",onClick:()=>{Z(R,n.mint),T(!1)},validators:[{should:j,forceActive:!0,fallbackProps:{onClick:()=>r.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}},{should:R.symbol}],children:"Confirm"})]}),i&&(0,l.jsxs)(x.Z,{className:"p-1  gap-4",children:[(0,l.jsx)(k.Z,{value:R.symbol,label:"input a symbol for this token",onUserInput:e=>{F(t=>({...t,symbol:e}))}}),(0,l.jsx)(k.Z,{value:R.name,label:"input a name for this token (optional)",onUserInput:e=>{F(t=>({...t,name:e}))}}),(0,l.jsx)(h.Z,{className:"frosted-glass-teal",onClick:()=>{C(n,R.symbol,R.name),a(!1)},validators:[{should:R.symbol}],children:"Confirm"})]})]})}function U(e){var t,n,o;let{tokenListName:r}=e,s=(0,c.ZP)(e=>e.tokenListSettings),i=s[r],a=s[r].isOn,u=s[r].disableUserConfig,d=()=>{c.ZP.setState(e=>({tokenListSettings:{...e.tokenListSettings,[r]:{...e.tokenListSettings[r],isOn:!e.tokenListSettings[r].isOn}}}))};return(null===(t=i.mints)||void 0===t?void 0:t.size)&&!i.cannotbBeSeen?(0,l.jsxs)(S.Z,{className:"my-4 items-center",children:[(null==i?void 0:i.icon)&&(0,l.jsx)(g.Z,{className:"rounded-full h-8 w-8 overflow-hidden",src:i.icon}),(0,l.jsxs)(x.Z,{children:[(0,l.jsx)("div",{className:"text-base font-normal text-[#ABC4FF]",children:r}),i&&(0,l.jsxs)("div",{className:"text-sm font-medium text-[rgba(171,196,255,.5)]",children:[null!==(o=null===(n=i.mints)||void 0===n?void 0:n.size)&&void 0!==o?o:"--"," tokens"]})]}),(0,l.jsx)(P.Z,{disable:u,className:"ml-auto",defaultChecked:a,onToggle:d})]}):null}},95389:function(e,t,n){n.d(t,{_:function(){return d},b:function(){return u}});var l=n(67294),o=n(19946),r=n(12351),s=n(16723),i=n(23784),a=n(73781);let c=(0,l.createContext)(null);function u(){let[e,t]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)(()=>function(e){let n=(0,a.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),l=n.indexOf(e);return -1!==l&&n.splice(l,1),n}))),o=(0,l.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return l.createElement(c.Provider,{value:o},e.children)},[t])]}let d=(0,r.yV)(function(e,t){let n=(0,o.M)(),{id:a=`headlessui-label-${n}`,passive:u=!1,...d}=e,m=function e(){let t=(0,l.useContext)(c);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),f=(0,i.T)(t);(0,s.e)(()=>m.register(a),[a,m.register]);let h={ref:f,...m.props,id:a};return u&&("onClick"in h&&delete h.onClick,"onClick"in d&&delete d.onClick),(0,r.sY)({ourProps:h,theirProps:d,slot:m.slot||{},defaultTag:"label",name:m.name||"Label"})})},36798:function(e,t,n){n.d(t,{r:function(){return y}});var l=n(67294),o=n(12351),r=n(19946),s=n(61363),i=n(64103),a=n(95389),c=n(39516),u=n(16723);function d(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var m=n(23784),f=n(46045),h=n(18689),v=n(73781),p=n(31147),x=n(94192);let b=(0,l.createContext)(null);b.displayName="GroupContext";let g=l.Fragment,y=Object.assign((0,o.yV)(function(e,t){let n=(0,r.M)(),{id:a=`headlessui-switch-${n}`,checked:c,defaultChecked:g=!1,onChange:y,name:k,value:Z,...w}=e,j=(0,l.useContext)(b),N=(0,l.useRef)(null),C=(0,m.T)(N,t,null===j?null:j.setSwitch),[S,P]=(0,p.q)(c,y,g),T=(0,v.z)(()=>null==P?void 0:P(!S)),L=(0,v.z)(e=>{if((0,i.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),T()}),R=(0,v.z)(e=>{e.key===s.R.Space?(e.preventDefault(),T()):e.key===s.R.Enter&&(0,h.g)(e.currentTarget)}),E=(0,v.z)(e=>e.preventDefault()),F=(0,l.useMemo)(()=>({checked:S}),[S]),A={id:a,ref:C,role:"switch",type:function(e,t){let[n,o]=(0,l.useState)(()=>d(e));return(0,u.e)(()=>{o(d(e))},[e.type,e.as]),(0,u.e)(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")},[n,t]),n}(e,N),tabIndex:0,"aria-checked":S,"aria-labelledby":null==j?void 0:j.labelledby,"aria-describedby":null==j?void 0:j.describedby,onClick:L,onKeyUp:R,onKeyPress:E},B=(0,x.G)();return(0,l.useEffect)(()=>{var e;let t=null==(e=N.current)?void 0:e.closest("form");t&&void 0!==g&&B.addEventListener(t,"reset",()=>{P(g)})},[N,P]),l.createElement(l.Fragment,null,null!=k&&S&&l.createElement(f._,{features:f.A.Hidden,...(0,o.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:S,name:k,value:Z})}),(0,o.sY)({ourProps:A,theirProps:w,slot:F,defaultTag:"button",name:"Switch"}))}),{Group:function(e){let[t,n]=(0,l.useState)(null),[r,s]=(0,a.b)(),[i,u]=(0,c.f)(),d=(0,l.useMemo)(()=>({switch:t,setSwitch:n,labelledby:r,describedby:i}),[t,n,r,i]);return l.createElement(u,{name:"Switch.Description"},l.createElement(s,{name:"Switch.Label",props:{onClick(){t&&(t.click(),t.focus({preventScroll:!0}))}}},l.createElement(b.Provider,{value:d},(0,o.sY)({ourProps:{},theirProps:e,defaultTag:g,name:"Switch.Group"}))))},Label:a._,Description:c.d})},31147:function(e,t,n){n.d(t,{q:function(){return r}});var l=n(67294),o=n(73781);function r(e,t,n){let[r,s]=(0,l.useState)(n),i=void 0!==e,a=(0,l.useRef)(i),c=(0,l.useRef)(!1),u=(0,l.useRef)(!1);return!i||a.current||c.current?i||!a.current||u.current||(u.current=!0,a.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(c.current=!0,a.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[i?e:r,(0,o.z)(e=>(i||s(e),null==t?void 0:t(e)))]}},18689:function(e,t,n){function l(e,t){return e?e+"["+t+"]":t}function o(e){var t;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n){for(let e of n.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type){e.click();return}}}n.d(t,{g:function(){return o},t:function(){return function e(t={},n=null,o=[]){for(let[r,s]of Object.entries(t))!function t(n,o,r){if(Array.isArray(r))for(let[e,s]of r.entries())t(n,l(o,e.toString()),s);else r instanceof Date?n.push([o,r.toISOString()]):"boolean"==typeof r?n.push([o,r?"1":"0"]):"string"==typeof r?n.push([o,r]):"number"==typeof r?n.push([o,`${r}`]):null==r?n.push([o,""]):e(r,o,n)}(o,l(n,r),s);return o}}})}}]);