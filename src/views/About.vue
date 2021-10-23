<template>
  <div class="about">
    <h1>El post es algo como así</h1>
    <Post msg="This is a post" nickname="pepito" style="background-color:#0097a7;"></Post>
  </div>
</template>
<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";
export default {
  name: "About",
  components: {
    Post
  },
};
</script>