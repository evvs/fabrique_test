<template>
  <div class="container">
    <p class="redirect">You will be redirected in {{ timeToRedirect }}...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeToRedirect: 3,
    }
  },
  watch: {
    timeToRedirect() {
      if (this.timeToRedirect === 0) {
        this.redtirectToPolls()
      }
    },
  },
  created() {
    this.intervalId = setInterval(() => {
      this.timeToRedirect -= 1
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    redtirectToPolls() {
      this.$router.replace({ path: 'polls' })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.redirect {
  font-size: 2rem;
}
</style>
