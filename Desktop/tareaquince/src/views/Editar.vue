<template>
<div class="editar-container">
<p class="editar-text"><span>Nombre:</span> {{$route.params.id}} </p>
<p class="editar-text"><span>Apodo:</span> {{$route.params.username}} </p>
<p class="editar-text"><span>Email:</span> {{$route.params.email}}</p>
<p class="editar-text"><span>Teléfono:</span> {{$route.params.phone}}</p>
<p class="editar-text"><span>Página web:</span>: {{$route.params.website}}</p>
</div>

<div class="editar-container-2">
<p class="editar-text"> <span>Familia:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius accusantium quis, soluta ad doloremque? Mollitia repudiandae ullam earum, sit sapiente corporis architecto excepturi quaerat commodi consequuntur voluptatum beatae assumenda!</p>
</div>

<div class="editar-container-2">
<p class="editar-text"> <span>Educación:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius accusantium quis, soluta ad doloremque? Mollitia repudiandae ullam earum, sit sapiente corporis architecto excepturi quaerat commodi consequuntur voluptatum beatae assumenda!</p>
</div>

<div class="editar-container-2">
<p class="editar-text"> <span>Profesión:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius accusantium quis, soluta ad doloremque? Mollitia repudiandae ullam earum, sit sapiente corporis architecto excepturi quaerat commodi consequuntur voluptatum beatae assumenda!</p>
</div>

<div class="editar-container-2">
<p class="editar-text"> <span>Negocios:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius accusantium quis, soluta ad doloremque? Mollitia repudiandae ullam earum, sit sapiente corporis architecto excepturi quaerat commodi consequuntur voluptatum beatae assumenda!</p>
</div>
  
</template>

<script>
export default {

    data(){
        return {
            id: this.$route.params.id,
            id: this.$route.params.username,
            id: this.$route.params.email,
            id: this.$route.params.phone,
            id: this.$route.params.website
            
                         
        }
    }

}
</script>

<style>

.editar-container, .editar-container-2{
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;

    
}

.editar-container-2 {
    background-color: gainsboro;
    border: 1px solid gainsboro;
}


.editar-text{
    color:black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
}


span {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: black;
    font-size: 18px;
}

</style>