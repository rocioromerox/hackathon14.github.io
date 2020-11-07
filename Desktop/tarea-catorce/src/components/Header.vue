<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 410px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-blockflex;
  margin: 0 10px;
}
a {
  color:blue;
}
</style>