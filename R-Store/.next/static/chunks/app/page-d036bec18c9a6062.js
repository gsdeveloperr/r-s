(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6601:function(){},3414:function(e,t,n){Promise.resolve().then(n.bind(n,4356))},4356:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i=n(9268),s=n(6006),a=n(5635),r=n(7838),l=n(2409),u=n(5846),c=n.n(u),d=e=>{let{account:t,setAccount:n}=e,s=async()=>{let e=await window.ethereum.request({method:"eth_requestAccounts"}),t=l.Kn(e[0]);n(t)};return(0,i.jsxs)("nav",{children:[(0,i.jsx)("div",{className:"nav__brand",children:(0,i.jsx)("h1",{children:"RetailX"})}),(0,i.jsx)("input",{type:"text",className:"nav__search"}),t?(0,i.jsx)("button",{type:"button",className:"nav__connect",children:t.slice(0,6)+"..."+t.slice(38,42)}):(0,i.jsx)("button",{type:"button",className:"nav__connect",onClick:s,children:"Connect"}),(0,i.jsxs)("ul",{className:"nav__links",children:[(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:"#Clothing & Jewelry",children:"Clothing & Jewelry"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:"#Electronics & Gadgets",children:"Electronics & Gadgets"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:"#Toys & Gaming",children:"Toys & Gaming"})})]})]})},o=n(1679),p={src:"/_next/static/media/star-regular.b6227be2.svg",height:512,width:576,blurWidth:0,blurHeight:0},y=n(6394),m=n.n(y),h={src:"/_next/static/media/star-solid.f158001a.svg",height:512,width:529,blurWidth:0,blurHeight:0},g=e=>{let{value:t}=e;return(0,i.jsxs)("div",{className:"rating",children:[(0,i.jsx)(m(),{src:t>=1?h:p,width:20,height:20,alt:"Star"}),(0,i.jsx)(m(),{src:t>=2?h:p,width:20,height:20,alt:"Star"}),(0,i.jsx)(m(),{src:t>=3?h:p,width:20,height:20,alt:"Star"}),(0,i.jsx)(m(),{src:t>=4?h:p,width:20,height:20,alt:"Star"}),(0,i.jsx)(m(),{src:t>=5?h:p,width:20,height:20,alt:"Star"})]})},x=e=>{let{title:t,items:n,togglePop:s}=e;return(0,i.jsxs)("div",{className:"cards__section",children:[(0,i.jsx)("h3",{id:t,children:t}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"cards",children:n.map((e,t)=>(0,i.jsxs)("div",{className:"card",onClick:()=>s(e),children:[(0,i.jsx)("div",{className:"card__image",children:(0,i.jsx)("img",{src:e.image,alt:"Item"})}),(0,i.jsxs)("div",{className:"card__info",children:[(0,i.jsx)("h4",{children:e.name}),(0,i.jsx)(g,{value:e.rating}),(0,i.jsxs)("p",{children:[o.bM(e.cost.toString(),"ether")," ETH"]})]})]},t))})]})},j={src:"/_next/static/media/close.eef1a679.svg",height:512,width:320,blurWidth:0,blurHeight:0},_=e=>{let{item:t,provider:n,account:a,retailX:r,togglePop:l}=e,[u,c]=(0,s.useState)(null),[d,p]=(0,s.useState)(!1),y=async()=>{let e=await r.queryFilter("Buy"),n=e.filter(e=>e.args.buyer===a&&e.args.itemId.toString()===t.id.toString());if(0===n.length)return;let i=await r.orders(a,n[0].args.orderId);c(i)},h=async()=>{let e=await n.getSigner(),i=await r.connect(e).buy(t.id,{value:t.cost});await i.wait(),p(!0)};return(0,s.useEffect)(()=>{y()},[d]),(0,i.jsx)("div",{className:"product",children:(0,i.jsxs)("div",{className:"product__details",children:[(0,i.jsx)("div",{className:"product__image",children:(0,i.jsx)("img",{src:t.image,width:0,height:0,alt:"Product"})}),(0,i.jsxs)("div",{className:"product__overview",children:[(0,i.jsx)("h1",{children:t.name}),(0,i.jsx)(g,{value:t.rating}),(0,i.jsx)("hr",{}),(0,i.jsx)("p",{children:t.address}),(0,i.jsxs)("h2",{children:[o.bM(t.cost.toString(),"ether")," ETH"]}),(0,i.jsx)("hr",{}),(0,i.jsx)("h2",{children:"Overview"}),(0,i.jsxs)("p",{children:[t.description,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem, iusto, consectetur inventore quod soluta quos qui assumenda aperiam, eveniet doloribus commodi error modi eaque! Iure repudiandae temporibus ex? Optio!"]})]}),(0,i.jsxs)("div",{className:"product__order",children:[(0,i.jsxs)("h1",{children:[o.bM(t.cost.toString(),"ether")," ETH"]}),(0,i.jsxs)("p",{children:["FREE delivery ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:new Date(Date.now()+3456e5).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})})]}),t.stock>0?(0,i.jsx)("p",{children:"In Stock."}):(0,i.jsx)("p",{children:"Out of Stock."}),(0,i.jsx)("button",{className:"product__buy",onClick:h,children:"Buy Now"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("small",{children:"Ships from"})," RetailX"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("small",{children:"Sold by"})," RetailX"]}),u&&(0,i.jsxs)("div",{className:"product__bought",children:["Item bought on ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:new Date(Number(u.time.toString()+"000")).toLocaleDateString(void 0,{weekday:"long",hour:"numeric",minute:"numeric",second:"numeric"})})]})]}),(0,i.jsx)("button",{onClick:l,className:"product__close",children:(0,i.jsx)(m(),{src:j,alt:"Close"})})]})})},f=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"List","type":"event"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"items","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"uint256","name":"rating","type":"uint256"},{"internalType":"uint256","name":"stock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_category","type":"string"},{"internalType":"string","name":"_image","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"uint256","name":"_rating","type":"uint256"},{"internalType":"uint256","name":"_stock","type":"uint256"}],"name":"list","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"orderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"orders","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"uint256","name":"rating","type":"uint256"},{"internalType":"uint256","name":"stock","type":"uint256"}],"internalType":"struct RetailX.Item","name":"item","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),b=JSON.parse('{"80001":{"retailX":{"address":"0xD21745D6B82ffB7c1120A449573CD37ADf1D8f60"}}}');function v(){let[e,t]=(0,s.useState)(null),[n,l]=(0,s.useState)(null),[u,c]=(0,s.useState)(null),[o,p]=(0,s.useState)(null),[y,m]=(0,s.useState)(null),[h,g]=(0,s.useState)(null),[j,v]=(0,s.useState)({}),[w,T]=(0,s.useState)(!1),S=e=>{v(e),w?T(!1):T(!0)},N=async()=>{let e=new a.Q(window.ethereum);t(e);let n=await e.getNetwork();console.log(n);let i=new r.CH(b[n.chainId].retailX.address,f,e);c(i);let s=[];for(let e=0;e<9;e++){let t=await i.items(e+1);s.push(t)}let l=s.filter(e=>"electronics"===e.category),u=s.filter(e=>"clothing"===e.category),d=s.filter(e=>"toys"===e.category);p(l),m(u),g(d)};return(0,s.useEffect)(()=>{N()},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(d,{account:n,setAccount:l}),(0,i.jsx)("h2",{children:"RetailX Best Sellers"}),o&&y&&h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{title:"Clothing & Accessories",items:y,togglePop:S}),(0,i.jsx)(x,{title:"Electronics & Gadgets",items:o,togglePop:S}),(0,i.jsx)(x,{title:"Toys & Gaming",items:h,togglePop:S})]}),w&&(0,i.jsx)(_,{item:j,provider:e,account:n,retailX:u,togglePop:S})]})}}},function(e){e.O(0,[724,253,769,744],function(){return e(e.s=3414)}),_N_E=e.O()}]);