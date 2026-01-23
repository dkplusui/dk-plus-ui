<script lang="ts">
  import { defineComponent, toRefs, reactive, ref, onMounted } from 'vue'
  import { useRouter, type RouteRecordNormalized } from 'vue-router'
  export default defineComponent({
    name: 'Index',
    setup() {
      const allRoutes = ref<RouteRecordNormalized[]>([])
      const router = useRouter()
      interface Item {
        name: string
        path: string
        order: number
      }
      const data = reactive({
        routerList: [] as Item[]
      })
      onMounted(() => {
        allRoutes.value = router.getRoutes()

        data.routerList = allRoutes.value
          .map(item => {
            if (item.path === '/index') return
            return {
              name: item.meta.title,
              path: item.path,
              order: item.meta.order || 0
            }
          })
          .filter(item => !!item) as Item[]
        data.routerList.sort((a, b) => {
          return a.order - b.order
        })
      })

      return {
        ...toRefs(data),
        router
      }
    }
  })
</script>
<template>
  <div class="index">
    <h1 class="index-h1">测试组件</h1>
    <div class="index-conten">
      <div class="index-conten-left">
        <ul>
          <li v-for="(item, ind) in routerList" :key="ind">
            <router-link
              :to="item.path"
              :style="$route.path === item.path ? 'color: #34ab98;' : 'color: #aaa;'"
            >
              {{ ind + 1 }} - {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="index-conten-right">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  ::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 8px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 9px;
  }

  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: rgb(28, 177, 164);
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }

  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    // background: #ededed;
    border-radius: 10px;
    background-color: transparent;
  }

  .index {
    width: 100%;
    height: 100vh;
    background: #fff;
    overflow: hidden;

    .index-h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .index-conten {
      width: 98%;
      margin: 0 auto;
      display: flex;

      .index-conten-left {
        height: calc(100vh - 80px);
        overflow: scroll;
        width: 200px;

        ul {
          list-style: none;

          li {
            margin-bottom: 10px;

            a {
              color: #000;
              text-decoration: none;
            }

            ul {
              margin-left: 10px;

              li:hover {
                cursor: pointer;
              }
            }
          }

          a:hover,
          span:hover {
            transition: all 0.2s;
            color: rgb(28, 177, 164) !important;
          }
        }
      }

      .index-conten-right {
        width: calc(100% - 124px);
        height: calc(100vh - 80px);
        overflow: scroll;
        // padding-bottom: 150px;
        box-sizing: border-box;
      }
    }
  }
</style>
