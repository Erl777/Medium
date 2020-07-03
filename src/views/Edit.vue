<template>
  <form @submit.prevent="saveEdited">

    <b-field label="Post title">
      <b-input v-model="formData.title"></b-input>
    </b-field>

    <b-field label="Message">
      <b-input v-model="formData.description" maxlength="200" type="textarea"></b-input>
    </b-field>

    <button class="button"> Save </button>

  </form>
</template>

<script>
  export default {
    name: "Edit",
    data: function () {
      return {
        formData:{

        }
      }
    },
    beforeMount() {
      this.axios.get('http://localhost:3000/posts/' + this.$route.params.id).then(res => {
        this.formData = res.data;
      });
    },
    methods: {
      saveEdited(){
        this.axios.patch('http://localhost:3000/posts/' + this.$route.params.id, this.formData).then(res => {
          this.axios.get('http://localhost:3000/posts').then(res => {
            this.$store.state.posts = res.data;
            this.$router.push('/');
          });
          return res;
        });
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