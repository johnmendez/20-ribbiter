<template lang="html">
  <div class="">
    <div class="section">
      <div class="container">
        <div class="grid">
          <h1>Users</h1>
        </div>
        <div class="grid-container">
<!-- Using v-for, loop through the users.items and show a card with the username and email (fake the picture with a picture of your favorite placholder image [square please]) -->
            <div v-for="user in users.items" class="grid-item">
                <img src="http://www.placecage.com/c/150/150" alt="">
                <div class="user-info">
                  <p>{{ user.username }}</p>
                  <p>{{ user.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';
// Dispatch the findAll from the users resource actionCreators when the route is loaded
const findAll = userResource.actionCreators.findAll;

export default {
  data() {
    return {
// Use $select to add the store's users data to your local route component
      users: this.$select('users'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
