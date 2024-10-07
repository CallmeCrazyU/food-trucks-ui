<template>
    <div>
      <el-select
      v-model="value"
      placeholder="Choose tags for your FacilityType"
      size="large"
      style="width: 270px"
      @change="changEvent"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    </div>

    <el-table :data="queryInfo.list" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80"/>
      <el-table-column prop="locationId" label="LocationId"/>
      <el-table-column prop="applicant" label="Applicant" />
      <el-table-column prop="facilityType" label="FacilityType"/>
      <el-table-column prop="foodItems" label="Food Items" />
      <el-table-column prop="location" label="Location" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :total="queryInfo.total" />
  </template>
  
  <script lang="ts">

  
export default {
    data() {
        return {
            queryInfo: {
                pageNum: 1,
                pageSize: 10,
                list: [] as any[],
                total: 0,
                facilityType: null
            },
            value:null,
            options:[
              {
                value:null,
                label:"全部"
              },{
                value:"",
                label:""
              },
              {
                value:"Truck",
                label:"Truck"
              },
              {
                value:"Push Cart",
                label:"Push Cart"
              }
            ]
        };
    },

    mounted() {
        this.load();
    },
    methods: {
        load() {
            this.$axios.post("/api/trucks", {
                "page": this.queryInfo.pageNum,
                "size": this.queryInfo.pageSize,
                "facilityType":this.value
            }).then((rsp: any) => {
              debugger;
                this.queryInfo = rsp.data;
            }).catch(() => {
            });
        },
        handleCurrentChange(val:number){
          this.queryInfo.pageNum = val;
          this.load();
        },
        changEvent(val:string){
          this.queryInfo.facilityType = val;
          this.load();
        }
    }
}
  </script>