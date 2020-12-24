<template>
  <div class="age-container">
    <TemplateHeader
      :id="id"
      :order-number="orderNumber"
      :type="type"
      backcolor="#fcf4bd"
    />
    <div v-for="option of options" :key="option.id">
      Диапазон от
      <input
        type="number"
        min="0"
        :value="option.value.from"
        @input="changeValue(option.id, 'from', $event.target.value)"
      />
      до
      <input
        type="number"
        min="0"
        :value="option.value.to"
        @input="changeValue(option.id, 'to', $event.target.value)"
      />
    </div>
    <TemplateButtons :id="id"
      ><button class="addrange-btn" @click="addOption">
        + Добавить диапазон
      </button></TemplateButtons
    >
  </div>
</template>

<script>
import TemplateHeader from './TemplateHeader'
import TemplateButtons from './TemplateButtons'

export default {
  props: {
    id: { type: String, required: true },
    orderNumber: { type: Number, required: true },
    type: { type: String, required: true },
  },
  computed: {
    options() {
      return this.$store.getters['polls/getOptions'](this.id)
    },
  },
  methods: {
    addOption() {
      this.$store.commit('polls/addSelectOption', {
        parentId: this.id,
        value: {
          from: '',
          to: '',
        },
      })
    },
    changeValue(id, dir, value) {
      this.$store.commit('polls/changeRangeValue', {
        value: { [dir]: value },
        id,
      })
    },
  },
  component: {
    TemplateHeader,
    TemplateButtons,
  },
}
</script>

<style lang="scss" scoped>
.age-container {
  border-top: 1px solid rgba(230, 230, 230, 1);
  background-color: #fcf4bd;
  .addrange-btn {
    cursor: pointer;
    color: #73a11c;
    background: transparent;
    border: 1px solid #73a11c;
    border-radius: 5px;
    padding: 5px;
    &:hover {
      color: white;
      background-color: #73a11c;
    }
  }
}
</style>
