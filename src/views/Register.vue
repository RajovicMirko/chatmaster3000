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
import formMixin from "@m/form-mixin.js";

export default {
  name: "Register",
  mixins: [formMixin],
  data() {
    return {
      title: "Chat Register",

      formSubmitApi: "auth/handleRegister",

      formComponents: [
        {
          component: "input",
          name: "fullName",
          type: "text",
          placeholder: "Full name",
          label: "",
          model: true,
          value: "",
        },
        {
          component: "input",
          name: "email",
          type: "text",
          placeholder: "Email",
          label: "",
          model: true,
          value: "",
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
          component: "input",
          name: "repeatPassword",
          type: "password",
          placeholder: "Repeat password",
          model: true,
          value: "",
        },
        {
          component: "button",
          type: "submit",
          label: "Register",
          btnStyle: "warning",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
