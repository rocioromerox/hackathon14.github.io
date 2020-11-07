<template>
  <h2 class="contactTittle">{{message}}</h2>

<Formulario/>

</template>

<script>
import Formulario from '../components/Formulario';
export default {

    name: 'Contact',
    components: {
        Formulario
    },

    data (){
        return {
            message: 'Contáctanos en cualquier momento',
        }
    }
}
</script>

<style>

.contactTittle {
    font-size: 30px;
    color: rgba(44, 3, 190, 0.973);
}

</style>