export default {
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
          // value: "",
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
          // value: "",
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
          component: "button",
          type: "submit",
          label: "Login",
          btnStyle: "primary",
        },
      ],
    };
  },
};
