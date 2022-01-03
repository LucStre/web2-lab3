<template>
  <label>{{ title }}</label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShoppingItemLabel",
  props: {
    title: String,
  },
});
</script>
