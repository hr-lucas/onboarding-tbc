import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const loadingRequest = ref(false)

  return { loadingRequest }
})
