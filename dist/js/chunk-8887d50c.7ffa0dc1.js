(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8887d50c"],{"461b":function(e,t,n){"use strict";n.r(t);n("fb6a");var c=n("7a23"),r=Object(c["F"])("data-v-516e766e");Object(c["s"])("data-v-516e766e");var o=Object(c["g"])("br",null,null,-1),a=Object(c["g"])("h1",null,"Lista de Proveedores",-1),s=Object(c["g"])("hr",null,null,-1),i=Object(c["f"])(),u=Object(c["g"])("br",null,null,-1),l={class:"container p-4"},b={class:"row justify-content-center"},d={class:"card"},p={class:"card-body"},g=Object(c["f"])("editar"),f=Object(c["g"])("br",null,null,-1),j={class:"row justify-content-center"},O={class:"btn-group col-md-2"};Object(c["q"])();var h=r((function(e,t,n,h,v,y){var m=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[o,a,s,i,u,Object(c["g"])("div",l,[Object(c["g"])("div",b,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(y.displayedRepuestos,(function(e){return Object(c["p"])(),Object(c["d"])("div",{class:"col-md-3",key:e._id},[Object(c["g"])("div",d,[Object(c["g"])("img",{src:e.imagen,class:"card-img-top"},null,8,["src"]),Object(c["g"])("div",p,[Object(c["g"])("h5",null,Object(c["y"])(e.nombre)+" "+Object(c["y"])(e.apellido),1),Object(c["g"])("p",null,"Correo: "+Object(c["y"])(e.correo),1),Object(c["g"])("p",null,"Empresa: "+Object(c["y"])(e.empresa),1),Object(c["g"])("p",null,"Contacto: "+Object(c["y"])(e.contacto),1),Object(c["g"])("button",{class:"btn btn-danger separar",onClick:function(t){return y.eliminarItem(e._id)}},"eliminar",8,["onClick"]),Object(c["g"])(m,{class:"btn btn-success",to:"/proveedor/edit/"+e._id},{default:r((function(){return[g]})),_:2},1032,["to"])])])])})),128))]),f,Object(c["g"])("div",j,[Object(c["g"])("div",O,[1!=v.page?(Object(c["p"])(),Object(c["d"])("button",{key:0,type:"button",onClick:t[1]||(t[1]=function(e){return v.page--}),class:"btn btn-sm btn-outline-secondary"},"Anterior")):Object(c["e"])("",!0),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(v.pages.slice(v.page-1,v.page+5),(function(e){return Object(c["p"])(),Object(c["d"])("button",{type:"button",onClick:function(t){return v.page=e},key:e,class:"btn btn-sm btn-outline-secondary"},Object(c["y"])(e),9,["onClick"])})),128)),v.page<v.pages.length?(Object(c["p"])(),Object(c["d"])("button",{key:1,type:"button",onClick:t[2]||(t[2]=function(e){return v.page++}),class:"btn btn-sm btn-outline-secondary"},"Siguiente")):Object(c["e"])("",!0)])])])],64)})),v=n("5530"),y=n("1da1"),m=(n("99af"),n("96cf"),n("5502")),k=n("bc3a"),w=n.n(k),R={name:"Proveedor",data:function(){return{repuestos:[],baseURL:"https://backend-pieshna.herokuapp.com/api",page:1,perPage:10,pages:[]}},created:function(){this.getRepuestos()},methods:{getRepuestos:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("".concat(e.baseURL,"/proveedor"),{headers:{"auth-token":e.token}}).then((function(t){e.repuestos=t.data,console.log(t.data)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},paginate:function(e){var t=this.page,n=this.perPage,c=t*n-n,r=t*n;return e.slice(c,r)},setRepuestos:function(){for(var e=Math.ceil(this.repuestos.length/this.perPage),t=1;t<=e;t++)this.pages.push(t)},eliminarItem:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.a.delete("".concat(t.baseURL,"/proveedor/").concat(e),{headers:{"auth-token":t.token}}).then((function(n){t.producto=n.data;for(var c=1;c<=t.repuestos.length;c++)t.repuestos[c-1]._id==e&&t.repuestos.pop(c)})).catch((function(e){console.log(e)}));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n["catch"](0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})))()}},computed:Object(v["a"])(Object(v["a"])({},Object(m["c"])(["token"])),{},{displayedRepuestos:function(){return this.paginate(this.repuestos)}}),watch:{repuestos:function(){this.setRepuestos()}}};n("88dd");R.render=h,R.__scopeId="data-v-516e766e";t["default"]=R},"88dd":function(e,t,n){"use strict";n("9e82")},"99af":function(e,t,n){"use strict";var c=n("23e7"),r=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),i=n("50c4"),u=n("8418"),l=n("65f0"),b=n("1dde"),d=n("b622"),p=n("2d00"),g=d("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",O=p>=51||!r((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),h=b("concat"),v=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:o(e)},y=!O||!h;c({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,c,r,o,a=s(this),b=l(a,0),d=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?a:arguments[t],v(o)){if(r=i(o.length),d+r>f)throw TypeError(j);for(n=0;n<r;n++,d++)n in o&&u(b,d,o[n])}else{if(d>=f)throw TypeError(j);u(b,d++,o)}return b.length=d,b}})},"9e82":function(e,t,n){},fb6a:function(e,t,n){"use strict";var c=n("23e7"),r=n("861d"),o=n("e8b5"),a=n("23cb"),s=n("50c4"),i=n("fc6a"),u=n("8418"),l=n("b622"),b=n("1dde"),d=b("slice"),p=l("species"),g=[].slice,f=Math.max;c({target:"Array",proto:!0,forced:!d},{slice:function(e,t){var n,c,l,b=i(this),d=s(b.length),j=a(e,d),O=a(void 0===t?d:t,d);if(o(b)&&(n=b.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(b,j,O);for(c=new(void 0===n?Array:n)(f(O-j,0)),l=0;j<O;j++,l++)j in b&&u(c,l,b[j]);return c.length=l,c}})}}]);
//# sourceMappingURL=chunk-8887d50c.7ffa0dc1.js.map