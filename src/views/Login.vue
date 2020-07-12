<template>
  <div class="center-router-view login">
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
import dataMixin from "@m/login/form";

export default {
  name: "Login",
  mixins: [formMixin, dataMixin]
};
</script>

<style lang="scss">
.login {
  .custom-form {
    width: 40%;
    min-width: 300px;
  }
}
</style>
