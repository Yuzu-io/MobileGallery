<template>
<photo :imgs="imgs"></photo>
</template>

<script>
import Photo from '@/components/context/photo/index.vue'

export default {
  components: {
    Photo
  },
  data () {
    return {
      imgs: 'https://api.nmb.show/1985acg.php/'
    }
  }
}
</script>

<style scoped></style>
