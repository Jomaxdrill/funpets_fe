<template>
  <div class="wall">
    <div class="container ">
    <!-- <Menu ref="menu_wall"></Menu> -->
    <Post ref="post_box" nickname="pepito" msg_post="Escribe aquí" ></Post>
    <Publication ref="publication_wall" 
    v-for="post_elem in post_list" 
      v-bind:text_info="post_elem.post_text"
      v-bind:date_info="post_elem.post_creation_date"
      v-bind:url_pet_info="post_elem.pet_image"
       v-bind:nickname="post_elem.nickname"
      v-bind:key="post_elem.post_id">
    </Publication>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Post from "@/components/Post.vue";
import Publication from "@/components/Publication.vue";
//import Menu from "@/components/Menu.vue";
export default {
  name: "Wall",
  components: {
    Post,
    Publication
  },
  data() {
        return {
      nickname: "",
      error_msg: "",
      text_post: "",
      post_list: [],

    };
  },
    created() {
    //cargar los post apenas termina de cargar la pagina

      axios.get(`http://127.0.0.1:8000/posts/`)
      .then((result) => {
        var post_set=result.data;
        for (var post_elem in post_set){
          let element_post={
              post_text: post_elem.post_text,
              post_creation_date:post_elem.post_creation_date
          }
          this.$data.post_list.push(element_post);
        }
        //cargar los post
       // this.post_list=result.data;
      })
      .catch((error) => {
          console.error("there was an error",error);
      })
 
    
  }
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
</style>