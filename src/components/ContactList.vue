<script>
export default {
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
    activeIndex: {
      type: Number,
      default: -1,
    },
  }, // <-- Dấu ngoặc nhọn này đóng props lại ở đây!

  emits: ["update:activeIndex"], // Đứng ngang hàng với props

  methods: { // Đứng ngang hàng với props
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
  },
};
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      :class="{ active: index === activeIndex }"
      v-for="(contact, index) in contacts"
      :key="contact._id" 
      @click="updateActiveIndex(index)"
    >
      {{ contact.name }}
    </li>
  </ul>
</template>