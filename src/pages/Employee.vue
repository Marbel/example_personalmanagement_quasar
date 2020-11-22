<template>
  <q-page class="row no-wrap">
    <q-scroll-area class="col-2">
      <q-list bordered separator>
        <q-item clickable v-ripple v-for="person in sortedPersonList()" :key="person.id" style="height: 100px;"
        @click="selectEmployee(person.id)"
        active-class="selected-user" :active="EmployeeListModule.SelectedUser != null && person.id === EmployeeListModule.SelectedUser.id">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ person.lastname.charAt(0) }}
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ person.firstname + ' ' + person.lastname }}</q-item-label>
            <q-item-label caption lines="1">{{ person.email }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
    <div class="col-10">
      <router-view :key="getSelectedUser().id + $route.fullPath"/>
    </div>
  </q-page>
</template>

<script lang="ts">
import EmployeeListModule from 'src/store/EmployeeList/EmployeeListModule'
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import User from 'src/classes/User'

@Component
export default class Employee extends Vue {
  EmployeeListModule = getModule(EmployeeListModule, this.$store)

  sortedPersonList () {
    return this.EmployeeListModule.EmployeeList.concat().sort((a, b) => {
      const nameA = a.lastname.toLowerCase()
      const nameB = b.lastname.toLowerCase()

      if (nameA < nameB) { return -1 }
      if (nameA > nameB) { return 1 }
      return 0
    })
  }

  selectEmployee (id:number) {
    this.EmployeeListModule.setSelectUser(id)
    this.$router.push({ path: '/Employee/Dashboard/' + id.toString() }).catch(e => { console.log(e) })
  }

  getSelectedUser () {
    if (this.EmployeeListModule.SelectedUser == null) {
      return <User>{ id: -1, firstname: '', lastname: '', email: '' }
    }
    return this.EmployeeListModule.SelectedUser
  }
}
</script>
<style lang="sass">
.selected-user
  color: white
  background: #F2C037
</style>
