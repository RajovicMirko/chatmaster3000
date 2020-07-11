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
import formMixin from "@m/form-mixin.js";

export default {
  name: "Login",
  mixins: [formMixin],
  data() {
    return {
      title: "Chat Login",

      formSubmitApi: "auth/handleLogin",

      formComponents: [
        {
          component: "input",
          name: "email",
          type: "text",
          placeholder: "Email",
          label: "",
          model: true,
          value: "",
          validate: function() {
            const errors = [];

            if (this.value.length < 5) errors.push("Min 5 characters");
            if (this.value.length > 20) errors.push("Max 20 characters");

            return errors;
          },
        },
        {
          component: "input",
          name: "password",
          type: "password",
          placeholder: "Password",
          model: true,
          value: "",
        },
        {
          component: "button",
          type: "submit",
          label: "Login",
          btnStyle: "primary",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.login {
}
</style>
