<template>
  <q-page class="row no-wrap">
    <q-scroll-area class="col-2">
      <q-list bordered separator>
        <q-item clickable v-ripple v-for="person in personalList" :key="person.id" style="height: 200px;">
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
      <router-view />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import User from '../classes/User'

@Component
export default class Personal extends Vue {
  personalList:User[] = [
    { id: 0, firstname: 'Heidi', lastname: 'Ackerman', email: 'H.Ackerman@example.org' },
    { id: 1, firstname: 'Edward', lastname: 'Alderson', email: 'E.Alderson@example.org' },
    { id: 2, firstname: 'Gerd', lastname: 'Wegmann', email: 'G.Wegmann@example.org' },
    { id: 3, firstname: 'Andy', lastname: 'Arbeit', email: 'A.Arbeit@example.org' },
    { id: 4, firstname: 'Reiner', lastname: 'Ernst', email: 'R.Ernst@example.org' },
    { id: 5, firstname: 'Ernst', lastname: 'Haft', email: 'E.Haft@example.org' },
    { id: 6, firstname: 'Paul', lastname: 'Lahner', email: 'P.Lahner@example.org' }
  ]

  sortedPersonList () {
    return this.personalList.concat().sort((a, b) => {
      const nameA = a.lastname.toLowerCase()
      const nameB = b.lastname.toLowerCase()

      if (nameA < nameB) { return -1 }
      if (nameA > nameB) { return 1 }
      return 0
    })
  }
}
</script>
