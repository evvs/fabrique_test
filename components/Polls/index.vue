<template>
  <div id="dynamic-component-demo" class="demo">
    <button
      v-for="tab of tabs"
      :key="tab"
      class="tab-button"
      :class="{ active: currentTab === tab }"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <!-- <component :is="currentTabComponent" class="tab"></component> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'Параметры',
      tabs: ['Параметры', 'Вопросы', 'Логика', 'Условия', 'Респонденты'],
    }
  },
}
</script>

<style lang="scss" scoped>
.tab-button {
  cursor: pointer;
  color: #409447;
  padding: 15px 20px;
  background: transparent;
  border: none;
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
}
.active {
  color: black;
  font-weight: bold;
  border-bottom: 2px solid #dcff47;
}
</style>
