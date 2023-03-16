import{_ as T,k as R,r as y,b as v,l as A,e as _,s as P,o as b,c as S,f as F,g as l,w as o,v as D,p as V,m as j,z as Q,i as f,F as q,n as B}from"./index-b737c2d7.js";const O={name:"user",setup(){const{proxy:s}=R();R();const t=y({state:1}),I=v([]),e=y({pageNum:1,pageSize:10}),E=y([{label:"用户ID",prop:"userId"},{label:"用户名",prop:"userName"},{label:"用户邮箱",prop:"userEmail"},{label:"用户角色",prop:"role",formatter(r,n,p){return{0:"管理员",1:"普通用户"}[p]}},{label:"用户状态",prop:"state",formatter(r,n,p){return{1:"在职",2:"离职",3:"试用期"}[p]}},{label:"部门",prop:"deptName"},{label:"注册时间",prop:"createTime",formatter:(r,n,p)=>j.formateDate(new Date(p))},{label:"最后登录时间",prop:"lastLoginTime",formatter:(r,n,p)=>j.formateDate(new Date(p))}]),C=v([]),i=v(!1),d=y({state:3}),m=v([]),g=v([]),u=v("add"),k=y({userName:[{required:!0,message:"请输入用户名称",trigger:"blur"}],userEmail:[{required:!0,message:"请输入用户邮箱",trigger:"blur"}],mobile:[{pattern:/1[3-9]\d{9}/,message:"请输入正确的手机号格式",trigger:"blur"}],deptId:[{required:!0,message:"请输入用户邮箱",trigger:"blur"}]});A(()=>{c(),z(),M()});const c=async()=>{const r={...t,...e};try{const{page:n,list:p}=await s.$api.getUserList(r);I.value=p,e.total=n.total}catch(n){console.log(n)}},L=()=>{c()},w=r=>{s.$refs[r].resetFields()},N=r=>{e.pageNum=r,c()},U=async r=>{await s.$api.userDel({userIds:[r.userId]}),s.$message.success("删除成功"),c()},h=async()=>{if(C.value.length===0){s.$message.error("请选择需要删除的用户");return}(await s.$api.userDel({userIds:C.value})).nModified>0?(s.$message.success("删除成功"),c()):s.$message.error("删除失败")},a=r=>{let n=[];r.map(p=>{n.push(p.userId)}),C.value=n},x=()=>{u.value="add",i.value=!0},z=async()=>{const r=await s.$api.getDeptList();g.value=r},M=async()=>{const r=await s.$api.getRoleAllList();m.value=r};return{user:t,userList:I,columns:E,pager:e,checkedUserIds:C,showModal:i,userForm:d,rules:k,roleList:m,deptList:g,action:u,getUserList:c,handleQuery:L,handleReset:w,handleCurrentChange:N,handleDel:U,handlePatchDel:h,handleSelectionChange:a,handleCreate:x,getDeptList:z,getRoleAllList:M,handleClose:()=>{i.value=!1,w("dialogForm")},handleSubmit:()=>{s.$refs.dialogForm.validate(async r=>{if(r){let n=Q(d);n.userEmail+="@alibaba-inc.com",n.action=u.value,await s.$api.userSubmit(n),i.value=!1,n.action=="add"?s.$message.success("用户创建成功"):n.action=="edit"&&s.$message.success("用户编辑成功"),w("dialogForm"),c()}})},handleEdit:r=>{u.value="edit",i.value=!0,s.$nextTick(()=>{Object.assign(d,r)})}}}},G={class:"user-manage"},H={class:"query-form"},J={class:"base-table"},K={class:"action"},W={class:"dialog-footer"};function X(s,t,I,e,E,C){const i=_("el-input"),d=_("el-form-item"),m=_("el-option"),g=_("el-select"),u=_("el-button"),k=_("el-form"),c=_("el-table-column"),L=_("el-table"),w=_("el-pagination"),N=_("el-cascader"),U=_("el-dialog"),h=P("has");return b(),S("div",G,[F("div",H,[l(k,{ref:"form",inline:!0,model:e.user},{default:o(()=>[l(d,{label:"用户ID",prop:"userId"},{default:o(()=>[l(i,{modelValue:e.user.userId,"onUpdate:modelValue":t[0]||(t[0]=a=>e.user.userId=a),placeholder:"请输入用户ID"},null,8,["modelValue"])]),_:1}),l(d,{label:"用户名称",prop:"userName"},{default:o(()=>[l(i,{modelValue:e.user.userName,"onUpdate:modelValue":t[1]||(t[1]=a=>e.user.userName=a),placeholder:"请输入用户名称"},null,8,["modelValue"])]),_:1}),l(d,{label:"状态",prop:"“state”"},{default:o(()=>[l(g,{modelValue:e.user.state,"onUpdate:modelValue":t[2]||(t[2]=a=>e.user.state=a)},{default:o(()=>[l(m,{value:0,label:"所有"}),l(m,{value:1,label:"在职"}),l(m,{value:2,label:"离职"}),l(m,{value:3,label:"试用期"})]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:o(()=>[l(u,{type:"primary",onClick:e.handleQuery},{default:o(()=>[f("查询")]),_:1},8,["onClick"]),l(u,{onClick:t[3]||(t[3]=a=>e.handleReset("form"))},{default:o(()=>[f("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),F("div",J,[F("div",K,[D((b(),V(u,{type:"primary",onClick:e.handleCreate},{default:o(()=>[f("新增")]),_:1},8,["onClick"])),[[h,"user-create"]]),D((b(),V(u,{type:"danger",onClick:e.handlePatchDel},{default:o(()=>[f("批量删除")]),_:1},8,["onClick"])),[[h,"user-patch-delete"]])]),l(L,{data:e.userList,onSelectionChange:e.handleSelectionChange},{default:o(()=>[l(c,{type:"selection",width:"55"}),(b(!0),S(q,null,B(e.columns,a=>(b(),V(c,{key:a.prop,prop:a.prop,label:a.label,width:a.width,formatter:a.formatter},null,8,["prop","label","width","formatter"]))),128)),l(c,{fixed:"right",label:"操作",width:"130"},{default:o(a=>[D((b(),V(u,{type:"text",size:"small",onClick:x=>e.handleEdit(a.row)},{default:o(()=>[f("编辑")]),_:2},1032,["onClick"])),[[h,"user-edit"]]),D((b(),V(u,{type:"text",size:"small",onClick:x=>e.handleDel(a.row)},{default:o(()=>[f("删除")]),_:2},1032,["onClick"])),[[h,"user-delete"]])]),_:1})]),_:1},8,["data","onSelectionChange"]),l(w,{class:"pagination",background:"",layout:"prev, pager, next",total:e.pager.total,"page-size":e.pager.pageSize,onCurrentChange:e.handleCurrentChange},null,8,["total","page-size","onCurrentChange"])]),l(U,{title:"新增用户",modelValue:e.showModal,"onUpdate:modelValue":t[11]||(t[11]=a=>e.showModal=a)},{footer:o(()=>[F("span",W,[l(u,{onClick:e.handleClose},{default:o(()=>[f("取 消")]),_:1},8,["onClick"]),l(u,{type:"primary",onClick:e.handleSubmit},{default:o(()=>[f("确 定")]),_:1},8,["onClick"])])]),default:o(()=>[l(k,{ref:"dialogForm",model:e.userForm,"label-width":"100px",rules:e.rules},{default:o(()=>[l(d,{label:"用户名",prop:"userName"},{default:o(()=>[l(i,{modelValue:e.userForm.userName,"onUpdate:modelValue":t[4]||(t[4]=a=>e.userForm.userName=a),disabled:e.action=="edit",placeholder:"请输入用户名称"},null,8,["modelValue","disabled"])]),_:1}),l(d,{label:"邮箱",prop:"userEmail"},{default:o(()=>[l(i,{modelValue:e.userForm.userEmail,"onUpdate:modelValue":t[5]||(t[5]=a=>e.userForm.userEmail=a),disabled:e.action=="edit",placeholder:"请输入邮箱"},{append:o(()=>[f("@alibaba-inc.com")]),_:1},8,["modelValue","disabled"])]),_:1}),l(d,{label:"手机号",prop:"mobile"},{default:o(()=>[l(i,{modelValue:e.userForm.mobile,"onUpdate:modelValue":t[6]||(t[6]=a=>e.userForm.mobile=a),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),l(d,{label:"岗位",prop:"job"},{default:o(()=>[l(i,{modelValue:e.userForm.job,"onUpdate:modelValue":t[7]||(t[7]=a=>e.userForm.job=a),placeholder:"请输入岗位"},null,8,["modelValue"])]),_:1}),l(d,{label:"状态",prop:"state"},{default:o(()=>[l(g,{modelValue:e.userForm.state,"onUpdate:modelValue":t[8]||(t[8]=a=>e.userForm.state=a)},{default:o(()=>[l(m,{value:1,label:"在职"}),l(m,{value:2,label:"离职"}),l(m,{value:3,label:"试用期"})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"系统角色",prop:"roleList"},{default:o(()=>[l(g,{modelValue:e.userForm.roleList,"onUpdate:modelValue":t[9]||(t[9]=a=>e.userForm.roleList=a),placeholder:"请选择用户系统角色",multiple:"",style:{width:"100%"}},{default:o(()=>[(b(!0),S(q,null,B(e.roleList,a=>(b(),V(m,{key:a._id,label:a.roleName,value:a._id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"部门",prop:"deptId"},{default:o(()=>[l(N,{modelValue:e.userForm.deptId,"onUpdate:modelValue":t[10]||(t[10]=a=>e.userForm.deptId=a),placeholder:"请选择所属部门",options:e.deptList,props:{checkStrictly:!0,value:"_id",label:"deptName"},clearable:"",style:{width:"100%"}},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}const le=T(O,[["render",X]]);export{le as default};