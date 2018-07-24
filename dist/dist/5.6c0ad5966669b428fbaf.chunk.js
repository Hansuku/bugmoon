webpackJsonp([5],{260:function(t,e,n){"use strict";function i(t){r||n(964)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(502),l=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var d=n(971),s=n.n(d),r=!1,c=n(0),u=i,p=c(l.a,s.a,!1,u,null,null);p.options.__file="src/views/tables/editable-table.vue",e.default=p.exports},502:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(966),l=i(a),o=n(970),d=i(o);e.default={name:"editable-table",components:{canEditTable:l.default},data:function(){return{columnsList:[],tableData:[],editInlineColumns:[],editInlineData:[],editIncellColumns:[],editIncellData:[],editInlineAndCellColumn:[],editInlineAndCellData:[],showCurrentColumns:[],showCurrentTableData:!1}},methods:{getData:function(){this.columnsList=d.default.table1Columns,this.tableData=d.default.table1Data,this.editInlineColumns=d.default.editInlineColumns,this.editInlineData=d.default.editInlineData,this.editIncellColumns=d.default.editIncellColumns,this.editIncellData=d.default.editIncellData,this.editInlineAndCellColumn=d.default.editInlineAndCellColumn,this.editInlineAndCellData=d.default.editInlineAndCellData,this.showCurrentColumns=d.default.showCurrentColumns},handleNetConnect:function(t){this.breakConnect=t},handleLowSpeed:function(t){this.lowNetSpeed=t},getCurrentData:function(){this.showCurrentTableData=!0},handleDel:function(t,e){this.$Message.success("删除了第"+(e+1)+"行数据")},handleCellChange:function(t,e,n){this.$Message.success("修改了第 "+(e+1)+" 行列名为 "+n+" 的数据")},handleChange:function(t,e){this.$Message.success("修改了第"+(e+1)+"行数据")}},created:function(){this.getData()}}},503:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(54),a=function(t){return t&&t.__esModule?t:{default:t}}(i),l=function(t,e,n,i){return e("Button",{props:{type:n.editting?"success":"primary",loading:n.saving},style:{margin:"0 5px"},on:{click:function(){if(n.editting){t.edittingStore[i].saving=!0,t.thisTableData=JSON.parse((0,a.default)(t.edittingStore));var e=t.edittingStore[i];e.editting=!1,e.saving=!1,t.thisTableData=JSON.parse((0,a.default)(t.edittingStore)),t.$emit("input",t.handleBackdata(t.thisTableData)),t.$emit("on-change",t.handleBackdata(t.thisTableData),i)}else{if(n.edittingCell)for(var l in n.edittingCell)n.edittingCell[l]=!1,t.edittingStore[i].edittingCell[l]=!1;t.edittingStore[i].editting=!0,t.thisTableData=JSON.parse((0,a.default)(t.edittingStore))}}}},n.editting?"保存":"编辑")},o=function(t,e,n,i){return e("Poptip",{props:{confirm:!0,title:"您确定要删除这条数据吗?",transfer:!0},on:{"on-ok":function(){t.thisTableData.splice(i,1),t.$emit("input",t.handleBackdata(t.thisTableData)),t.$emit("on-delete",t.handleBackdata(t.thisTableData),i)}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top"}},"删除")])},d=function(t,e,n){return t.hoverShow?e("div",{class:{"show-edit-btn":t.hoverShow}},[e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.edittingStore[n.index].edittingCell[n.column.key]=!0,t.thisTableData=JSON.parse((0,a.default)(t.edittingStore))}}})]):e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.edittingStore[n.index].edittingCell[n.column.key]=!0,t.thisTableData=JSON.parse((0,a.default)(t.edittingStore))}}})},s=function(t,e,n){return e("Button",{props:{type:"text",icon:"checkmark"},on:{click:function(e){t.edittingStore[n.index].edittingCell[n.column.key]=!1,t.thisTableData=JSON.parse((0,a.default)(t.edittingStore)),t.$emit("input",t.handleBackdata(t.thisTableData)),t.$emit("on-cell-change",t.handleBackdata(t.thisTableData),n.index,n.column.key)}}})},r=function(t,e,n,i){return e("Input",{props:{type:"text",value:t.edittingStore[n.index][i.key]},on:{"on-change":function(e){var a=i.key;t.edittingStore[n.index][a]=e.target.value}}})};e.default={name:"canEditTable",props:{refs:String,columnsList:Array,value:Array,url:String,editIncell:{type:Boolean,default:!1},hoverShow:{type:Boolean,default:!1}},data:function(){return{columns:[],thisTableData:[],edittingStore:[]}},created:function(){this.init()},methods:{init:function(){var t=this,e=this,n=this.columnsList.filter(function(t){if(t.editable&&!0===t.editable)return t}),i=JSON.parse((0,a.default)(this.value)),c=[];c=i.map(function(e,i){var a=!1;if(t.thisTableData[i])if(t.thisTableData[i].editting)a=!0;else for(var l in t.thisTableData[i].edittingCell)!0===t.thisTableData[i].edittingCell[l]&&(a=!0);if(a)return t.thisTableData[i];t.$set(e,"editting",!1);var o={};return n.forEach(function(t){o[t.key]=!1}),t.$set(e,"edittingCell",o),e}),this.thisTableData=c,this.edittingStore=JSON.parse((0,a.default)(this.thisTableData)),this.columnsList.forEach(function(n){n.editable&&(n.render=function(i,a){var l=t.thisTableData[a.index];return l.editting?i("Input",{props:{type:"text",value:l[n.key]},on:{"on-change":function(t){var n=a.column.key;e.edittingStore[a.index][n]=t.target.value}}}):t.editIncell?i("Row",{props:{type:"flex",align:"middle",justify:"center"}},[i("Col",{props:{span:"22"}},[l.edittingCell[a.column.key]?r(t,i,a,n):i("span",l[n.key])]),i("Col",{props:{span:"2"}},[l.edittingCell[a.column.key]?s(t,i,a):d(t,i,a)])]):i("span",l[n.key])}),n.handle&&(n.render=function(e,i){var a=t.thisTableData[i.index],d=[];return n.handle.forEach(function(n){"edit"===n?d.push(l(t,e,a,i.index)):"delete"===n&&d.push(o(t,e,0,i.index))}),e("div",d)})})},handleBackdata:function(t){var e=JSON.parse((0,a.default)(t));return e.forEach(function(t){delete t.editting,delete t.edittingCell,delete t.saving}),e}},watch:{value:function(t){this.init()}}}},964:function(t,e,n){var i=n(965);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(8)("578ee63c",i,!1)},965:function(t,e,n){e=t.exports=n(7)(!1),e.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.dragging-tip-enter-active {\n  opacity: 1;\n  transition: opacity .3s;\n}\n.dragging-tip-enter,\n.dragging-tip-leave-to {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.dragging-tip-con {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 50px;\n}\n.dragging-tip-con span {\n  font-size: 18px;\n}\n.record-tip-con {\n  display: block;\n  width: 100%;\n  height: 292px;\n  overflow: auto;\n}\n.record-item {\n  box-sizing: content-box;\n  display: block;\n  overflow: hidden;\n  height: 24px;\n  line-height: 24px;\n  padding: 8px 10px;\n  border-bottom: 1px dashed gainsboro;\n}\n.record-tip-con span {\n  font-size: 14px;\n}\n.edittable-test-con {\n  height: 160px;\n}\n.edittable-table-height-con {\n  height: 190px;\n}\n.edittable-con-1 {\n  box-sizing: content-box;\n  padding: 15px 0 0;\n  height: 196px;\n}\n.edittable-table-get-currentdata-con {\n  height: 190px !important;\n}\n.exportable-table-download-con1 {\n  padding: 16px 0 16px 20px;\n  border-bottom: 1px dashed #c3c3c3;\n  margin-bottom: 16px;\n}\n.exportable-table-download-con2 {\n  padding-left: 20px;\n}\n.show-image {\n  padding: 20px 0px;\n}\n.show-image img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.searchable-table-con1 {\n  height: 230px !important;\n}\n",""])},966:function(t,e,n){"use strict";function i(t){r||n(967)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(503),l=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var d=n(969),s=n.n(d),r=!1,c=n(0),u=i,p=c(l.a,s.a,!1,u,null,null);p.options.__file="src/views/tables/components/canEditTable.vue",e.default=p.exports},967:function(t,e,n){var i=n(968);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(8)("58bce1a1",i,!1)},968:function(t,e,n){e=t.exports=n(7)(!1),e.push([t.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},969:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table",{ref:t.refs,attrs:{columns:t.columnsList,data:t.thisTableData,border:"","disabled-hover":""}})],1)},a=[];i._withStripped=!0;var l={render:i,staticRenderFns:a};e.default=l},970:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",key:"work",editable:!0},{title:"操作",align:"center",width:120,key:"handle",handle:["delete"]}];e.table1Columns=i;const a=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}];e.table1Data=a;const l=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:90,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",key:"work",width:150,editable:!0},{title:"操作",align:"center",width:190,key:"handle",handle:["edit","delete"]}];e.editInlineColumns=l;const o=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}];e.editInlineData=o;const d=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:120,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:160,key:"work",editable:!0},{title:"操作",align:"center",width:120,key:"handle",handle:["delete"]}];e.editIncellColumns=d;const s=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}];e.editIncellData=s;const r=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:300,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:300,key:"work",editable:!0},{title:"操作",align:"center",width:200,key:"handle",handle:["edit","delete"]}];e.editInlineAndCellColumn=r;const c=[{name:"Aresn",sex:"男",work:"前端开发"},{name:"Lison",sex:"男",work:"前端开发"},{name:"lisa",sex:"女",work:"程序员鼓励师"}];e.editInlineAndCellData=c;const u=[{title:"序号",type:"index",width:80,align:"center"},{title:"姓名",align:"center",key:"name",width:300,editable:!0},{title:"性别",align:"center",key:"sex"},{title:"岗位",align:"center",width:300,key:"work",editable:!0}];e.showCurrentColumns=u;const p={table1Columns:i,table1Data:a,editInlineColumns:l,editInlineData:o,editIncellColumns:d,editIncellData:s,editInlineAndCellColumn:r,editInlineAndCellData:c,showCurrentColumns:u};e.default=p},971:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Col",{attrs:{span:"6"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"load-b"}}),t._v("\n                    简单说明\n                ")],1),t._v(" "),n("div",{staticClass:"edittable-test-con"},[t._v("\n                    可编辑单元格可配置可编辑的列，可设置编辑整行的可编辑单元格，也可配置单个编辑可编辑单元格，也可两种形式同时可用。可配置单元格内编辑的图标显示方式。\n                ")])])],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"18"}},[n("Card",[n("div",{staticClass:"edittable-con-1"},[n("can-edit-table",{attrs:{refs:"table1","columns-list":t.columnsList},on:{"on-delete":t.handleDel},model:{value:t.tableData,callback:function(e){t.tableData=e},expression:"tableData"}})],1)])],1)],1),t._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Col",{attrs:{span:"12"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"android-remove"}}),t._v("\n                    可编辑单元行\n                ")],1),t._v(" "),n("div",{staticClass:"edittable-table-height-con"},[n("can-edit-table",{attrs:{refs:"table2","columns-list":t.editInlineColumns},model:{value:t.editInlineData,callback:function(e){t.editInlineData=e},expression:"editInlineData"}})],1)])],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"12"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"android-more-horizontal"}}),t._v("\n                    可编辑单元格(鼠标移入显示编辑单元格按钮)\n                ")],1),t._v(" "),n("div",{staticClass:"edittable-table-height-con"},[n("can-edit-table",{attrs:{refs:"table3","hover-show":!0,"edit-incell":!0,"columns-list":t.editIncellColumns},model:{value:t.editIncellData,callback:function(e){t.editIncellData=e},expression:"editIncellData"}})],1)])],1)],1),t._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Col",{attrs:{span:"24"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                     单元行和单元格两种方式编辑(始终显示编辑单元格按钮)\n                ")],1),t._v(" "),n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{span:"2"}},[n("Row",{staticClass:"edittable-table-get-currentdata-con",attrs:{type:"flex",justify:"center",align:"middle"}},[n("Button",{attrs:{type:"primary"},on:{click:t.getCurrentData}},[t._v("当前数据")])],1)],1),t._v(" "),n("Col",{attrs:{span:"22"}},[n("div",{staticClass:"edittable-table-height-con"},[n("can-edit-table",{attrs:{refs:"table4",editIncell:!0,"columns-list":t.editInlineAndCellColumn},on:{"on-cell-change":t.handleCellChange,"on-change":t.handleChange},model:{value:t.editInlineAndCellData,callback:function(e){t.editInlineAndCellData=e},expression:"editInlineAndCellData"}})],1)]),t._v(" "),n("Modal",{attrs:{width:900},model:{value:t.showCurrentTableData,callback:function(e){t.showCurrentTableData=e},expression:"showCurrentTableData"}},[n("can-edit-table",{attrs:{refs:"table5","columns-list":t.showCurrentColumns},model:{value:t.editInlineAndCellData,callback:function(e){t.editInlineAndCellData=e},expression:"editInlineAndCellData"}})],1)],1)],1)],1)],1)],1)},a=[];i._withStripped=!0;var l={render:i,staticRenderFns:a};e.default=l}});