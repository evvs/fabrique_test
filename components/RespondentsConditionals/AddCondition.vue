<template>
  <div class="_add-condition">
    <div class="_add-condition-inner" @click="addCondition">
      <p>
        +
        <br />
        Нажмите, чтобы добавить новое условие выборки.
        <br />
        Все условия связываются между собой логичиским "И"
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCondition() {
      this.$store.commit('polls/addCondition')
    },
  },
}
</script>

<style lang="scss" scoped>
._add-condition {
  padding: 25px;
  ._add-condition-inner {
    padding: 15px 0;
    text-align: center;
    color: #409447;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
