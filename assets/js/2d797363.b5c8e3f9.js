"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[456],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(2081),a=(n(9496),n(9613));const s={id:"semantics_analysis",title:"Semantic Analysis"},i=void 0,o={unversionedId:"semantics_analysis",id:"semantics_analysis",title:"Semantic Analysis",description:"Semantic analysis is the process of checking whether our source code is correct or not.",source:"@site/docs/semantic_analysis.md",sourceDirName:".",slug:"/semantics_analysis",permalink:"/javascript-parser-in-rust/docs/semantics_analysis",draft:!1,editUrl:"https://github.com/Boshen/javascript-parser-in-rust/tree/main/docs/docs/semantic_analysis.md",tags:[],version:"current",frontMatter:{id:"semantics_analysis",title:"Semantic Analysis"},sidebar:"tutorialSidebar",previous:{title:"Dealing with Errors",permalink:"/javascript-parser-in-rust/docs/errors"},next:{title:"TypeScript",permalink:"/javascript-parser-in-rust/docs/typescript"}},c={},p=[{value:"Context",id:"context",level:2},{value:"Scope",id:"scope",level:2},{value:"The Visitor Pattern",id:"the-visitor-pattern",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Semantic analysis is the process of checking whether our source code is correct or not.\nWe need to check against all the "Early Error" rules in the ECMAScript specification.'),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"For grammar contexts such as ",(0,a.kt)("inlineCode",{parentName:"p"},"[Yield]")," or `","[Await]","``, an error need to be raised when the grammar forbids them, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},"BindingIdentifier[Yield, Await] :\n  Identifier\n  yield\n  await\n\n13.1.1 Static Semantics: Early Errors\n\nBindingIdentifier[Yield, Await] : yield\n* It is a Syntax Error if this production has a [Yield] parameter.\n\n* BindingIdentifier[Yield, Await] : await\nIt is a Syntax Error if this production has an [Await] parameter.\n")),(0,a.kt)("p",null,"need to raise an error for"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async *\n  function foo() {\n    var yield, await;\n  };\n")),(0,a.kt)("p",null,"because ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncGeneratorDeclaration")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"[+Yield]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"[+Await]")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncGeneratorBody"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},"AsyncGeneratorBody :\n  FunctionBody[+Yield, +Await]\n")),(0,a.kt)("p",null,"An example in Rome checking for the ",(0,a.kt)("inlineCode",{parentName:"p"},"yield")," keyword:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/rome/tools/blob/5a059c0413baf1d54436ac0c149a829f0dfd1f4d/crates/rome_js_parser/src/syntax/expr.rs#L1368-L1377\n")),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("p",null,"For declaration errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},"14.2.1 Static Semantics: Early Errors\n\nBlock : { StatementList }\n* It is a Syntax Error if the LexicallyDeclaredNames of StatementList contains any duplicate entries.\n* It is a Syntax Error if any element of the LexicallyDeclaredNames of StatementList also occurs in the VarDeclaredNames of StatementList.\n")),(0,a.kt)("p",null,"We need to add a scope tree. A scope tree has all the ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"s and ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"s declared inside it.\nIt is also a parent pointing tree where we want to navigate up the tree and search for binding identifiers in parent scopes.\nThe data structure we can use is a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/indextree/latest/indextree/"},(0,a.kt)("inlineCode",{parentName:"a"},"indextree")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use indextree::{Arena, Node, NodeId};\nuse bitflags::bitflags;\n\npub type Scopes = Arena<Scope>;\npub type ScopeId = NodeId;\n\nbitflags! {\n    #[derive(Default)]\n    pub struct ScopeFlags: u8 {\n        const TOP = 1 << 0;\n        const FUNCTION = 1 << 1;\n        const ARROW = 1 << 2;\n        const CLASS_STATIC_BLOCK = 1 << 4;\n        const VAR = Self::TOP.bits | Self::FUNCTION.bits | Self::CLASS_STATIC_BLOCK.bits;\n    }\n}\n\n#[derive(Debug, Clone)]\npub struct Scope {\n    /// [Strict Mode Code](https://tc39.es/ecma262/#sec-strict-mode-code)\n    /// [Use Strict Directive Prologue](https://tc39.es/ecma262/#sec-directive-prologues-and-the-use-strict-directive)\n    pub strict_mode: bool,\n\n    pub flags: ScopeFlags,\n\n    /// [Lexically Declared Names](https://tc39.es/ecma262/#sec-static-semantics-lexicallydeclarednames)\n    pub lexical: IndexMap<Atom, SymbolId, FxBuildHasher>,\n\n    /// [Var Declared Names](https://tc39.es/ecma262/#sec-static-semantics-vardeclarednames)\n    pub var: IndexMap<Atom, SymbolId, FxBuildHasher>,\n\n    /// Function Declarations\n    pub function: IndexMap<Atom, SymbolId, FxBuildHasher>,\n}\n")),(0,a.kt)("p",null,"The scope tree can either be built inside the parser for performance reasons, or built in a separate AST pass."),(0,a.kt)("p",null,"Generally, a ",(0,a.kt)("inlineCode",{parentName:"p"},"ScopeBuilder")," is needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ScopeBuilder {\n    scopes: Scopes,\n    root_scope_id: ScopeId,\n    current_scope_id: ScopeId,\n}\n\nimpl ScopeBuilder {\n    pub fn current_scope(&self) -> &Scope {\n        self.scopes[self.current_scope_id].get()\n    }\n\n    pub fn enter_scope(&mut self, flags: ScopeFlags) {\n        // Inherit strict mode for functions\n        // https://tc39.es/ecma262/#sec-strict-mode-code\n        let mut strict_mode = self.scopes[self.root_scope_id].get().strict_mode;\n        let parent_scope = self.current_scope();\n        if !strict_mode\n            && parent_scope.flags.intersects(ScopeFlags::FUNCTION)\n            && parent_scope.strict_mode\n        {\n            strict_mode = true;\n        }\n\n        let scope = Scope::new(flags, strict_mode);\n        let new_scope_id = self.scopes.new_node(scope);\n        self.current_scope_id.append(new_scope_id, &mut self.scopes);\n        self.current_scope_id = new_scope_id;\n    }\n\n    pub fn leave_scope(&mut self) {\n      self.current_scope_id = self.scopes[self.current_scope_id].parent().unwrap();\n    }\n}\n")),(0,a.kt)("p",null,"We then call ",(0,a.kt)("inlineCode",{parentName:"p"},"enter_scope")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"leave_scope")," accordingly inside the parse functions, for example in acorn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"reference",reference:!0},"https://github.com/acornjs/acorn/blob/11735729c4ebe590e406f952059813f250a4cbd1/acorn/src/statement.js#L425-L437\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"One of the downsides of this approach is that for arrow functions,\nwe may need to create a temporary scope and then drop it afterwards if it is not an arrow function but a sequence expression.\nThis is detailed in ",(0,a.kt)("a",{parentName:"p",href:"/blog/grammar#cover-grammar"},"cover grammar"),".")),(0,a.kt)("h3",{id:"the-visitor-pattern"},"The Visitor Pattern"),(0,a.kt)("p",null,"If we decide to build the scope tree in another pass for simplicity,\nthen every node in the AST need to be visited in depth-first preorder and build the scope tree."),(0,a.kt)("p",null,"We can use the ",(0,a.kt)("a",{parentName:"p",href:"https://rust-unofficial.github.io/patterns/patterns/behavioural/visitor.html"},"Visitor Pattern"),"\nto separate out the traversal process from the operations performed on each object."),(0,a.kt)("p",null,"Upon visit, we can call ",(0,a.kt)("inlineCode",{parentName:"p"},"enter_scope")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"leave_scope")," accordingly to build the scope tree."))}d.isMDXComponent=!0}}]);