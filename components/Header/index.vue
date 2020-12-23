<template>
  <header>
    <HeaderInput />
    <HeaderProfile class="header-profile" />
  </header>
</template>

<script>
import HeaderInput from './HeaderInput'
import HeaderProfile from './HeaderProfile'

export default {
  components: {
    HeaderInput,
    HeaderProfile,
  },
}
</script>

<style lang="scss" scoped>
header {
  grid-column-start: 2;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  margin-left: 50px;
  .header-profile {
    margin-left: auto;
  }
}
</style>
