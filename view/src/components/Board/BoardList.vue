<template>
    <div id="boardList">
        <h3 class="listFont">전체게시판</h3>
        <BoardElement v-for="board,index in boardList" :key="index" :board="board" :setBoardId="setBoardId" :setPostId="setPostId"/>
    </div>
</template>

<script>
import BoardElement from './BoardElement.vue';
import {ref,onMounted} from 'vue'

export default {
    name:"BoardList",
    props:{
        setBoardId:Function,
        setPostId:Function
    },

    setup(){
        let boardList=ref([{}])
        
        onMounted(()=>{
            fetch('http://localhost/api/board',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(datas=>{
                boardList.value=datas;
            })
        })
    
        return{
            boardList,
        }
    },

    components:{
    BoardElement
    }
}
</script>
<style>


    #boardList>h3{
        text-align: center;
        width:100%;
        height: 30px;
        border-bottom: 1px solid black;

    }

    .listFont{
        text-align: center;
        width: 100%;
    }

    #boardList{
        display: flex;
        flex-direction: column;

        width: 20%;
        height: 80%;

        border: 1px solid black;

    }
</style>