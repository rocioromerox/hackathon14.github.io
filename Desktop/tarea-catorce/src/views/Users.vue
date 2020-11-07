<template>
  
  <h2 class="userTittle">Partners</h2>
  <p class="userText">Nuestros clientes respaldan el trabajo que realizamos desde hace 10 años. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos optio velit debitis quia sint soluta praesentium! Ea vero tempore corrupti obcaecati voluptate aliquam nisi perspiciatis nesciunt delectus. Maiores, consectetur?</p>
  <li class="userList" v-for="usuario in usuarios">
      {{usuario.name}}
  </li>
  <img class="userImage" src="../assets/medical.jpg" alt="medical" width="300" height="150">

 <h2 class="userTittle">Companies</h2>
 <p class="userText"> Trabajamos con las mejores compañías del país. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quidem consectetur earum minus voluptas incidunt, neque rem commodi qui aliquam maxime quisquam beatae laudantium eligendi? Sequi officiis perferendis ea atque?</p>
 <li class="userList" v-for="usuario in usuarios">
      {{usuario.company.name}}
  </li>
  <img class="userImage"  src="../assets/medical.jpg" alt="medical" width="300" height="150">

  <h2 class="userTittle">Cities</h2>
  <p class="userText">Nos pueden encontrar en estas ciudades. Pronto abarcaremos 5 lugares más. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ullam perspiciatis numquam ab nobis, dicta inventore soluta architecto cupiditate eius doloremque recusandae magnam praesentium tempora id! Quam commodi amet consectetur.</p>
 <li class="userList" v-for="usuario in usuarios">
      {{usuario.address.city}}
  </li>
  <img class="userImage" src="../assets/medical.jpg" alt="medical" width="300" height="150">

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
    color: gray;
    font-size: 16px;
    text-align: center;
}

.userList:hover{
    border: 0.5px solid orange;
}

.userTittle, .userText {
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.userTittle {
   
  font-size: 30px;
  color: rgba(44, 3, 190, 0.973);
  

}

.userText {
    color: gray;
    font-size: 16px;
    padding: 10px 50px 10px 50px;
}

.userImage {
    margin: 15px 0px 0px 15px;
}

</style>