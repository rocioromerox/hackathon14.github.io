<template>
  <div id="navegador">
    <router-link to="/">Home</router-link>   
    <router-link to="/about">About us</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/users">Our clients</router-link>
    
    

  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navegador {
  padding: 20px;
  text-align: right;
  background-color: rgba(44, 3, 190, 0.973);
  display: flex;
  justify-content: space-between;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  a {
    color:white;
    text-decoration: none;
  }

  


}






</style>
