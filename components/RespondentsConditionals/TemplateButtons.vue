<template>
  <div class="buttons-temaplate">
    <div class="buttons-container">
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
.buttons-temaplate {
  padding: 15px 25px;
  .buttons-container {
    margin-left: auto;
    display: flex;
    width: 70%;
    .deleteBtn {
      cursor: pointer;
      margin-left: auto;
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
