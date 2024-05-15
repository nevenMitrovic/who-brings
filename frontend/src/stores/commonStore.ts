import { defineStore } from 'pinia'

export const useCommonStore = defineStore({
  id: "common-stre",
  state: () => ({
    dateModalVisibility: false,
    locationModalVisibility: false,
  }),
  actions: {
    toggleDateModal() {
      this.dateModalVisibility = !this.dateModalVisibility;
    },
    toggleLocationModal() {
      this.locationModalVisibility = !this.locationModalVisibility;
    }
  },
  getters: {
    getDateModalVisibility: (state) => state.dateModalVisibility,
    getLocationModalVisibility: (state) => state.locationModalVisibility
  }
})
