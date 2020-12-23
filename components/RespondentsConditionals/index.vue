<template>
  <section>
    <!-- <InitTemplate
      v-for="(condition, index) of conditonals"
      :id="condition.id"
      :key="condition.id"
      :order-number="index + 1"
    /> -->
    <component
      :is="types[condition.type]"
      v-for="(condition, index) in conditonals"
      :id="condition.id"
      :key="condition.key"
      :order-number="index + 1"
      :type="condition.type"
    ></component>

    <AddCondition />
  </section>
</template>

<script>
import AddCondition from './AddCondition'
import InitTemplate from './InitTemplate'
import AgeTemplate from './AgeTemplate'

export default {
  components: {
    AddCondition,
  },
  data() {
    return {
      types: {
        init: InitTemplate,
        resage: AgeTemplate,
        cardtype: '',
        cardstatus: '',
      },
    }
  },
  computed: {
    conditonals() {
      return this.$store.getters['polls/conditionals']
    },
  },
}
</script>

<style lang="scss" scoped></style>
