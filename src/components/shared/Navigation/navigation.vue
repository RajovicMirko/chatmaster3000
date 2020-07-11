<template>
  <div class="nav">
    <component class="nav-banner" :is="$getComponent('banner')" />
    <component class="nav-links" :is="$getComponent('links')" />
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: $primary;
  color: $white;

  & .nav-banner {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
