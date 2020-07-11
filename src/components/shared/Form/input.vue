<template>
  <div class="input">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    value: {
      required: true,
    },
  },
};
</script>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
  & label {
    color: change-color($color: $gray, $alpha: 1);
    margin: 0 0.5rem;
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
  margin-bottom: 1rem;
  border: 1px solid change-color($color: #000000, $alpha: 0.4);

  &:hover {
    box-shadow: $box-shadow-hover;
  }

  &:focus {
    box-shadow: $box-shadow-focus;
  }
}
</style>
