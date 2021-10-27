<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
<<<<<<< HEAD
    <router-link to="/about">About</router-link> | 
    <router-link to="/Inicio">Inicio</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/register">Register</router-link> 
=======
    <router-link to="/about">About</router-link>
    <router-link to="/Inicio">Inicio</router-link>
    <router-link to="/Login">Login</router-link>
    
>>>>>>> b8fc6835595b15958b0ebef0a85296712a84eb75
  </div>
  <router-view />
</template>

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
</style>
