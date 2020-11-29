import Vue from 'vue'
import Vuex from 'vuex'
import { db } from './../firebase' //paso 2 importar el db que se creó con el código
import router from './../router'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: { //PASO 2 crear el array de tareas
    tareas: [],
    tarea: {
      id: '',
      nombre: ''
    }

  },
  
  mutations: { //crear la mutacion para cambiar de estado y state para pintarlo PASO2
      //PASO 3
      getTareasMutation (state, payload){
        //unico que modifica estado es la mutacion
        state.tareas = payload;
      },

      deleteTareaMutation (state, payload){
        state.tareas = state.tareas.filter( item => item.id!== payload)
      },

      getTareaMutation(state, payload){
        state.tarea = payload
      }
  
  },
  
  actions: {
    //acá se hacen las llamadas a las BD PASO 1
    getTareasAction({commit}) { //paso 1 llamar a las BD
      const tareas = []
      db.collection('tareas').get() //acá hacemos una petición con el nombre de colección
      .then (res => {
        res.forEach(doc => {
          
          let tarea = doc.data();
          tarea.id = doc.id; //para que se agregue el id
          
          tareas.push(tarea); //let

          commit('getTareasMutation', tareas) //de la línea 18
        
          //console.log(doc.data());
        })  //la colección contiene documentos
      }) //en vez del db, solocar un async await para el api rest recibido
  },

    deleteTareaAction({commit}, id){
      db.collection('tareas').doc(id).delete() //lo jalo del compnent el id
        .then(()=>{
          commit('deleteTareaMutation', id);
        })
    },

    createTareaAction({commit}, objeto){
        db.collection('datosformulario').add({
          
          objeto
          
        })
        .then(doc=>{
          router.push('/');
        })
    },

    getTareaAction({commit} , id){
      db.collection('tareas').doc(id).get()
      .then(doc => {
        let tarea = doc.data();
        tarea.id = doc.id
        commit('getTareaMutation', tarea)
      })
    },

    updateTareaAction ({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })

      .then (() => {
        router.push('/');
      })
    }

  


  },

    
  
  modules: { //unico motivo para llamar a la mutacion: hacer cambio en el estado
  }
})
