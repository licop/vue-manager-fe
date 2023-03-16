import{_ as V,m as N,e as u,s as x,o as h,c as L,f,g as s,w as o,v as w,p as _,i as m,F as M,n as P,t as D}from"./index-b737c2d7.js";const S={name:"role",data(){return{queryForm:{roleName:""},roleList:[],pager:{total:0,pageSize:10,pageNum:1},showModal:!1,action:"create",roleForm:{},rules:{roleName:[{required:!0,message:"请输入角色角色名称"}]},columns:[{label:"角色名称",prop:"roleName",width:150},{label:"备注",prop:"remark"},{label:"权限列表",prop:"permissionList",width:200,formatter:(e,l,i)=>{let n=[];return(i.halfCheckedKeys||[]).map(r=>{let c=this.actionMap[r];r&&c&&n.push(c)}),n.join(",")}},{label:"创建时间",prop:"createTime",formatter(e,l,i){return N.formateDate(new Date(i))}},{label:"更新时间",prop:"updateTime",formatter(e,l,i){return N.formateDate(new Date(i))}}],showModal:!1,showPermission:!1,curRoleId:"",curRoleName:"",menuList:[],actionMap:{}}},mounted(){this.getRoleList(),this.getMenuList()},methods:{async getRoleList(){try{let{list:e,page:l}=await this.$api.getRoleList({...this.queryForm,...this.pager});this.roleList=e,this.pager.total=l.total}catch(e){throw new Error(e)}},async getMenuList(){try{let e=await this.$api.getMenuList();this.menuList=e,this.getActionMap(e)}catch(e){throw new Error(e)}},handleReset(e){this.$refs[e].resetFields()},handleAdd(){this.action="create",this.showModal=!0},handleEdit(e){this.action="edit",this.showModal=!0,this.$nextTick(()=>{this.roleForm={_id:e._id,roleName:e.roleName,remark:e.remark}})},async handleDel(e){await this.$api.roleOperate({_id:e,action:"delete"}),this.$message.success("删除成功"),this.getRoleList()},handleSubmit(){this.$refs.dialogForm.validate(async e=>{if(e){let{roleForm:l,action:i}=this,n={...l,action:i};await this.$api.roleOperate(n)&&(this.showModal=!1,i==="create"?this.$message.success("创建成功"):this.$message.success("编辑成功"),this.handleReset("dialogForm"),this.getRoleList())}})},handleClose(){this.showModal=!1,this.handleReset("dialogForm")},handleCurrentChange(e){this.pager.pageNum=e,this.getRoleList()},handleOpenPermission(e){this.curRoleId=e._id,this.curRoleName=e.roleName,this.showPermission=!0;let{checkedKeys:l}=e.permissionList;setTimeout(()=>{this.$refs.tree.setCheckedKeys(l)})},async handlePermissionSubmit(){let e=this.$refs.tree.getCheckedNodes(),l=this.$refs.tree.getHalfCheckedKeys(),i=[],n=[];e.map(r=>{r.children?n.push(r._id):i.push(r._id)});let t={_id:this.curRoleId,permissionList:{checkedKeys:i,halfCheckedKeys:n.concat(l)}};await this.$api.updatePermission(t),this.showPermission=!1,this.$message.success("设置成功"),this.getRoleList()},getActionMap(e){let l={};const i=n=>{for(;n.length;){let t=n.pop();t.children&&t.action&&(l[t._id]=t.menuName),t.children&&!t.action&&i(t.children)}};i(JSON.parse(JSON.stringify(e))),this.actionMap=l}}},K={class:"role-manage"},q={class:"query-form"},z={class:"base-table"},O={class:"action"},E={class:"dialog-footer"},T={class:"dialog-footer"};function U(e,l,i,n,t,r){const c=u("el-input"),p=u("el-form-item"),d=u("el-button"),y=u("el-form"),k=u("el-table-column"),F=u("el-table"),R=u("el-pagination"),C=u("el-dialog"),v=u("el-tree"),g=x("has");return h(),L("div",K,[f("div",q,[s(y,{ref:"form",inline:!0,model:t.queryForm},{default:o(()=>[s(p,{label:"角色名称",prop:"roleName"},{default:o(()=>[s(c,{modelValue:t.queryForm.roleName,"onUpdate:modelValue":l[0]||(l[0]=a=>t.queryForm.roleName=a),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1}),s(p,null,{default:o(()=>[s(d,{type:"primary",onClick:r.getRoleList},{default:o(()=>[m("查询")]),_:1},8,["onClick"]),s(d,{onClick:l[1]||(l[1]=a=>r.handleReset("form"))},{default:o(()=>[m("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),f("div",z,[f("div",O,[w((h(),_(d,{type:"primary",onClick:r.handleAdd},{default:o(()=>[m("新增")]),_:1},8,["onClick"])),[[g,"role-create"]])]),s(F,{data:t.roleList},{default:o(()=>[(h(!0),L(M,null,P(t.columns,a=>(h(),_(k,{key:a.prop,prop:a.prop,label:a.label,width:a.width,formatter:a.formatter},null,8,["prop","label","width","formatter"]))),128)),s(k,{fixed:"right",label:"操作",width:"200"},{default:o(a=>[w((h(),_(d,{type:"text",size:"small",onClick:b=>r.handleEdit(a.row)},{default:o(()=>[m("编辑")]),_:2},1032,["onClick"])),[[g,"role-edit"]]),w((h(),_(d,{type:"text",size:"small",onClick:b=>r.handleOpenPermission(a.row)},{default:o(()=>[m("设置权限")]),_:2},1032,["onClick"])),[[g,"role-permission"]]),w((h(),_(d,{type:"text",size:"small",onClick:b=>r.handleDel(a.row._id)},{default:o(()=>[m("删除")]),_:2},1032,["onClick"])),[[g,"role-delete"]])]),_:1})]),_:1},8,["data"]),s(R,{class:"pagination",background:"",layout:"prev, pager, next",total:t.pager.total,"page-size":t.pager.pageSize,onCurrentChange:r.handleCurrentChange},null,8,["total","page-size","onCurrentChange"])]),s(C,{title:"角色新增",modelValue:t.showModal,"onUpdate:modelValue":l[4]||(l[4]=a=>t.showModal=a)},{footer:o(()=>[f("span",E,[s(d,{onClick:r.handleClose},{default:o(()=>[m("取 消")]),_:1},8,["onClick"]),s(d,{type:"primary",onClick:r.handleSubmit},{default:o(()=>[m("确 定")]),_:1},8,["onClick"])])]),default:o(()=>[s(y,{ref:"dialogForm",model:t.roleForm,"label-width":"100px",rules:t.rules},{default:o(()=>[s(p,{label:"角色名称",prop:"roleName"},{default:o(()=>[s(c,{modelValue:t.roleForm.roleName,"onUpdate:modelValue":l[2]||(l[2]=a=>t.roleForm.roleName=a),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1}),s(p,{label:"备注",prop:"remark"},{default:o(()=>[s(c,{type:"textarea",rows:2,modelValue:t.roleForm.remark,"onUpdate:modelValue":l[3]||(l[3]=a=>t.roleForm.remark=a),placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),s(C,{title:"权限设置",modelValue:t.showPermission,"onUpdate:modelValue":l[6]||(l[6]=a=>t.showPermission=a)},{footer:o(()=>[f("span",T,[s(d,{onClick:l[5]||(l[5]=a=>t.showPermission=!1)},{default:o(()=>[m("取 消")]),_:1}),s(d,{type:"primary",onClick:r.handlePermissionSubmit},{default:o(()=>[m("确 定")]),_:1},8,["onClick"])])]),default:o(()=>[s(y,{"label-width":"100px"},{default:o(()=>[s(p,{label:"角色名称"},{default:o(()=>[m(D(t.curRoleName),1)]),_:1}),s(p,{label:"选择权限"},{default:o(()=>[s(v,{ref:"tree",data:t.menuList,"show-checkbox":"","node-key":"_id","default-expand-all":"",props:{label:"menuName"}},null,8,["data"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const B=V(S,[["render",U]]);export{B as default};