<template>
  <div class="about">
    <h1>El post es algo como así</h1>
    <Post msg="This is a post" nickname="pepito" />
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