<template>
  <div id="app">
    <Layouts />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layouts from '@/view/layouts/layouts.vue';

@Component({
  components: {
    Layouts
  },
})
export default class App extends Vue {}
</script>
