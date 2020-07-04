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
        <b-button class="card-footer-item card-footer-button"
                  @click="counter(post.id, index)"
                  v-if="$store.state.user.role === 'reader'"
        >Like {{post.claps}}</b-button>
        <router-link :to="{name: 'edit', params: {id: post.id}}" v-show="$store.state.user.role === 'writer'" class="card-footer-item">Edit</router-link>
        <b-button class="card-footer-item card-footer-button" v-show="$store.state.user.role === 'writer'" @click="deletePost(post.id, index)">Delete</b-button>
      </footer>
    </div>

    <hr>

    <b-pagination
            :total="total"
            :current.sync="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
    </b-pagination>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Card from "../components/Card";
export default {
  name: 'Home',
  data() {
    return {
      total: 200,
      current: 1,
      perPage: 5,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
    }
  },
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
  .card-footer-button{
    height: auto;
    border: unset;
    border-radius: 0;
    color: #7957d5;
  }
  .card-footer-button:hover{
    color: #000000;
  }
  .card-footer-item{
    max-width: 33%;
  }
  .card-footer-item:first-child{
    border-left: 1px solid #dbdbdb;
  }
  .card-footer{
    justify-content: flex-end;
  }
  .card-content{
    position: relative;
    padding: 1.5rem 1.5rem 2rem 1.5rem;
  }
  time{
    position: absolute;
    left: 0.5rem;
    bottom: 0;
    color: #9c9c9c;
  }
</style>
