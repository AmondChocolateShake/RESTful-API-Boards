<template>
    <div id="postDetail">
        <PostTitle :title="post.title" :author="post.author" :date="post.date"/>
        <button>삭제</button>
        <p>{{ post.context }}</p>
    </div>
</template>
<script>
import PostTitle from './PostTitle.vue'


export default {
    name:"PostDetail",

    props:{
        post:Object
    },
    components:{
        PostTitle
    }

}
</script>
<style>
    #postDetail{
        display: flex;
        flex-direction: column;
        
        width:100%;
        height:100%;
    }

    #postDetail>button{
        width: 70px;
        
    }

</style>