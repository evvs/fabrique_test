<template>
  <div class="buttons-template">
    <div class="buttons-container">
      <slot></slot>
      <button class="deleteBtn" @click="deleteCondition(id)">
        <font-awesome-icon :icon="['far', 'trash-alt']" /> Удалить условие
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: { id: { type: String, required: true } },
  methods: {
    deleteCondition(id) {
      this.$store.commit('polls/deleteCondition', id)
    },
  },
}
</script>

<style lang="scss" scoped>
.buttons-template {
  padding: 15px 25px;
  padding-left: 325px;
  .buttons-container {
    display: flex;
    justify-content: space-between;
    .deleteBtn {
      cursor: pointer;
      color: rgb(173, 0, 0);
      background: transparent;
      border: 1px solid rgb(173, 0, 0);
      border-radius: 5px;
      padding: 5px;
      &:hover {
        color: white;
        background-color: rgb(173, 0, 0);
      }
    }
  }
}
</style>
