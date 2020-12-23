<template>
  <form @submit.prevent="onSubmit">
    <input v-model="search" type="text" placeholder="Поиск по системе" />
    <button type="submit">
      <font-awesome-icon :icon="['fas', 'search']" />
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>

<style lang="scss" scoped>
form {
  width: 60%;
  font-size: 0;
  display: flex;
  flex-wrap: nowrap;
  padding-top: 5px;
}
input {
  flex-grow: 1;
  padding: 0.4rem;
  border: 1px solid rgba(230, 230, 230, 1);
  border-right: none;
  border-radius: 5px 0 0 5px;
}
button {
  cursor: pointer;
  color: rgb(212, 211, 211);
  padding: 0.4rem;
  background: transparent;
  border: 1px solid rgba(230, 230, 230, 1);
  border-left: none;
  border-radius: 0 5px 5px 0;
}
</style>
