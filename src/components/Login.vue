<template>
  <small-card>
    <h3>Dear unknown user, please login</h3>
    <form @submit.prevent="login" class="card">
      <div class="form-group row">
        <label for="celsius" class="col-sm-4 col-form-label"
          >Enter your name:</label
        >
        <div class="col-8">
          <input
            type="text"
            class="form-control"
            placeholder="username"
            v-model.trim="username"
          />
        </div>
      </div>
      <button class="button" type="submit">Log in</button>
    </form>
  </small-card>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("setUser", this.username);
    },
  },
};
</script>

<style scoped>
.card {
  border: green 10px solid;
  border-radius: 5px;
  padding: 20px 10px 20px 10px;
}
input[type="text"] {
  padding: 15px 15px;
  margin: 8px 8px;
}
label {
  color: green;
}
.button {
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
