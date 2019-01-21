<template>
    <section style="margin:0 20px">
      <div style="text-align: center;font-size: 30px;font-weight:bold;margin: 50px 0;color: #3c3c3c;">未授权设备</div>

      <div class="sort" style="margin-top: -20px;">
        <div>
          <ul class="clearfix typesort" data-bind="typesort">
            <li><span>类型:</span></li>
            <li style="line-height: 35px;cursor:pointer;" v-for = "item in  sort.type " :key="item">
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div>
          <ul class="clearfix hardwaresort" data-bind="hardwaresort">
            <li><span>硬件供应商:</span></li>
            <li style="line-height: 35px;cursor:pointer;"  v-for = "item in  sort.hardwareprovider " :key="item">
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div>
          <ul class="clearfix softwaresort" data-bind="softwaresort">
            <li><span>软件供应商:</span></li>
            <li style="line-height: 35px;cursor:pointer;"  v-for = "item in  sort.softwareprovider " :key="item">
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div style="padding: 10px;">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item style="line-height: 24px">所有分类</el-breadcrumb-item>
          <el-tag
            size="small"
            style="margin-right: 10px"
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type">
            {{tag.name}}
          </el-tag>
        </el-breadcrumb>
      </div>

      <el-table
        :data="tableData"
        border
        default-expand-all="true"
        style="width: 100%">
        <el-table-column
          fixed
          prop="type"
          label="#"
          align="center">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          align="center">
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID"
          align="center">
        </el-table-column>
        <el-table-column
          prop="randcode"
          label="RandCode"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hardwareprovider"
          label="硬件供应商"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="hardwaresn"
          label="硬件SN"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hardwareversion"
          label="硬件版本"
          width="200"
          >
        </el-table-column>
        <el-table-column
          prop="softwareprovider"
          label="软件供应商"
          >
        </el-table-column>
        <el-table-column
          prop="softwareversion"
          label="软件版本"
          width="200"
          >
        </el-table-column>
        <el-table-column
          prop="cpu"
          label="CPU"
          width="100"
          >
        </el-table-column>
        <el-table-column
          prop="imei"
          label="IMEI"
          width="200"
          >
        </el-table-column>
        <el-table-column
          prop="mac"
          label="MAC"
          width="200"
          >
        </el-table-column>
        <el-table-column
          prop="osid"
          label="系统ID"
          width="250"
          >
        </el-table-column>
        <el-table-column
          prop="ostype"
          label="系统类型"
          width="250"
          >
        </el-table-column>
        <el-table-column
          prop="osversion"
          label="系统版本"
          width="250"
          >
        </el-table-column>
        <el-table-column
          prop="modelnumber"
          label="模型编号"
          width="250"
          >
        </el-table-column>
        <el-table-column
          prop="serialnumber"
          label="序列号"
          >
        </el-table-column>
        <el-table-column
          prop="sessionid"
          label="SessionID"
          width="400"
          >
        </el-table-column>
        <el-table-column
          prop="userlabel"
          label="用户认证标签"
          width="400"
          >
        </el-table-column>
        <el-table-column
          prop="clienthost"
          label="客户端IP"
          width="150"
          >
        </el-table-column>
        <el-table-column
          prop="desc"
          label="描述"
          width="150"
          >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          >
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
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagetotal">
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
    },
    get_register () {
      this.$http.post(this.$store.state.url.GET_REGISTER_URL, {
        access_token: this.$store.state.access_token,
        'page': 0,
        'page_size': 10
      }).then((data) => {
        this.tableData = data.data.registers
      })
    }
  },

  data () {
    return {
      pagetotal: 100,
      tableData: [],
      tags: [
        { name: this.$store.state.url['baidu'], type: 'success' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'success' },
        { name: '标签四', type: 'success' },
        { name: '标签五', type: 'success' }
      ],
      sort: {'type': [], 'hardwareprovider': [], 'softwareprovider': []}
    }
  },
  created () {
    this.$http.post(this.$store.state.url.GET_REGISTER_LIST_FILTER_INFO, {
    }).then((data) => {
      this.sort['type'] = data.data.type
      this.sort['hardwareprovider'] = data.data.hardwareprovider
      this.sort['softwareprovider'] = data.data.softwareprovider
    })
    this.get_register()
  }
}
</script>

<style scoped>
.block{
  padding-left: 230px;
  position: fixed;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
