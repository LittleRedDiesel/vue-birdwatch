<template>
    <figure class="image__wrapper">
    <img
      class="image__item"
      :data-url="source"
      :src="source"
      alt="random image"
    >
  </figure>
</template>

<script>
export default {
  name: "ImageItem",
  props: {
    source: {
      type: String,
      required: true
    }
  }
};
</script>

<style>

</style>