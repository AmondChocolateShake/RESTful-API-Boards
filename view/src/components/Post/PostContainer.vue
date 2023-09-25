<template lang="">
    <div id="postContainer">
        <div class="wrapper" v-if="postId===-1&&!write">
            <PostElement v-for="post,index in this.posts.value" :key="index" :post="post" :setPostDetail="setPostDetail" />
        </div>
        <div class="wrapper" v-if="postId>-1&&!write">
            <PostDetail :post="postDetail"/>
        </div>
        <div class="wrapper" v-if="write">
            <PostingPage :writePost="writePost" :write="write"/>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
import PostElement from './PostElement.vue'
import PostDetail from './PostDetail'
import PostingPage from './PostingPage.vue'

export default {
    name:"PostContainer",

    props:{
        setPostId:Function,
        boardId:Number,
        postId:Number,
        write:Boolean,
        writePost:Function
    },

    watch:{
        boardId(id){
        
        fetch(`http://localhost/api/board/${id}/post`)
        .then(res=>res.json())
        .then(data=>{
            this.posts.value=data.posts
            console.log(this.posts.value)
        })
        }
    },

    data(){
        const posts=ref([])
        const postDetail=ref({})


        const setPostDetail=(post)=>{
            this.setPostId(post.id)
            postDetail.value=post;
        }


        return{
            posts,
            setPostDetail,
            postDetail
        }
    },
    components:{
        PostElement,
        PostDetail,
        PostingPage
    },

}
</script>
<style>
    #postContainer{

        width:70%;
        height:80%;
        border:1px solid black;
    }

    .wrapper{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;

        width:100%;
        height:100%;
    }

</style>