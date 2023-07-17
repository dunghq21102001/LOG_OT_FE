<template>
  <div>
    xin chao
  </div>
</template>
<script>
import API from '../API';
import swal from '../utilities/swal2';

export default {
  data() {
    return {}
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      API.getDashboard()
      .then(res => {
        console.log(res);
      })
      .catch(err => swal.error(err))
    }
  }
}
</script>