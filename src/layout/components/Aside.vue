<template>
  <div class="saide">
    <div class="logo"></div>
    <el-scrollbar>
      <el-menu :default-openeds="['2']" class="el-menu-vertical-demo" @select="handelSelect" :collapse="isCollapse"
        @open="handleOpen" @close="handleClose">
        <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item-four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item> -->
        <el-menu-item v-for="(item, index) in routerList" :key="index" :index="item.path">{{ item.meta.title }}
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import router from '../../routes';
const routerList = router.getRoutes()
console.log(routerList)
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handelSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>