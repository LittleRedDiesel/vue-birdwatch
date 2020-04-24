<template>
    <div class="display">
        <h1>Bird List</h1>
        <BirdCard />
    </div>
</template>

<script>
import BirdCard from '@/components/BirdCard.vue';

export default {
    components: {
        BirdCard
    }
}
</script>