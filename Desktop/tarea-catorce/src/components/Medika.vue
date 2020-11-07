<template>
<div>
<h2 class="tittle">Why choose <span>Medika</span></h2>
</div>

<div class="container">
    <div class="containerGrid">
            <div class="containerImage"><img src="../assets/apple.png" alt="apple" width="50" height="60"></div>
            <div class="containerName">For clinics</div>
            <div class="containerData"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur sequi.</p></div>
            
    </div>

    <div class="containerGrid">
            <div class="containerImage"><img src="../assets/apple.png" alt="apple" width="60" height="60"></div>
            <div class="containerName">For clinics</div>
            <div class="containerData"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur sequi.</p></div>
            
    </div>

    <div class="containerGrid">
            <div class="containerImage"><img src="../assets/apple.png" alt="apple" width="60" height="60"></div>
            <div class="containerName">For clinics</div>
            <div class="containerData"><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur sequi.</p></div>
            
    </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style>

.tittle {
    margin: 50px 0px 0px 0px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgba(44, 3, 190, 0.973);
    font-size: 18px;
    font-weight: 300;

}

span {
    font-weight: bold;
}

.container {
    margin: 50px 0px 0px 0px;
    display: grid;
    grid-template-columns: 25% 25% 25%;
    justify-content: center;
    justify-items: center;
    
}

.containerImage, .containerName, .containerData {
    display: flex;
    justify-content: center;
    justify-items: center;
    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
}

.containerGrid{
    padding: 5px;
}

.containerGrid:hover{
    border: 1px solid orange;
    
}

.containerName {
    margin: 15px 0px 0px 0px;
    color: rgba(44, 3, 190, 0.973);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    
}

.containerData{
    color: gray;
}

</style>