(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57f2f1a1"],{2532:function(e,t,o){"use strict";var n=o("23e7"),r=o("5a34"),c=o("1d80"),a=o("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(c(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,o){"use strict";var n=o("6eeb"),r=o("825a"),c=o("d039"),a=o("ad6d"),u="toString",i=RegExp.prototype,d=i[u],l=c((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),s=d.name!=u;(l||s)&&n(RegExp.prototype,u,(function(){var e=r(this),t=String(e.source),o=e.flags,n=String(void 0===o&&e instanceof RegExp&&!("flags"in i)?a.call(e):o);return"/"+t+"/"+n}),{unsafe:!0})},"44e7":function(e,t,o){var n=o("861d"),r=o("c6b6"),c=o("b622"),a=c("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==r(e))}},"5a34":function(e,t,o){var n=o("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"99af":function(e,t,o){"use strict";var n=o("23e7"),r=o("d039"),c=o("e8b5"),a=o("861d"),u=o("7b0b"),i=o("50c4"),d=o("8418"),l=o("65f0"),s=o("1dde"),p=o("b622"),b=o("2d00"),m=p("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",v=b>=51||!r((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),j=s("concat"),O=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:c(e)},h=!v||!j;n({target:"Array",proto:!0,forced:h},{concat:function(e){var t,o,n,r,c,a=u(this),s=l(a,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(c=-1===t?a:arguments[t],O(c)){if(r=i(c.length),p+r>f)throw TypeError(g);for(o=0;o<r;o++,p++)o in c&&d(s,p,c[o])}else{if(p>=f)throw TypeError(g);d(s,p++,c)}return s.length=p,s}})},a708:function(e,t,o){"use strict";o("af4e")},ab13:function(e,t,o){var n=o("b622"),r=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(o){try{return t[r]=!1,"/./"[e](t)}catch(n){}}return!1}},ad6d:function(e,t,o){"use strict";var n=o("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},af4e:function(e,t,o){},b0c0:function(e,t,o){var n=o("83ab"),r=o("9bf2").f,c=Function.prototype,a=c.toString,u=/^\s*function ([^ (]*)/,i="name";n&&!(i in c)&&r(c,i,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(e){return""}}})},caad:function(e,t,o){"use strict";var n=o("23e7"),r=o("4d64").includes,c=o("44d2");n({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},dfd6:function(e,t,o){"use strict";o.r(t);o("b0c0");var n=o("7a23"),r=Object(n["G"])("data-v-64eef873");Object(n["s"])("data-v-64eef873");var c={class:"body"},a=Object(n["g"])("br",null,null,-1),u=Object(n["g"])("h1",null,"Comprar Producto",-1),i=Object(n["g"])("hr",null,null,-1),d=Object(n["g"])("br",null,null,-1),l={class:"row justify-content-center"},s=Object(n["g"])("br",null,null,-1),p={class:"container cuerpo"},b=Object(n["g"])("br",null,null,-1),m=Object(n["g"])("br",null,null,-1),f=Object(n["g"])("br",null,null,-1),g={class:"row"},v={class:"form-group col-md-6"},j=Object(n["g"])("label",null,"Producto",-1),O=Object(n["g"])("option",{disabled:"",selected:""},"Seleccione un producto",-1),h={class:"form-group col-md-3"},P=Object(n["g"])("label",null,"Cantidad actual",-1),y={class:"form-group col-md-3"},w=Object(n["g"])("label",null,"Precio de Compra",-1),C={class:"row"},k={class:"form-group col-md-6"},x=Object(n["g"])("label",null,"Descripcion",-1),_={class:"form-group col-md-3"},R=Object(n["g"])("label",null,"Cantidad a comprar",-1),E={key:0,class:"form-group col-md-3"},U=Object(n["g"])("label",null,"Nueva cantidad",-1),S={class:"row"},V={class:"form-group col-md-6"},I=Object(n["g"])("label",null,"Proveedor",-1),A=Object(n["g"])("option",{disabled:"",selected:""},"Seleccione un Proveedor",-1),T=Object(n["g"])("br",null,null,-1),B={class:"row justify-content-between"},L={class:"form-group col-md-2"},z=Object(n["g"])("button",{class:"btn btn-block btn-danger"}," Cancelar ",-1),F=Object(n["g"])("div",{class:"form-group col-md-2 derecha"},[Object(n["g"])("button",{class:"btn btn-block btn-success",type:"submit"}," Agregar ")],-1);Object(n["q"])();var J=r((function(e,t,o,J,q,D){var G=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",c,[a,u,i,d,Object(n["g"])("form",{onSubmit:t[11]||(t[11]=Object(n["F"])((function(e){return D.enviar()}),["prevent"])),enctype:"multipart/form-data"},[Object(n["g"])("div",l,[null!=q.tempProducto.imagen?(Object(n["p"])(),Object(n["d"])("img",{key:0,src:q.tempProducto.imagen},null,8,["src"])):Object(n["e"])("",!0),s]),Object(n["g"])("div",p,[b,m,f,Object(n["g"])("div",g,[Object(n["g"])("div",v,[j,Object(n["E"])(Object(n["g"])("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=function(e){return q.producto._id=e}),onChange:t[2]||(t[2]=function(){return D.actualizador&&D.actualizador.apply(D,arguments)})},[O,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(q.producto,(function(e){return Object(n["p"])(),Object(n["d"])("option",{value:e._id,key:e._id},Object(n["y"])(e.name)+" - "+Object(n["y"])(e.marca),9,["value"])})),128))],544),[[n["A"],q.producto._id]])]),Object(n["g"])("div",h,[P,Object(n["E"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese la marca del producto","onUpdate:modelValue":t[3]||(t[3]=function(e){return q.tempProducto.cantidad=e}),disabled:""},null,512),[[n["B"],q.tempProducto.cantidad]])]),Object(n["g"])("div",y,[w,Object(n["E"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el precio de compra","onUpdate:modelValue":t[4]||(t[4]=function(e){return q.tempProducto.precioCompra=e})},null,512),[[n["B"],q.tempProducto.precioCompra]])])]),Object(n["g"])("div",C,[Object(n["g"])("div",k,[x,Object(n["E"])(Object(n["g"])("textarea",{class:"form-control","onUpdate:modelValue":t[5]||(t[5]=function(e){return q.tempProducto.descripcion=e}),rows:"3",disabled:""},null,512),[[n["B"],q.tempProducto.descripcion]])]),Object(n["g"])("div",_,[R,Object(n["E"])(Object(n["g"])("input",{type:"number",class:"form-control",placeholder:"Cantidad de productos a ingresar","onUpdate:modelValue":t[6]||(t[6]=function(e){return q.tempProducto.tempCantidad=e}),onChange:t[7]||(t[7]=function(){return D.calcular&&D.calcular.apply(D,arguments)}),min:"1"},null,544),[[n["B"],q.tempProducto.tempCantidad]])]),0!=q.tempProducto.tempCantidad?(Object(n["p"])(),Object(n["d"])("div",E,[U,Object(n["E"])(Object(n["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[8]||(t[8]=function(e){return q.tempProducto.newCantidad=e}),disabled:""},null,512),[[n["B"],q.tempProducto.newCantidad]])])):Object(n["e"])("",!0)]),Object(n["g"])("div",S,[Object(n["g"])("div",V,[I,Object(n["E"])(Object(n["g"])("select",{class:"form-select","onUpdate:modelValue":t[9]||(t[9]=function(e){return q.proveedor._id=e}),onChange:t[10]||(t[10]=function(){return D.ponerProveedor&&D.ponerProveedor.apply(D,arguments)})},[A,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(q.proveedor,(function(e){return Object(n["p"])(),Object(n["d"])("option",{value:e._id,key:e._id},Object(n["y"])(e.nombre)+" - "+Object(n["y"])(e.empresa),9,["value"])})),128))],544),[[n["A"],q.proveedor._id]])])]),T,Object(n["g"])("div",B,[Object(n["g"])("div",L,[Object(n["g"])(G,{to:"/"},{default:r((function(){return[z]})),_:1})]),F])])],32)])})),q=o("5530"),D=o("1da1"),G=(o("d3b7"),o("25f0"),o("99af"),o("4de4"),o("caad"),o("2532"),o("96cf"),o("5502")),M=o("bc3a"),N=o.n(M),$={name:"ventas",data:function(){return{baseURL:"https://backend-pieshna.herokuapp.com/api",producto:{_id:"",name:"",marca:"",descripcion:"",precioCompra:"",precioVenta:"",cantidad:"",imagen:""},tempProducto:{_id:"",name:"",marca:"",descripcion:"",precioCompra:"",precioVenta:"",cantidad:"",imagen:"",tempCantidad:"",newCantidad:"",proveedor:""},proveedor:{},hotImage:{urlImagen:null,imagen:null}}},created:function(){this.recibir()},methods:{recibir:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("".concat(e.baseURL,"/product"),{headers:{"auth-token":e.token}}).then((function(t){e.producto=t.data})).catch((function(e){console.log(e)}));case 3:return t.next=5,N.a.get("".concat(e.baseURL,"/proveedor"),{headers:{"auth-token":e.token}}).then((function(t){e.proveedor=t.data})).catch((function(e){console.log(e)}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},enviar:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,o={name:e.tempProducto.name,marca:e.tempProducto.marca,descripcion:e.tempProducto.descripcion,precioCompra:e.tempProducto.precioCompra,precioVenta:e.tempProducto.precioVenta,cantidad:e.tempProducto.newCantidad.toString(),imagen:e.tempProducto.imagen},console.log(o),t.next=5,N.a.put("".concat(e.baseURL,"/product/").concat(e.tempProducto._id),o,{headers:{"auth-token":e.token}}).then((function(t){console.log(t.data),e.generarCompra(),e.$router.push("/")})).catch((function(e){console.log(e)}));case 5:n=t.sent,console.log(n),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},generarCompra:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("".concat(e.baseURL,"/compra/"),e.tempProducto,{headers:{"auth-token":e.token}}).catch((function(e){console.log(e)}));case 3:o=t.sent,console.log(o),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},actualizador:function(){var e=this;setTimeout((function(){var t=e.producto.filter((function(t){return t._id.includes(e.producto._id)}));e.tempProducto=t[0]}),300)},ponerProveedor:function(){var e=this;setTimeout((function(){var t=e.proveedor.filter((function(t){return t._id.includes(e.proveedor._id)}));e.tempProducto.proveedor=t[0]._id,console.log("proveedor actualizado",e.tempProducto.proveedor)}),300)},calcular:function(){this.tempProducto.newCantidad=parseInt(this.tempProducto.cantidad)+parseInt(this.tempProducto.tempCantidad)}},computed:Object(q["a"])({},Object(G["c"])(["token"]))};o("a708");$.render=J,$.__scopeId="data-v-64eef873";t["default"]=$}}]);
//# sourceMappingURL=chunk-57f2f1a1.d7e354d5.js.map