<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { useRouter } from 'vitepress'
  import contribution from '../../../.vitepress/json/contribution.json'
  import friendlyLinks from '../../../.vitepress/json/friendlyLinks.json'
  export default defineComponent({
    name: 'Home',
    setup() {
      const router = useRouter()

      const start = (): void => {
        router.go('/zh/document/install.html')
      }

      const handleToGitClick = (): void => {
        window.open('https://github.com/isMrFan/dk-plus-ui')
      }

      const data = reactive({
        bannerList: [
          {
            id: 1,
            title: '简单',
            icon: '🔰',
            message: '简单的API，简单的使用方式，让你的开发更加简单'
          },
          {
            id: 2,
            title: '轻量',
            icon: '🚀',
            message: '轻量的组件，轻量的体积，让你的项目更加轻量'
          },
          {
            id: 3,
            title: '可靠',
            icon: '🔱',
            message: '可靠的组件，可靠的开发团队，让你的项目更加可靠'
          },
          {
            id: 4,
            title: '灵活',
            icon: '🎨',
            message: '灵活的组件，灵活的使用方式，让你的项目更加灵活'
          }
        ],
        contributionList: contribution.contribution,
        FriendlyLink: friendlyLinks.friendlyList
      })

      const handleToGitUserClick = (item: Record<string, string | undefined>): void => {
        if (item.avatar) {
          window.open(item.avatar)
        } else {
          const input = document.createElement('input')
          input.setAttribute('readonly', 'readonly')
          const email = item.email ? item.email : ''
          input.setAttribute('value', email)
          document.body.appendChild(input)
          input.select()
          input.setSelectionRange(0, 9999)
          document.execCommand('copy')
          document.body.removeChild(input)
          alert('已复制邮箱到剪切板')
        }
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
            <p class="text">一套基于 Vue 3 的 UI 组件库</p>
            <p class="text">轻量便捷，打造高效界面；简单灵活，提升开发体验。</p>
          </div>
          <div class="button-list">
            <dk-button type="success" round @click="start">现在开始</dk-button>
            <dk-button class="to-github" round @click="handleToGitClick">
              查看 GitHub
            </dk-button>
          </div>
          <div class="hero-tags" aria-label="技术特点">
            <span>Vue 3</span>
            <span>TypeScript</span>
            <span>轻量组件</span>
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
                <div class="showcase-heading"><strong>组件预览</strong><span>LIVE</span></div>
                <div class="showcase-line"><span>请输入内容...</span><b>搜索</b></div>
                <div class="showcase-cards">
                  <div><b>Button</b><span class="sample-button">确认</span></div>
                  <div><b>Input</b><span class="sample-input">dk-plus</span></div>
                  <div><b>Alert</b><span class="sample-alert">✓ 成功</span></div>
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
          <div class="showcase-badge showcase-badge--bottom">轻量 · 灵活</div>
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
            <div class="contributions-title">共建 dk-plus</div>
            <p class="contributions-description">感谢每一位贡献者，让组件库持续变得更好。</p>
          </div>
          <dk-button type="success" round size="mini" @click="handleToGitClick">
            加入其中
          </dk-button>
        </div>
        <div class="contributions-list">
          <div
            v-for="item in contributionList"
            :key="item.avatar"
            class="list-item"
            :title="item.name"
            @click="handleToGitUserClick({ avatar: item.avatar })"
          >
            <div class="avatar">
              <img :src="item.imgUrl" alt="avatar" />
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <section class="friendship" aria-labelledby="friendly-links-title">
        <h2 id="friendly-links-title" class="friendship-title">友情链接：</h2>
        <div class="friendship-list">
          <a
            v-for="(item, ind) in FriendlyLink"
            :key="ind"
            class="friendship-item"
            :title="item.name"
            target="_blank"
            rel="noopener noreferrer external"
            :href="item.logoSrc"
            :aria-label="`访问 ${item.name}：${item.description}`"
          >
            <img :src="item.logoImg" :alt="`${item.name} 标志`" loading="lazy" />
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
