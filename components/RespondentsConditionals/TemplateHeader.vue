<template>
  <div class="template-header">
    <p>Условие {{ orderNumber }}</p>
    <select v-model="selected">
      <option disabled value="">Выберите условие</option>
      <option>Возраст респондента</option>
      <option>Тип карты лояльности</option>
      <option>Статус карты лояльности</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    orderNumber: { type: Number, required: true },
  },
  data() {
    return {
      selected: '',
    }
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
}
</style>
