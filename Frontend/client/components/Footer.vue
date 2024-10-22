<template>
  <div :class="style">
    <img src="../assets/images/footer_logobct.webp" />
    <ul>
      <li>CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ MÊ KÔNG COM</li>
      <li>
        Địa chỉ:334 Lũy Bán Bích, Phường Hòa Thạnh, Quận Tân Phú, Hồ Chí Minh
        MST:0303615027 do Sở Kế Hoạch Và Đầu Tư Tp.HCM cấp ngày 10/03/2011
      </li>
      <li>Tel:028.73008182- Fax:028.39733234- Email:nhan.ly@vinabook.com</li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { watch } from "vue";
const route = useRoute();
const style = ref(
  "flex justify-evenly absolute bottom-0 h-[70px] bg-[#ececec] w-full"
);

watch(
  () => route.query,
  (newValue) => {
    if (newValue.category == undefined) {
      console.log("dung roi");
      style.value = "flex justify-evenly h-[70px] bg-[#ececec]";
    } else {
      style.value =
      "flex justify-evenly absolute bottom-0 h-[70px] bg-[#ececec] w-full";
      console.log("sai roi");
    }
  }
);
</script>

<style lang="scss" scoped></style>
