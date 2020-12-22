<template>
  <header>
    <div class="logo"></div>
    <HeaderInput />
  </header>
</template>

<script>
import HeaderInput from '@/components/HeaderInput'

export default {
  components: {
    HeaderInput,
  },
}
</script>

<style lang="scss" scoped>
header {
  // background-color: rgba(255, 0, 0, 0.171);
  min-height: 100px;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  .logo {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: rgba(175, 6, 6, 0.952);
  }
}
</style>
