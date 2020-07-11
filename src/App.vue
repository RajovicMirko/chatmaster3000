<template>
  <div id="app">
    <component :is="$getComponent('navigation')" />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  // position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100%;
  // max-width: 1024px;
  // max-height: 500px;
  background-color: $white;
}

#router-wrapper {
  width: 100%;
  height: 100%;
  background: black;
}
</style>
