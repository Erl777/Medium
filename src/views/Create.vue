<template>
  <form @submit.prevent="create">

    <b-field label="Post title">
      <b-input v-model="formData.title" minlength="3" required></b-input>
    </b-field>

    <b-field label="Message">
      <b-input v-model="formData.description" maxlength="200" type="textarea" minlength="5" required></b-input>
    </b-field>

    <button class="button"> Save </button>

  </form>
</template>

<script>
  export default {
    name: "Create",
    data: function () {
      return {
        formData:{
          title: "",
          description: "",
          claps: 0,
          createdAt: new Date(),
          updateAt: new Date(),
          userId: this.$store.state.user.id
        }
      }
    },
    methods: {
      create(){
        // this.axios.post('http://localhost:3000/posts/', this.formData).then(res => {
        //   this.axios.get('http://localhost:3000/posts').then(res => {
        //     this.$store.state.posts = res.data;
        //     this.$router.push('/');
        //   });
        //   return res;
        // });
        this.$store.dispatch('createPost', this.formData).then(data => {
          this.$router.push('/');
          return data;
        })
      }
    }
  }
</script>

<style scoped>
  form{
    padding: 10px;
    max-width: 500px;
    margin: 20px auto;
  }
</style>