<template>
    <div>
        <h2>Sign in with email</h2>
        <form action="" @submit.prevent="auth">

            <b-field label="Email"
                     :message="emailMessage"
                     >
                <b-input type="email"
                         v-model="formData.email"
                         validation-message="Не верно"
                         required
                         maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Password"
                     :message="passwordMessage">
                <b-input type="password"
                         v-model="formData.password"
                         required
                         password-reveal minlength="5">
                </b-input>
            </b-field>

            <button class="button">Log in</button>

        </form>
    </div>
</template>

<script>
    export default {
        name: "Authorization",
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                },
                passwordMessage: '',
                emailMessage: ''
            }
        },
        methods: {
            auth: function () {
                this.passwordMessage = '';
                this.axios.get('http://localhost:3000/users').then(res => {
                    res.data.forEach( (user) => {
                        if (user.login === this.formData.email) {
                            this.emailMessage = '';
                            if (user.password == this.formData.password) {
                                localStorage.setItem('id', user.id);
                                this.$store.commit('setUserId', localStorage.getItem('id'));
                                this.axios.get('http://localhost:3000/users/' + localStorage.getItem('id')).then(res => {
                                    this.$store.state.user = res.data;
                                });
                                this.$router.push('/');
                            } else {
                                this.passwordMessage = 'Error in password';
                            }
                        } else {
                            this.emailMessage = 'Incorrect email';
                        }
                    })
                });
            }
        }
    }

</script>

<style scoped>
    form{
        width: 400px;
        padding: 10px;
        border: 1px solid #e6e6e6;
        border-radius: 10px;
        margin: 10px auto 0;
    }
</style>