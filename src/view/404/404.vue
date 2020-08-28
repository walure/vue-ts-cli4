<template>
  <div class="n404">

    <h1>404</h1>
    <h2>哦！你迷路了</h2>
    <p>
      您要查找的页面不存在。您如何到达这里是一个谜。但是您可以单击下面的按钮以返回首页。
    </p>
    <router-link to="/" class="btn green">首页</router-link>
    <div id="svgContainer"></div>
  </div>

</template>

<script lang="ts">
import bodymovin from "./bodymovin";
import animationData from "./data";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "n404",
})
export default class n404 extends Vue {
  mounted() {
    console.log(bodymovin);
    var svgContainer = document.getElementById("svgContainer");
    var animItem = bodymovin.loadAnimation({
      wrapper: svgContainer,
      animType: "svg",
      loop: true,
      animationData: JSON.parse(animationData),
    });
  }
}
</script>

<style scoped lang="scss">

.n404 {
  width: 90%;
  margin: auto;
  user-select: none;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
}
h1 {
  font-size: 34px;
  margin: 15px 0px;
  font-weight: bold;
  color: $green;
}

h2 {
  font-weight: bold;
  font-size: 20px;
}

.btn {
  z-index: 1;
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  font-weight: bold;
  margin: 5px auto;
  display: inline-block;
  overflow: hidden;
}
.btn.green {
  border: 4px solid ($green);
  color: ($blue);
}
.btn.green:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 100%;
  background: ($green);
  z-index: -1;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}
.btn.green:hover {
  color: ($white);
  background: ($green);
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}
.btn.green:hover:before {
  width: 100%;
}

#svgContainer {
  width: 300px;
  background-color: white;

  margin: 20px auto;
}
</style>