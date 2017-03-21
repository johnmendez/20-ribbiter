<template lang="html">
  <div class="">
    <div class="section">
      <div class="container">
        <!-- Make a v-if to check if users.loading is equal to error and show an error message -->
        <div class="alert" v-if="users.loading === 'error'">Error creating user</div>

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
import store from '../store';
import userResource from '../resources/user';
const create = userResource.actionCreators.create;

export default {
  data() {
    return {
      // Setup formvalues and v-model for various user inputs
      formValues: {
        username: '',
        email: '',
        password: '',
      },
      // Using $select add users to the data for the register
      // The users resource will store the error from the server in users.error
      users: this.$select('users'),
    };
  },
// When the form submits
  methods: {
//  Dispatch create from the user resource actionCreators passing in data from the form
    send() {
      store.dispatch(create(this.formValues))
      .then(() => {
// Wait for the dispatch to finish (using Promise.prototype.then) and redirect to the /users page
        this.$router.push({ name: 'users' });
      }).catch(() => {});
    },
  },
};
</script>
