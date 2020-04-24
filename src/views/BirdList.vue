<template>
    <div>
        <h1>Bird Listing</h1>

        <router-link :to="{ name: 'bird-show', params: { id: '1' } }">Show bird 1</router-link>
    </div>
</template>
