<template lang="">
    <div id="boardContainer">
        <BoardElement v-for="board, index in boards" :key="index" :id="board.id" :boardName="board.name"/>
    </div>
</template>
<script>
import {ref} from 'vue'
import BoardElement from './BoardElement.vue';
import { useStore } from 'vuex';



export default {
    components:{
        BoardElement
    },
    setup(){
        const store = useStore();
        store.dispatch('GETBoardList');
        
        const boards=ref(store.getters.getBoardList);
        

        return{
            boards
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