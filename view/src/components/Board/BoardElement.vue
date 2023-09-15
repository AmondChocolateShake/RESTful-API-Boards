<template lang="">
    <div class="listFont" @click="handler">{{board.name}}</div>
</template>
<script>


export default {
    name:"BoardElement",
    props:{
        board:Object,
        setBoardId:Function,
        setPostId:Function
    },
    data(){

        const handler=()=>{
            this.setBoardId(this.board.id);
            this.setPostId(-1);
        }
        return{
            handler
        }
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