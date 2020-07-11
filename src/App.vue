<template>
  <div id="app">
    <component :is="$getComponent('navigation')" />
    <router-view class="wrapper" />
  </div>
</template>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  // max-width: 1024px;
  // max-height: 500px;
  background-color: $white;
}
</style>
