<template>

  <div class="index">
    <Topbar v-if="isShow" />
    <div class="content">
      <Menu v-if="isShow" class="menu"></Menu>
      <transition name="transitionRouter">
        <keep-alive include="placeOrder">
          <router-view class="router" />
        </keep-alive>
      </transition>
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

    .transitionRouter-enter-active,
    .transitionRouter-leave-active {
      transition: all 0.4s;
    }

    .transitionRouter-enter,
    .transitionRouter-leave {
        opacity: 0;
      transform: translate3d( -236px,0, 0);
    }
    .menu{
        position: relative;
        z-index: 2;
    }
    .router {
      flex: 1;

    }
  }
}
</style>