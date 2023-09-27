<template>
    <div class="postContainer">
        <PostElement :author="'aaa'" :title="'ddd'" :date="'2014-05-23'"/>
        <PostElement :author="'aaa'" :title="'ddd'" :date="'2014-05-23'"/>
        <PostElement :author="'aaa'" :title="'ddd'" :date="'2014-05-23'"/>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import PostElement from './PostElement.vue';

export default {
    components:{
        PostElement
    },

    setup(){
        const store=useStore();
        store.dispatch('GETPostList');
        // const postList=store.getters.getPostList();
        store

        return{
            // postList
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