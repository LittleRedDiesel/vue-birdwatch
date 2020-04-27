<template>
    <router-link class="card-link" :to="{ name: 'bird-show', params: { id: '1' } }">
        <div class="card -shadow">
            <h4>{{ bird.title }} <BaseIcon name="feather" /></h4>
            <img :src='bird.image' />
            <span>At {{ bird.time}} on {{ bird.date }}</span>
            <p>{{ bird.description }}</p>
            <span>{{ bird.attendees.length }} attending</span>
        </div>
    </router-link>
</template>

<script>
    export default {
        data() {
            return {
                bird: {
                    id: 1,
                    title: 'Robin',
                    image: '@/src/assets/img/robin.jpg',
                    date: 'Thurs April 23, 2020',
                    time: '6:00',
                    attendees: [
                        {id: 'abc123', name: 'Harriet'},
                        {id: 'def456', name: 'Michael'}
                    ]
                }
            }
        },
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
        flex-direction: column;
        background-color: #fff5eb;
        color: #555B6E;
        width: 500px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #ffe0d5;
        margin-bottom: 24px;
        transition: all 0.2s linear;
        cursor: pointer;
    }
    .card:hover {
      transform: scale(1.01);
      box-shadow: 0 3px 12px 0 #ffe0d5, 0 1px 15px 0 #ffe0d5;
    }
    .card > .title {
      margin: 0;
    }
    
    .card-link {
      color: black;
      text-decoration: none;
      font-weight: 100;
    }
</style>