<template>
  <div>
    <Search v-if="isShow">
      <a-table :columns="columns" :data-source="data" slot="result">
        <router-link slot="name" to="/index/detail" slot-scope="text">{{ text }}</router-link>

        <span slot="customTitle">
          <a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a  @click="goDetail">Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions
            <a-icon type="down" /> </a>
        </span>
      </a-table>
    </Search>
    <router-view v-else />
  </div>
</template>
<script>
import index from './index.ts'
export default index
</script>
