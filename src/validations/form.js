import { Object } from "core-js";

export class Form {
  constructor([formComponents]) {
    this.errors = {};
    this.items = (() => {
      return formComponents.map((item) => {
        const itm = new Component(item);
        return itm;
      });
    })();
  }

  validateRepeatPassword(cmp) {
    let errors = Object.assign([], cmp.validateInput());
    const password = this.items.filter((item) => item.name === "password")[0];
    let result = cmp.validateRepeatPassword(password.value);
    if (result.length) errors.push(...result);
    return errors;
  }

  validate = function() {
    this.items
      .filter((cmp) => cmp.validate)
      .map((cmp) => {
        let errors = [];
        if (cmp.name === "repeatPassword") {
          errors = Object.assign([], this.validateRepeatPassword(cmp));
        } else {
          errors = Object.assign([], cmp.validateInput());
        }

        if (errors.length > 0) {
          this.errors[cmp.name] = errors;
        } else {
          delete this.errors[cmp.name];
        }
      });
  };

  get valid() {
    return Object.keys(this.errors).length === 0;
  }

  get resultModel() {
    const payload = {};

    this.items
      .filter((cmp) => cmp.model)
      .map((cmp) => (payload[cmp.name] = cmp.value));

    return payload;
  }
}

class Component {
  constructor({
    component,
    name,
    type,
    placeholder,
    label,
    model,
    value,
    validate,
    btnStyle,
  }) {
    this.component = component;
    this.name = name;
    this.type = type;
    this.placeholder = placeholder;
    this.label = label;
    this.model = model;
    this.value = value;
    this.validate = validate;
    this.btnStyle = btnStyle;
    this.errors = [];
  }

  validationsLogic = {
    required: () => {
      return !this.value.length;
    },
    min: (val) => {
      return this.value.length < val;
    },
    max: (val) => {
      return this.value.length > val;
    },
    email: () => {
      const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return !emailReg.test(this.value);
    },
    repeatPassword: () => {},
  };

  addMessage(message) {
    const msgIndex = this.errors.indexOf(message);
    if (msgIndex === -1) this.errors.push(message);
  }

  removeMessage(message) {
    this.errors = this.errors.filter((err) => err !== message);
  }

  validateRepeatPassword(password) {
    const fn = "repeatPassword";

    const result = this.value !== password;
    const msg = this.validate[fn].message;

    if (result) {
      this.addMessage(msg);
    } else {
      this.removeMessage(msg);
    }

    return this.errors;
  }

  validateInput() {
    Object.keys(this.validate).map((fn) => {
      const obj = this.validate[fn];

      if (this.validationsLogic[fn]) {
        const result = this.validationsLogic[fn](obj.value);
        const msg = obj.message;

        if (result) {
          this.addMessage(msg);
        } else {
          this.removeMessage(msg);
        }
      }
    });

    return this.errors;
  }
}
