<template>
  <div class="house container-fluid">
    <div class="row">
      <div class="col">
        <HouseForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="h in houses" :key="h.id">
        <HouseCard :house="h"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {housesService } from '../services/HousesService'
import HouseCard from '../components/HouseCard.vue'
import HouseForm from '../components/HouseForm.vue'

export default {
  name: 'HouseMainPage',
  setup(){
    // state
    // mounted
    onMounted(async ()=>{
      try {
        await housesService.getHouse()
      } catch (error) {
        console.error(error)
      }

    })
    return {
      // state,
      // computeds
      houses: computed(() => AppState.houses)
      // methods
    }
  },
  components: {
    HouseCard,
    HouseForm,
  }
}
</script>
