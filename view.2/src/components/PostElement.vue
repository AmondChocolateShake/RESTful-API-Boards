<template>
    <router-link to="postDetail" @click="clickHandler">
        <div class="post">
            <div>{{ author }}</div>
            <div>{{ title }}</div>
            <div>{{ date }}</div>
        </div>
    </router-link>
</template>
<script>

import { useStore } from 'vuex';

export default {
    

    props:{
        author:String,
        title:String,
        date:String,
        id:Number
    },

    setup(props){
        const store=useStore();

        const clickHandler = () => {
            store.commit('setPostId',props.id);

        }

        return{
            clickHandler
        }
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