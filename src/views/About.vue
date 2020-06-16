<template>
  <div class="about">
    <h1>インストール方法</h1>
      <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="PC" name="first">PC
        <ol class="pp">
          <li>ブラウザを最新版に更新してください</li>
          <li>アドレスバーの右にある+アイコンをクリックしてください</li>
        </ol>
      </el-tab-pane>
      <el-tab-pane label="Android" name="second">Android</el-tab-pane>
      <el-tab-pane label="iOS" name="third">iOS</el-tab-pane>
    </el-tabs>
    <h2>このアプリについて</h2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.el-tabs{
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
}
.pp{
  width: 300px;
}

</style>
