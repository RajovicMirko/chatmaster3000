import navigation from "@c/shared/Navigation/navigation";
import links from "@c/shared/Navigation/links";
import banner from "@c/shared/banner";

//FORM COMPONENTS
import form from "@c/shared/Form/form";
import title from "@c/shared/Form/title";
import input from "@c/shared/Form/input";
import button from "@c/shared/Form/button";

const components = {
  navigation,
  links,
  banner,

  //FORM COMPONENTS
  form,
  title,
  input,
  button,
};

export function getComponent(componentName) {
  return components[componentName];
}
