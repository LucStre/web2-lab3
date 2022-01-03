<template>
  <small-card>
    <h3>Currency converter</h3>
    <form class="card">
      <div class="form-group row">
        <label for="hrvatskakuna" class="col-sm-4 col-form-label"
          >Hrvatska kuna (kn)
        </label>
        <div class="col-8">
          <input
            type="number"
            class="form-control"
            placeholder="kn"
            v-model.number="valueKuna"
            @keyup="kunaToEuro"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="euro" class="col-4 col-form-label">Euro (€)</label>
        <div class="col-8">
          <input
            type="number"
            class="form-control"
            placeholder="€"
            v-model.number="valueEuro"
            @keyup="euroToKuna"
          />
        </div>
      </div>
    </form>
  </small-card>
</template>

<script>
export default {
  data() {
    return {
      valueKuna: 1,
      valueEuro: 0.13,
    };
  },
  methods: {
    kunaToEuro() {
      this.valueEuro = Math.round(this.valueKuna * 0.13299574 * 100) / 100;
    },
    euroToKuna() {
      this.valueKuna = Math.round(this.valueEuro * 7.51814 * 100) / 100;
    },
  },
};
</script>

<style scoped>
.card {
  border: green 10px solid;
  border-radius: 5px;
  padding: 20px 0px 20px 0px;
}
input[type="number"] {
  padding: 10px 12px;
  margin: 8px 0;
}
label {
  color: green;
}
</style>
