import navigation from "@c/shared/Navigation/navigation";
import links from "@c/shared/Navigation/links";
import banner from "@c/shared/banner";

const components = {
  navigation,
  links,
  banner,
};

export function getComponent(componentName) {
  return components[componentName];
}
