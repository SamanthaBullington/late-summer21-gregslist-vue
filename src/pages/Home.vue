<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <CarForm />
        <HouseForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="c in cars" :key="c.id">
        <!-- Data passed through prop ':car' to child -->
        <CarCard :car="c"/>
      </div>
      <div class="col-4" v-for="h in houses" :key="h.id">
        <HouseCard :house="h"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {carsService } from '../services/CarsService'
import {housesService } from '../services/HousesService'
import CarCard from '../components/CarCard.vue'
import CarForm from '../components/CarForm.vue'
import HouseCard from '../components/HouseCard.vue'
import HouseForm from '../components/HouseForm.vue'

export default {
  name: 'Home',
  setup(){
    // state
    // mounted
    onMounted(async ()=>{
      try {
        await carsService.getCars()
        await housesService.getHouse()
      } catch (error) {
        console.error(error)
      }

    })
    return {
      // state,
      // computeds
      cars: computed(() => AppState.cars),
      houses: computed(() => AppState.houses)
      // methods
    }
  },
  components: {
    CarCard,
    CarForm,
    HouseCard,
    HouseForm
  },
}
</script>
