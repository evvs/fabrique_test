<template>
  <header>
    <div class="logo-wrapper"><div class="logo"></div></div>
    <HeaderInput class="header-input" />
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
  // background-color: rgba(255, 0, 0, 0.171);
  // min-height: 100px;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  .logo-wrapper {
    width: 100px;
    display: flex;
    justify-content: center;
    .logo {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      background-color: rgba(175, 6, 6, 0.952);
    }
  }
  .header-profile {
    margin-left: auto;
  }
  .header-input {
    margin-left: 50px;
  }
}
</style>
