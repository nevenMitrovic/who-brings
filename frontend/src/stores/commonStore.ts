import { defineStore } from 'pinia'

export const useCommonStore = defineStore({
  id: "common-store",
  state: () => ({
    dateModalVisibility: false,
    locationModalVisibility: false,
    descriptionModalVisibility: false,
    itemModalVisibility: false,
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
    toggleItemModal() {
      this.itemModalVisibility = !this.itemModalVisibility
    },
  },
  getters: {
    getDateModalVisibility: (state) => state.dateModalVisibility,
    getLocationModalVisibility: (state) => state.locationModalVisibility,
    getDescriptionModalVisibility: (state) => state.descriptionModalVisibility,
    getItemModalVisibility: (state) => state.itemModalVisibility,
  }
})
