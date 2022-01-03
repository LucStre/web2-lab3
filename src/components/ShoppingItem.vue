<template>
  <li class="shopping-item" :class="{ completed: completed }">
    <input
      class="toggle"
      type="checkbox"
      :checked="completed"
      @input="$emit('update:completed', $event.target.checked)"
    />
    <ShoppingItemLabel :title="title" />
  </li>
</template>

<script>
import { defineComponent } from "vue";
import ShoppingItemLabel from "@/components/ShoppingItemLabel.vue";

export default defineComponent({
  name: "ShoppingItem",
  props: {
    completed: Boolean,
    title: String,
  },
  components: {
    ShoppingItemLabel,
  },
  emits: ["update:completed"],
});
</script>
