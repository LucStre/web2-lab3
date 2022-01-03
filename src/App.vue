<template>
  <div v-if="isAuth">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">Shopping list</router-link> |
      <router-link to="/converter">Converter</router-link>
      <div class="ml-5">👥{{ $store.getters.user }}</div>
    </div>
    <router-view />
  </div>
  <div v-else class="d-flex justify-content-center p-5">
    <user-login class="mt-5"></user-login>
  </div>
</template>

<script>
import UserLogin from "@/components/Login.vue";
export default {
  components: {
    UserLogin,
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
