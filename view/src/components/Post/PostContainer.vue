<template lang="">
    <div id="postContainer">
        <!-- <PostElement/> -->
    </div>
</template>
<script>
import {ref} from 'vue'
// import PostElement from './PostElement.vue'

export default {
    name:"PostContainer",

    props:{
        setPostId:Function,
        boardId:Number,
    },

    watch:{
        boardId(id){
            fetch(`http://localhost:3000/board/${id}/post`)
        .then(res=>res.json())
        .then(data=>{
            this.posts.value=data.posts
            console.log(this.posts.value)
        })
        }
    },

    data(){
        const posts=ref([])

        return{
            posts
        }
    },
    components:{
        // PostElement
    },

}
</script>
<style>
    #postContainer{
        display:flex;
        width:70%;
        height:80%;
        border:1px solid black;
    }

</style>