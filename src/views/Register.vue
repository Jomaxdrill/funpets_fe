<template>
    <div>
        <div id="wrapper">
            <div id="container">
                <div id="header">
                    <div id="rectangle">
                        <div id="inside">
                            <div id="A1">
                                <h1>Registro Usuario</h1>
                            </div>
                            <div id="formulario">
                                <div id="photo">
                                </div>
                                <div class="photo_name">
                                    <p>
                                        Coloca una foto de perfil
                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="email">
                                            <label for="autocomplete-input">Correo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="username">
                                            <label for="autocomplete-input">Nombre de usuario</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="password" id="autocomplete-input" class="autocomplete" v-model="password">
                                            <label for="autocomplete-input">Contraseña</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rectangle_mascotas">
                        <div id="inside">
                            <div id="A1">
                                <h1>Registro Mascota</h1>
                            </div>
                            <div id="formulario">
                                <div id="photo">
                                </div>
                                <div class="photo_name">
                                    <p>
                                        Coloca una foto de tu mascota
                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="petname">
                                            <label for="autocomplete-input">Nombre mascota</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="date" id="autocomplete-input" class="autocomplete" v-model="petage">
                                            <label for="autocomplete-input">Cumpleaños mascota</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                                <select v-model="species">
                                                    <option value="" disabled selected>Seleccione especie</option>
                                                    <option value="1">Roedor</option>
                                                    <option value="2">Minino</option>
                                                    <option value="3">Canino</option>
                                                    <option value="4">Ave</option>
                                                </select>
                                                <label>Especie mascota</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="buttons">
                                <button type="submit" id="button_register" class="waves-effect waves-light btn orange darken-1" v-on:click="register">
                                    Registrar
                                </button>
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
import M from 'materialize-css';
import jwtDecode from 'jwt-decode'
import moment from 'moment'
export default {
  name: "register",
  components: {},
  data() {
    return {
        username: "",
        password: "",
        petname: "",
        email: "",
        petdate: "",
        species: "",
    };
  },
  methods: {
    register: function () {
      let json = {
        username: this.username,
        password: this.password,
        name: this.username,
        last_name: this.username,
        nickname: "@" + this.username,
        email: this.email,
        phone: "Optional",
        description: `hola soy ${this.username}`,
        birthdate: "2000-01-01",
        };
      
      console.log(json);
      axios
        .post("http://127.0.0.1:8000/user/", json)
        .then((result) => {
          console.log(result);
          console.log(result.data.access);
          let  token_decode = jwtDecode(result.data.access)
          console.log(token_decode)
          let user_id_token = token_decode.user_id
          console.log(user_id_token)
          let date_pet=moment(this.petdate).format("YYYY-MM-DD")
          console.log(date_pet)
          let json_pet ={
            account_name: "@" + this.petname,
            account_nickname: this.petname,
            account_description: `hola soy ${this.petname}` ,
            account_user_id: user_id_token,
            account_typepet_id: this.species,
            account_birthdate: "2000-01-01",
            };
            console.log(json_pet);
                   let config= {
                       headers: {
                           'Authorization': 'Bearer ' + result.data.access
                        }
                    }
                console.log(config);
            axios
            .post(`http://127.0.0.1:8000/account/${json_pet.account_user_id}/`, json_pet, config)
            .then((result) =>{
                console.log(result);
                this.$router.push({name: "Inicio"})
            })
            .catch((error) => {
                console.error("la kagaste!", error);
            });
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
    mounted(){
        var elems_sel = document.querySelectorAll('select');
        M.FormSelect.init(elems_sel);
    }
};
</script>

<style scoped>
#wrapper {
    background: #fff;
    width: 100%;
    height: auto;
}
#container{
    width: 1340px;
    height: auto;
    margin: auto;
}
#header{
    height: 1800px;
    width: 1344px;
    padding: 50px 50px 0px 50px;
    background-image: url("../assets/wp2016066.jpg");
}
#rectangle{
    text-align: center;
    position: relative;
    width: 470px; 
    height: 750px; 
    border: 3px solid #000;
    background-color: #fff;
    bottom: 15px;
    left: 350px;
    box-shadow: 2px 2px 2px 1px black;
}
#rectangle_mascotas{
    text-align: center;
    position: relative;
    width: 470px; 
    height: 750px; 
    border: 3px solid #000;
    background-color: #fff;
    bottom: 2px;
    left: 350px;
    box-shadow: 2px 2px 2px 1px black;
}
#inside{
    position: center;
    top: 27px;
}
#A1 h1{
    font-family: 'Architects Daughter', cursive;
    font-size: 40px;
}
#formulario{
    font-family: 'Architects Daughter', cursive;
}
#email{
    font-family: 'Architects Daughter', cursive;
    width: 250px;
    border: 2px solid black;
    box-shadow: 2px 2px 2px 1px black;
}
#password{
    font-family: 'Architects Daughter', cursive;
    width: 250px;
    border: 2px solid black;
    box-shadow: 2px 2px 2px 1px black;
}
#button_register{
    position: relative;
    top: -15px;
    font-size: 16px;
    cursor: pointer;
}
#A2{
    position: relative;
    top: 5px;
    right: 16px;
    font-family: 'Architects Daughter', cursive;
}
.B1{
    position: relative;
    left: 139px;
    bottom: 37px;
    font-family: 'Architects Daughter', cursive;
}
#A3{
    position: relative;
    top: -15px;
    right: 20px;
    font-family: 'Architects Daughter', cursive;
}
.B2{
    position: relative;
    left: 115px;
    bottom: 37px;
    font-family: 'Architects Daughter', cursive;
}
#formulario #photo{
    background-image: url("../assets/Profile photo.png");
    position: relative;
    left: 175px;
    width: 120px;
    height: 120px;
}
</style>