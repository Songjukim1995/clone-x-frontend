<template>
  <div class="feed-list-container">
    <div v-if="feedStore.feedData.length > 0">
      <div class="feed-container" v-for="feed in feedStore.feedData" :key="feed.id">
        <div class="feed-header">
          <div class="feed-content">{{ feed.content }}</div>
          <button class="feed-delete-button">X</button>
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
import { useFeedStore } from '../store/feed' // 1번에서 만든 스토어 가져오기

export default {
  name: "FeedList",
  data() {
    return {
      // 1️⃣번 요구사항: 스토어 연결
      feedStore: useFeedStore()
    }
  },
  created() {
    // 3️⃣번 요구사항: 화면이 켜지자마자 데이터를 가져오는 액션 실행!
    this.feedStore.getFeedData()
  }
}
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