import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{requiereAuth:true}
  },
  {
    path: '/productos',
    name: 'Productos',
    component: ()=>import('../views/productos/Productos.vue'),
    meta:{requiereAuth:true}
  },
  {
    path: '/productos/agregar',
    name: 'NuevoProducto',
    component: ()=>import('../views/productos/NuevoProducto.vue'),
    meta:{requiereAuth:true}
  },
  {
    path: '/productos/edit/:id',
    name: 'EditarProducto',
    component: ()=>import('../views/productos/EditarProducto.vue'),
    meta:{requiereAuth:true},
    props:true
  },
  {
    path: '/proveedor',
    name: 'Proveedores',
    component: ()=>import('../views/proveedores/Proveedores.vue'),
    meta:{requiereAuth:true}
  },
  {
    path: '/proveedor/agregar',
    name: 'NuevoProveedor',
    component: ()=>import('../views/proveedores/NuevoProveedor.vue'),
    meta:{requiereAuth:true}
  },
  {
    path: '/proveedor/edit/:id',
    name: 'EditarProveedor',
    component: ()=>import('../views/proveedores/EditarProveedor.vue'),
    meta:{requiereAuth:true},
    props:true
  },
  {
    path: '/usuarios',
    name: 'Listar',
    component: ()=>import('../views/usuarios/listar.vue'),
    meta:{requiereAuth:true}
  },
  {
    path: '/usuarios/agregar',
    name: 'NuevoUsuario',
    component: ()=>import('../views/usuarios/NuevoUsuario.vue'),
    meta:{requiereAuth:true}
  },
  {
    path: '/usuarios/edit/:id',
    name: 'EditarUsuario',
    component: ()=>import('../views/usuarios/EditarUsuario.vue'),
    meta:{requiereAuth:true},
    props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/usuarios/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //validamos que rutas requieren autenticacion
  const rutaProtegida=to.matched.some(record=> record.meta.requiereAuth)

  if(rutaProtegida&&store.state.token===null){
    next('/')
  }else{
    next()
  }

})

export default router
