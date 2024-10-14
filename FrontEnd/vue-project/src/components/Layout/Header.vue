<template>
    <header>
        <div id="header-1">
            <h1>Tiệm sách mơ ước</h1>
            <div id="sub-header-1">
                <ul  >
                    <li v-for="(item, index) in infor" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div  class="flex justify-around items-center bg-blue-500 text-white p-4">
           <h3 class="hover:text-yellow-300 cursor-pointer">Danh mục</h3>
           <input class="rounded-md		">
           <ul class="flex w-48 justify-around">
                <li class="hover:text-yellow-300 cursor-pointer" v-for="(item, index) in accountAndCart" :key="index">{{ item }}</li>
           </ul>
        </div>
    </header>
</template>
<script setup>
    import { ref } from 'vue';
    const infor=ref(["Giới thiệu","Địa chỉ","Số điện thoại:113"])
    const accountAndCart=ref(["Tài khoản","Giỏ hàng"])
</script>

<style>
  #header-1{
    display: flex;
    justify-content: space-evenly;
  }
  #sub-header-1 ul{
    display: flex;
    width: 300px;
    justify-content: space-between;
    list-style-type: none;
  }
  #sub-header-1 ul li:hover{
    color: blue;
    cursor: pointer;
  }

</style>