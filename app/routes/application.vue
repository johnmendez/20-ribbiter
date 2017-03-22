<!-- Create blank components in routes/application.vue and routes/index.vue so the app doesn't have a build error -->
<template lang="html">
  <div class="">
    <nav class="nav">
      <div class="nav__container">
        <h1><a href="#">Ribbiter</a></h1>
        <div class="nav__right">
          <router-link v-bind:to="{ path: '/ribbits' }"class="nav__right-links"><h1>Ribbits</h1></router-link>
          <router-link v-bind:to="{ path: '/users' }" class="nav__right-links"><h1>Frogs</h1></router-link>
          <router-link v-bind:to="{ path: '/login' }" class="nav__right-links"><h1>Login</h1></router-link>
        </div>
      </div>
    </nav>
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
