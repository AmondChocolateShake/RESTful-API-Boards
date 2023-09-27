<template lang="">
    <div id="boardContainer">
        <BoardElement v-for="board, index in boardList" :key="index" :id="board.id" :boardName="board.name"/>
    </div>
</template>
<script>
import {ref} from 'vue'
import BoardElement from './BoardElement.vue';



export default {
    components:{
        BoardElement
    },
    setup(){
        const boardList = ref([]);
        fetch('http://localhost/api/board')
        .then(response => response.json())
        .then(data => {
            boardList.value = data;
        })

        return {
            boardList
        }
    }
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