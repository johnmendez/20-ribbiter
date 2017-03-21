<!-- Create blank components in routes/application.vue and routes/index.vue so the app doesn't have a build error -->
<template lang="html">
  <div class="">
    <div class="section">
      <nav class="nav">
        <div class="nav__container">
          <h1><a href="#">Ribbter</a></h1>
          <div class="nav__right">
            <router-link v-bind:to="{ path: '/ribbets' }"class="nav__right-links"><h1>Ribbets</h1></router-link>
            <router-link v-bind:to="{ path: '/users' }" class="nav__right-links"><h1>Frogs</h1></router-link>
            <router-link v-bind:to="{ path: '/login' }" class="nav__right-links"><h1>Login</h1></router-link>
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>
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
