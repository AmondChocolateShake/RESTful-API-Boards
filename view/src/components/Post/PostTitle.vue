<template>
    <div class="postTitle">
        <div>{{ author }}</div>
        <h3>{{ title }}</h3>
        <div>{{ date }}</div>
    </div>
</template>
<script>
export default {
    name:"PostTitle",
    props:{
        title:String,
        author:String,
        date:String


    }


}
</script>
<style>
    .postTitle{
        display: flex;
        justify-content:space-between;
        align-items: center;

        width: 100%;
        height: 50px;
        border-bottom: 1px solid black;
    }

</style>