<template>FeedItem</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$confirm({
        message: "Are you sure?",
        button: {
          no: "No",
          yes: "Yes",
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: (confirm) => {
          if (confirm) {
            console.log("네");
          }
        },
      });
    },
  },
};
</script>

<style>
</style>