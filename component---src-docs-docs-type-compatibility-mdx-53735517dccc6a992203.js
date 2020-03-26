(this.webpackJsonp=this.webpackJsonp||[]).push([[20],{1311:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return p}));t(19),t(5),t(3),t(1),t(13),t(14),t(22);var a=t(59),r=t(66),i=t(466);t(36);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/type-compatibility.mdx"}});var s={_frontmatter:c},b=r.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(b,o({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"type-compatibility"},"Type Compatibility"),Object(a.b)("hr",null),Object(a.b)("p",null,"The Hegel are trying to implement type safity in JavaScript via strong type system. It means that analyzer ensure that a variable value always assignable to declarated (or inferenced) static type."),Object(a.b)("h2",{id:"which-type-is-assignable-to-another"},"Which type is assignable to another?"),Object(a.b)("p",null,"In Hegel are presented the next hierarchy."),Object(a.b)(i.a,{type:"hierarchy",mdxType:"Schema"}),Object(a.b)("p",null,'This hierachy define rules of subtyping: "Every type which is higher in the hierarchy will be a super type for current type". Lets discover it by examples.'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// Tuple Type\nconst tuple: [number, number] = [42, 24]; // 👌!\n\n// This is also an Array\nconst array: Array<number> = [42, 24];    // 👌!\n\n// This is also an Object\nconst object: Object = [42, 24];          // 👌!\n\n// This is also "unknown"\nconst unknown: unknown = [42, 24];        // 👌!\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// But not in reverse order \n// Object is not a Tuple\n// Error: Type "Object" is incompatible with type "[number, number]"\nconst tuple: [number, number] = new Object();\n\n// And object is not a Array\n// Error: Type "Object" is incompatible with type "Array<number>"\nconst array: Array<number> = new Object();\n\n// But object is Object\nconst object: Object = new Object();\n\n// And object is unknown\nconst unknown: unknown = new Object();\n')),Object(a.b)("h2",{id:"function-types-compatibility"},"Function types Compatibility"),Object(a.b)("p",null,"Functions are not create any hierarhy. Compatibility of two functions defined by the rule:\nyou can assign function to another only if actual arguments types wider then declarated and return type is more specific then declarated. This rule sounds like: function is ",Object(a.b)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)"}),"contravariant")," by arguments and ",Object(a.b)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)"}),"covariant")," by return."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'let func: (number) => number = () => 42; \n\nfunc = (a: number): number => a;           // 👌!\n// It\'s okay because "number | string" is wider than "number"\nfunc = (a: number | string): number => 44; // 👌!\n// It\'s okay because "42" is more specific than "number"\nfunc = (a: number): 42 => 42;              // 👌!\n// Error: Type "(42) => number" is incompatible with type "(number) => number"\n// Because "42" is more specific than "number"\nfunc = (a: 42): number => 42; \n// Error: Type "(number) => number | string" is incompatible with type "(number) => number"\n// Because "number | string" is wider than "number"\nfunc = (a: number): number | string => 42; \n')),Object(a.b)("h2",{id:"generics-compatibility"},"Generics Compatibility"),Object(a.b)("p",null,"Two generic may be contained in hierarchy of each other only if their actual type parameter is in heierarchy of each other. For example, imagine generic container class:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typecript"}),"class Container<T> {\n  value: T;\n\n  constructor(value) {\n      this.value = value;\n  }\n}\n")),Object(a.b)("p",null,"We can see a the same subtyping behaivour as with primitive types:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const wrapped42: Container<42> = new Container<42>(42);         // 👌!\nconst wrappedNumber: Container<number> = new Container<42>(42); // 👌!\n\n// Error: Type "Container<number>" is incompatible with type "Container<42>"\nconst wrappedNumber42: Container<42> = new Container<number>(84);\n// Error: Type "Container<number>" is incompatible with type "Container<\'Hello, World\'>"\nconst wrappedHelloWorld: Container<"Hello, World"> = new Container<number>(42);\n')),Object(a.b)("p",null,"It's because ",Object(a.b)("inlineCode",{parentName:"p"},"Container")," type parameters is contained in hierarchy of each other."),Object(a.b)("p",null,"But, as you can see, only literals were used for examples. It's because every subtype of Object in JavaScript act not like a value but like a \"poiter\" at value. So, for all reference types you can't do assign between variables if variables have not the same type."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const wrapped42: Container<42> = new Container<42>(42); // 👌!\n// Error: Type "Container<42>" is incompatible with type "Container<number>"\nconst wrappedNumber: Container<number> = wrapped42;\n')),Object(a.b)("h2",{id:"soundness"},"Soundness"),Object(a.b)("p",null,"Soundness is ability of system to guarantee that after analysis your program will not be in invalid state. "),Object(a.b)("p",null,"Hegel try to implement the same soundness type system as ",Object(a.b)("a",o({parentName:"p"},{href:"https://reasonml.github.io/"}),"ReasonML/OCaml"),", ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.haskell.org/"}),"Haskell"),", ",Object(a.b)("a",o({parentName:"p"},{href:"https://elm-lang.org/"}),"Elm")," and other ML\n-based languages. It means Hegel try to catch every single error that might happen at runtime without runtime type checking."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust Language")," you may know that Rust doesn't provide any type information in runtime and all types will be stripped after type checking, but Rust program still type safe. It's our dream to implement the same type checking in JavaScript.")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/type-compatibility.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-type-compatibility-mdx-53735517dccc6a992203.js.map