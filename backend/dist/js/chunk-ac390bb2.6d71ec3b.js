(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac390bb2"],{"8f03":function(e,t,o){"use strict";o("e6e8")},e6e8:function(e,t,o){},f528:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n["G"])("data-v-602e8d33");Object(n["t"])("data-v-602e8d33");var r={class:"body"},a=Object(n["h"])("br",null,null,-1),l=Object(n["h"])("h1",null,"Ingresar Proveedor",-1),u=Object(n["h"])("hr",null,null,-1),d=Object(n["h"])("br",null,null,-1),s={class:"row justify-content-center"},i={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"},b=Object(n["h"])("br",null,null,-1),p={class:"container cuerpo"},m=Object(n["h"])("br",null,null,-1),h=Object(n["h"])("br",null,null,-1),g=Object(n["h"])("br",null,null,-1),j={class:"row"},O={class:"form-group col-md-6"},v=Object(n["h"])("label",null,"Nombre",-1),f={class:"form-group col-md-6"},I=Object(n["h"])("label",null,"Apellido",-1),w={class:"row"},k={class:"form-group col-md-6"},y=Object(n["h"])("label",null,"Correo",-1),U={class:"form-group col-md-6"},x=Object(n["h"])("label",null,"Imagen",-1),R=Object(n["h"])("br",null,null,-1),C={class:"row"},E={class:"form-group col-md-6"},_=Object(n["h"])("label",null,"Empresa",-1),B={class:"form-group col-md-6"},F=Object(n["h"])("label",null,"Contacto",-1),L=Object(n["f"])('<br data-v-602e8d33><div class="row justify-content-between" data-v-602e8d33><div class="form-group col-md-2" data-v-602e8d33><button class="btn btn-block btn-danger" data-v-602e8d33>Cancelar</button></div><div class="form-group col-md-2 derecha" data-v-602e8d33><button class="btn btn-block btn-success" type="submit" data-v-602e8d33> Agregar </button></div></div>',2);Object(n["r"])();var V=c((function(e,t,o,c,V,q){return Object(n["q"])(),Object(n["d"])("div",r,[a,l,u,d,Object(n["h"])("form",{onSubmit:t[7]||(t[7]=Object(n["F"])((function(e){return q.enviar(V.producto)}),["prevent"])),enctype:"multipart/form-data"},[Object(n["h"])("div",s,[null!=V.hotImage.urlImagen?(Object(n["q"])(),Object(n["d"])("img",{key:0,src:V.hotImage.urlImagen},null,8,["src"])):Object(n["e"])("",!0),null==V.hotImage.urlImagen?(Object(n["q"])(),Object(n["d"])("img",i)):Object(n["e"])("",!0),b]),Object(n["h"])("div",p,[m,h,g,Object(n["h"])("div",j,[Object(n["h"])("div",O,[v,Object(n["E"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el nombre del producto","onUpdate:modelValue":t[1]||(t[1]=function(e){return V.producto.nombre=e})},null,512),[[n["B"],V.producto.nombre]])]),Object(n["h"])("div",f,[I,Object(n["E"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"Ingrese la marca del producto","onUpdate:modelValue":t[2]||(t[2]=function(e){return V.producto.apellido=e})},null,512),[[n["B"],V.producto.apellido]])])]),Object(n["h"])("div",w,[Object(n["h"])("div",k,[y,Object(n["E"])(Object(n["h"])("input",{type:"email",class:"form-control",placeholder:"Ingrese la descripcion del producto","onUpdate:modelValue":t[3]||(t[3]=function(e){return V.producto.correo=e})},null,512),[[n["B"],V.producto.correo]])]),Object(n["h"])("div",U,[x,R,Object(n["h"])("input",{type:"file",name:"img",onChange:t[4]||(t[4]=function(){return q.onFileChange&&q.onFileChange.apply(q,arguments)}),accept:"image/*"},null,32)])]),Object(n["h"])("div",C,[Object(n["h"])("div",E,[_,Object(n["E"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el precio de compra","onUpdate:modelValue":t[5]||(t[5]=function(e){return V.producto.empresa=e})},null,512),[[n["B"],V.producto.empresa]])]),Object(n["h"])("div",B,[F,Object(n["E"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el precio de venta","onUpdate:modelValue":t[6]||(t[6]=function(e){return V.producto.contacto=e})},null,512),[[n["B"],V.producto.contacto]])])]),L])],32)])})),q=o("5530"),A=o("1da1"),J=(o("2b3d"),o("d3b7"),o("3ca3"),o("ddb0"),o("96cf"),o("5502")),N=o("bc3a"),P=o.n(N),T={name:"NuevoProveedor",data:function(){return{baseURL:"http://localhost:3000/api",producto:{nombre:"",apellido:"",correo:"",empresa:"",contacto:"",imagen:""},hotImage:{urlImagen:null,imagen:null}}},methods:{enviar:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:try{n=new FormData,n.append("img",t.hotImage.imagen),console.log(n),P.a.post("".concat(t.baseURL,"/imagen"),n,{headers:{"auth-token":t.token}}).then((function(o){t.producto.imagen="/storage/img/".concat(o.data.filename),t.subirTodo(e)}))}catch(c){console.log(c)}case 1:case"end":return o.stop()}}),o)})))()},subirTodo:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,P.a.post("".concat(t.baseURL,"/proveedor/"),e,{headers:{"auth-token":t.token}}).then((function(e){t.repuestos=e.data,console.log(e.data),t.$router.push("/proveedor")})).catch((function(e){console.log(e)}));case 3:n=o.sent,console.log(n),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),console.log(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()},onFileChange:function(e){this.hotImage.imagen=e.target.files[0],this.hotImage.urlImagen=URL.createObjectURL(this.hotImage.imagen),console.log(this.hotImage.imagen)}},computed:Object(q["a"])({},Object(J["c"])(["token"]))};o("8f03");T.render=V,T.__scopeId="data-v-602e8d33";t["default"]=T}}]);
//# sourceMappingURL=chunk-ac390bb2.6d71ec3b.js.map