<template>
    <div class="postContainer">
        <PostElement :author="'aaa'" :title="'ddd'" :date="'2014-05-23'"/>
        <PostElement :author="'aaa'" :title="'ddd'" :date="'2014-05-23'"/>
        <PostElement :author="'aaa'" :title="'ddd'" :date="'2014-05-23'"/>
    </div>
</template>
<script>
import PostElement from './PostElement.vue';

export default {
    components:{
        PostElement
    },

    setup(){


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