<template>
    <div class="display">
        <h1>Bird List</h1>
        <BirdCard v-for="bird in birds" :key="bird.index" :bird="bird" />
    </div>
</template>

<script>
import BirdCard from '@/components/BirdCard.vue';
import BirdService from '@/services/BirdService.js'

export default {
    components: {
        BirdCard
    },
    data() {
        return {
            birds: []
        }
    },
    created() {
        BirdService.getBirds()
        .then(response => {
            this.birds = response.data
        })
        .catch(error => {
            console.log('There was an error:' + error.response)
        })
    }
}
</script>