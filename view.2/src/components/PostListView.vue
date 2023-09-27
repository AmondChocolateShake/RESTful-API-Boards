<template>
    <div class="postContainer">
        <PostElement v-for="post, index in postList" :key= "index" :author= "post.author" :title= "post.title" :date="post.created_at" :id="post.id"/>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import PostElement from './PostElement.vue';
import { ref } from 'vue';

export default {
    components:{
        PostElement
    },

    setup(){
        const store= useStore()
        const postList= ref();
        const boardId= ref(store.getters.getBoardId);
        fetch('http://localhost/api/board/' + boardId.value + '/post')
        .then(response => response.json())
        .then(data => {
            postList.value= data.posts;
        })
        

        return{
            postList
        }



    }
}
</script>
<style>
    .postContainer{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        width: 90%;
        height: 500px;
    }
</style>