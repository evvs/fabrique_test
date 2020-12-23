<template>
  <div class="wrapper">
    <div>
      <button
        v-for="tab of tabs"
        :key="tab.to"
        class="tab-button"
        :class="{ active: tab.to === currentRouteName }"
        @click="changeTab(tab.to)"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="container">
      <p class="add-poll">Добавить опрос</p>

      <section class="tabs-body">
        <nuxt-child />
      </section>
      <footer>
        <button class="test-poll-btn">Протестировать опрос</button>
        <button class="next-btn">Далее &#8594;</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tabs: [
        { name: 'Параметры', to: 'options' },
        { name: 'Вопросы', to: 'questions' },
        { name: 'Логика', to: 'logics' },
        { name: 'Условия', to: 'conditions' },
        { name: 'Респонденты', to: 'respondents' },
      ],
    }
  },
  computed: {
    currentRouteName() {
      const routeName = this.$route.name
      const routsArr = routeName.split('-')
      return routsArr[routsArr.length - 1]
    },
  },
  methods: {
    changeTab(path) {
      this.$router.push({ path: `/polls/${path}` })
    },
  },
}
</script>

<style lang="scss" scoped>
.tab-button {
  cursor: pointer;
  color: #409447;
  padding: 5px 20px;
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
  display: flex;
  flex-direction: column;
}
.tabs-body {
  height: 100%;
  overflow: auto;
}
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 3px 4px 1px #eaeaea;
}
footer {
  height: 50px;
  display: flex;
  padding: 0 25px;
  align-items: center;
  justify-content: space-between;
  background: #edf0ef;
  .next-btn {
    padding: 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: #0c9f27;
    color: white;
  }
  .test-poll-btn {
    padding: 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
    color: #0c9f27;
  }
}
p.add-poll {
  padding-top: 20px;
  padding-left: 20px;
  color: #c5c5c5;
  font-weight: bold;
}
</style>
