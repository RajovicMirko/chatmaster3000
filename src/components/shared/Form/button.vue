<template>
  <button :type="type" :class="btnStyle">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",

  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    btnStyle: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="scss" scoped>
$box-shadow-hover: 2px 2px 5px 0
  change-color(
    $color: $black,
    $alpha: 0.3,
  );

button {
  padding: 0.5rem;
  border-radius: 2rem;
  font-size: 1.2rem;

  &:hover {
    box-shadow: $box-shadow-hover;
  }

  &:focus {
    box-shadow: $box-shadow-hover;
  }

  &:active {
    box-shadow: none;
  }

  // PRIMARY COLOR STYLE
  &.primary {
    background-color: $primary;
    color: $white;

    &.outlined {
      @extend .primary;
      border: 1px solid $primary;
      background-color: change-color($color: $primary, $alpha: 0.1);
      color: $primary;

      &:hover,
      &:focus {
        color: $white;
        background-color: change-color($color: $primary, $alpha: 1);
        box-shadow: $box-shadow-hover;
      }

      &:active {
        box-shadow: none;
      }
    }
  }

  // WARNING COLOR STYLE
  &.warning {
    background-color: $warning;
    color: $white;

    &.outlined {
      @extend .warning;
      border: 1px solid $warning;
      background-color: change-color($color: $warning, $alpha: 0.1);
      color: $gray;

      &:hover,
      &:focus {
        color: $white;
        background-color: change-color($color: $warning, $alpha: 1);
        box-shadow: $box-shadow-hover;
      }

      &:active {
        box-shadow: none;
      }
    }
  }
}
</style>
