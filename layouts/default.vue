<template>
  <div class="grid-container">
    <Header />
    <Navbar />
    <main class="main-container"><Nuxt /></main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Header,
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
.grid-container {
  padding: 10px;
  height: 100vh;
  display: grid;
  grid-template-columns: 95px 1fr;
  grid-template-rows: 100px 1fr 100px 100px;

  .main-container {
    grid-row-start: 2;
    grid-row-end: 4;
  }
}
</style>
