<template>
  <div>
      <h1>Edita tu tarea</h1>
      <form @submit.prevent='updateTareaAction(tarea)'>
          <input type="text" v-model="tarea.nombre" placeholder="nombre">
          <button>Editar</button>
      </form>

      
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {

    data (){
        return {
            id: this.$route.params.id
        }
    },

    computed: {
        ...mapState(['tarea'])
    },

    methods: {
        ...mapActions(['getTareaAction', 'updateTareaAction'])
    },

    created(){
       this.getTareaAction(this.id)
    }

}
</script>

<style>

</style>