import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77965612 = () => interopDefault(import('../pages/cautare-google/index.vue' /* webpackChunkName: "pages/cautare-google/index" */))
const _acac14fe = () => interopDefault(import('../pages/bijumd/logo.vue' /* webpackChunkName: "pages/bijumd/logo" */))
const _069056ba = () => interopDefault(import('../pages/bijumd/poster.vue' /* webpackChunkName: "pages/bijumd/poster" */))
const _45fbe060 = () => interopDefault(import('../pages/cozy/label.vue' /* webpackChunkName: "pages/cozy/label" */))
const _58abcc02 = () => interopDefault(import('../pages/cozy/logo.vue' /* webpackChunkName: "pages/cozy/logo" */))
const _5d16192a = () => interopDefault(import('../pages/prontomoda/clubCard.vue' /* webpackChunkName: "pages/prontomoda/clubCard" */))
const _9f4fcd74 = () => interopDefault(import('../pages/prontomoda/clubCardV2.vue' /* webpackChunkName: "pages/prontomoda/clubCardV2" */))
const _68163cc0 = () => interopDefault(import('../pages/shantel/preobrajenie.vue' /* webpackChunkName: "pages/shantel/preobrajenie" */))
const _587d3cc2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _77965612,
    name: "cautare-google"
  }, {
    path: "/bijumd/logo",
    component: _acac14fe,
    name: "bijumd-logo"
  }, {
    path: "/bijumd/poster",
    component: _069056ba,
    name: "bijumd-poster"
  }, {
    path: "/cozy/label",
    component: _45fbe060,
    name: "cozy-label"
  }, {
    path: "/cozy/logo",
    component: _58abcc02,
    name: "cozy-logo"
  }, {
    path: "/prontomoda/clubCard",
    component: _5d16192a,
    name: "prontomoda-clubCard"
  }, {
    path: "/prontomoda/clubCardV2",
    component: _9f4fcd74,
    name: "prontomoda-clubCardV2"
  }, {
    path: "/shantel/preobrajenie",
    component: _68163cc0,
    name: "shantel-preobrajenie"
  }, {
    path: "/",
    component: _587d3cc2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
