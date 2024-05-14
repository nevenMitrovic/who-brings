import { defineStore } from 'pinia'

export const useCommonStore = defineStore({
  id: "common-stre",
  state: () => ({
    dateModalVisibility: false,
  }),
  actions: {
    toggleDateModal() {
      this.dateModalVisibility = !this.dateModalVisibility;
    }
  },
  getters: {
    getDateModalVisibility: (state) => state.dateModalVisibility,
  }
})
