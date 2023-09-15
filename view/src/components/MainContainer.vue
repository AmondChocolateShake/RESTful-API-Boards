<template>
    <div id="contentBox">
        <BoardList :setBoardId="setBoardId"/>
        <PostContainer :setPostId="setPostId" :boardId="boardId"/>
    </div>
</template>
<script>
import { ref } from 'vue';
import BoardList from './Board/BoardList.vue';
import PostContainer from './Post/PostContainer.vue'


export default {
    name:"MainContainer",

    //어디부터 어디까지 라우팅?
    //-> 라우팅없이 컴포넌트변환만 해도 되는지
    //전역관리는 언제부터?

    setup(){
        const boardId=ref(-1);
        const postId=ref(-1);

        const setBoardId=(id)=>{
            boardId.value=id;
            console.log(boardId.value)
        };

        const setPostId=(id)=>{
            postId.value=id;
        }

        return{
            setBoardId,
            setPostId,
            boardId
        }

    },


    components:{
    BoardList,
    PostContainer
    }

}
</script>
<style>


    #contentBox{
        display: flex;
        justify-content: space-around;
        align-items: center;

        width:100%;
        height:90%;
    }

    .writeBtn{
        display: flex;
        
        align-self: flex-end;


        width:100px;
        height: 30px;

        background-color: cadetblue;
        border: 1px solid black;
    }


</style>