<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <div id="header">
          <div id="rectangle">
            <div id="inside">
              <div id="A1">
                <h1>Iniciar Sesión</h1>
              </div>
              <div id="formulario">
                <div class="row">
                  <div class="col s8">
                    <div class="row">
                      <div class="input-field col s12 offset-s3">
                        <input
                          type="text"
                          id="usuario"
                          class="autocomplete"
                          v-model="email"
                        />
                        <label for="usuario">usuario</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s8">
                    <div class="row">
                      <div class="input-field col s12 offset-s3">
                        <input
                          type="password"
                          id="password"
                          class="validate"
                          v-model="password"
                        />
                        <label for="password">Contraseña</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="buttons">
                <button
                  type="submit"
                  id="button_login"
                  class="waves-effect waves-light btn orange darken-1"
                  v-on:click="login"
                >
                  Entrar
                </button>
              </div>
              <div id="A2">
                <p>Ovidaste tu contraseña? Haz click</p>
                <a href="" class="B1">Aquí</a>
              </div>
              <div id="A3">
                <p>Necesitas ayuda? Haz click</p>
                <a href="" class="B2">Aquí</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      error: false,
      error_msg: "",
    };
  },
  methods: {
    login: function () {
      let json = {
        username: this.email,
        password: this.password,
      };
      console.log(json);
      axios.post("http://127.0.0.1:8000/login/", json)
        .then((result) => {
          console.log(result);
          localStorage.setItem('access',result.data.access);
          localStorage.setItem('refresh',result.data.refresh);
          this.$router.push({name: "Wall"});
        })
        .catch((error) => {
          console.error("There was an error!", error);
          Swal.fire({title: 'Error en usuario/contraseña',
          confirmButtonColor: '#ff9800',})
        });
    },
  },
    beforeCreate() {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    },
};
</script>

<style scoped>
#wrapper {
  background: #fff;
  width: 100%;
  height: auto;
}

#container {
  width: 1340px;
  height: auto;
  margin: auto;
}

#header {
  height: 645px;
  width: 1344px;
  padding: 50px 50px 0px 50px;
  background-image: url("../assets/wp2016066.jpg");
}

#rectangle {
  text-align: center;
  position: relative;
  width: 470px;
  height: 570px;
  border: 3px solid #000;
  background-color: #fff;
  bottom: 15px;
  left: 350px;
  box-shadow: 2px 2px 2px 1px black;
}

#inside {
  position: relative;
  top: 27px;
}

#A1 h1 {
  font-family: "Architects Daughter", cursive;
  font-size: 40px;
}

#formulario {
  font-family: "Architects Daughter", cursive;
}

#email {
  font-family: "Architects Daughter", cursive;
  width: 250px;
  border: 2px solid black;
  box-shadow: 2px 2px 2px 1px black;
}

#password {
  font-family: "Architects Daughter", cursive;
}

#button_login {
  position: relative;
  top: -15px;
  font-size: 16px;
  cursor: pointer;
}

#A2 {
  position: relative;
  top: 5px;
  right: 16px;
  font-family: "Architects Daughter", cursive;
}

.B1 {
  position: relative;
  left: 139px;
  bottom: 37px;
  font-family: "Architects Daughter", cursive;
}

#A3 {
  position: relative;
  top: -29px;
  right: 20px;
  font-family: "Architects Daughter", cursive;
}

.B2 {
  position: relative;
  left: 115px;
  bottom: 37px;
  font-family: "Architects Daughter", cursive;
}
</style>
