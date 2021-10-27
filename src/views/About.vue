<template>
  <div class="about muro">
    <div class="container">
      <Post_header msg="This is a post" nickname="pepito" url_pet="https://us.123rf.com/450wm/kurashova/kurashova1709/kurashova170900145/86321281-h%C3%A1mster-sirio-asustado-con-una-expresi%C3%B3n-divertida-aislado-en-blanco-.jpg?ver=6" > </Post_header>
      <Post_date  id ="date_comp" msg="This is a date"> </Post_date>
      <Post_text msg="This is a textbox" nickname="pepito"> </Post_text>
      <Post_file msg="This is a file post" ></Post_file>
      <Post_publish msg="This is a post" nickname="pepito" post_info="{{this.}}"> </Post_publish>
    </div>
    <div class="container">
      <div id="muro_pet_1">
        <Post_header msg="This is a post" nickname="aura" 
        url_pet="https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg" > 
        </Post_header>
        <Post_date msg="This is a date" now="2021-04-08"> </Post_date>
        <Post_text msg="This is a textbox"> </Post_text>
        <Post_reaction msg="This is reaction post" nickname="pepito" > </Post_reaction>
      </div>
      <div id="muro_pet_2">
        <Post_header msg="This is a post" nickname="claudio" g
        url_pet="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8=" > 
        </Post_header>
        <Post_date msg="This is a date" now="2021-04-08"> </Post_date>
        <Post_text msg="This is a textbox"> </Post_text>
        <Post_reaction msg="This is reaction post" nickname="pepito" > </Post_reaction>
      </div>
      <div id="muro_pet_3">
        <Post_header msg="This is a post" nickname="sebastian" 
        url_pet="https://thumbs.dreamstime.com/z/budgie-verde-amarillo-masculino-adulto-un-cierre-encima-de-la-vista-cara-138739576.jpg" > 
        </Post_header>
        <Post_date msg="This is a date" now="2021-015-16"> </Post_date>
        <Post_text msg="This is a textbox"> </Post_text>
        <Post_reaction msg="This is reaction post" nickname="pepito" > </Post_reaction>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Post_header from "@/components/Post_comp/Post_header.vue";
import Post_date from "@/components/Post_comp/Post_date.vue";
import Post_text from "@/components/Post_comp/Post_text.vue";
import Post_file from "@/components/Post_comp/Post_file.vue";
import Post_reaction from "@/components/Post_comp/Post_reaction.vue";
import Post_publish from "@/components/Post_comp/Post_publish.vue";
export default {
  name: "About",
  components: {
    Post_header, 
    Post_date,
    Post_text,
    Post_file,
    Post_reaction,
    Post_publish,
  },
};
</script>
<style scoped>
.muro{
background-image: url("../assets/wp2016066.jpg");
}
</style>