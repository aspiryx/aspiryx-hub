export const useAppStore = defineStore({
  id: 'app-store',
  state: () => ({
    immersiveMode: false,
    background: false,
  }),
  actions: {
    toggleImmersiveMode() {
      this.immersiveMode = !this.immersiveMode
    },
    toggleBackground() {
      this.background = !this.background
    },
  }
})