<template>
    <div>
        <form @submit.prevent="login(usuario)">

            <h3>Usuario:</h3>
            <input type="text" placeholder="Ingrese su usuario" autocomplete="false" v-model="usuario.username">
            <br>
            <h3>Contrasena:</h3>
            <input type="password" placeholder="Ingrese su contrasena" v-model="usuario.password">
            <br><br>
            <button type="submit" class="btn btn-primary">Iniciar sesion</button>
        </form>
        {{usuario}}
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            usuario:{
                username:'pieshna',
                password:'hola1234'
            }
        }
    },
    methods: {
        ...mapActions(['login'])
    }
}
</script>
<style>
    
</style>