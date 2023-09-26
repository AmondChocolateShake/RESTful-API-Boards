<template>
    <router-link to="postDetail">
        <div class="post">
            <div>{{ author }}</div>
            <div>{{ title }}</div>
            <div>{{ date }}</div>
        </div>
    </router-link>
</template>
<script>
export default {
    
    props:{
        author:String,
        title:String,
        date:String,
        id:Number
    },

    setup(){


    }

}
</script>
<style>
    .post{
        display: flex;
        justify-content: space-around;
        align-items: center;

        width: 500px;
        height: 100px;

        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }


</style>