import { defineStore } from 'pinia'

export const useCommonStore = defineStore({
  id: "common-stre",
  state: () => ({
    dateModalVisibility: false,
    locationModalVisibility: false,
    descriptionModalVisibility: false,
  }),
  actions: {
    toggleDateModal() {
      this.dateModalVisibility = !this.dateModalVisibility;
    },
    toggleLocationModal() {
      this.locationModalVisibility = !this.locationModalVisibility;
    },
    toggleDescriptionModal() {
      this.descriptionModalVisibility = !this.descriptionModalVisibility
    },
  },
  getters: {
    getDateModalVisibility: (state) => state.dateModalVisibility,
    getLocationModalVisibility: (state) => state.locationModalVisibility,
    getDescriptionModalVisibility: (state) => state.descriptionModalVisibility,
  }
})
