<template>
  <div class="home">
    <img class="homeImage" alt="medical" src="../assets/medical.jpg" width="400" height="200">
    <Header msg="Connecting patients & medical organizations"/>
    <p class="hometext">The blockchain-based platform that connects patients, doctors, clinics, <br> health insures and pharma companies.</p>
    <button> <a class="homeButton" href="https://www.google.com/">START TRIAL</a></button>
  </div>

   <Choose/>
   <Medika/>

</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Choose from '../components/Choose'
import Medika from '../components/Medika'

export default {
  name: 'Home',
  components: {
    Header,
    Choose,
    Medika
  }
}


</script>

<style>

button {
  background-color: orange;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  border-radius: 15px;
  border: 1px solid white;
  padding: 10px;
} 

.hometext {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: gray;
  font-size: 16px;

}

h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgba(44, 3, 190, 0.973);

}

.homeImage {
  margin: 15px 0px 0px 15px;
}

.homeButton {
  text-decoration: none;
  color: white;
}

</style>
