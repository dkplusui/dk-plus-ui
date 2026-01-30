import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// interface PageType {
//   path: string
//   title: string
//   order: number
// }

const pageList = import.meta.glob('../views/component/**/page.ts', {
  eager: true,
  import: 'default'
})
const componentList = import.meta.glob('../views/component/**/**.vue', {})

// Windows 下文件系统大小写不敏感，但 import.meta.glob 的 key 匹配是严格字符串匹配。
// 这里做一次小写映射，避免 DKSelect.vue / DkSelect.vue 这类大小写差异导致页面空白。
const componentListLowerCase: Record<string, unknown> = {}
for (const key in componentList) {
  componentListLowerCase[key.toLowerCase()] = componentList[key]
}

const routerList: RouteRecordRaw[] = []

for (const key in pageList) {
  const { order, title, path } = pageList[key]
  if (path === '/index') continue
  const tPath = path.replace('/', '')

  const targetComponent = key.replace('page.ts', tPath + '.vue')

  const route: RouteRecordRaw = {
    path: path,
    name: tPath,
    component:
      componentList[targetComponent] ||
      (componentListLowerCase[targetComponent.toLowerCase()] as unknown),
    meta: {
      title: title,
      keepAlive: false,
      isunnewList: false,
      order
    }
  }
  routerList.push(route)
}

const Index: Object = () => import('../views/component/index/index.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      title: '首页',
      keepAlive: false,
      isunnewList: false
    },
    children: routerList
  }
]
const router = createRouter({
  history: createWebHashHistory(), //createWebHistory(),
  routes
})
router.beforeEach((to: RouteLocationNormalized, from, next) => {
  NProgress.start()
  const title = to.meta.title == undefined ? 'dk-UI' : 'dk-UI-' + to.meta.title
  window.document.title = title
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
