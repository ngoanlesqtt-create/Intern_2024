<template>
  <el-table v-if="data.length > 0" :data="data" stripe style="width: 100%">
    <el-table-column prop="username" label="Username" width="180" />..
    <el-table-column prop="userEmail" label="Email" width="180" />
    <el-table-column label="Điều chỉnh">
      <template #default="{ row }">
        <button class="bg-red-500 text-white p-[5px]" @click="deleteUser(row)">
          Xóa
        </button>
      </template>
    </el-table-column>
  </el-table>
  <p v-else>Loading...</p>
</template>

<script setup>
import { ref, watch, toRefs } from "vue";
import { useAdminStore } from "~/stores/admin";

const adminStore = useAdminStore();
const { adminData } = toRefs(adminStore);
const data = ref(adminData.value); 

const deleteUser = async (user) => {
  try {
    const response = await fetch(
      `https://localhost:7029/user/${user.username}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      data.value = data.value.filter((u) => u.username !== user.username);
    }
  } catch (e) {
    console.log(e.message);
  }
};

watch(adminData, (newValue) => {
  data.value = newValue;
  console.log(newValue);
});

definePageMeta({
  layout: "admin",
});
useHead({
  title: "Administration",
  meta: [{ name: "description", content: "Administration" }],
});
</script>

<style lang="scss" scoped></style>
