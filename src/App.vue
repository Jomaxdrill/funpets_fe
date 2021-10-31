<template class="bg">
  <div id="nav">
<<<<<<< HEAD
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Inicio">Inicio</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/Register">Registro</router-link> |
    <router-link to="/Wall">Muro</router-link>
    
=======
   <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/Inicio">Inicio</router-link>
    <router-link to="/Login">Login</router-link>
    <router-link to="/Wall">Muro</router-link>...-->   
>>>>>>> 5d62059846589c7feaa6bc3221eb554c295421f9
  </div>
  <router-view />
</template>
<script>

export default {

  mounted(){
        this.$router.push({name: "Inicio"});
  },

  unmounted() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body, html {
  height: 100%;
}

.bg {
  /* The image used */
  background-image: url("assets/wp2016066.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
