<template>

<!--<div>
      <h1>Agregar tarea</h1>

        <form @submit.prevent='createTareaAction(nombre)'>
            <input type="text" v-model="nombre">
            <button type="submit">Agregar</button>

            
        </form>

  </div>-->

  <div>
      <h1>Agregar tarea</h1>

        <form @submit.prevent='createTareaAction(objeto)'>  <!--DEFINIR-->
            <input type="text" v-model="objeto.nombre" placeholder="nombre">
            <input type="text" v-model="objeto.apellido" placeholder="apellido">
            <button type="submit">Agregar</button>

            
        </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    
    name: 'Agregar',
    data(){
        return {
            
            objeto: {
            nombre:'',
            apellido:''
            }
            
        }
    },

    methods: {
        ...mapActions(['createTareaAction'])
    }


}

/*

import { mapActions } from 'vuex'
export default {
    
    name: 'Agregar',
    data(){
        return {
            nombre:''
        }
    },

    methods: {
        ...mapActions(['createTareaAction'])
    }



*/

</script>

<style>

</style>


