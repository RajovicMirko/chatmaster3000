<template>
  <div class="input">
    <label v-if="formItem.label" :for="formItem.id">{{ formItem.label }}</label>
    <input
      :id="formItem.name"
      :type="formItem.type"
      :placeholder="formItem.placeholder"
      :value="formItem.value"
      @input="handleInput"
      :class="{
        invalid: formItem.errors && formItem.errors.length > 0,
      }"
    />
    <small
      class="error-message"
      :class="{ visible: formItem.errors && formItem.errors.length > 0 }"
      >{{ formItem.errors[0] }}</small
    >
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    formItem: {
      type: Object,
      required: true,
    },
  },

  methods: {
    validateComponent() {
      this.formItem.validateInput();
    },
    handleInput(e) {
      this.$emit("update:value", e.target.value);
      this.validateComponent();
    },
  },
};
</script>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
  // margin-bottom: 1rem;
  & label {
    color: change-color($color: $gray, $alpha: 1);
    margin: 0 0.5rem;
  }

  & .error-message {
    color: $negative;
    margin: 0.2rem 0;
    min-height: 1rem;
    display: hidden;

    &.visible {
      display: visible;
    }
  }

  $box-shadow-hover: 0 0 2px 0
    change-color(
      $color: $primary,
      $alpha: 1,
    );
  $box-shadow-focus: 0 0 0 2px
    change-color(
      $color: $primary,
      $alpha: 1,
    );

  input {
    height: 2rem;
    line-height: 2rem;
    padding: 0 1rem;
    border-radius: 1rem;
    border: 1px solid change-color($color: #000000, $alpha: 0.4);

    &:hover {
      box-shadow: $box-shadow-hover;
    }

    &:focus {
      box-shadow: $box-shadow-focus;
    }

    &.invalid {
      $box-shadow-negative: 0 0 0 2px
        change-color(
          $color: $negative,
          $alpha: 1,
        );
      border-color: $negative;
      color: $negative;
      box-shadow: $box-shadow-negative;
    }
  }
}
</style>
