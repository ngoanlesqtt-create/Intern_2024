<template>
  <div class="w-full">
    <el-table v-if="data.length > 0" :data="data" stripe style="width: 100%">
      <el-table-column prop="name" label="Tên" width="180" />
      <el-table-column prop="publisher" label="Nhà xuất bản" width="180" />
      <el-table-column prop="price" label="Giá" width="180" />
      <el-table-column prop="categoryId" label="Danh mục" width="180" />
      <el-table-column prop="page" label="Số trang" width="180" />
      <el-table-column prop="author" label="Tác giả" width="180" />

      author
      <el-table-column label="Điều chỉnh">
        <template #default="{ row }">
          <el-button
            class="bg-red-500 text-white p-[5px]"
            @click="deleteBook(row)"
          >
            Xóa
          </el-button>
          <el-button
            class="bg-red-500 text-white p-[5px]"
            @click="putBook(row)"
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

const deleteBook = async (book) => {
  const idAsString = typeof book._id === 'object' ? book._id.toString() : book._id;
  console.log("idAsString:", idAsString);
  try {
    const response = await fetch(
      `https://localhost:7029/san-pham/${idAsString}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) data.value = data.value.filter((b) => b._id !== book._id);
    else {
      const errorData = await response.json(); // Lấy thông tin lỗi từ server
      console.log("Lỗi:", errorData);
    }
  } catch (e) {
    console.log("Loi:", e.message);
  }
};
const putBook = async (book) => {
  console.log(book);
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
