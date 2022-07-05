<template>
  <div class="mian-content">
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <menu-bar></menu-bar>
        </el-aside>
        <el-container>
          <el-header>
            <nav-bar class="navbar"></nav-bar>
            <tags-view class="tagsView"></tags-view>
          </el-header>
          <el-main>
            <app-main></app-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup>
import { getNav } from '../api/user'
import MenuBar from '@/layout/components/MenuBar'
import NavBar from '@/layout/components/NavBar'
import AppMain from '@/layout/components/AppMain'
import TagsView from '@/layout/components/TagsView'
async function getNavs() {
  const data = await getNav()
  console.log(data)
}
getNavs()
</script>
<style lang="scss" scoped>
.el-main{
  padding: 20px;
}
.el-header{
  background-color: #17b3a3;
  text-align: center;
  line-height: 50px;
}

</style>
