<template>
    <section>
      <div style="text-align: center;font-size: 30px;font-weight:bold;margin: 50px 0;color: #3c3c3c;">未授权设备</div>

      <div class="sort" style="margin-top: -20px;">
        <div>
          <ul class="clearfix typesort" data-bind="typesort">
            <li><span>类型:</span></li>

          </ul>
        </div>
        <div>
          <ul class="clearfix hardwaresort" data-bind="hardwaresort">
            <li><span>硬件供应商:</span></li>
          </ul>
        </div>
        <div>
          <ul class="clearfix softwaresort" data-bind="softwaresort">
            <li><span>软件供应商:</span></li>
          </ul>
        </div>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

      <el-table
        :data="tableData"
        border
        height="250"
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--<div class="tablebox" style="width: 100%;height: 100%;overflow: auto;transition: all 0.5s ease 0s;">-->

        <!--<table class="table table-bordered">-->
          <!--<thead>-->
          <!--<tr>-->
            <!--<th>#</th>-->
            <!--<th>类型</th>               &lt;!&ndash;    type&ndash;&gt;-->
            <!--<th>ID</th>                 &lt;!&ndash;  id&ndash;&gt;-->
            <!--<th>RandCode</th>           &lt;!&ndash;   randcode&ndash;&gt;-->
            <!--<th>硬件供应商</th>              &lt;!&ndash;     hardwareprovider&ndash;&gt;-->
            <!--<th>硬件SN</th>               &lt;!&ndash;    hardwaresn&ndash;&gt;-->
            <!--<th>硬件版本</th>               &lt;!&ndash;    hardwareversion&ndash;&gt;-->
            <!--<th>软件供应商</th>              &lt;!&ndash;     softwareprovider&ndash;&gt;-->
            <!--<th>软件版本</th>               &lt;!&ndash;    softwareversion&ndash;&gt;-->
            <!--<th>CPU</th>                 &lt;!&ndash;  cpu&ndash;&gt;-->
            <!--<th>IMEI</th>               &lt;!&ndash;    imei&ndash;&gt;-->
            <!--<th>MAC</th>                &lt;!&ndash;   mac&ndash;&gt;-->
            <!--<th>系统ID</th>              &lt;!&ndash;    osid&ndash;&gt;-->
            <!--<th>系统类型</th>             &lt;!&ndash;     ostype&ndash;&gt;-->
            <!--<th>系统版本</th>         &lt;!&ndash;     osversion&ndash;&gt;-->
            <!--<th>模型编号</th>               &lt;!&ndash;   modelnumber&ndash;&gt;-->
            <!--<th>序列号</th>             &lt;!&ndash;   serialnumber&ndash;&gt;-->
            <!--<th>SessionID</th>          &lt;!&ndash; sessionid&ndash;&gt;-->
            <!--<th>用户认证标签</th>          &lt;!&ndash; userlabel&ndash;&gt;-->
            <!--<th>客户端IP</th>          &lt;!&ndash; clienthost&ndash;&gt;-->
            <!--<th>描述</th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->

          <!--</tbody>-->
        <!--</table>-->

      <!--</div>-->
      <!--<div class="bottom">-->
        <!--<div class="UnAuth_pager" style="margin-bottom: 10px">-->

          <!--<ul class="pager" style="margin-bottom: 0">-->
            <!--<li><a href="javascript:;" onclick="getUnAuthTerm_list(0)">首页</a></li>-->
            <!--<li><a href="javascript:;" onclick="bindPager_Previous(currentUnAuthTermPage,getUnAuthTerm_list)">上一页</a></li>-->
            <!--<li><a href="javascript:;"-->
                   <!--onclick="bindPager_Next(currentUnAuthTermPage,currentUnAuthTermPage_total,getUnAuthTerm_list)">下一页</a>-->
            <!--</li>-->
            <!--<li><a href="javascript:;" onclick="getUnAuthTerm_list(currentUnAuthTermPage_total-1)">尾页</a></li>-->
          <!--</ul>-->

        <!--</div>-->

        <!--&lt;!&ndash;底部授权部分&ndash;&gt;-->
        <!--<div class="account" style="display: none">-->

          <!--<div class="fl">-->
            <!--<input type="checkbox" name="allcheck" class="allcheck" id="allcheck"/><span>全选/全不选</span>&nbsp;&nbsp;-->
            <!--<span class="checkNum" style="visibility: hidden">已选</span>-->
          <!--</div>-->
          <!--<div class="fr">-->
            <!--<a class="authorize" onclick="auth_show()" href="javascript:;">授权</a>-->
          <!--</div>-->

        <!--</div>-->
        <!--&lt;!&ndash;底部授权部分结束&ndash;&gt;-->
      <!--</div>-->
      <div class="block">
        <span class="demonstration">完整功能</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </section>
</template>

<script>
export default {
  name: 'UnAuthorized',
  methods: {
    handleClick (row) {
      console.log(row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },

  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  }
}
</script>

<style scoped>

</style>
