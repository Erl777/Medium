<template>
  <div id="app">
    <div id="nav">
      <router-link class="home" to="/">Medium</router-link>
      <router-link v-if="userMe.role === 'writer'" to="/create">Create</router-link>
      <router-link v-show="userMe.id == 0" to="/authorization">Sign in</router-link>
      <a @click="logOut" v-show="userMe.id > 0">Log out</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
export default {
  name: 'Main',
  methods: {
    logOut: function () {
      localStorage.setItem('id', 0);
      this.id = 0;
      this.$store.state.user.userMe.id = 0;
      this.$store.state.user.userMe.role = '';
    }
  },
  computed: {
    ...mapGetters([
      'userMe',
    ])
  },
  mounted() {
    console.log(this);
    if(localStorage.getItem('id') && localStorage.getItem('id') > 0) {
      this.$store.dispatch('getUserMe', localStorage.getItem('id'))
        .then(data => {
          return data;
      });
    }

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
    text-decoration: none;
    color: #000000;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


</style>
