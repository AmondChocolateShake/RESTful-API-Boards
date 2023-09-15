<template lang="">
    <div class="listFont" @click="setBoardId(board.id)">{{board.name}}</div>
</template>
<script>


export default {
    name:"BoardElement",
    props:{
        board:Object,
        setBoardId:Function,
    },

    setup(){


        // const boardSelected=()=>{
        //     this.setBoardId(1);
        // }

        return{
            

        }
    },

   
    
}
</script>
<style>


    
</style>