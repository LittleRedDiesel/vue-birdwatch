<template>
    <h1>Showing {{ bird.title }}</h1>
</template>

<script>
import BirdService from '@/services/BirdService.js';
export default {
    props: ['id'],
    data() {
        return {
            bird: {}
        }
    },
    created() {
        BirdService.getBird(this.id)
        .then(response => {
            this.bird = response.data
        })
        .catch(error => {
            console.log('There was an error:' + error.response)
        })
    }
}
</script>