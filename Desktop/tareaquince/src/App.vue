<template>
  <div id="navegador">
    <router-link to="/users">FAMOSOS</router-link>
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
  background-color: black;
  display: flex;
  justify-content: space-around;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  margin: 20px;
  border-radius: 10px;

  a {
    color:white;
    text-decoration: none;
  }

}

</style>
