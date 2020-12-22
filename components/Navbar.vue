<template>
  <nav>
    <ul class="nav-buttons">
      <li v-for="(link, index) in links" :key="index" class="link-wrapper">
        <nuxt-link :to="link.to" active-class="active">
          <div
            class="inner-wrapper"
            :class="{ active: activeLink === link.name }"
            @click="activeLink = link.name"
          >
            <span class="link-icon"
              ><font-awesome-icon :icon="link.icon"
            /></span>
            <p>{{ link.text }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeLink: 'polls',
      links: [
        {
          name: 'polls',
          text: 'Опросы',
          icon: ['far', 'file-alt'],
          to: '/polls',
        },
        {
          name: 'users',
          text: 'Пользователи',
          icon: ['far', 'user'],
          to: '/users',
        },
        {
          name: 'black-lists',
          text: 'Черные списки',
          icon: ['far', 'flag'],
          to: '/black-lists',
        },
        {
          name: 'call-center',
          text: 'Кол-центр',
          icon: ['fas', 'phone-alt'],
          to: '/call-center',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  .nav-buttons {
    min-height: 100px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    a {
      color: #000;
      text-decoration: none;
    }
    uL {
      margin-left: 0;
      padding-left: 0;
    }
    li {
      list-style-type: none;
    }
    .active {
      background: #f5f2f2;
      font-weight: bold;
    }
    .link-wrapper {
      font-size: 0.7rem;
      text-align: center;
      margin-bottom: 5px;
      .inner-wrapper {
        padding: 5px;
        border-radius: 5px;

        &:hover,
        &:focus {
          border: 2px solid rgba(221, 233, 175, 0.7);
          font-weight: bold;
          color: rgba(221, 233, 175, 1);
        }
      }
    }
    .link-icon {
      font-size: 1.7rem;
    }
  }
}
</style>
