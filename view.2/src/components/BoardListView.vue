<template lang="">
    <div id="boardContainer">
        <BoardElement :id="1" :boardName="'자유게시판'"/>
        <BoardElement :id="2" :boardName="'중고게시판'"/>
        <BoardElement :id="3" :boardName="'음악게시판'"/>
        
        <!-- {{boards}} -->
    </div>
</template>
<script>
// import {ref} from 'vue'
import BoardElement from './BoardElement.vue';
import { useStore } from 'vuex';



export default {
    components:{
        BoardElement
    },
    setup(){
        const store = useStore();
        


        return{
            store
        }

    },
}
</script>
<style>
    #boardContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;

        width: 90%;
        height: 500px;
        overflow: auto;
    }
</style>