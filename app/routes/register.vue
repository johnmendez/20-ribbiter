<template lang="html">
  <div class="">
    <div class="section">
      <div class="container">
        <div class="card">
          <div class="card__header">
            <h1>Create an Account</h1>
          </div>
          <div class="card__main">
            <h3>Username</h3>
            <input type="text" name="" value="" placeholder="Username" v-model="formValues.username">
            <h3>Email</h3>
            <input type="text" name="" value="" placeholder="Email" v-model="formValues.email">
            <h3>Password</h3>
            <input type="text" name="" value="" placeholder="Password" v-model="formValues.password">
          </div>
          <div class="card__button">
            <button type="button" name="button" class="login-register"><a href="/login" class="login-register">Login</a></button>
            <button type="button" name="button" class="sign-up"><a href="" class="sign-up">Sign Up</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
