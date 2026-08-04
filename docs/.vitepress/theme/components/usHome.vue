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
      <section class="home-hero">
        <div class="hero-copy">
          <div class="explain">
            <p class="text">dk-plus</p>
            <p class="text">A UI component library built for Vue 3.</p>
            <p class="text">Lightweight, flexible components for building polished interfaces faster.</p>
          </div>
          <div class="button-list">
            <dk-button type="success" round @click="start">Get started</dk-button>
            <dk-button class="to-github" round @click="handleToGitClick">View GitHub</dk-button>
          </div>
          <div class="hero-tags" aria-label="Technical highlights">
            <span>Vue 3</span>
            <span>TypeScript</span>
            <span>Lightweight</span>
          </div>
        </div>
        <div class="hero-showcase" aria-hidden="true">
          <div class="showcase-window">
            <div class="showcase-toolbar">
              <i></i><i></i><i></i>
              <span>dk-plus / components</span>
            </div>
            <div class="showcase-body">
              <div class="showcase-nav">
                <span class="active"></span><span></span><span></span><span></span>
              </div>
              <div class="showcase-content">
                <div class="showcase-heading"><strong>Component preview</strong><span>LIVE</span></div>
                <div class="showcase-line"><span>Enter a value...</span><b>Search</b></div>
                <div class="showcase-cards">
                  <div><b>Button</b><span class="sample-button">Confirm</span></div>
                  <div><b>Input</b><span class="sample-input">dk-plus</span></div>
                  <div><b>Alert</b><span class="sample-alert">✓ Success</span></div>
                </div>
                <div class="showcase-controls">
                  <span class="sample-check">✓ Checkbox</span>
                  <span class="sample-switch"><i></i></span>
                  <span class="sample-progress"><i></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="showcase-badge showcase-badge--top">Vue 3</div>
          <div class="showcase-badge showcase-badge--bottom">Light · Flexible</div>
        </div>
      </section>
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
        <div class="contributions-head">
          <div>
            <div class="contributions-title">Built together</div>
            <p class="contributions-description">Thanks to every contributor who helps dk-plus improve.</p>
          </div>
          <dk-button type="success" round size="mini" @click="handleToGitClick">Join us</dk-button>
        </div>
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
      </div>
      <section class="friendship" aria-labelledby="friendly-links-title">
        <h2 id="friendly-links-title" class="friendship-title">Friendly links:</h2>
        <div class="friendship-list">
          <a
            v-for="(item, ind) in FriendlyLink"
            :key="ind"
            class="friendship-item"
            :title="item.name"
            target="_blank"
            rel="noopener noreferrer external"
            :href="item.logoSrc"
            :aria-label="`Visit ${item.name}: ${item.descriptionEn}`"
          >
            <img :src="item.logoImg" :alt="`${item.name} logo`" loading="lazy" />
          </a>
        </div>
      </section>
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
