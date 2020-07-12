<template>
  <div class="center-router-view register">
    <component
      :is="$getComponent('form')"
      :title="title"
      :api="formSubmitApi"
      :formComponents="formComponents"
      @formSubmite="formSubmite"
    />
  </div>
</template>

<script>
import formMixin from "@m/form/form-mixin.js";
import dataMixin from "@m/register/form";

export default {
  name: "Register",
  mixins: [formMixin, dataMixin]
};
</script>

<style lang="scss">
.register {
  .custom-form {
    width: 40%;
    min-width: 300px;
  }
}
</style>