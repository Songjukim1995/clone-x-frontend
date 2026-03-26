<template>
  <div class="feed-list-container">
    <div v-if="feedStore.feedData.length > 0">
      <div
        class="feed-container"
        v-for="feed in feedStore.feedData"
        :key="feed.id"
      >
        <div class="feed-header">
          <div class="feed-content">{{ feed.content }}</div>
          <button class="feed-delete-button" @click="handleClick(feed)">X</button>
        </div>
        <div class="feed-name">{{ feed.user.name }}</div>
      </div>
    </div>
    <div v-else>
      <div>피드가 없습니다.</div>
    </div>
  </div>
</template>

<script>
import { useFeedStore } from "@/store/feed";
export default {
  name: "FeedList",
  data() {
    return {
      feedStore: useFeedStore(),
    };
  },
  methods: {
    handleClick(feed) {
      this.$confirm({
        message: "정말 삭제하시겠습니까?",
        button: {
          no: "아니요",
          yes: "네",
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: (confirm) => {
          if (confirm) {
            this.feedStore.removeFeed(feed.id);
          }
        },
      });
    },
  },
  created() {
    this.feedStore.getFeedData();
  },
};
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}

.feed-container {
  height: 80px;
  background-color: white;
  margin: 10px 0px;
  color: black;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.feed-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.feed-content {
  padding: 1%;
}

.feed-delete-button {
  background: none;
  border: none;
  cursor: pointer;
}

.feed-name {
  text-align: right;
  font-size: 12px;
}
</style>