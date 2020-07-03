<template>
  <div class="home">
<!--    <Card v-for="(post, index )  in $store.state.posts"-->
<!--          :key="index"-->
<!--          :title="post.title"-->
<!--          :description="post.description"-->
<!--          :time="post.createdAt"-->
<!--          :claps="post.claps"-->
<!--    />-->

    <div class="card"
         v-for="(post, index )  in $store.state.posts"
         :key="index">
      <header class="card-header">
        <p class="card-header-title">
          {{ post.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ post.description }}
          <br>
          <time datetime="2016-1-1">{{ post.createdAt }}</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" @click="counter(post.id, index)" v-show="$store.state.user.role === 'reader'" class="card-footer-item">Like {{post.claps}}</a>
        <router-link :to="{name: 'edit', params: {id: post.id}}" v-show="$store.state.user.role === 'writer'" class="card-footer-item">Edit</router-link>
        <b-button v-show="$store.state.user.role === 'writer'" @click="deletePost(post.id, index)">Delete</b-button>
      </footer>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Card from "../components/Card";
export default {
  name: 'Home',
  methods:{
    deletePost(id, index) {
      this.axios.delete('http://localhost:3000/posts/' + id).then(res =>{
        return res;
      });
      this.$store.state.posts.splice(index, index);
      console.log('удален ' + index + ' post');
    },
    counter(id, index) {
      this.$store.state.posts[index].claps++;
      console.log(this.$store.state.posts[index].claps);
      this.axios.patch('http://localhost:3000/posts/' + id, this.$store.state.posts[index]).then(res => {
        return res;
      });
      // let data = {
      //   title: "Название поста123",
      //   description: "Текст123",
      //   claps: 0,
      //   createdAt: new Date(),
      //   updateAt: new Date(),
      //   userId: this.$store.state.user.id
      // };
    }
  }
}
</script>

<style scoped>
  .card{
    max-width: 500px;
    margin: 20px auto;
  }
</style>
