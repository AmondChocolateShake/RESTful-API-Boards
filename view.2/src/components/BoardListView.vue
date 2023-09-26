<template lang="">
    <div id="boardContainer">
        <BoardElement :id="1" :boardName="'hello'"/>
        
        <!-- {{boards}} -->
    </div>
</template>
<script>
// import {ref} from 'vue'
import BoardElement from './BoardElement.vue';
import { useStore } from 'vuex';


export default {
    name:'BoardListView',
    components:{
        BoardElement
    },

    setup(){
        const store = useStore();
        store.dispatch('GETBoardList');
        return{
            // boards
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

        width: 100vw;
        height: 500px;
        overflow: auto;
    }
</style>