(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a46660e"],{2532:function(e,t,n){"use strict";var c=n("23e7"),r=n("5a34"),o=n("1d80"),a=n("ab13");c({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(o(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,n){var c=n("861d"),r=n("c6b6"),o=n("b622"),a=o("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==r(e))}},"490c":function(e,t,n){},"5a34":function(e,t,n){var c=n("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},"99af":function(e,t,n){"use strict";var c=n("23e7"),r=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),u=n("50c4"),i=n("8418"),d=n("65f0"),l=n("1dde"),b=n("b622"),p=n("2d00"),f=b("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",j=p>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),O=l("concat"),v=function(e){if(!a(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},m=!j||!O;c({target:"Array",proto:!0,forced:m},{concat:function(e){var t,n,c,r,o,a=s(this),l=d(a,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?a:arguments[t],v(o)){if(r=u(o.length),b+r>g)throw TypeError(h);for(n=0;n<r;n++,b++)n in o&&i(l,b,o[n])}else{if(b>=g)throw TypeError(h);i(l,b++,o)}return l.length=b,l}})},ab13:function(e,t,n){var c=n("b622"),r=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(c){}}return!1}},b0c0:function(e,t,n){var c=n("83ab"),r=n("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,u="name";c&&!(u in o)&&r(o,u,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(e){return""}}})},caad:function(e,t,n){"use strict";var c=n("23e7"),r=n("4d64").includes,o=n("44d2");c({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e415:function(e,t,n){"use strict";n("490c")},e5fb:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("fb6a");var c=n("7a23"),r=Object(c["G"])("data-v-d835c5e0");Object(c["s"])("data-v-d835c5e0");var o=Object(c["g"])("br",null,null,-1),a={class:"row justify-content-end"},s={class:"col-md-3 separar"},u={class:"input-group mb-3"},i=Object(c["g"])("span",{class:"input-group-text",id:"basic-addon1"},"Repuesto:",-1),d=Object(c["g"])("h1",null,"Lista de Productos",-1),l=Object(c["g"])("hr",null,null,-1),b=Object(c["g"])("br",null,null,-1),p={class:"container p-4"},f={class:"row justify-content-center"},g={key:0,class:"container"},h={class:"card"},j={class:"card-body"},O=Object(c["f"])("editar"),v=Object(c["g"])("br",null,null,-1),m={class:"row justify-content-center"},y={class:"btn-group col-md-2"};Object(c["q"])();var k=r((function(e,t,n,k,w,x){var R=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[o,Object(c["g"])("div",a,[Object(c["g"])("div",s,[Object(c["g"])("div",u,[i,Object(c["E"])(Object(c["g"])("input",{type:"text",class:"form-control",placeholder:"Bususcar repuesto","onUpdate:modelValue":t[1]||(t[1]=function(e){return w.busqueda.item=e}),onKeyup:t[2]||(t[2]=function(){return x.buscarItem&&x.buscarItem.apply(x,arguments)})},null,544),[[c["B"],w.busqueda.item]])])])]),d,l,b,Object(c["g"])("div",p,[Object(c["g"])("div",f,[0==w.repuestos.length?(Object(c["p"])(),Object(c["d"])("div",g,[Object(c["g"])("h1",null,"No se encontro: "+Object(c["y"])(w.busqueda.item),1)])):Object(c["e"])("",!0),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(x.displayedRepuestos,(function(e){return Object(c["p"])(),Object(c["d"])("div",{class:"col-md-3",key:e._id},[Object(c["g"])("div",h,[Object(c["g"])("img",{src:e.imagen,class:"card-img-top"},null,8,["src"]),Object(c["g"])("div",j,[Object(c["g"])("h5",null,Object(c["y"])(e.name),1),Object(c["g"])("p",null,"Descripcion: "+Object(c["y"])(e.descripcion),1),Object(c["g"])("p",null,"Marca: "+Object(c["y"])(e.marca),1),Object(c["g"])("p",null,"Cantidad: "+Object(c["y"])(e.cantidad),1),Object(c["g"])("p",null,"Precio: "+Object(c["y"])(e.precioVenta),1),Object(c["g"])("p",null,"Precio de Compra: "+Object(c["y"])(e.precioCompra),1),Object(c["g"])("p",null,"Editado en: "+Object(c["y"])(e.edited),1),Object(c["g"])("button",{class:"btn btn-warning separar",onClick:function(t){return x.eliminarItem(e._id)}}," Borrar ",8,["onClick"]),Object(c["g"])(R,{class:"btn btn-success",to:"/productos/edit/"+e._id},{default:r((function(){return[O]})),_:2},1032,["to"])])])])})),128))]),v,Object(c["g"])("div",m,[Object(c["g"])("div",y,[1!=w.page?(Object(c["p"])(),Object(c["d"])("button",{key:0,type:"button",onClick:t[3]||(t[3]=function(e){return w.page--}),class:"btn btn-sm btn-outline-secondary"}," Anterior ")):Object(c["e"])("",!0),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(w.pages.slice(w.page-1,w.page+5),(function(e){return Object(c["p"])(),Object(c["d"])("button",{type:"button",onClick:function(t){return w.page=e},key:e,class:"btn btn-sm btn-outline-secondary"},Object(c["y"])(e),9,["onClick"])})),128)),w.page<w.pages.length?(Object(c["p"])(),Object(c["d"])("button",{key:1,type:"button",onClick:t[4]||(t[4]=function(e){return w.page++}),class:"btn btn-sm btn-outline-secondary"}," Siguiente ")):Object(c["e"])("",!0)])])])],64)})),w=n("5530"),x=n("1da1"),R=(n("99af"),n("4de4"),n("caad"),n("2532"),n("96cf"),n("5502")),C=n("bc3a"),q=n.n(C),T={name:"Productos",data:function(){return{busqueda:{item:"",setTimeout:"",noRepuesto:""},repuestos:[],auxRepuestos:[],baseURL:"https://backend-pieshna.herokuapp.com/api",page:1,perPage:10,pages:[]}},created:function(){this.getRepuestos()},methods:{getRepuestos:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("".concat(e.baseURL,"/product"),{headers:{"auth-token":e.token}}).then((function(t){e.repuestos=t.data,e.auxRepuestos=e.repuestos,console.log(t.data)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},paginate:function(e){var t=this.page,n=this.perPage,c=t*n-n,r=t*n;return e.slice(c,r)},setRepuestos:function(){for(var e=Math.ceil(this.repuestos.length/this.perPage),t=1;t<=e;t++)this.pages.push(t)},eliminarItem:function(e){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q.a.delete("".concat(t.baseURL,"/product/").concat(e),{headers:{"auth-token":t.token}}).then((function(n){t.producto=n.data;for(var c=1;c<=t.repuestos.length;c++)t.repuestos[c-1]._id==e&&t.repuestos.pop(c)})).catch((function(e){console.log(e)}));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n["catch"](0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})))()},buscarItem:function(){var e=this;""!=this.busqueda.item?(clearTimeout(this.busqueda.setTimeout),this.busqueda.setTimeout=setTimeout((function(){e.repuestos=e.auxRepuestos;var t=e.repuestos.filter((function(t){return e.pages=[],t.name.toLowerCase().includes(e.busqueda.item.toLowerCase())}));e.repuestos=t}),300)):this.repuestos=this.auxRepuestos}},computed:Object(w["a"])(Object(w["a"])({},Object(R["c"])(["token"])),{},{displayedRepuestos:function(){return this.paginate(this.repuestos)}}),watch:{repuestos:function(){this.setRepuestos()}}};n("e415");T.render=k,T.__scopeId="data-v-d835c5e0";t["default"]=T},fb6a:function(e,t,n){"use strict";var c=n("23e7"),r=n("861d"),o=n("e8b5"),a=n("23cb"),s=n("50c4"),u=n("fc6a"),i=n("8418"),d=n("b622"),l=n("1dde"),b=l("slice"),p=d("species"),f=[].slice,g=Math.max;c({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var n,c,d,l=u(this),b=s(l.length),h=a(e,b),j=a(void 0===t?b:t,b);if(o(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return f.call(l,h,j);for(c=new(void 0===n?Array:n)(g(j-h,0)),d=0;h<j;h++,d++)h in l&&i(c,d,l[h]);return c.length=d,c}})}}]);
//# sourceMappingURL=chunk-4a46660e.051c9e53.js.map