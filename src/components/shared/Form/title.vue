<template>
  <span class="form-title"><slot></slot></span>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style lang="scss">
.form-title {
  align-self: center;
  font-size: 1.8rem;
  margin: 0.8rem 0;
  color: $primary;
}
</style>
