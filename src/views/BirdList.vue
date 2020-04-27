<template>
    <div class="display">
        <h1>Bird List</h1>
        <BirdCard v-for="bird in birds" :key="bird.index" :bird="bird" />
        <BaseIcon />
    </div>
</template>

<script>
import BirdCard from '@/components/BirdCard.vue';
import axios from 'axios'

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
        axios
        .get('http://localhost:3000/events')
        .then(response => {
            this.birds = response.data
        })
        .catch(error => {
            console.log('There was an error:' + error.response)
        })
    }
}
</script>