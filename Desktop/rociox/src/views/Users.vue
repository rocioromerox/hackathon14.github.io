<template>

<h1>Estos son los usuarios</h1>

<!-- 
<li v-for="usuario in usuarios" :key="usuario.id">
    {{usuario}}
    </li>
-->


</template>


<script>

export default {

    name: 'Users',
    data (){
        return{
            usuarios: [],
        }
    },

    methods: {
        async getInfoUsers(){
            const info = await fetch('http://localhost:3000/posts'); //archivo db json
            const data = await info.json();

            console.log(data); // ya aparece en la consola
            this.usuarios = data;
        }
    },

    created(){
        this.getInfoUsers();
    }
}
</script>

<style>

</style>