<template>
  <div id="app">
    <div id="nav">
      <router-link class="home" to="/">Medium</router-link>
      <router-link to="/create">Create</router-link>
      <router-link v-show="$store.state.user.id == 0" to="/authorization">Sign in</router-link>
      <a @click="logOut" v-show="$store.state.user.id != 0">Log out</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    logOut: function () {
      localStorage.setItem('id', 0);
      this.$store.commit('setUserId', 0);
      this.$store.state.user = {id: 0};
    }
  },
  beforeMount() {
    console.log(localStorage.getItem('id'));
    // this.$store.commit('setUserId', localStorage.getItem('id'));
    if(localStorage.getItem('id') && localStorage.getItem('id') > 0) {

      this.axios.get('http://localhost:3000/users/' + localStorage.getItem('id')).then(res => {
        this.$store.state.user = res.data;
        console.log(this.$store.state);
      });

      // let data = {
      //   id: 1,
      //   title: "Название поста",
      //   description: "Текст",
      //   claps: 0,
      //   createdAt: "2019-09-29T00:00:00.000Z",
      //   updateAt: "2019-09-29T00:00:00.000Z",
      //   userId: 1
      // };
      //
      // this.axios.patch('http://localhost:3000/posts/1', data).then(res => {
      //   return res;
      // });

    }

    this.axios.get('http://localhost:3000/posts').then(res => {
      this.$store.state.posts = res.data;
      console.log(this.$store.state);
    });

  }
}

</script>

<style>

  body{
    padding: 0;
    margin: 0;
  }

  *{
    box-sizing: border-box;
  }

  #nav{
    max-width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  #nav a {
    font-weight: bold;
    /*color: #2c3e50;*/
    text-decoration: none;
    color: #000000;
  }

  /*#nav a.router-link-exact-active {*/
  /*  color: #42b983;*/
  /*}*/


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
