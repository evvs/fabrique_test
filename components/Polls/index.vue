<template>
  <div class="wrapper">
    <button
      v-for="tab of tabs"
      :key="tab"
      class="tab-button"
      :class="{ active: currentTab === tab }"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <section class="tabs-body">
      <!-- <component :is="currentTabComponent" class="tab"></component> -->
      <Respondents />
    </section>
  </div>
</template>

<script>
import Respondents from '../PollsTabs/Respondents'

export default {
  components: {
    Respondents,
  },
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
.wrapper {
  height: 100%;
}
.tabs-body {
  height: 100%;
  box-shadow: 0px 2px 5px 0px #d6d6d6;
}
</style>
