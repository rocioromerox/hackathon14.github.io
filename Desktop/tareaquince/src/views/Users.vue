<template>
  
  
  <p class="userText">Conoce a las diez personas más famosas del mundo.</p>
    <li class="userList" v-for="usuario in usuarios">
      {{usuario.name.charAt(0)}} 
       
      
      <!--para ir al componente-->
      <!--luego pasar parámetros-->
      <router-link 
      
      :to= "{
          name: 'Editar', 
          params: { 
              id: usuario.name, 
              username: usuario.username, 
              email: usuario.email, 
              phone: usuario.phone, 
              website: usuario.website
            } 
                     
        }"
      > 

      <button>Ver</button> 
      
      </router-link>
    </li>



  
</template>

<script>

export default {
    name: 'Users',
    data(){
        return{
            usuarios: [],
        }
    },

    methods: {
       async getInfoUsers(){
            const info = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await info.json();

            console.log(data);
            this.usuarios= data;

        }
    }, 

    created(){
        this.getInfoUsers();
    }

}
</script>

<style>

.userList {
    list-style: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    font-size: 16px;
    text-align: center;
}

.userList:hover{
    border: 0.5px solid black;
    border-radius: 10px;
    margin: 5px 20px 5px 20px;
    cursor: pointer;
    background-color: goldenrod;
    border: 1px solid goldenrod;
    color: white;
}

.userTittle {
  font-size: 25px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 20px;
  text-decoration: underline;
}

.userText {
    list-style: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    font-size: 18px;
    text-align: center;
    margin: 5px 20px 20px 20px;
    background-color: pink;
    border: 1px solid pink;
    border-radius: 10px;
}

button{
    border: 1px solid black;
    border-radius: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 12px;
    background-color: white;
    margin: 5px 5px 5px 5px;
}

</style>