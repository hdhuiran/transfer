import Transfer from "./Transfer/Transfer";

const components = {
  Transfer,
};

export default {
  install(app) {
    for (let comp in components) {
      app.component(comp, components[comp]);
    }
  },
};
