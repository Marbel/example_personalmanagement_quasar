<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ getSelectedUser().firstname + ' ' + getSelectedUser().lastname }}</div>
      <div class="text-subtitle2">{{ getSelectedUser().email }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang='ts'>
import EmployeeListModule from 'src/store/EmployeeList/EmployeeListModule'
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import User from 'src/classes/User'

@Component
export default class EmployeeInfos extends Vue {
    EmployeeListModule = getModule(EmployeeListModule, this.$store)

    getSelectedUser () {
      if (this.EmployeeListModule.SelectedUser == null) {
        return <User>{ id: -1, firstname: '', lastname: '', email: '' }
      }
      return this.EmployeeListModule.SelectedUser
    }
}
</script>
