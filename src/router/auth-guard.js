import store from '../store'

export default (to, from, next) => {
  console.log(store)
  if (store.getters.user.id) {
    next()
  } else {
    next('/login')
  }
}