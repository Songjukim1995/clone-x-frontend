<template>
  <div>
    <div class="title-container">
        <h2>Home</h2>
        <div>{{ userStore.name }}님</div>
    </div>
        <p style="font-size: 12px; color: gray;">{{ userStore.placeholder }}</p>

        <TweetBar />
        <FeedList />
  </div>
</template>

<script>
import TweetBar from '@/components/TweetBar.vue';
import FeedList from '@/components/FeedList.vue';
// 1. 유저 스토어를 불러옵니다.
import { useUserStore } from '@/store/user'; 

export default {
  name: "MainPage",
  components: { TweetBar, FeedList },
  data() {
    return {
      // 2. 컴포넌트에서 유저 스토어를 사용할 수 있게 연결합니다.
      userStore: useUserStore()
    }
  }
};
</script>

<style scoped>
.title-container {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>