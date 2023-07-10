import TestComponent from './TestComponent.vue';
export const idOptions = Symbol();
export default {
  install: (app, options) => {
    app.component('test', TestComponent);
    app.provide(idOptions, options);
  },
};
