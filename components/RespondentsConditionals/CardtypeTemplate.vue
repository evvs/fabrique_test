<template>
  <div class="cardtype-container">
    <TemplateHeader
      :id="id"
      :order-number="orderNumber"
      :type="type"
      backcolor="#bde0fc"
    />
    <div v-for="(option, index) of options" :key="option.id" class="option">
      <p>Тип {{ index + 1 }}</p>
      <select
        :value="option.value"
        @input="onSelect($event.target.value, option.id)"
      >
        <option value="gold">Gold</option>
        <option value="platinum">Platinum</option>
      </select>
    </div>
    <TemplateButtons :id="id">
      <button class="addtype-btn" @click="addOption">+ Добавить тип</button>
    </TemplateButtons>
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
        value: 'gold',
      })
    },
    onSelect(value, optionid) {
      this.$store.commit('polls/changeOptionValue', { id: optionid, value })
    },
  },
  component: {
    TemplateHeader,
    TemplateButtons,
  },
}
</script>

<style lang="scss" scoped>
.cardtype-container {
  border-top: 1px solid rgba(230, 230, 230, 1);
  background-color: #bde0fc;
  .addtype-btn {
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
.option {
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  align-items: center;
  select {
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 5px;
    margin-left: 30%;
    padding: 5px;
    width: 50%;
    &:focus,
    &:active {
      outline: none;
      border: 1px solid yellow;
    }
  }
}
</style>
