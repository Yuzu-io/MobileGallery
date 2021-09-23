<template>
  <div class="layout">
    <nav-bar :title="title">
      <van-icon slot="left" name="wap-nav" @click="showPopup" size="18" />
    </nav-bar>
    <van-popup
      v-model="show"
      position="left"
      :style="{ width: '40%', height: '100%' }"
    >
      <van-cell
        v-for="(item, index) in titleGroup"
        :key="item.title"
        :title="item.title"
        clickable
        @click.native="replaceTitle(index)"
        :to="item.to"
      />
    </van-popup>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      title: '首页',
      titleGroup: [
        {
          title: '首页',
          to: 'index'
        },
        {
          title: '图库1',
          to: 'photo1'
        },
        {
          title: '图库2',
          to: 'photo2'
        },
        {
          title: '图库3',
          to: 'photo3'
        }
      ],
      show: false
    }
  },
  created () {
    this.title = this.$route.meta.title
  },
  methods: {
    showPopup () {
      this.show = !this.show
    },
    replaceTitle (index) {
      this.title = this.titleGroup[index].title
      this.show = !this.show
    }
  }
}
</script>

<style scoped></style>
