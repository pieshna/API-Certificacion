import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

export default createStore({
  state: {
    token:null
  },
  mutations: {
    setToken(state,payload){
      state.token=payload
    }
  },
  actions: {
    async login({commit},usuario){
      //console.log(usuario)
      try {
        const resDB = await axios.post('http://localhost:3000/api/user/login',usuario)
        //console.log('token',resDB.data.token)

        commit('setToken',resDB.data.token)

        localStorage.setItem('token',resDB.data.token)
        router.push('/')

      } catch (error) {
        console.log('error: ', error)
      }
    },
    leerToken({commit}){
      if(localStorage.getItem('token')){
        commit('setToken',localStorage.getItem('token'))
      }else{
        commit('setToken',null)
      }
    },
    cerrarSesion({commit}){
      localStorage.removeItem('token')
      commit('setToken',null)
      router.push('/')
    }
  },
  modules: {
  }
})
