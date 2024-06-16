import { defineStore } from 'pinia'

export const useBagStore = defineStore('bag', {
  state: () => ({
    items: []
  }),
  actions: {
    addToBag(product) {
      this.items.push(product)
    },
    removeFromBag(index) {
      this.items.splice(index, 1)
    }
  }
})