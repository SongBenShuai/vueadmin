<template>
  <div class="nav">
    <h4>VueAdmin后台管理系统</h4>
    <el-avatar
      src="https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/5a9f48118166308daba8b6da7e466aab.jpg"
      size="small"
    />
    <div class="reget">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          tset<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="CirclePlus">个人中心</el-dropdown-item>
            <el-dropdown-item :icon="Check" @click="showConfirm"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('user/getInfo')
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  padding-left: 500px;

  .el-avatar {
    margin-top: 15px;
    margin-left: 350px;
  }
}

.el-dropdown {
  margin-top: 17px;
  margin-left: 30px;
}
</style>
