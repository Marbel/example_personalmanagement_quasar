<template>
  <q-page padding>
    <div style="width: 100%;">
      <q-date
        v-model="dateString"
        :events="events"
        :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// we import all of `date`
import { date } from 'quasar'

@Component
export default class Vacation extends Vue {
  dateNow = Date.now();
  dateString = this.dateNow.toString();
  events = [
    date.formatDate(date.addToDate(this.dateNow, { days: -1 }), 'YYYY/MM/DD'),
    date.formatDate(date.addToDate(this.dateNow, { days: -10 }), 'YYYY/MM/DD'),
    date.formatDate(date.addToDate(this.dateNow, { days: 5 }), 'YYYY/MM/DD'),
    date.formatDate(date.addToDate(this.dateNow, { days: 10 }), 'YYYY/MM/DD')
  ]
}
</script>
