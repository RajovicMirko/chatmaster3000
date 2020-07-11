<template>
  <form ref="frm" class="custom-form" @submit="handleSubmit">
    <component :is="$getComponent('title')" v-if="title">{{ title }}</component>

    <component
      v-for="(cmp, i) in form.items"
      :key="i"
      :is="$getComponent(cmp.component)"
      v-bind="cmp"
      :value.sync="cmp.value"
      :formItem="cmp"
    />
  </form>
</template>

<script>
export default {
  name: "CustomForm",

  props: {
    title: {
      type: String,
    },
    api: {
      type: String,
      required: false,
    },
    formComponents: {
      type: Array,
      required: false,
    },
  },

  data() {
    return {
      form: {},
    };
  },

  mounted() {
    this.form = this.$newForm(this.formComponents);
    console.log(this.form);
  },

  methods: {
    submit() {
      const payload = this.form.resultModel;
      this.$emit("formSubmite", { api: this.api, formData: payload });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validate();
      if (this.form.valid) this.submit();
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
