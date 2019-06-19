(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/home.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r={},o="wrapper";function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)(o,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:""},Object(i.b)("img",Object.assign({parentName:"h1"},{src:"https://raw.githubusercontent.com/braposo/figma-graphql/master/assets/logo.svg?sanitize=true",alt:"figma-graphql logo"}))),Object(i.b)("h1",{id:"figma-graphql"},"figma-graphql"),Object(i.b)("p",null,"The reimagined ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.figma.com/developers"}),"Figma API")," (super)powered by GraphQL"),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://travis-ci.com/braposo/figma-graphql"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/travis/com/braposo/figma-graphql.svg?style=flat-square",alt:"Build Status"})))," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://greenkeeper.io/"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://badges.greenkeeper.io/braposo/figma-graphql.svg?style=flat-square",alt:"Greenkeeper badge"})))," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://codecov.io/github/braposo/figma-graphql"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/codecov/c/github/braposo/figma-graphql.svg?style=flat-square",alt:"Code Coverage"})))," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://snyk.io/test/github/braposo/figma-graphql"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://snyk.io/test/github/braposo/figma-graphql/badge.svg?style=flat-square",alt:"Known Vulnerabilities"})))," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"#contributors"}),Object(i.b)("img",{alt:"All Contributors",src:"https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square"}))," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"http://makeapullrequest.com"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square",alt:"PRs Welcome"})))," ",Object(i.b)("br",null)," ",Object(i.b)("img",Object.assign({parentName:"p"},{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square",alt:"Prettier format"}))," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"http://commitizen.github.io/cz-cli/"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square",alt:"Commitizen friendly"})))," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/semantic-release/semantic-release"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square",alt:"semantic-release"})))," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/braposo/figma-graphql/blob/master/LICENSE"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/npm/l/figma-graphql.svg?style=flat-square",alt:"MIT License"})))),Object(i.b)("h2",{id:"quick-start"},"Quick start"),Object(i.b)("h3",{id:"1-open-figma-graphql-sandbox-and-fork-it"},"1. Open figma-graphql ",Object(i.b)("a",Object.assign({parentName:"h3"},{href:"https://codesandbox.io/s/github/braposo/figma-graphql/"}),"sandbox")," and fork it"),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://codesandbox.io/s/github/braposo/figma-graphql/"}),Object(i.b)("img",Object.assign({parentName:"a"},{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Open figma-graphql"})))),Object(i.b)("h3",{id:"2-add-your-figma-api-token-as-figma_token-in-the-codesandbox-secret-keys"},"2. Add your ",Object(i.b)("a",Object.assign({parentName:"h3"},{href:"https://www.figma.com/developers/docs#access-tokens"}),"Figma API Token")," as ",Object(i.b)("inlineCode",{parentName:"h3"},"FIGMA_TOKEN")," in the ",Object(i.b)("a",Object.assign({parentName:"h3"},{href:"https://codesandbox.io/docs/secrets"}),"codesandbox secret keys")),Object(i.b)("h3",{id:"3-try-your-first-query"},"3. Try your first query!"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-gql"}),'{\n    file(id: "cLp23bR627jcuNSoBGkhL04E") {\n        name\n    }\n}\n')),Object(i.b)("h2",{id:"why-use-figma-graphql"},"Why use figma-graphql?"),Object(i.b)("p",null,"It's great that Figma provides an API allowing anyone to easily get the data from their design files. But that API has two characteristics that make it quite hard for people without a good technical knowledge to access it:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The file data has a rigid tree-shaped structure that forces people to know the exact structure of the design file and can easily break existing code by just making a small change in the design file (like grouping elements).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"It requires multiple requests to different endpoints to get data that is related. Want to export specific frames in a file? You need to query the file data first, parse the data to get the frame ids and then make additional requests to a different endpoint to get that data. "))),Object(i.b)("p",null,"This obviously makes things a lot more complex than they need to be so we use the power of GraphQL solve these issues and add a few other features."),Object(i.b)("p",null,"With figma-graphql, we focus on the person using the library, not the machines. We see this as the best way to open your design files to more people, especially to those with minimal technical backround."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,'A good way to understand the different queries that you can build is to use the "Schema" tab on the righ-hand side of the playground and go through the different properties of all the supported types, but we\'ve also selected a few ',Object(i.b)("a",Object.assign({parentName:"p"},{href:"/practical-examples"}),"example scenarios")," that can be used as a reference for common uses of the library."),Object(i.b)("h2",{id:"migrating-to-v2"},"Migrating to v2"),Object(i.b)("p",null,"For v2 we've completely rebuilt the API in a more human-first approach which makes it incompatible with most of the v1 queries. To read more about the motivations and biggest changes please read the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/road-to-v2"}),"Road to v2")," section."),Object(i.b)("hr",null),Object(i.b)("p",null,"Brought to you by these awesome contributors:"),Object(i.b)("table",null,Object(i.b)("tr",null,Object(i.b)("td",{align:"center"},Object(i.b)("a",{href:"http://bernardoraposo.com"},Object(i.b)("img",{src:"https://avatars2.githubusercontent.com/u/38172?v=4",width:"100px;",alt:"Bernardo Raposo"}),Object(i.b)("br",null),Object(i.b)("sub",null,Object(i.b)("b",null,"Bernardo Raposo"))),Object(i.b)("br",null),Object(i.b)("a",{href:"#question-braposo",title:"Answering Questions"},"\ud83d\udcac")," ",Object(i.b)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=braposo",title:"Code"},"\ud83d\udcbb")," ",Object(i.b)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=braposo",title:"Documentation"},"\ud83d\udcd6")," ",Object(i.b)("a",{href:"#design-braposo",title:"Design"},"\ud83c\udfa8")," ",Object(i.b)("a",{href:"#ideas-braposo",title:"Ideas, Planning, & Feedback"},"\ud83e\udd14")," ",Object(i.b)("a",{href:"#review-braposo",title:"Reviewed Pull Requests"},"\ud83d\udc40")," ",Object(i.b)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=braposo",title:"Tests"},"\u26a0\ufe0f")),Object(i.b)("td",{align:"center"},Object(i.b)("a",{href:"http://iamsaravieira.com"},Object(i.b)("img",{src:"https://avatars0.githubusercontent.com/u/1051509?v=4",width:"100px;",alt:"Sara Vieira"}),Object(i.b)("br",null),Object(i.b)("sub",null,Object(i.b)("b",null,"Sara Vieira"))),Object(i.b)("br",null),Object(i.b)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=SaraVieira",title:"Code"},"\ud83d\udcbb")," ",Object(i.b)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=SaraVieira",title:"Documentation"},"\ud83d\udcd6")," ",Object(i.b)("a",{href:"#review-SaraVieira",title:"Reviewed Pull Requests"},"\ud83d\udc40")),Object(i.b)("td",{align:"center"},Object(i.b)("a",{href:"http://okonet.ru"},Object(i.b)("img",{src:"https://avatars3.githubusercontent.com/u/11071?v=4",width:"100px;",alt:"Andrey Okonetchnikov"}),Object(i.b)("br",null),Object(i.b)("sub",null,Object(i.b)("b",null,"Andrey Okonetchnikov"))),Object(i.b)("br",null),Object(i.b)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=okonet",title:"Documentation"},"\ud83d\udcd6")," ",Object(i.b)("a",{href:"https://github.com/braposo/figma-graphql/commits?author=okonet",title:"Code"},"\ud83d\udcbb")))),Object(i.b)("p",null,"This project follows the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/all-contributors/all-contributors"}),"all-contributors")," specification. Contributions of any kind welcome!"))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/home.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=home.ef180f62e3249766dfd3.js.map