<template>
  <li>
    <span>{{ item.id }} - {{ item.name }}</span>
  </li>
</template>

<script>
export default {
    name: "ItemComponent",
    props: {
      item: Object
    }
};
</script>

<style>

</style>