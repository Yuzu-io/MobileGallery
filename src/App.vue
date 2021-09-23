<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  },
  created () {
    if (this.isMobile()) {
      this.$router.replace('/home')
    } else {
      this.$router.replace('/pc')
    }
  }
}
</script>

<style lang="less"></style>
