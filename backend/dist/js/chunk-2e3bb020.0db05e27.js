(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e3bb020"],{"0963":function(e,t,o){"use strict";o("fe14")},f528:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n["F"])("data-v-011d4f99");Object(n["s"])("data-v-011d4f99");var r={class:"body"},l=Object(n["g"])("br",null,null,-1),a=Object(n["g"])("h1",null,"Ingresar Proveedor",-1),u=Object(n["g"])("hr",null,null,-1),s=Object(n["g"])("br",null,null,-1),b={class:"row justify-content-center"},d={key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"},i=Object(n["g"])("br",null,null,-1),g={class:"container cuerpo"},p=Object(n["g"])("br",null,null,-1),m=Object(n["g"])("br",null,null,-1),j=Object(n["g"])("br",null,null,-1),O={class:"row"},f={class:"form-group col-md-6"},h=Object(n["g"])("label",null,"Nombre",-1),v={class:"form-group col-md-6"},I=Object(n["g"])("label",null,"Apellido",-1),w={class:"row"},k={class:"form-group col-md-6"},y=Object(n["g"])("label",null,"Correo",-1),U={class:"form-group col-md-6"},x=Object(n["g"])("label",null,"Imagen",-1),R=Object(n["g"])("br",null,null,-1),A={class:"row"},C={class:"form-group col-md-6"},_=Object(n["g"])("label",null,"Empresa",-1),D={class:"form-group col-md-6"},F=Object(n["g"])("label",null,"Contacto",-1),L=Object(n["g"])("br",null,null,-1),V={class:"row justify-content-between"},E={class:"form-group col-md-2"},J=Object(n["g"])("button",{class:"btn btn-block btn-danger"},"Cancelar",-1),N=Object(n["g"])("div",{class:"form-group col-md-2 derecha"},[Object(n["g"])("button",{class:"btn btn-block btn-success",type:"submit"}," Agregar ")],-1);Object(n["q"])();var P=c((function(e,t,o,P,T,q){var S=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",r,[l,a,u,s,Object(n["g"])("form",{onSubmit:t[7]||(t[7]=Object(n["E"])((function(e){return q.enviar(T.producto)}),["prevent"])),enctype:"multipart/form-data"},[Object(n["g"])("div",b,[null!=T.hotImage.urlImagen?(Object(n["p"])(),Object(n["d"])("img",{key:0,src:T.hotImage.urlImagen},null,8,["src"])):Object(n["e"])("",!0),null==T.hotImage.urlImagen?(Object(n["p"])(),Object(n["d"])("img",d)):Object(n["e"])("",!0),i]),Object(n["g"])("div",g,[p,m,j,Object(n["g"])("div",O,[Object(n["g"])("div",f,[h,Object(n["D"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el nombre del proveedor","onUpdate:modelValue":t[1]||(t[1]=function(e){return T.producto.nombre=e})},null,512),[[n["A"],T.producto.nombre]])]),Object(n["g"])("div",v,[I,Object(n["D"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el apellido del proveedor","onUpdate:modelValue":t[2]||(t[2]=function(e){return T.producto.apellido=e})},null,512),[[n["A"],T.producto.apellido]])])]),Object(n["g"])("div",w,[Object(n["g"])("div",k,[y,Object(n["D"])(Object(n["g"])("input",{type:"email",class:"form-control",placeholder:"Ingrese el correo del proveedor","onUpdate:modelValue":t[3]||(t[3]=function(e){return T.producto.correo=e})},null,512),[[n["A"],T.producto.correo]])]),Object(n["g"])("div",U,[x,R,Object(n["g"])("input",{type:"file",name:"img",onChange:t[4]||(t[4]=function(){return q.onFileChange&&q.onFileChange.apply(q,arguments)}),accept:"image/*"},null,32)])]),Object(n["g"])("div",A,[Object(n["g"])("div",C,[_,Object(n["D"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese el nombre de la empresa","onUpdate:modelValue":t[5]||(t[5]=function(e){return T.producto.empresa=e})},null,512),[[n["A"],T.producto.empresa]])]),Object(n["g"])("div",D,[F,Object(n["D"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Ingrese la informacion de contacto","onUpdate:modelValue":t[6]||(t[6]=function(e){return T.producto.contacto=e})},null,512),[[n["A"],T.producto.contacto]])])]),L,Object(n["g"])("div",V,[Object(n["g"])("div",E,[Object(n["g"])(S,{to:"/proveedor"},{default:c((function(){return[J]})),_:1})]),N])])],32)])})),T=o("5530"),q=o("1da1"),S=(o("2b3d"),o("d3b7"),o("3ca3"),o("ddb0"),o("96cf"),o("5502")),$=o("bc3a"),z=o.n($),B={name:"NuevoProveedor",data:function(){return{baseURL:"https://backend-pieshna.herokuapp.com/api",producto:{nombre:"",apellido:"",correo:"",empresa:"",contacto:"",imagen:""},hotImage:{urlImagen:null,imagen:null}}},methods:{enviar:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:try{n=new FormData,n.append("img",t.hotImage.imagen),console.log(n),z.a.post("".concat(t.baseURL,"/imagen"),n,{headers:{"auth-token":t.token}}).then((function(o){t.producto.imagen="/storage/img/".concat(o.data.filename),t.subirTodo(e)}))}catch(c){console.log(c)}case 1:case"end":return o.stop()}}),o)})))()},subirTodo:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,z.a.post("".concat(t.baseURL,"/proveedor/"),e,{headers:{"auth-token":t.token}}).then((function(e){t.repuestos=e.data,console.log(e.data),t.$router.push("/proveedor")})).catch((function(e){console.log(e)}));case 3:n=o.sent,console.log(n),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),console.log(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()},onFileChange:function(e){this.hotImage.imagen=e.target.files[0],this.hotImage.urlImagen=URL.createObjectURL(this.hotImage.imagen),console.log(this.hotImage.imagen)}},computed:Object(T["a"])({},Object(S["c"])(["token"]))};o("0963");B.render=P,B.__scopeId="data-v-011d4f99";t["default"]=B},fe14:function(e,t,o){}}]);
//# sourceMappingURL=chunk-2e3bb020.0db05e27.js.map