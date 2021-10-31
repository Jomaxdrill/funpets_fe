<template>
  <div class="wall">

    <div class="row ">
      <MenuData @click="handlePetAcc"></MenuData>
    </div>
  <div class="container ">
    <Post ref="post_box" 
    v-bind:nickname="nickname_post"  
    v-bind:url_pet="url_pet_post" 
    v-bind:account_id="pet_id"
    msg_post="Escribe aquí" class="section"
    @click="send_post"
    ></Post>
     <h3 class="section">
      ¿Qué hacen los funpets hoy?
    </h3>
    <Publication ref="publication_wall" 
    v-for="post_elem in post_list" 
      v-bind:text_info="post_elem.post_text"
      v-bind:date_info="post_elem.post_creation_date"
      v-bind:url_pet_info="post_elem.pet_image"
       v-bind:nickname_info="post_elem.pet_nickname"
      v-bind:key="post_elem.post_id"
      @click="handlePetAcc"
      >
    </Publication>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Post from "@/components/Post.vue";
import Publication from "@/components/Publication.vue";
import jwtDecode from 'jwt-decode'
import MenuData from "@/components/MenuData.vue";
import moment from 'moment';
export default {
  name: "Wall",
  components: {
    Post,
    Publication,
    MenuData,
  },
  data() {
        return {
      nickname_post: "",
      url_pet_post:"",
      pet_id: "",
      error_msg: "",
      text_post: "",
      post_list: [],

    };
  },
    beforeCreate() {

    console.log('No se ha ejecutado nada todavía')
    //darle un refresh token 
    //verificar que hayan tokens en el cliente y por si algo refrescar el token 
    const token_check= jwtDecode(localStorage.getItem('access')).user_id
    const logged=token_check==null || token_check==undefined ? false:true;
    console.log("estoy logeado:"+logged)
    if(!logged) {
      this.$router.push({name: "Inicio"});
    }

  },
    created() {
    //cargar los post apenas termina de cargar la pagina

      axios.get(`http://127.0.0.1:8000/posts/`)
      .then((result) => {
        var post_set=result.data;
        console.log(post_set)
        post_set.forEach((post_elem) => {
          console.log(post_elem)
          let element_post={
              post_text: post_elem.post_text,
              post_creation_date: moment(post_elem.post_creation_date).format("YYYY-MM-DD"),
              post_id:post_elem.post_id,

          }
          console.log(element_post)
          let config= {
                       headers: {
                           'Authorization': 'Bearer ' + localStorage.getItem('access')
                        }
                        
                    }
          let user_id_token=jwtDecode(localStorage.getItem('access')).user_id 
          axios.get(`http://127.0.0.1:8000/account/${user_id_token}/${post_elem.post_account_id}/`,config)
          .then((result_1) =>{
              let final_element_post={...element_post,pet_nickname:result_1.data.account_nickname,pet_image:result_1.data.account_image}
              this.post_list.unshift(final_element_post);
              console.log(result_1);
            })
            .catch((error_1) => {
                console.error("la kagaste!", error_1);
            });
        })
        //cargar los post
       // this.post_list=result.data;
      })
      .catch((error) => {
          console.error("there was an error",error);
      })
  },
  mounted(){
    //obtener la primera mascota por default
        var user_id_token = jwtDecode(localStorage.getItem("access")).user_id;
    axios.get(`http://127.0.0.1:8000/userAccounts/${user_id_token}/`).then((result) =>{
                console.log(result);
                this.pet_id=result.data[0].account_id
                this.nickname_post=result.data[0].account_nickname
                this.url_pet_post=result.data[0].account_image

            })
            .catch((error) => {
                console.error("la kagaste!", error);
            });
//definir un refresh token
    axios.post("http://127.0.0.1:8000/refresh/",{
      refresh: localStorage.getItem('refresh')
    }).then((response) =>{
        localStorage.setItem('access',response.data.access)

    })       
  },

   methods: {
     handlePetAcc:function(info){
       let info_pet= info.toString().split("|")
        this.pet_id=info_pet[0]
        this.nickname_post= info_pet[1]
        this.url_pet_post= info_pet[2]
     },
    send_post:function(info){
      console.log("el nuevo post es")
      console.log(info)
        if( 'post_id' in info){
          this.post_list.unshift(info);
        }

    },
     

   },
};
</script>
<style scoped>
.container_wall {
  width: 900px;
  height: auto;
  margin: auto;
}
.muro{
background-image: url("../assets/wp2016066.jpg");
  /* Full height */
  height: 100%; 
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h3 {
  margin: 40px 0 0;
  font-family: 'Architects Daughter', cursive;
  color: #2C3E50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-family: 'Architects Daughter', cursive;
  color: #2C3E50;
}
.shadow_box{
  box-shadow: 2px 2px 2px 1px black;
}
span{
  font-family: 'Architects Daughter', cursive;
}
</style>