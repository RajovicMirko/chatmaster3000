<template>
  <span class="title">{{ appName }}</span>
</template>

<script>
import { name } from "@pj";

export default {
  name: "Banner",
  data() {
    return {
      appName: name,
    };
  },
};
</script>

<style lang="scss">
.title {
  // font-size: 2rem;
}
</style>
