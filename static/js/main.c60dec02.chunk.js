(this.webpackJsonpstore3=this.webpackJsonpstore3||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(30),s=n.n(a),i=n(35),o=n(4),u=n.n(o),l=n(11),j=n(10),d=n(18),b=n.n(d),p=n(31),O=n(32),h="https://pokeapi.co/api/v2";function m(){return b.a.create({baseURL:h})}var x=new(function(){function e(){Object(p.a)(this,e)}return Object(O.a)(e,[{key:"SearchPokemonsApi",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().get("".concat(h,"/ability/static"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"SearchPokemons",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,m().get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"SearchPokemonsInput",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().get("".concat(h,"/pokemon/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),f=n(0),v=c.a.createContext();function g(e){var t=Object(r.useState)([]),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(0),o=Object(j.a)(s,2),d=o[0],b=o[1],p=Object(r.useState)([]),O=Object(j.a)(p,2),h=O[0],m=O[1],g=Object(r.useState)([]),k=Object(j.a)(g,2),S=k[0],C=k[1],N=Object(r.useState)(!1),P=Object(j.a)(N,2),y=P[0],w=P[1],T=Object(r.useState)(!1),A=Object(j.a)(T,2),D=A[0],F=A[1],I=Object(r.useState)(!1),_=Object(j.a)(I,2),L=_[0],B=_[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.SearchPokemonsApi();case 2:t=e.sent,M(t.pokemon);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var M=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.SearchPokemons(t.pokemon.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,x.SearchPokemonsInput(t);case 3:n=e.sent,m([n]),e.next=8;break;case 7:m([]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=localStorage.getItem("@B2W:Order"),R=JSON.parse(J);Object(r.useEffect)((function(){null!=J&&C(R)}),[]);return Object(f.jsx)(v.Provider,{value:{data:c,HandleClick:E,setCartDetails:C,ClickAddToCart:function(e){C([].concat(Object(i.a)(S),[e])),localStorage.removeItem("@B2W:Order"),localStorage.setItem("@B2W:Order",JSON.stringify(S)),F((function(e){return e!=D}))},openModal:y,cartDetails:S,dataAdd:h,setTotalPrice:b,totalPrice:d,changeValue:D,setChangeValue:F,ToggleCartMob:function(){console.log("entrou"),w((function(e){return!y}))},OrderPlaced:function(){B((function(e){return!L})),w((function(e){return!y}))},CloseShop:L,setCloseShop:B},children:e.children})}var k=n.p+"static/media/pokemon-png-logo.927812cc.png",S=n(34),C=function(){var e=Object(r.useContext)(v),t=e.HandleClick,n=e.ToggleCartMob,c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],i=a[1];return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)("img",{src:k,alt:"Logo"})}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("input",{type:"text",placeholder:"Search yours favorite pokemon",onChange:function(e){return i(e.target.value)}}),Object(f.jsx)("button",{onClick:function(){t(s)},children:"Search"}),Object(f.jsx)("div",{className:"icon-cart mob",onClick:function(){return n()},children:Object(f.jsx)(S.a,{})})]})]})},N=n(9),P=function(){var e=Object(r.useContext)(v),t=e.data,n=e.ClickAddToCart,c=e.dataAdd;return Object(f.jsx)("div",{className:"persons",children:0===c.length?t.map((function(e,t){var r=e.height+e.order;return e.prices=r,Object(f.jsxs)("div",{className:"card",children:[Object(f.jsxs)(N.b,{to:{pathname:"/PokemonsTypeStatic/Product",state:{items:e}},children:[Object(f.jsx)("img",{src:e.sprites.front_default,alt:e.name}),Object(f.jsx)("h3",{children:e.name}),Object(f.jsxs)("span",{children:["Price: R$",r.toLocaleString("pt-br",{minimumFractionDigits:2})]})]}),Object(f.jsx)("button",{onClick:function(){return n(e)},children:"Add to cart"})]},t)})):c.map((function(e,t){var r=(null===e||void 0===e?void 0:e.height)+(null===e||void 0===e?void 0:e.order);return Object(f.jsx)(f.Fragment,{children:null!=e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"hidden",children:e.prices=r},e.id),Object(f.jsxs)("div",{className:"card",children:[Object(f.jsxs)(N.b,{to:{pathname:"/PokemonsTypeStatic/Product",state:{items:e}},children:[Object(f.jsx)("img",{src:e.sprites.front_default,alt:e.name}),Object(f.jsx)("h3",{children:e.name}),Object(f.jsxs)("span",{children:["Price: R$",r.toLocaleString("pt-br",{minimumFractionDigits:2})]})]}),Object(f.jsx)("button",{onClick:function(){return n(e)},children:"Add to cart"})]},t)]}):""})}))})},y=function(e){var t=e.name,n=e.valor,c=e.image,a=Object(r.useContext)(v),s=a.setTotalPrice,i=a.changeValue;return Object(r.useEffect)((function(){s((function(e){return e+n}))}),[i]),Object(f.jsxs)("div",{className:"cart-body_details",children:[Object(f.jsx)("img",{src:c,alt:t}),Object(f.jsxs)("span",{children:["Name: ",t]}),Object(f.jsxs)("span",{children:["Name: ",n.toLocaleString("pt-br",{minimumFractionDigits:2})]})]})},w=function(){var e=Object(r.useContext)(v),t=e.openModal,n=e.cartDetails,c=e.totalPrice,a=e.OrderPlaced;return Object(f.jsx)("div",{className:"cart ".concat(t?"active":""),children:Object(f.jsxs)("div",{className:"cart-body",children:[Object(f.jsx)("h1",{className:"cart-body_title",children:"Carrinho"}),Object(f.jsx)("div",{className:"cart-body-items",children:0===n.length?Object(f.jsx)("span",{className:"empty",children:"Carrinho vazio"}):n.map((function(e){return Object(f.jsx)(y,{name:e.name,valor:e.prices,image:e.sprites.front_default})}))}),Object(f.jsxs)("span",{className:"price-total",children:["Pre\xe7o total: ",c]}),Object(f.jsx)("button",{className:"cart-body_btn",onClick:function(){return a()},children:"Finalizar Compra"})]})})},T=function(){return Object(f.jsxs)("div",{className:"home",children:[Object(f.jsx)(P,{}),Object(f.jsx)(w,{})]})},A=n(2),D=function(){var e=Object(A.g)(),t=Object(r.useContext)(v).ClickAddToCart;return Object(f.jsxs)("div",{className:"Product",children:[Object(f.jsx)(N.b,{to:"/PokemonsTypeStatic/",children:"Voltar para home"}),Object(f.jsxs)("div",{className:"Product-body",children:[Object(f.jsxs)("div",{className:"left-side",children:[Object(f.jsx)("h1",{children:e.state.items.name}),Object(f.jsx)("div",{className:"image",children:Object(f.jsx)("img",{src:e.state.items.sprites.front_default,alt:e.state.items.name})})]}),Object(f.jsxs)("div",{className:"right-side",children:[Object(f.jsxs)("span",{className:"price",children:["Price: R$ ",e.state.items.prices.toLocaleString("pt-br",{minimumFractionDigits:2})]}),Object(f.jsx)("button",{className:"product-btn-add-cart",onClick:function(){return t(e.state.items)},children:"add to cart"})]})]}),Object(f.jsx)(w,{})]})},F=function(){var e=Object(A.f)(),t=Object(r.useContext)(v).setCloseShop;return setTimeout((function(){localStorage.removeItem("@B2W:Order"),e.go(0),t(!1)}),3e3),Object(f.jsx)("div",{className:"orderplaced",children:Object(f.jsxs)("div",{className:"orderplaced-content",children:[Object(f.jsx)("h1",{children:"Obrigado pela compra!"}),Object(f.jsx)("span",{children:"Seu produto foi enviado para o financeirio."})]})})},I=function(){var e=Object(r.useContext)(v).CloseShop;return Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{}),e?Object(f.jsx)(F,{}):Object(f.jsxs)(A.c,{children:[Object(f.jsx)(A.a,{exact:!0,path:"/PokemonsTypeStatic/",children:Object(f.jsx)(T,{})}),Object(f.jsx)(A.a,{path:"/PokemonsTypeStatic/Product",children:Object(f.jsx)(D,{})})]})]})};n(65);var _=function(){return Object(f.jsx)(g,{children:Object(f.jsx)(N.a,{children:Object(f.jsx)(I,{})})})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.c60dec02.chunk.js.map