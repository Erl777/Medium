<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        {{ description }}
        <br>
        <time datetime="2016-1-1">{{ time }}</time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" @click="counter" v-show="$store.state.user.role === 'reader'" class="card-footer-item">Like {{count}}</a>
      <a href="#" v-show="$store.state.user.role === 'writer'" class="card-footer-item">Edit</a>
      <a href="#" v-show="$store.state.user.role === 'writer'" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data: function () {
    return {
      count: this.claps
    }
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    time: {
      type: String
    },
    claps: {
      type: Number
    }
  },
  methods:{
    counter: function () {
      // this.$store.state.posts[0].claps++;
      // console.log(this.$store.state.posts[0]['claps']);
      // this.axios.patch('http://localhost:3000/posts/1', this.$store.state.posts[0]).then(res => {
      //   return res;
      // });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
