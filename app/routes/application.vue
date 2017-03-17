<!-- Create blank components in routes/application.vue and routes/index.vue so the app doesn't have a build error -->
<template lang="html">
  <div class="">
    <div class="section">
      <nav class="nav">
        <div class="nav__container">
          <h1><a href="#">Ribbter</a></h1>
          <div class="nav__right">
            <h1><a href="#">Ribbets</a></h1>
            <h1><a href="#">Frogs</a></h1>
            <h1><a href="#">Login</a></h1>
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
