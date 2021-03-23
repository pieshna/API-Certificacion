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
    component: ()=>import('../views/productos/Productos.vue')
  },
  {
    path: '/productos/agregar',
    name: 'NuevoProducto',
    component: ()=>import('../views/productos/NuevoProducto.vue')
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
