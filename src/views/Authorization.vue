<template>
    <div>
        <h2>Sign in with email</h2>
        <form action="">

            <b-field label="Email"
                     >
                <b-input type="email"
                         value=""
                         maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password"
                         value=""
                         password-reveal>
                </b-input>
            </b-field>

            <b-button @click="clickMe">Log in</b-button>

        </form>
    </div>
</template>

<script>
    export default {
        name: "Authorization",
        methods: {
            clickMe: function () {
                console.log('click123');
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