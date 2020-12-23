<template>
  <div class="template-header">
    <div v-show="orderNumber !== 1" class="and">И</div>
    <p>Условие {{ orderNumber }}</p>
    <select v-model="paymentMethod">
      <option disabled value="init">Выберите условие</option>
      <option value="resage">Возраст респондента</option>
      <option value="cardtype">Тип карты лояльности</option>
      <option value="cardstatus">Статус карты лояльности</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    orderNumber: { type: Number, required: true },
    type: { type: String, required: true },
  },
  computed: {
    paymentMethod: {
      get() {
        return this.type
      },
      set(value) {
        this.$store.commit('polls/changeType', {
          id: this.id,
          type: value,
        })
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.template-header {
  position: relative;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  select {
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 5px;
    padding: 5px;
    width: 70%;
    &:focus,
    &:active {
      outline: none;
      border: 1px solid yellow;
    }
  }
  .and {
    position: absolute;
    display: inline-block;
    padding: 5px 15px;
    top: -15px;
    left: 20px;
    border: 1px solid rgba(224, 224, 224, 0.5);
    border-radius: 10px;
  }
}
</style>
