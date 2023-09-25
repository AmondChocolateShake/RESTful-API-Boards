<template>
    <div id="contentBox">
        <button @click="writePost" id="write">글쓰기</button>
        <BoardList :setBoardId="setBoardId" :setPostId="setPostId"/>
        <PostContainer :write="write" :postId="postId" :setPostId="setPostId" :boardId="boardId"/>
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
        const write=ref(false);

        const setBoardId=(id)=>{
            boardId.value=id;
            write.value=false;
            console.log(boardId.value)
            
        };

        const setPostId=(id)=>{
            postId.value=id;
            write.value=false;
            console.log(postId.value)
        }

        const writePost=()=>{
            write.value=!write.value;
            console.log(write.value);
        }


        return{
            setBoardId,
            setPostId,
            boardId,
            postId,
            writePost,
            write
        }

    },


    components:{
    BoardList,
    PostContainer
    }

}
</script>
<style>
    #write{
        position: absolute;
        top:10px;
        right: 20px;

        width:70px;
        height:30px;
    }

    #contentBox{
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;

        width:100%;
        height:90%;
    }


</style>