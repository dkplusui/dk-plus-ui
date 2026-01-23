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

const routerList: RouteRecordRaw[] = []

for (const key in pageList) {
  const { order, title, path } = pageList[key]
  if (path === '/index') continue
  const tPath = path.replace('/', '')

  const targetComponent = key.replace('page.ts', tPath + '.vue')

  const route: RouteRecordRaw = {
    path: path,
    name: tPath,
    component: componentList[targetComponent],
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
