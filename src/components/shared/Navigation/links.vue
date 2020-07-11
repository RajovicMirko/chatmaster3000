<template>
  <ul class="links">
    <li class="link" v-for="link in links" :key="link.name">
      <router-link class="item" :to="link.to">{{ link.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Links",
  data() {
    return {
      links: [
        { name: "Login", to: "/login" },
        { name: "Register", to: "/register" },
        { name: "Chat", to: "/chat" },
      ],
    };
  },
};
</script>

<style lang="scss">
.links {
  display: flex;

  & .link {
    & .item {
      color: $white;
      margin-right: 1rem;
    }
  }
}
</style>
