<template>
  <div class="menu">
    <a-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange" :default-selected-keys="['/index']">
      <a-menu-item key="/index" @click="linkTo">
        <a-icon type="home" />
        首页
      </a-menu-item>
       <a-menu-item key="/presonal" @click="linkTo">
        <a-icon type="home" />
        人员管理
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
    };
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    linkTo(e){
      console.log(e,this.$route.path)
      if(this.$route.path!=e.key){
      this.$router.push(e.key)
      }
    }
  },
};
</script>
<style lang="scss" scoped>
  .menu{
    background: $white;
  }
</style>