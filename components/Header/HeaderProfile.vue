<template>
  <div class="grid-container">
    <div class="avatar"></div>
    <div class="user-info">
      <p class="user-name">Alexander C.</p>
      <p class="user-role">Администратор</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid-container {
  display: flex;
  align-items: center;
  .avatar {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: rgba(106, 104, 238, 0.555);
  }
  .user-info {
    margin-left: 5px;
    .user-name {
      font-weight: bold;
    }
    .user-role {
      color: #bfbfbf;
      font-size: 0.8rem;
    }
  }
}
</style>
