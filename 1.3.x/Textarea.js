(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[43],{1361:function(e,t,n){"use strict";var a=n(49),r=n(207),o=n(208),c=n(194),i=n(199),l=n(25),u=n(7),s=n(8),h=n(10),f=n(2),d=n(21),m=n(9),p=n(3),b=n(0),v=n.n(b),g=n(34),j=n(5),O=n(209),y=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(h.a)(this,Object(f.a)(n).call(this,e))).state={height:0},t.bindShadow=t.bindShadow.bind(Object(p.a)(Object(p.a)(t))),t.handleBlur=t.handleBlur.bind(Object(p.a)(Object(p.a)(t))),t.handleChange=t.handleChange.bind(Object(p.a)(Object(p.a)(t))),t.handleKeyUp=t.handleKeyUp.bind(Object(p.a)(Object(p.a)(t))),t.resize=t.resize.bind(Object(p.a)(Object(p.a)(t))),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){Object(d.a)(Object(f.a)(n.prototype),"componentDidMount",this).call(this),this.props.autosize&&this.resize()}},{key:"componentDidUpdate",value:function(e){this.props.autosize&&e.value!==this.props.value&&this.resize(this.props.value)}},{key:"bindShadow",value:function(e){this.shadow=e}},{key:"resize",value:function(e){(e||""===e)&&(this.shadow.value=e);var t=this.shadow?this.shadow.scrollHeight:0;this.setState({height:t})}},{key:"handleChange",value:function(e){this.props.onChange(e.target.value,e),this.props.autosize&&this.resize(e.target.value)}},{key:"handleKeyUp",value:function(e){var t=this.props.onEnterPress;13===e.keyCode&&t&&t(e.target.value,e)}},{key:"handleBlur",value:function(e){var t=e.target.value,n=this.props,a=n.forceChange,r=n.onBlur;r&&r(e),a(t)}},{key:"renderInfo",value:function(){var e=this.props.info;if("function"!=typeof e)return null;var t=e(this.props.value);if(!t)return null;var n=t instanceof Error,a=n?t.message:t;return v.a.createElement("div",{key:"info",style:{minWidth:"auto"},className:Object(j.n)("bottom-right",n?"error":"tip")},a)}},{key:"render",value:function(){var e=this.props,t=e.autosize,n=(e.onChange,e.maxHeight),a=(e.info,e.onEnterPress,Object(l.a)(e,["autosize","onChange","maxHeight","info","onEnterPress"])),r=null==a.value?"":a.value,o=this.state.height||"auto",c=t?Object(j.n)("auto-size"):"",i=[v.a.createElement("textarea",Object.assign({},Object(O.a)(a),{key:"t",value:r,className:c,style:{height:o,maxHeight:n,overflow:"auto"},onChange:this.handleChange,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur})),this.renderInfo()];return t&&i.push(v.a.createElement("textarea",{key:"s",ref:this.bindShadow,className:Object(j.n)("shadow"),rows:a.rows,defaultValue:r})),i}}]),n}(g.b);y.defaultProps={rows:4};var E=y,x=Object(a.a)(c.a,Object(i.a)({}),Object(r.a)(400),o.a)(E);x.displayName="ShineoutTextarea";t.a=x},192:function(e,t,n){"use strict";var h=n(20),f=n(0),d=n.n(f),m=n(229),p=n(36),b=n(14);t.a=function(s){return function(e){var t=Object(f.useState)(""),n=Object(h.a)(t,2),a=n[0],r=n[1],o=Object(f.useState)([]),c=Object(h.a)(o,1)[0],i=e.location.hash,l=Object(f.useCallback)(function(e){e.forEach(function(e){c.push(e)})},[]),u=Object(f.useCallback)(function(){if(i){var e=document.querySelector(i);e&&setTimeout(function(){e.scrollIntoView()},50)}},[i]);Object(f.useEffect)(function(){u();var e=function(){var n=document.documentElement.scrollTop,e=c.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return d.a.createElement("div",{className:Object(b.f)("_")},d.a.createElement(s,{onHeadingSetted:l}),!e.noNav&&d.a.createElement(m.a,{className:Object(b.f)("sticky"),top:50},d.a.createElement("div",{className:Object(b.f)("nav")},c.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:t,className:Object(b.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},198:function(e,t,n){"use strict";var z=n(0),T=n.n(z),s=n(30),S=n(20),a=n(232),h=n.n(a),f=n(31),d=n(50),N=n(14),m=n(11),r=n(12),c=n.n(r),o=n(233),i=n.n(o),H=(n(234),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,o=Object(z.useRef)(null);return Object(z.useEffect)(function(){var e=o.current;i.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),T.a.createElement("pre",{ref:o,className:c()(n||"lang-jsx",Object(N.a)("pre"))},T.a.createElement("code",null,r))}),B=n(217),l=n(45),u=n(7),p=n(8),b=n(10),v=n(2),g=n(9),j=n(34),O=n(205),P=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(b.a)(this,Object(v.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(g.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(O.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(O.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:T.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(j.b),I=n(59),F=n(36),V=T.a.createElement("div",{className:Object(N.a)("placeholder")},T.a.createElement(l.a,null));function y(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,o=e.title,c=Object(z.useRef)(null),i=Object(z.useState)(!1),l=Object(S.a)(i,2),u=l[0],s=l[1],h=Object(z.useState)(),f=Object(S.a)(h,2),d=f[0],m=f[1],p=Object(z.useState)(),b=Object(S.a)(p,1)[0],v=function e(t,n,a){c.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(z.useEffect)(function(){if(c.current)if(u)c.current.style.height="".concat(d,"px");else{var e=d%15;0<e&&v(e,1,b),v((d-e)/15,15,b)}},[u]);var g=function(e){s(!u),b=e},j=function(e){return T.a.createElement("a",{href:"javascript:;",className:Object(N.a)("toggle"),onClick:g.bind(null,e)},T.a.createElement(I.a,{name:u?"code-close":"code"}))},O=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),y=F.a.location.search,E="?example=";if(0===y.indexOf(E)&&(y=y.replace(E,""),a.indexOf(y)<0))return null;var x=o.split("\n"),w=Object(B.a)(x),k=w[0],C=w.slice(1);return k&&(k=k.trim()),T.a.createElement(z.Fragment,null,k&&T.a.createElement("h3",{key:"0",id:n},k),T.a.createElement(P,{placeholder:V},T.a.createElement("div",{className:Object(N.a)("_",u&&"showcode")},T.a.createElement("div",{className:Object(N.a)("body")},Object(z.createElement)(t)),0<o.length&&T.a.createElement("div",{className:Object(N.a)("desc")},C.map(function(e,t){return T.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),j(!1)),T.a.createElement("div",{ref:c,className:Object(N.a)("code")},T.a.createElement(H,{onHighLight:function(e){m(e)},onClose:g,value:O}),j(!0)))))}y.defaultProps={rawText:""};var E=function(e){var t=e.children,n=Object(z.useState)(!1),a=Object(S.a)(n,2),r=a[0],o=a[1],c=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),i=r?"pre":"div";return T.a.createElement("div",{onClick:function(){o(!r)},className:Object(N.e)("console")},T.a.createElement(i,null,c))};E.defaultProps={children:[]};var x=E;function w(e){var t=e.children;return T.a.createElement("div",{style:{overflow:"auto"}},T.a.createElement("table",{className:"doc-api-table"},t))}w.defaultProps={};var k=w,C=/^<code name="([\w|-]+)" /,D=/^<example name="([\w|-]+)"/;function L(e){var t=e.onHeadingSetted,o=e.codes,c=e.examples,n=e.source,a=Object(z.useState)([]),r=Object(S.a)(a,1)[0],i=Object(z.useState)({}),l=Object(S.a)(i,1)[0];Object(z.useEffect)(function(){t&&t(r)},[]);var u=function(e){r.push(e)};return r=[],T.a.createElement(h.a,{className:Object(N.e)("_"),source:n,renderers:{code:H,heading:function(e){var t,n,a=e.level,r=e.children,o="".concat(a,"-").concat(r[0]),c="h".concat(a);if("object"==typeof r[0])return T.a.createElement(c,null,r);if(!l[o]){var i="heading-".concat((t=a,n=r[0],4===t?Object(d.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||u({id:i,level:a,children:r}),l[o]=T.a.createElement(c,{id:i},r)}return l[o]},html:function(e){if("<example />"===e.value)return function(){if(l.examples)return l.examples;if(!c)return T.a.createElement("div",null);var e=Object(m.b)("示例","Example"),t="heading-example-h";return u({id:t,level:2,children:[e]}),l.examples=[T.a.createElement("h2",{key:"h",id:t},e)].concat(Object(s.a)(c.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(S.a)(a,1)[0];return u({id:n,level:3,children:[r]}),T.a.createElement(y,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),l.examples}();var t=e.value.match(D);if(t)return function(t){var e="example-".concat(t);if(!l[e]){var n=(c||[]).find(function(e){return e.name===t});l[e]=n?T.a.createElement(y,n):null}return l[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return T.a.createElement("br",null);var n,a,r=e.value.match(C);return r?(n=r[1],(a=o[n])?[T.a.createElement(H,{key:"cb",value:a.text})].concat(Object(s.a)(a.log.map(function(e,t){return T.a.createElement(x,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:k,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?T.a.createElement("a",{href:e.href,target:t},e.children):T.a.createElement(f.a,{to:e.href,target:t},e.children)}}})}L.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var R=n(60),U=n(192);n.d(t,"a",function(){return A});var W,_=((W=function(e){var t=Object(z.useState)(e.source),n=Object(S.a)(t,2),a=n[0],r=n[1];return Object(z.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?T.a.createElement(L,Object.assign({},e,{source:a})):T.a.createElement(R.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(z.memo)(W));t.b=_;function A(t,n){return Object(U.a)(function(e){return T.a.createElement(_,Object.assign({},e,{noNav:n,loader:t}))})}},199:function(e,t,n){"use strict";var m=n(25),a=n(7),r=n(8),o=n(10),c=n(2),i=n(9),l=n(3),u=n(0),p=n.n(u),s=n(12),b=n.n(s),h=n(34),f=n(49),v=n(5);t.a=Object(f.b)(function(f,d){var e,t;return t=e=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(o.a)(this,Object(c.a)(n).call(this,e))).state={focus:e.autoFocus},t.handleBlur=t.handleBlur.bind(Object(l.a)(Object(l.a)(t))),t.handleFocus=t.handleFocus.bind(Object(l.a)(Object(l.a)(t))),t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"handleBlur",value:function(e){this.setState({focus:!1});var t=this.props.onBlur;t&&t(e)}},{key:"handleFocus",value:function(e){this.setState({focus:!0});var t=this.props.onFocus;t&&t(e)}},{key:"renderHelp",value:function(e){var t=this.props,n=t.error,a=t.tip,r=t.popover,o=["tip",r||"bottom-left"];return n&&r?(o.push("error"),p.a.createElement("div",{className:v.n.apply(void 0,o)},n.message)):a&&e?p.a.createElement("div",{className:Object(v.n)([].concat(o))},a):null}},{key:"render",value:function(){var e=this.props,t=(e.className,e.border),n=e.size,a=(e.tip,e.popover),r=e.width,o=e.style,c=e.error,i=Object(m.a)(e,["className","border","size","tip","popover","width","style","error"]),l=this.state.focus,u=f.tag||"label",s=Object.assign({width:r},o),h=b()(Object(v.n)("_",l&&"focus",!0===i.disabled&&"disabled",f.isGroup&&"group",n,s.width&&"inline",!t&&"no-border",f.overflow&&"overflow-".concat(f.overflow),c&&"invalid",a&&c&&"focus"),Object(v.c)(f.isGroup&&"group"),"function"==typeof f.className?f.className(this.props):f.className,this.props.className);return p.a.createElement(u,{className:h,style:s},p.a.createElement(d,Object.assign({},i,{size:n,onFocus:this.handleFocus,onBlur:this.handleBlur})),this.renderHelp(l))}}]),n}(h.a),e.defaultProps={border:!0,style:{}},t})},205:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return h});var a=n(216),r=n(50),o=n(44),c={},i=null,l=!1,u=o.b.height;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>u){var n=Object(r.b)();return c[n]=e,n}return e.render(),null}function h(e){e&&delete c[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){l||(l=!0,Object.keys(c).forEach(function(e){var t=c[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>u||(delete c[e],a())}),l=!1),i=null},80)},a.a)},207:function(e,t,n){"use strict";var r=n(25),o=n(7),c=n(8),i=n(10),l=n(2),u=n(9),s=n(3),h=n(0),f=n.n(h),a=n(49);t.a=Object(a.b)(function(e,a){var t,n;return n=t=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).state={value:e.value},t.handleChange=t.handleChange.bind(Object(s.a)(Object(s.a)(t))),t.forceChange=t.forceChange.bind(Object(s.a)(Object(s.a)(t))),t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"getValue",value:function(){return this.changeLocked?this.state.value:this.props.value}},{key:"handleChange",value:function(t){for(var n=this,e=arguments.length,a=new Array(1<e?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];var o,c=this.props.delay;0!==c?(this.setState({value:t}),this.changeLocked=!0,this.changeTimer&&clearTimeout(this.changeTimer),this.changeTimer=setTimeout(function(){var e;n.changeLocked=!1,(e=n.props).onChange.apply(e,[t].concat(a))},c)):(o=this.props).onChange.apply(o,[t].concat(a))}},{key:"forceChange",value:function(e){var t;this.setState({value:e});for(var n=arguments.length,a=new Array(1<n?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];(t=this.props).onChange.apply(t,[e].concat(a)),this.changeLocked=!1}},{key:"render",value:function(){var e=this.props,t=(e.value,e.onChange,Object(r.a)(e,["value","onChange"]));return f.a.createElement(a,Object.assign({},t,{value:this.getValue(),onChange:this.handleChange,forceChange:this.forceChange}))}}]),n}(h.PureComponent),t.defaultProps={delay:e},n})},208:function(e,t,n){"use strict";var a=n(7),r=n(8),o=n(10),c=n(2),i=n(9),l=n(3),u=n(0),s=n.n(u);t.a=function(t){return function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(o.a)(this,Object(c.a)(n).call(this,e))).handleBlur=t.handleBlur.bind(Object(l.a)(Object(l.a)(t))),t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"handleBlur",value:function(e){var t=this.props,n=t.value,a=t.trim,r=t.onBlur,o=t.onChange;if(a){var c=e.target.value.trim();n!==c&&o(c)}r&&r(e)}},{key:"render",value:function(){return s.a.createElement(t,Object.assign({},this.props,{onBlur:this.handleBlur}))}}]),n}(u.PureComponent)}},209:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(51),r=["delay","onDatumBind","rules","formDatum","forceChange","trim","beforeChange","validateHook","innerFormNamePath","fieldSetValidate","combineRules"];function o(e){return Object(a.a)(e,function(t){r.forEach(function(e){return delete t[e]})})}},973:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(192),c=n(198),i=n(11),l=n(974),u=n.n(l),s=n(975),h=n.n(s),f=Object(i.b)(u.a,h.a),d=[{name:"1-base",title:Object(i.b)("基本用法 \n 多行文本输入框","Base \n Multi-line text input box"),component:n(976).default,rawText:n(977)},{name:"2-autosize",title:Object(i.b)("自适应高度 \n autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 maxHeight 即可","Autosize \n When the autosize property is true, component will change height to fit the content. Set maxHeight to limit maximum height."),component:n(978).default,rawText:n(979)},{name:"3-info",title:Object(i.b)("信息 \n 设置 info 属性后，用户 focus 时显示 info 函数执行的结果，例如用户已输入文字长度。 \n 如果 info 返回类型为 Error，不会隐藏。","Info \n The result of the info function is displayed when you focus."),component:n(980).default,rawText:n(981)}];t.default=Object(o.a)(function(e){return r.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:f,examples:d}))})},974:function(e,t){e.exports="# Textarea *多行文本框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| autosize | bool | false | 高度是否随内容自动变化 |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| info | function | 无 | 提示信息 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| onEnterPress | function(value) | | 回车键回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| rows | number | 4 | 最小行高，同原生 textarea rows 属性 |\n| maxHeight | number \\| string | 无 | 输入框的最大高度, 超过之后会出现滚动条 | \n| style | object | 无 | 最外层扩展样式 |\n| trim | bool | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n"},975:function(e,t){e.exports="# Textarea\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| autosize | bool | false | Whether the height changes automatically with the content |\n| defaultValue | string \\| number | | default value |\n| delay | number | 400 | User input triggers onChange and to check interval, unit: ms.|\n| info | function | - | Infomation |\n| name | string | none | The name that accesses data from Form |\n| onChange | function(d) | | The callback function for changing value |\n| onEnterPress | function(value) | | The callback function for enter key |\n| placeholder | string | | The same as the native placeholder tag. |\n| popover | string | | The position where the message pops up, options: \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| rows | number | 4 | The minimum row height. Same as native textarea rows property. |\n| maxHeight | number \\| string | - | the maxHeight of the textarea, scroll bars appear after more than | \n| style | object | - | Container element style |\n| trim | bool | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| value | string \\| number | | DefaultValue and value can be set at the same time and defaultValue will be overridden by value. <br />In the Form, the value is taken over by the Form and lose efficacy. |\n"},976:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1361);t.default=function(){return r.a.createElement(o.a,{rows:6,placeholder:"input something"})}},977:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 多行文本输入框\n * en - Base\n *    -- Multi-line text input box\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nexport default function() {\n  return <Textarea rows={6} placeholder=\"input something\" />\n}\n"},978:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1361);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{rows:2,autosize:!0,maxHeight:200,placeholder:"autosize"}),r.a.createElement("br",null),r.a.createElement(o.a,{rows:2,autosize:!0,value:"a\nu\nt\no\ns\ni\nz\ne",maxHeight:200,placeholder:"autosize"}))}},979:function(e,t){e.exports="/**\n * cn - 自适应高度\n *    -- autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 maxHeight 即可\n * en - Autosize\n *    -- When the autosize property is true, component will change height to fit the content. Set maxHeight to limit maximum height.\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nconst text = `a\nu\nt\no\ns\ni\nz\ne`\n\nexport default function() {\n  return (\n    <div>\n      <Textarea rows={2} autosize maxHeight={200} placeholder=\"autosize\" />\n      <br />\n      <Textarea rows={2} autosize value={text} maxHeight={200} placeholder=\"autosize\" />\n    </div>\n  )\n}\n"},980:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1361),c=function(e){if(!e||0===e.length)return null;var t="".concat(e.length," / 20");return e.length<=20?t:new Error(t)};t.default=function(){return r.a.createElement(o.a,{rows:4,trim:!0,placeholder:"input something",info:c})}},981:function(e,t){e.exports="/**\n * cn - 信息\n *    -- 设置 info 属性后，用户 focus 时显示 info 函数执行的结果，例如用户已输入文字长度。\n *    -- 如果 info 返回类型为 Error，不会隐藏。\n * en - Info\n *    -- The result of the info function is displayed when you focus.\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nconst renderInfo = value => {\n  if (!value || value.length === 0) return null\n  const text = `${value.length} / 20`\n  if (value.length <= 20) return text\n  return new Error(text)\n}\n\nexport default function() {\n  return <Textarea rows={4} trim placeholder=\"input something\" info={renderInfo} />\n}\n"}}]);