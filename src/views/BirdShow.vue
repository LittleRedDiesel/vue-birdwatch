<template>
    <div class="display display-single">
        <h1>Showing {{ bird.title }}</h1>
        <div class="display-half">
            <img :src='"../img/" + bird.image' />
        </div>
        <div class="display-half">
            <p><b>Sighted:</b> {{ bird.location }}</p>
            <span><b>At</b> {{ bird.time}} <b>on</b> {{ bird.date }}</span>
            <p>{{ bird.description }}</p>
            <span>{{ bird.attendees.length }} attending</span>
        </div>
    </div>
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