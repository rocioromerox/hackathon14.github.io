<template>
  <div>
  <h1>LISTA DE TAREAS</h1>
  <router-link 
    to='/agregar' 
  >
       <button>Agregar tarea</button>
  </router-link> <!--para linkear-->


 
    <div>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id"> <!--//paso 5 pintar-->
                {{tarea.nombre}}
               

                <router-link
                :to="{
                    name: 'Editar',
                    params: { id: tarea.id}
                    }"
                >
                <button>Editar</button>
                </router-link>


                <button @click='deleteTareaAction(tarea.id)'>Eliminar</button>


            </li>
        </ul>
    </div>

  </div>
</template>

<script>
//importar el getaction

import { mapActions, mapState } from "vuex"; //1, llamar el state 2

export default {
//las acciones se mapean en el metodo

    methods: { // 2
        ...mapActions(["getTareasAction", "deleteTareaAction"]), //Se coloca un array para mapear varias acciones
    }, //como llamar el estado en el componente

    computed: { //acá se llama al estado 4
        ...mapState(["tareas"])
    },

    created(){ //este es un componente del propio vue // 3
        this.getTareasAction();
    },



}
</script>

<style>

</style>