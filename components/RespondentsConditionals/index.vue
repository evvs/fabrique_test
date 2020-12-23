<template>
  <section>
    <InitTemplate
      v-for="(condition, index) of conditonals"
      :id="condition.id"
      :key="condition.id"
      :order-number="index + 1"
    />
    <AddCondition />
  </section>
</template>

<script>
import AddCondition from './AddCondition'
import InitTemplate from './InitTemplate'

export default {
  components: {
    AddCondition,
    InitTemplate,
  },
  computed: {
    conditonals() {
      return this.$store.getters['polls/conditionals']
    },
  },
}
</script>

<style lang="scss" scoped></style>
