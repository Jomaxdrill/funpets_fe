<template>
    <div class="Menu"></div>

    <nav class="nav-wrapper orange">
        <!--<div class="container">-->
            <div class="row">
                <div class="col s2">
                <a href="javascript:void(0);" class="brand-logo black-text"><i class="material-icons">pets</i>FUNPETS</a></div>
                <ul class="right">
                    <div class="col s2">
                        <li><a href="javascript:void(0);"><i class="material-icons black-text">search</i></a></li></div>
                    <div class="col s2">
                        <li><a href="javascript:void(0);"><i class="material-icons black-text">person</i></a></li></div>
                    <div class="col s2">
                        <li><a href="javascript:void(0);" class="dropdown-trigger" data-target="dropdown1">
                        <i class="material-icons right black-text">menu</i></a></li></div>
                </ul>
            </div>
        <!--</div>-->
    </nav>

    <ul id="dropdown1" class="dropdown-content">
        <li><a href="javascript:void(0);">Mi Perfil</a></li>
        <li><a href="javascript:void(0);">Mis Mascotas</a></li>
        <li><a href="javascript:void(0);">Configuración</a></li>
        <li><a href="javascript:void(0);">Crear Cuenta</a></li>
        <li><a class="modal-trigger" href="#modal1">Cambiar Cuenta</a></li>
        <li class="divider"></li>
        <li><a href="javascript:void(0);" v-on:click="end_session">Cerrar Sesión</a></li>
    </ul>  
     
    <div id="modal1" class="modal">
        <div class="modal-content">
            <form>
            <h4>Cambiar Cuenta</h4>
                <ul class="collection" ref="sel_funpet">
                      <li class="collection-item avatar" v-for="pet_elem in pet_list"
                      v-bind:key="pet_elem.account_id">
                        <img v-bind:src="pet_elem.account_image" alt="" class="circle">
                        <span class="title">{{pet_elem.account_nickname }}</span>
                        <p>
                            <label>
                            <input class="with-gap" name="group1" type="radio" 
                            v-bind:value="`${pet_elem.account_id}|${pet_elem.account_nickname}|${pet_elem.account_image}`" v-model="picked" />
                            <span></span>
                            </label>
                        </p>
                    </li>

                </ul>
        <div class="modal-footer">
            <a href="javascript:void(0);"  class="modal-close waves-effect waves-green btn-flat" @click="handlePetAcc">Aceptar</a>
            <a href="javascript:void(0);" class=" btn modal-close waves-effect waves-green btn-flat">Cancelar</a>
        </div>
        </form>
    </div>
    </div>

</template>

<script>
import M from 'materialize-css'
import axios from "axios";
import jwtDecode from 'jwt-decode'
export default {
  name: "MenuData",
  props: {
    msg: String,
  },
  data(){
      return{
          idpet:0,
          nicknamepet:"",
          pet_list:[],
          picked:"",
      }
  },
  mounted() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
    var elems_drop = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems_drop);
    var user_id_token = jwtDecode(localStorage.getItem("access")).user_id;
    axios.get(`http://127.0.0.1:8000/userAccounts/${user_id_token}/`).then((result) =>{
                console.log(result);
                this.pet_list=result.data
            })
            .catch((error) => {
                console.error("la kagaste!", error);
            });
    },
    methods:{
        end_session:function(){
            //eliminar tokens de localStorage y volver a pantalla inicio
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            this.$router.push({name: "Inicio"});
        },
        handlePetAcc(){
            console.log(this.picked)
            this.$emit("click",this.picked);
        }
    }
};
</script>

<style scoped>
.dropdown-content{
    position:relative;
}
</style>