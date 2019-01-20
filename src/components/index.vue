<template>
  <div>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li class="header">管理系统</li>
        <!--授权管理-->
        <li class="treeview active">
          <a href="javascript:;">
            <i class="fa fa-window-restore pull-left"></i>
            <span class="pull-left">设备管理</span>
            <i class="fa fa-angle-down pull-right"></i>
          </a>
          <ul class="treeview-menu menu-open">
            <li><router-link to="unauthorized"><i
              class="fa fa-circle-o"></i>未授权设备</router-link></li>
            <li><router-link to="authorized"><i
              class="fa fa-circle-o"></i>已授权设备 </router-link></li>
            <li><router-link to="onlineTerminal"><i
              class="fa fa-circle-o"></i>在线设备</router-link></li>
            <li><router-link to="TerminalVerify"><i
              class="fa fa-circle-o"></i>设备型号验证</router-link></li>
          </ul>
        </li>
        <!--授权管理-->

        <!--证书管理-->
        <li class="treeview">
          <a href="#">
            <i class="fa fa-book"></i>
            <span>证书管理</span>
            <i class="fa fa-angle-right pull-right"></i>
          </a>
          <ul class="treeview-menu" style="display: none;">
            <li><a href="#"><i class="fa fa-circle-o"></i> 用户列表 </a></li>

          </ul>
        </li>
        <!--证书管理-->

        <!--认证标签管理-->
        <li class="treeview">
          <a href="LabelManage.html">
            <i class="fa fa-tags"></i>
            <span>认证标签管理</span>
            <i class="fa fa-angle-right pull-right"></i>
          </a>
          <ul class="treeview-menu" style="display: none;">
            <li><a href="#"><i class="fa fa-circle-o"></i> 用户列表 </a></li>

          </ul>
        </li>
        <!--认证标签管理-->

        <!--用户管理-->
        <li class="treeview">
          <a href="UserManage2.html">
            <i class="fa fa-user-o"></i>
            <span>用户管理</span>
            <i class="fa fa-angle-right pull-right"></i>
          </a>
          <ul class="treeview-menu" style="display: none;">
            <li><a href="#"><i class="fa fa-circle-o"></i> 用户列表</a></li>
          </ul>
        </li>
        <!--用户管理-->
      </ul>
    </section>
  </aside>
    <section class="main-content">
      <header>
        <ul class="clearfix">
          <li><a href="#">Test</a></li>
          <li class="user"><a href="#" id="username" data-toggle="dropdown" style="" v-text="username"> <i
            class="fa fa-angle-down"></i></a>
            <ul class="a_list">
              <li><a href="javascript:;" >退出</a></li>
            </ul>
          </li>
        </ul>
      </header>
      <div class="content" style="margin-left: 230px">
        <router-view ></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 123
    }
  },
  name: 'index',
  created () {
    this.axios('https://cert.besovideo.com:20443/api/v1/api_login/', {

    }).then(function (res) {

    }).catch(function (error) {
      console.log(error)
    })
    this.username = 456
  }

}
</script>

<style>
  .sidebar-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #222d32
  }

  .sidebar-menu>li {
    position: relative;
    margin: 0;
    padding: 0
  }

  .sidebar-menu>li>a {
    padding: 12px 5px 12px 15px;
    display: block;
    border-left: 3px solid transparent;
    color: #b8c7ce;
    height: 36px;
    line-height: 36px;
  }

  .sidebar-menu>li>a>.fa {
    margin-top: 11px;
    width: 20px
  }

  .sidebar-menu>li:hover>a,.sidebar-menu>li.active>a {

    color: #fff;
    background: #1e282c;
    border-left-color: #3c8dbc
  }

  .sidebar-menu>li>.treeview-menu {
    margin: 0 1px;
    background: #2c3b41
  }

  .sidebar-menu>li .label,.sidebar-menu>li .badge {
    margin-top: 3px;
    margin-right: 5px
  }

  .sidebar-menu li.header {
    padding: 10px 25px 10px 15px;
    font-size: 18px;
    line-height: 40px;
    font-weight: 700;
    color: #4b646f;
    background: #1a2226;
    text-align: center;
  }

  .sidebar-menu li>a>.fa-angle-left {
    width: auto;
    height: auto;
    padding: 0;
    margin-right: 10px;
    margin-top: 3px
  }

  .sidebar-menu li.active>a>.fa-angle-left {
    transform: rotate(-90deg)
  }

  .sidebar-menu li.active>.treeview-menu {
    display: block
  }

  .sidebar-menu a {
    color: #b8c7ce;
    text-decoration: none
  }

  .sidebar-menu .treeview-menu {
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
    padding-left: 5px
  }

  .sidebar-menu .treeview-menu .treeview-menu {
    padding-left: 20px
  }

  .sidebar-menu .treeview-menu>li {
    margin: 0
  }

  .sidebar-menu .treeview-menu>li>a {
    height: 40px;
    line-height: 30px;
    padding: 5px 5px 5px 15px;
    display: block;
    font-size: 14px;
    color: #8aa4af
  }

  .sidebar-menu .treeview-menu>li>a>.fa {
    width: 20px
  }

  .sidebar-menu .treeview-menu>li>a>.fa-angle-left,.sidebar-menu .treeview-menu>li>a>.fa-angle-down {
    width: auto
  }

  .sidebar-menu .treeview-menu>li.active>a,.sidebar-menu .treeview-menu>li>a:hover {
    color: #fff
  }

  .main-content > header {
    width: 100%;
    height: 60px;
    background: #1a2226;
  }

  .main-content > header > ul {
    margin-right: 30px;
    float: right;
  }

  .main-content > header li {
    float: left;
  }

  .main-content > header > ul > li > a {
    display: block;
    height: 60px;
    padding: 10px 25px 10px 15px;
    font-size: 16px;
    line-height: 40px;
    font-weight: 700;
    color: #4b646f;

  }

  .main-content > header > ul > li:last-child {
    position: relative;
  }

  li.user:hover .a_list {
    display: block;
  }

  .a_list {
    display: none;
    padding: 5px 0;
    position: absolute;
    right: 0;
    border: 1px solid #cccccc;
    border-radius: 3px;
    top: 56px;
    background-color: #fff;
    width: 100%;

  }

  .a_list li {
    width: 100%;

  }

  .a_list li:hover {
    background-color: #cccccc;
  }

  .a_list li > a {
    display: block;
    height: 30px;
    color: #000;
    line-height: 30px;
    font-size: 14px;
    width: 100%;
    text-align: center;

  }
</style>
