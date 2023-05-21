<template>
  <div class="bg-white">
    xin chào các bạn
  </div>
</template>

<script>
import { useLanguageStore } from '../stores/lang';
export default {
  setup() {
    const langStore = useLanguageStore()
    return { langStore }
  },
  methods: {
  }
}
</script>
