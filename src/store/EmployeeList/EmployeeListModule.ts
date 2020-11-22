import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import User from 'src/classes/User'

@Module({
  namespaced: true,
  name: 'EmployeeListModule'
})
export default class EmployeeListModule extends VuexModule {
    EmployeeList:User[] = [
      { id: 0, firstname: 'Heidi', lastname: 'Ackerman', email: 'H.Ackerman@example.org' },
      { id: 1, firstname: 'Edward', lastname: 'Alderson', email: 'E.Alderson@example.org' },
      { id: 2, firstname: 'Gerd', lastname: 'Wegmann', email: 'G.Wegmann@example.org' },
      { id: 3, firstname: 'Andy', lastname: 'Arbeit', email: 'A.Arbeit@example.org' },
      { id: 4, firstname: 'Reiner', lastname: 'Ernst', email: 'R.Ernst@example.org' },
      { id: 5, firstname: 'Ernst', lastname: 'Haft', email: 'E.Haft@example.org' },
      { id: 6, firstname: 'Paul', lastname: 'Lahner', email: 'P.Lahner@example.org' }
    ]

    selectedUser:number | null = null

    @Mutation
    SET_SELECT_USER (selectedUser: number | null) {
      this.selectedUser = selectedUser
    }

    @Mutation
    SET_USER_PROP (id:number, properties:User) {
      this.EmployeeList[id].firstname = properties.firstname
      this.EmployeeList[id].lastname = properties.lastname
      this.EmployeeList[id].email = properties.email
    }

    @Action
    setSelectUser (id:number) {
      this.SET_SELECT_USER(id)
    }

    @Action
    resetSelectUser () {
      this.SET_SELECT_USER(null)
    }

    @Action
    setUser (id:number, properties:User) {
      this.SET_USER_PROP(id, properties)
    }

    get Employees () {
      return this.EmployeeList
    }

    get SelectedUser () {
      if (this.selectedUser == null) {
        return null
      }
      return this.EmployeeList[this.selectedUser]
    }
}
