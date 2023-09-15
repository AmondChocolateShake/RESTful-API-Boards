<template lang="">
    <div id="post" @click="setPostDetail(post)">
        <div>작성자 : {{post.author}}</div>
        <div>{{post.title}}</div>
        <div>{{post.date}}</div>
    </div>
</template>
<script>
export default {
    name:"PostElement",
    props:{
        post:Object,
        setPostDetail:Function,
    },
    watch:{
        post(post){
            console.log(post);
        }
    },



}
</script>
<style>
    #post{
        display: flex;
        justify-content: space-between;

        text-align: center;
        width:90%;
        height:50px;
        border-bottom: 1px solid black;
    }

</style>