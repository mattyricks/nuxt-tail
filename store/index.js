export const state = () => ({})

export const mutations = {}

export const actions = {
  /**
   * Called server-side at initialization
   * @param {Object} context
   * @param {Object} req
   */
  async nuxtServerInit(context, { req }) {
    // Set token from cookies when defined and fetch user
    // if (req && req.headers.cookie) {
    //   const cookie = cookieparser.parse(req.headers.cookie)
    //   if (cookie.token) {
    //     try {
    //       await context.commit(
    //         'auth/setToken',
    //         { token: cookie.token },
    //         { root: true }
    //       )
    //       await context.dispatch('user/fetchUser', {}, { root: true })
    //     } catch (error) {
    //       return Promise.reject(error)
    //     }
    //   } else {
    //     await context.commit('user/setUser', { user: false }, { root: true })
    //   }
    // }
  },
}
