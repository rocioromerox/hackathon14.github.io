<template>
  
<form>
        <label class="formText" for="nombre">Nombre</label>
        <input type="text" placeholder="Nombre" required>

        <label class="formText" for="apellidoPaterno">Apellido paterno</label>
        <input type="text" placeholder="Apellido paterno" required>

        <label class="formText" for="apellidoMaterno">Apellido materno</label>
        <input type="text" placeholder="Apellido materno" required>

        <label class="formText" for="email">Email</label>
        <input type="email" placeholder="Email" required>

        <label class="formText"  for="celular">Celular</label>
        <input type="number" placeholder="Celular">

        <label class="formText" for="asunto">Asunto</label>
        <input type="text" placeholder="Asunto">

        <label class="formText" for="mensaje">Mensaje</label>
        <input class="inputText" type="text" placeholder="Consulta" maxlength="200">
         
        <input class= "formSend" type="submit" value="Enviar información">
        

</form>

  
</template>

<script>
export default {

}
</script>

<style>

*{
    box-sizing:border-box;
}

form {
    width:400px;
	padding:16px;
	border-radius:15px;
	margin:auto;
	background-color:white;
    border: 1px solid orange;
}

form label {
    width: 200px;
    display: inline-block;
    padding: 15px 0px 0px 15px;
    
}




.formText {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: left;
    
}



.formSend {
    margin: 30px 0px 0px 30px;
    background-color: orange;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    border-radius: 15px;
    border: 1px solid white;
    padding: 10px;
}


</style>