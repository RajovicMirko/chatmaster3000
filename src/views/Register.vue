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
          validate: {
            required: {
              message: "Full name is requiered",
            },
            min: {
              value: 8,
              message: "Full name must be greater then 8 chars",
            },
          },
        },
        {
          component: "input",
          name: "email",
          type: "text",
          placeholder: "Email",
          label: "",
          model: true,
          value: "",
          validate: {
            required: {
              message: "Email is requiered",
            },
            email: {
              message: "Must be a valid email",
            },
          },
        },
        {
          component: "input",
          name: "password",
          type: "password",
          placeholder: "Password",
          model: true,
          value: "",
          validate: {
            required: {
              message: "Password is requiered",
            },
            min: {
              value: 5,
              message: "Password must be greater then 5 chars",
            },
            max: {
              value: 20,
              message: "Password must have less then 20 chars",
            },
          },
        },
        {
          component: "input",
          name: "repeatPassword",
          type: "password",
          placeholder: "Repeat password",
          model: true,
          value: "",
          validate: {
            required: {
              message: "Repeated password is requiered",
            },
            min: {
              value: 5,
              message: "Repeated password must be greater then 5 chars",
            },
            max: {
              value: 20,
              message: "Repeated password must have less then 20 chars",
            },
            repeatPassword: {
              message: "Repeated password is not same as Password",
            },
          },
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
