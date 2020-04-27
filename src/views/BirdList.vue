<template>
    <div class="display">
        <h1>Bird List</h1>
        <BirdCard />
        <BaseIcon />
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