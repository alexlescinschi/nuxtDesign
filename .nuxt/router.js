import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _84600d22 = () => interopDefault(import('../pages/cautare-google/index.vue' /* webpackChunkName: "pages/cautare-google/index" */))
const _4c7ff561 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _122e84fd = () => interopDefault(import('../pages/shantel/preobrajenie.vue' /* webpackChunkName: "pages/shantel/preobrajenie" */))
const _abc229f6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cautare-google",
    component: _84600d22,
    name: "cautare-google"
  }, {
    path: "/form",
    component: _4c7ff561,
    name: "form"
  }, {
    path: "/shantel/preobrajenie",
    component: _122e84fd,
    name: "shantel-preobrajenie"
  }, {
    path: "/",
    component: _abc229f6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
