"use strict";(self.webpackChunkjavascript_compiler_in_rust=self.webpackChunkjavascript_compiler_in_rust||[]).push([[648],{9613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(2081),r=(a(9496),a(9613));const i={title:"Grammar"},o=void 0,s={permalink:"/javascript-compiler-in-rust/blog/grammar",editUrl:"https://github.com/Boshen/javascript-compiler-in-rust/tree/main/blog/blog/grammar.md",source:"@site/blog/grammar.md",title:"Grammar",description:"LL(1) Grammar",date:"2022-08-14T13:17:37.000Z",formattedDate:"August 14, 2022",tags:[],readingTime:2.35,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Grammar"},prevItem:{title:"The ECMAScript Specification",permalink:"/javascript-compiler-in-rust/blog/ecma-spec"}},l={authorsImageUrls:[]},c=[{value:"LL(1) Grammar",id:"ll1-grammar",level:2},{value:"Binding Identifier vs Identifier Reference",id:"binding-identifier-vs-identifier-reference",level:3},{value:"Class and strict mode",id:"class-and-strict-mode",level:2},{value:"Legacy Octal and Use Strict",id:"legacy-octal-and-use-strict",level:2},{value:"ES2016 non-simple parameter argument and strict mode",id:"es2016-non-simple-parameter-argument-and-strict-mode",level:2},{value:"Parenthesized Expression",id:"parenthesized-expression",level:3},{value:"FunctionDeclarations in IfStatement Statement Clauses",id:"functiondeclarations-in-ifstatement-statement-clauses",level:2},{value:"Label statement is legit",id:"label-statement-is-legit",level:3},{value:"<code>let</code> is not a keyword",id:"let-is-not-a-keyword",level:2},{value:"For-of",id:"for-of",level:2},{value:"B.3.2 Block-Level Function Declarations Web Legacy Compatibility Semantics",id:"b32-block-level-function-declarations-web-legacy-compatibility-semantics",level:3},{value:"Ambiguous Grammar",id:"ambiguous-grammar",level:2},{value:"Grammar Context",id:"grammar-context",level:2},{value:"Cover Grammar",id:"cover-grammar",level:2},{value:"Arrow functions",id:"arrow-functions",level:3},{value:"Object Patter vs Object binding",id:"object-patter-vs-object-binding",level:3},{value:"Assignment target pattern",id:"assignment-target-pattern",level:3}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ll1-grammar"},"LL(1) Grammar"),(0,r.kt)("p",null,"According to wikipedia,"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"an LL grammar is a context-free grammar that can be parsed by an LL parser, which parses the input from Left to right")),(0,r.kt)("p",null,"The first ",(0,r.kt)("strong",{parentName:"p"},"L")," means the scanning the source from ",(0,r.kt)("strong",{parentName:"p"},"L"),"eft to right,\nand the second ",(0,r.kt)("strong",{parentName:"p"},"L")," means the construction of a ",(0,r.kt)("strong",{parentName:"p"},"L"),"eftmost derivation tree."),(0,r.kt)("p",null,"Context-free and the (1) in LL(1) means a tree can be constructed by just peeking at the next token and nothing else."),(0,r.kt)("p",null,"LL Grammars are of particular interest in academia because we are lazy human beings and we want to write programs that generate parsers automatically so we don't need to write parsers by hand."),(0,r.kt)("p",null,"Unfortunately most industrial programming languages do not have a nice LL(1) grammar,\nand this applies to JavaScript too."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mozilla started the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus"},"jsparagus")," project a few years ago,\nand wrote a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus/tree/master/jsparagus"},"LALR parser generator in Python"),".\nThey haven't updated it much in the past two years and they sent a strong message at the end of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus/blob/master/js-quirks.md"},"js-quirks.md")),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"What have we learned today?"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Do not write a JS parser."),(0,r.kt)("li",{parentName:"ul"},"JavaScript has some syntactic horrors in it. But hey, you don't make the world's most widely used programming language by avoiding all mistakes. You do it by shipping a serviceable tool, in the right circumstances, for the right users.")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"What we have learned so far is that a JavaScript parser can only be written by hand,\nso let's learn all the quirks in the grammar before we shoot ourselves in the foot."),(0,r.kt)("p",null,"The list below starts simple and will become difficult to grasp,\nso please take your time."),(0,r.kt)("h3",{id:"binding-identifier-vs-identifier-reference"},"Binding Identifier vs Identifier Reference"),(0,r.kt)("h2",{id:"class-and-strict-mode"},"Class and strict mode"),(0,r.kt)("p",null,"class is strict, but there is not scope ..."),(0,r.kt)("h2",{id:"legacy-octal-and-use-strict"},"Legacy Octal and Use Strict"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"\\01";\n"use strict";\n')),(0,r.kt)("p",null,"is syntax error"),(0,r.kt)("h2",{id:"es2016-non-simple-parameter-argument-and-strict-mode"},"ES2016 non-simple parameter argument and strict mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function foo({a}) {\n    'use strict';\n}\n")),(0,r.kt)("p",null,"is syntax error"),(0,r.kt)("p",null,"but ... if you are writing a transpiler, e.g. TypeScript, this is not syntax if you are targeting es5."),(0,r.kt)("h3",{id:"parenthesized-expression"},"Parenthesized Expression"),(0,r.kt)("p",null,"Meaningless expect this one litter corner ... ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estree/estree/issues/194"},"https://github.com/estree/estree/issues/194")),(0,r.kt)("h2",{id:"functiondeclarations-in-ifstatement-statement-clauses"},"FunctionDeclarations in IfStatement Statement Clauses"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-functiondeclarations-in-ifstatement-statement-clauses"},"B.3.3 FunctionDeclarations in IfStatement Statement Clauses")),(0,r.kt)("p",null,"we need FunctionDeclarations in Statement ..."),(0,r.kt)("h3",{id:"label-statement-is-legit"},"Label statement is legit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const foo => { foo: bar }\n")),(0,r.kt)("p",null,"is legit"),(0,r.kt)("h2",{id:"let-is-not-a-keyword"},(0,r.kt)("inlineCode",{parentName:"h2"},"let")," is not a keyword"),(0,r.kt)("p",null,"you need about a dozen checks to make sure you are on a let declaration ..."),(0,r.kt)("h2",{id:"for-of"},"For-of"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"for (let in ...)"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"for (async of ..)")),(0,r.kt)("h3",{id:"b32-block-level-function-declarations-web-legacy-compatibility-semantics"},"B.3.2 Block-Level Function Declarations Web Legacy Compatibility Semantics"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-block-level-function-declarations-web-legacy-compatibility-semantics"},"B.3.2 Block-Level Function Declarations Web Legacy Compatibility Semantics")),(0,r.kt)("h2",{id:"ambiguous-grammar"},"Ambiguous Grammar"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/")," slash and ",(0,r.kt)("inlineCode",{parentName:"p"},"/=")," regex"),(0,r.kt)("h2",{id:"grammar-context"},"Grammar Context"),(0,r.kt)("p",null,"yield ... await ..."),(0,r.kt)("h2",{id:"cover-grammar"},"Cover Grammar"),(0,r.kt)("h3",{id:"arrow-functions"},"Arrow functions"),(0,r.kt)("h3",{id:"object-patter-vs-object-binding"},"Object Patter vs Object binding"),(0,r.kt)("h3",{id:"assignment-target-pattern"},"Assignment target pattern"))}p.isMDXComponent=!0}}]);