<template>
  <div class="bg-white">
    {{ $t('login') }}
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
