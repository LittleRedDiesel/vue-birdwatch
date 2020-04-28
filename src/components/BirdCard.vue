<template>
    <router-link class="card-link" :to="{ name: 'bird-show', params: { id: bird.id } }">
        <div class="card -shadow">
            <h4>{{ bird.title }} <BaseIcon name="feather" /></h4>
            <img :src='"~src/assets/img/" + bird.image' />
            <p><b>Sighted:</b> {{ bird.location }}</p>
            <span><b>At:</b> {{ bird.time}} on {{bird.date | formatDate}}</span>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            bird: Object
        }
    }
</script>

<style lang="scss" scoped>
    h4 {
        font-size: 21px;
        font-weight: 700;
        color: #555B6E;
    }

    .card {
        display: flex;
        flex: 1 1 25%;
        flex-direction: column;
        background-color: #fff5eb;
        color: #555B6E;
        padding: 20px;
        border: 2px solid #e29578;
        margin-bottom: 24px;
        transition: all 0.2s linear;
        cursor: pointer;
    }
    .card:hover {
      transform: scale(1.04);
    }
    .card > .title {
      margin: 0;
    }
    
    .card-link {
        display: flex;
        flex: 1 1 25%;
        color: black;
        text-decoration: none;
        font-weight: 100;
        max-width: 24%;
    }
</style>