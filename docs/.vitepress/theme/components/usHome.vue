<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { useRouter } from 'vitepress'
  import contribution from '../../../.vitepress/json/contribution.json'
  import friendlyLinks from '../../../.vitepress/json/friendlyLinks.json'
  export default defineComponent({
    name: 'UsHome',
    setup() {
      const router = useRouter()

      const start = (): void => {
        router.go('/en/document/install.html')
      }

      const handleToGitClick = (): void => {
        window.open('https://github.com/isMrFan/dk-plus-ui')
      }

      const data = reactive({
        bannerList: [
          {
            id: 1,
            title: 'simple',
            icon: '🔰',
            message: 'Simple API, simple usage, making your development easier.'
          },
          {
            id: 2,
            title: 'Lightweight',
            icon: '🚀',
            message:
              'Lightweight components, compact size, making your project more lightweight.'
          },
          {
            id: 3,
            title: 'Reliable',
            icon: '🔱',
            message:
              'Reliable components, a reliable development team, making your project more reliable.'
          },
          {
            id: 4,
            title: 'Flexible',
            icon: '🎨',
            message:
              'Flexible components, flexible usage, making your project more flexible.'
          }
        ],
        contributionList: contribution.contribution,
        FriendlyLink: friendlyLinks.friendlyList
      })

      const handleToGitUserClick = (url: string): void => {
        window.open(url)
      }

      return {
        start,
        handleToGitClick,
        ...data,
        handleToGitUserClick
      }
    }
  })
</script>

<template>
  <div class="home">
    <div class="main">
      <div class="explain">
        <p class="text">dk-plus</p>
        <p class="text">A UI component library based on Vue 3.0.</p>
        <p class="text">
          Lightweight and convenient, creating efficient user interfaces.<br />Simple and
          flexible, enhancing the user experience.
        </p>
      </div>
      <div class="button-list">
        <dk-button type="success" round @click="start">Now let's get started!</dk-button>
        <dk-button class="to-github" round @click="handleToGitClick">
          view GitHub
        </dk-button>
      </div>
      <div class="container">
        <div class="banner-list">
          <div v-for="item in bannerList" :key="item.id" class="list-item">
            <div class="item-title">
              <div class="title">{{ item.title }}</div>
              <div class="icon">{{ item.icon }}</div>
            </div>
            <div class="message">{{ item.message }}</div>
          </div>
        </div>
      </div>
      <div class="contributions">
        <div class="contributions-title">List of contributors:</div>
        <div class="contributions-list">
          <div
            v-for="item in contributionList"
            :key="item.avatar"
            class="list-item"
            :title="item.name"
            @click="handleToGitUserClick(item.avatar)"
          >
            <div class="avatar">
              <img :src="item.imgUrl" alt="avatar" />
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
        <dk-button type="success" round size="mini" @click="handleToGitClick">
          Join in
        </dk-button>
      </div>
      <div class="friendship">
        <div class="friendship-title">Friendly links:</div>
        <div class="friendship-list">
          <a
            v-for="(item, ind) in FriendlyLink"
            :key="ind"
            class="friendship-item"
            :title="item.name"
            target="_blank"
            :href="item.logoSrc"
          >
            <img :src="item.logoImg" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>
      Copyright 2023 dk-plus
      <a href="https://beian.miit.gov.cn/">京ICP备2022007747号-2</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style/home.scss';
</style>
