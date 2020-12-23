<template>
  <div class="flex-container">
    <img src="@/assets/asap.svg" alt="coming-soon" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.flex-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 30%;
  @media screen and (max-width: 576px) {
    max-width: 80%;
  }
}
</style>
