<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* ----------------Reset Css---------------------*/
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video, input{margin: 0;padding: 0;border:0;font-size: 100%;font: inherit;vertical-align: baseline;}
html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6{-webkit-text-size-adjust: none;}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section{display: block;}
html{overflow-y:scroll;}
body{font-family: "Microsoft yahei",arial, "PingFangSC-Regular", sans-serif; font-size: 14px;color:#000000;min-width: 1200px}
a{font-family: "Microsoft yahei","PingFangSC-Regular";color: #000;text-decoration:none}
a:link,a:visited{color:#000;text-decoration:none;}
a:hover{color:#000;}
ol, ul{list-style: none;}
blockquote, q{quotes: none;}
blockquote:before, blockquote:after, q:before, q:after{content: '';content: none;}
ins{text-decoration: none;}
del{text-decoration: line-through;}
table{border-collapse: collapse;border-spacing: 0;}
.clear{clear: both;}
.fl{float:left}
.fr{float:right}
.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}
* html .clearfix{height:1%}
.db{display:block}
.w1200,.w1201{ width: 1200px; margin: 0 auto; }
.w992{
  width: 992px;
  margin: 0 auto;
}
.hidden{ overflow:hidden; }
/*table中数据一行显示*/
th,td {
  text-align: center;
  text-overflow:ellipsis;
  word-break:keep-all;
  white-space:nowrap;
}
th{
  font-weight: 600;
}
.mylabel{
  font-size: 15px;
  font-weight: 700;
  padding: 5px 5px;
}

.breadcrumb li.active::after {
  content: '\f00d';
  display: inline-block;
  position:absolute;
  font-family: FontAwesome;
  font-size: 6px;
  color:#f00a;
}

.h34{
  height: 34px!important;
}
.w320{
  width: 320px!important;
}
html { overflow-x: hidden; overflow-y: auto; }

.main-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100%;
  width: 230px;
  z-index: 810;
  background-color: #222d32;
}

.main-content {
  position: absolute;
  width: 100%;
  padding-left: 230px;
  top: 0;
  right: 0;
}

section.content {
  padding: 0 20px;
}

.sort {
  width: 100%;
  border: 1px solid #cccccc;
  padding: 10px 20px;
}

.sort li {
  float: left;
  height: 30px;
}

.sort ul li:nth-child(n+2) {
  margin-left: 20px;
}

.sort li a {
  line-height: 30px;
}

.sort ul li:nth-child(1) {
  width: 100px;
  height: 35px;
}

.sort ul li:nth-child(1) span {
  text-align: left;
  line-height: 30px;
  color: #3c3c3c;
}

</style>
