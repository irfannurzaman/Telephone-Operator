import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex';

import layout from '~/layouts/store';
import auth from '~/app/auth/auth.store';
import foc from '~/app/modules/FOC/store';

Vue.use(Vuex);

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
} = createDirectStore({
  modules: {
    layout,
    auth,
    foc,
  },
});

/*
TODO

Original version:

export default store.original;

But due to the circular dependencies of direct-vuex some of the typings will be broken (the entire app).
Need a better way to handle this
*/
export default new Vuex.Store({});

export {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
};

export type AppStore = typeof store;
declare module 'vuex' {
  interface Store<S> {
    direct: AppStore;
  }
}
