(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aac3b8cc"],{"22b6":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("fb6a");var c=n("7a23"),r=Object(c["F"])("data-v-11722a1c");Object(c["s"])("data-v-11722a1c");var a=Object(c["g"])("br",null,null,-1),o=Object(c["g"])("h1",null,"Lista de Usuarios",-1),s=Object(c["g"])("hr",null,null,-1),i=Object(c["f"])(),u=Object(c["g"])("br",null,null,-1),b={class:"container p-4"},l={class:"row justify-content-center"},p={class:"card"},d={class:"card-body"},f=Object(c["f"])("editar"),g=Object(c["g"])("br",null,null,-1),h={class:"row justify-content-center"},j={class:"btn-group col-md-2"};Object(c["q"])();var O=r((function(e,t,n,O,v,m){var y=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[a,o,s,i,u,Object(c["g"])("div",b,[Object(c["g"])("div",l,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(m.displayedRepuestos,(function(e){return Object(c["p"])(),Object(c["d"])("div",{class:"col-md-3",key:e._id},[Object(c["g"])("div",p,[Object(c["g"])("img",{src:e.imagen,class:"card-img-top"},null,8,["src"]),Object(c["g"])("div",d,[Object(c["g"])("h5",null,Object(c["y"])(e.username),1),Object(c["g"])("p",null,"Nombre: "+Object(c["y"])(e.name),1),Object(c["g"])("p",null,"Correo: "+Object(c["y"])(e.email),1),Object(c["g"])("button",{class:"btn btn-danger separar",onClick:function(t){return m.eliminarItem(e._id)}},"eliminar",8,["onClick"]),Object(c["g"])(y,{class:"btn btn-success",to:"/usuarios/edit/"+e._id},{default:r((function(){return[f]})),_:2},1032,["to"])])])])})),128))]),g,Object(c["g"])("div",h,[Object(c["g"])("div",j,[1!=v.page?(Object(c["p"])(),Object(c["d"])("button",{key:0,type:"button",onClick:t[1]||(t[1]=function(e){return v.page--}),class:"btn btn-sm btn-outline-secondary"},"Anterior")):Object(c["e"])("",!0),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(v.pages.slice(v.page-1,v.page+5),(function(e){return Object(c["p"])(),Object(c["d"])("button",{type:"button",onClick:function(t){return v.page=e},key:e,class:"btn btn-sm btn-outline-secondary"},Object(c["y"])(e),9,["onClick"])})),128)),v.page<v.pages.length?(Object(c["p"])(),Object(c["d"])("button",{key:1,type:"button",onClick:t[2]||(t[2]=function(e){return v.page++}),class:"btn btn-sm btn-outline-secondary"},"Siguiente")):Object(c["e"])("",!0)])])])],64)})),v=n("5530"),m=n("1da1"),y=(n("99af"),n("96cf"),n("5502")),k=n("bc3a"),w=n.n(k),R={name:"Listar",data:function(){return{repuestos:[],baseURL:"https://backend-pieshna.herokuapp.com/api",page:1,perPage:10,pages:[]}},created:function(){this.getRepuestos()},methods:{getRepuestos:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("".concat(e.baseURL,"/user"),{headers:{"auth-token":e.token}}).then((function(t){e.repuestos=t.data,console.log(t.data)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},paginate:function(e){var t=this.page,n=this.perPage,c=t*n-n,r=t*n;return e.slice(c,r)},setRepuestos:function(){for(var e=Math.ceil(this.repuestos.length/this.perPage),t=1;t<=e;t++)this.pages.push(t)},eliminarItem:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.a.delete("".concat(t.baseURL,"/user/").concat(e),{headers:{"auth-token":t.token}}).then((function(n){t.producto=n.data;for(var c=1;c<=t.repuestos.length;c++)t.repuestos[c-1]._id==e&&t.repuestos.pop(c)})).catch((function(e){console.log(e)}));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n["catch"](0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})))()}},computed:Object(v["a"])(Object(v["a"])({},Object(y["c"])(["token"])),{},{displayedRepuestos:function(){return this.paginate(this.repuestos)}}),watch:{repuestos:function(){this.setRepuestos()}}};n("264b");R.render=O,R.__scopeId="data-v-11722a1c";t["default"]=R},"264b":function(e,t,n){"use strict";n("ff83")},"99af":function(e,t,n){"use strict";var c=n("23e7"),r=n("d039"),a=n("e8b5"),o=n("861d"),s=n("7b0b"),i=n("50c4"),u=n("8418"),b=n("65f0"),l=n("1dde"),p=n("b622"),d=n("2d00"),f=p("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",j=d>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),O=l("concat"),v=function(e){if(!o(e))return!1;var t=e[f];return void 0!==t?!!t:a(e)},m=!j||!O;c({target:"Array",proto:!0,forced:m},{concat:function(e){var t,n,c,r,a,o=s(this),l=b(o,0),p=0;for(t=-1,c=arguments.length;t<c;t++)if(a=-1===t?o:arguments[t],v(a)){if(r=i(a.length),p+r>g)throw TypeError(h);for(n=0;n<r;n++,p++)n in a&&u(l,p,a[n])}else{if(p>=g)throw TypeError(h);u(l,p++,a)}return l.length=p,l}})},b0c0:function(e,t,n){var c=n("83ab"),r=n("9bf2").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,i="name";c&&!(i in a)&&r(a,i,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(e){return""}}})},fb6a:function(e,t,n){"use strict";var c=n("23e7"),r=n("861d"),a=n("e8b5"),o=n("23cb"),s=n("50c4"),i=n("fc6a"),u=n("8418"),b=n("b622"),l=n("1dde"),p=l("slice"),d=b("species"),f=[].slice,g=Math.max;c({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var n,c,b,l=i(this),p=s(l.length),h=o(e,p),j=o(void 0===t?p:t,p);if(a(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[d],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return f.call(l,h,j);for(c=new(void 0===n?Array:n)(g(j-h,0)),b=0;h<j;h++,b++)h in l&&u(c,b,l[h]);return c.length=b,c}})},ff83:function(e,t,n){}}]);
//# sourceMappingURL=chunk-aac3b8cc.869c9c88.js.map