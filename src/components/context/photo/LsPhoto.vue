<template>
  <div class="ls-photo">
    <van-image v-for="item in size" :key="item" :src="imgs + item" alt="">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      // count: 0
    }
  },
  methods: {
    // load () {
    //   this.count++
    //   console.log(this.count)
    // }
  }
}
</script>

<style scoped>
.van-image {
  width: 100%;
  height: 100%;
}
</style>
