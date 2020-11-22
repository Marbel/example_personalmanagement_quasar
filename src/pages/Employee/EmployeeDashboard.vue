<template>
  <div class="q-pa-md row items-start q-col-gutter-md">
    <div class="col-6">
      <employee-infos></employee-infos>
    </div>
    <div class="col-6">
      <employee-infos></employee-infos>
    </div>
  </div>
</template>

<script lang='ts'>
import EmployeeListModule from 'src/store/EmployeeList/EmployeeListModule'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import EmployeeInfos from './EmployeeInfos.vue'
import User from 'src/classes/User'
// import ApexCharts from 'apexcharts'

@Component({
  components: { EmployeeInfos }
})
export default class EmployeeDashboard extends Vue {
    @Prop() id!:number;
    EmployeeListModule = getModule(EmployeeListModule, this.$store)

    getSelectedUser () {
      if (this.EmployeeListModule.SelectedUser == null) {
        return <User>{ id: -1, firstname: '', lastname: '', email: '' }
      }
      return this.EmployeeListModule.SelectedUser
    }

    created () {
      if (this.EmployeeListModule.SelectedUser == null && this.id) {
        this.EmployeeListModule.setSelectUser(this.id)
      }
    }
}
</script>
