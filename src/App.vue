
<template>
  <RouterView />
</template>

<script>
import { useLanguageStore } from './stores/lang'
import { RouterLink, RouterView } from 'vue-router'
export default {
  setup() {
    const langStore = useLanguageStore()
    return { langStore }
  },
  data() {
    return {}
  },
  created() {
    this.getCurrentLang()
  },
  methods: {
    getCurrentLang() {
      this.$i18n.locale = this.langStore.getLocate
    }
  }
}
</script>
<style scoped></style>
