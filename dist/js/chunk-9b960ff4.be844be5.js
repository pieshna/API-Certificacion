(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b960ff4"],{"2cf1":function(e,t,o){},"97ea":function(e,t,o){"use strict";o("2cf1")},"99af":function(e,t,o){"use strict";var n=o("23e7"),r=o("d039"),c=o("e8b5"),a=o("861d"),l=o("7b0b"),u=o("50c4"),i=o("8418"),s=o("65f0"),d=o("1dde"),b=o("b622"),g=o("2d00"),p=b("isConcatSpreadable"),m=9007199254740991,f="Maximum allowed index exceeded",j=g>=51||!r((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=d("concat"),O=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:c(e)},v=!j||!h;n({target:"Array",proto:!0,forced:v},{concat:function(e){var t,o,n,r,c,a=l(this),d=s(a,0),b=0;for(t=-1,n=arguments.length;t<n;t++)if(c=-1===t?a:arguments[t],O(c)){if(r=u(c.length),b+r>m)throw TypeError(f);for(o=0;o<r;o++,b++)o in c&&i(d,b,c[o])}else{if(b>=m)throw TypeError(f);i(d,b++,c)}return d.length=b,d}})},d975:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r=Object(n["G"])("data-v-21835c16");Object(n["s"])("data-v-21835c16");var c={class:"body"},a=Object(n["g"])("br",null,null,-1),l=Object(n["g"])("h1",null,"Actualizar Proveedor",-1),u=Object(n["g"])("hr",null,null,-1),i=Object(n["g"])("br",null,null,-1),s={class:"row justify-content-center"},d=Object(n["g"])("br",null,null,-1),b={class:"container cuerpo"},g=Object(n["g"])("br",null,null,-1),p=Object(n["g"])("br",null,null,-1),m=Object(n["g"])("br",null,null,-1),f={class:"row"},j={class:"form-group col-md-6"},h=Object(n["g"])("label",null,"Nombre",-1),O={class:"form-group col-md-6"},v=Object(n["g"])("label",null,"Apellido",-1),w={class:"row"},I={class:"form-group col-md-6"},k=Object(n["g"])("label",null,"Correo",-1),y={class:"form-group col-md-6"},x=Object(n["g"])("label",null,"Imagen",-1),R=Object(n["g"])("br",null,null,-1),U={class:"row"},E={class:"form-group col-md-6"},C=Object(n["g"])("label",null,"Empresa",-1),L={class:"form-group col-md-6"},B=Object(n["g"])("label",null,"Contacto",-1),F=Object(n["g"])("br",null,null,-1),T={class:"row justify-content-between"},V={class:"form-group col-md-2"},A=Object(n["g"])("button",{class:"btn btn-block btn-danger"},"Cancelar",-1),P=Object(n["g"])("div",{class:"form-group col-md-2 derecha"},[Object(n["g"])("button",{class:"btn btn-block btn-success",type:"submit"}," Agregar ")],-1);Object(n["q"])();var _=r((function(e,t,o,_,J,S){var q=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",c,[a,l,u,i,Object(n["g"])("form",{onSubmit:t[7]||(t[7]=Object(n["F"])((function(e){return S.enviar(J.producto)}),["prevent"])),enctype:"multipart/form-data"},[Object(n["g"])("div",s,[null==J.hotImage.urlImagen?(Object(n["p"])(),Object(n["d"])("img",{key:0,src:J.producto.imagen},null,8,["src"])):Object(n["e"])("",!0),null!=J.hotImage.urlImagen?(Object(n["p"])(),Object(n["d"])("img",{key:1,src:J.hotImage.urlImagen},null,8,["src"])):Object(n["e"])("",!0),d]),Object(n["g"])("div",b,[g,p,m,Object(n["g"])("div",f,[Object(n["g"])("div",j,[h,Object(n["E"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el nombre del proveedor","onUpdate:modelValue":t[1]||(t[1]=function(e){return J.producto.nombre=e})},null,512),[[n["B"],J.producto.nombre]])]),Object(n["g"])("div",O,[v,Object(n["E"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el apellido del proveedor","onUpdate:modelValue":t[2]||(t[2]=function(e){return J.producto.apellido=e})},null,512),[[n["B"],J.producto.apellido]])])]),Object(n["g"])("div",w,[Object(n["g"])("div",I,[k,Object(n["E"])(Object(n["g"])("input",{type:"email",class:"form-control",placeholder:"Ingrese el correo del proveedor","onUpdate:modelValue":t[3]||(t[3]=function(e){return J.producto.correo=e})},null,512),[[n["B"],J.producto.correo]])]),Object(n["g"])("div",y,[x,R,Object(n["g"])("input",{type:"file",name:"img",onChange:t[4]||(t[4]=function(){return S.onFileChange&&S.onFileChange.apply(S,arguments)}),accept:"image/*"},null,32)])]),Object(n["g"])("div",U,[Object(n["g"])("div",E,[C,Object(n["E"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el nombre de la empresa","onUpdate:modelValue":t[5]||(t[5]=function(e){return J.producto.empresa=e})},null,512),[[n["B"],J.producto.empresa]])]),Object(n["g"])("div",L,[B,Object(n["E"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese la informacion de contacto","onUpdate:modelValue":t[6]||(t[6]=function(e){return J.producto.contacto=e})},null,512),[[n["B"],J.producto.contacto]])])]),F,Object(n["g"])("div",T,[Object(n["g"])("div",V,[Object(n["g"])(q,{to:"/proveedor"},{default:r((function(){return[A]})),_:1})]),P])])],32)])})),J=o("5530"),S=o("1da1"),q=(o("96cf"),o("99af"),o("2b3d"),o("d3b7"),o("3ca3"),o("ddb0"),o("5502")),z=o("bc3a"),D=o.n(z),G={props:["id"],name:"EditarProveedor",data:function(){return{baseURL:"https://backend-pieshna.herokuapp.com/api",producto:{nombre:"",apellido:"",correo:"",empresa:"",contacto:"",imagen:""},hotImage:{urlImagen:null,imagen:null}}},created:function(){this.recibir(this.id)},methods:{recibir:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,D.a.get("".concat(t.baseURL,"/proveedor/").concat(e),{headers:{"auth-token":t.token}}).then((function(e){t.producto=e.data})).catch((function(e){console.log(e)}));case 3:console.log("Proveedor",t.producto),o.next=9;break;case 6:o.prev=6,o.t0=o["catch"](0),console.log(o.t0);case 9:case"end":return o.stop()}}),o,null,[[0,6]])})))()},enviar:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:try{null===t.hotImage.urlImagen?t.subirTodo(e):(n=new FormData,n.append("img",t.hotImage.imagen),console.log(n),D.a.post("".concat(t.baseURL,"/imagen"),n,{headers:{"auth-token":t.token}}).then((function(o){t.producto.imagen="/storage/img/".concat(o.data.filename),t.subirTodo(e)})))}catch(r){console.log(r)}case 1:case"end":return o.stop()}}),o)})))()},subirTodo:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,D.a.put("".concat(t.baseURL,"/proveedor/").concat(t.id),e,{headers:{"auth-token":t.token}}).then((function(e){t.repuestos=e.data,console.log(e.data),t.$router.push("/proveedor")})).catch((function(e){console.log(e)}));case 3:n=o.sent,console.log(n),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),console.log(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()},onFileChange:function(e){this.hotImage.imagen=e.target.files[0],this.hotImage.urlImagen=URL.createObjectURL(this.hotImage.imagen),console.log(this.hotImage.imagen)}},computed:Object(J["a"])({},Object(q["c"])(["token"]))};o("97ea");G.render=_,G.__scopeId="data-v-21835c16";t["default"]=G}}]);
//# sourceMappingURL=chunk-9b960ff4.be844be5.js.map