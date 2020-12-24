<template>
  <div class="cardstatus-container">
    <TemplateHeader
      :id="id"
      :order-number="orderNumber"
      :type="type"
      backcolor="#57ff97"
    />
    <div v-for="(option, index) of options" :key="option.id" class="option">
      <p class="option-name">
        <span v-show="index > 0">или</span> Статус {{ index + 1 }}
      </p>
      <select
        :value="option.value"
        @input="onSelect($event.target.value, option.id)"
      >
        <option value="active">Активна</option>
        <option value="waiting">В ожидании</option>
        <option value="inactive">Неактивна</option>
      </select>
    </div>
    <TemplateButtons :id="id">
      <button class="addstatus-btn" @click="addOption">
        + Добавить статус
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
        value: 'active',
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
.cardstatus-container {
  border-top: 1px solid rgba(230, 230, 230, 1);
  background-color: #57ff97;
  .addstatus-btn {
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
  padding: 15px 25px;
  align-items: center;
  select {
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 5px;
    margin-left: 200px;
    padding: 5px;
    width: 50%;
    &:focus,
    &:active {
      outline: none;
      border: 1px solid yellow;
    }
  }
  .option-name {
    display: inline-block;
    width: 100px;
  }
}
</style>
