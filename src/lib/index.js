import maScroll from '../components/maScroll.vue'
const components = {
  install: function(Vue) {
    Vue.component(maScroll.name, maScroll)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(components) 
}
export default components