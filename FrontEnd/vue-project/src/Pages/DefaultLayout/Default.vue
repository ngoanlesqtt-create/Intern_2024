<template>
    <Header ></Header>
    <div class="flex">
        <Sidebar></Sidebar>
        <main class="flex w-full justify-center	">
          <router-view />
        </main>
    </div> 
    <Footer></Footer>
</template>
<style>

</style>
<script>
    import Header from '@/components/Layout/Header.vue';
    import Footer from '@/components/Layout/Footer.vue';
    import Sidebar from '@/components/Layout/Sidebar.vue';
   

    export default{
        name:"Layout",
        components:{
            Header,
            Footer,
            Sidebar
        }
    }
</script>