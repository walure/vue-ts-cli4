<template>

  <div class="index">
    <Topbar v-if="isShow" />
    <div class="content">
      <Menu  v-if="isShow"></Menu>
      <router-view class="router" />
    </div>
  </div>
</template>

<script>

import layouts from './layouts.ts'
export default layouts
</script>

<style lang="scss" scoped>
.index {
  .content {
    display: flex;
    .router {
      flex: 1;
    }
  }
}
</style>