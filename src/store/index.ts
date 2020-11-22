import { store as Store } from 'quasar/wrappers'
import Vuex from 'vuex'
import EmployeeListModule from './EmployeeList/EmployeeListModule'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  EmployeeListModule: EmployeeListModule;
}
export default Store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      EmployeeListModule: EmployeeListModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  })

  return Store
})
