<template>
  <form ref="frm" class="custom-form" @submit="handleSubmit">
    <component :is="$getComponent('title')" v-if="title">{{ title }}</component>
    <component
      v-for="(cmp, i) in formComponents"
      :key="i"
      :is="$getComponent(cmp.component)"
      v-bind="cmp"
      :value.sync="cmp.value"
      :errors="errors"
    />
  </form>
</template>

<script>
export default {
  name: "LoginForm",

  props: {
    title: {
      type: String,
    },
    api: {
      type: String,
      required: true,
    },
    formComponents: {
      type: Array,
      required: false,
    },
  },

  data() {
    return {
      errors: {},
    };
  },

  methods: {
    submit() {
      const payload = {};

      this.formComponents
        .filter((cmp) => cmp.model)
        .map((cmp) => (payload[cmp.name] = cmp.value));

      this.$emit("formSubmite", { api: this.api, payload });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.submit();
      // this.formComponents.map((cmp) => {
      //   if (cmp.validate) {
      //     const result = cmp.validate();
      //     if (result) this.errors[cmp.name] = result;
      //   }
      // });

      // console.log(this.errors);
    },
  },
};
</script>

<style lang="scss">
.custom-form {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
</style>
