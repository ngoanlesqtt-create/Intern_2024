<template>
  <div class="w-full">
    <el-table v-if="data.length > 0" :data="data" stripe style="width: 100%">
      <el-table-column prop="_id" label="ID" width="180" />
      <el-table-column prop="name" label="Tên nhà xuất bản" width="180" />

      <el-table-column label="Điều chỉnh">
        <template #default="{ row }">
          <el-button
            class="bg-red-500 text-white p-[5px]"
            @click="deleteCategory(row)"
          >
            Xóa
          </el-button>
          <el-button
            class="bg-red-500 text-white p-[5px]"
            @click="putCategory(row)"
          >
            Sửa
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <p v-else>Không có dữ liệu để hiển thị.</p>
  </div>
</template>

<script setup>
import { useAdminStore } from "~/stores/admin";
import { ref, toRefs, watch } from "vue";

const adminStore = useAdminStore();
const { adminData } = toRefs(adminStore);

const data = ref([]);

const deleteCategory = async (category) => {
  console.log(category);
};
const putCategory = async (category) => {
  console.log(category);
};

watch(adminData, (newValue) => {
  data.value = newValue;
  console.log("data.length>0:", data.value.length > 0);
});

definePageMeta({
  layout: "admin",
});
</script>

<style lang="scss" scoped></style>
