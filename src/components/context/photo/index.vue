<template>
  <div class="photo">
    <van-pull-refresh
      v-model="refreshing"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        offset="1"
        @load="onLoad"
        direction="down"
        :immediate-check="false"
      >
        <ls-photo :size="size" :imgs="imgs"
        ></ls-photo
      ></van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import LsPhoto from './LsPhoto.vue'

export default {
  components: { LsPhoto },
  props: {
    imgs: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      size: 5,
      count: 0,
      refreshing: false,
      loading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.refreshing = false
        location.reload()
      }, 1000)

      // this.loading = true
      // this.onLoad()
    },
    onLoad () {
      setTimeout(() => {
        this.count++
        this.size = 5 * this.count
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped></style>
