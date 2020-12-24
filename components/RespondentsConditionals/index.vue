<template>
  <section>
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
import ResageTemplate from './ResageTemplate'
import CardtypeTemplate from './CardtypeTemplate'
import CardstatusTemplate from './CardstatusTemplate'

export default {
  components: {
    AddCondition,
  },
  data() {
    return {
      types: {
        init: InitTemplate,
        resage: ResageTemplate,
        cardtype: CardtypeTemplate,
        cardstatus: CardstatusTemplate,
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
