<template>

    <div id="contentBox">
        <BoardList/>
        <PostContainer/>
    </div>

</template>
<script>
import BoardList from './Board/BoardList.vue';
import PostContainer from './Post/PostContainer.vue'


export default {
    name:"MainContainer",

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