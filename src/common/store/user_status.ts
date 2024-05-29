import { defineStore } from 'pinia'

export const user_status = defineStore('user_status', {
  state: () => {
    return {
      user: null
    }

  },
  getters: {
    getUser: (state: any) => state.user
  },
  actions: {
    async setUser (user: any)  {
      this.user = user
    }
  }

})