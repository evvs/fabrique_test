<template>
  <div class="init-container">
    <TemplateHeader
      :id="id"
      :order-number="orderNumber"
      :type="type"
      backcolor="#e7e7e7"
    />
    <TemplateButtons :id="id" />
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
  component: {
    TemplateHeader,
    TemplateButtons,
  },
}
</script>

<style lang="scss" scoped>
.init-container {
  border-top: 1px solid rgba(230, 230, 230, 1);
  background-color: #e7e7e7;
}
</style>
