<template>
    <div id="board">
        <router-link to="/posts">
            <h3>{{boardName}}</h3>
        </router-link>
    </div>
</template>
<script>

export default {
    name:'BoardElement',
    props:{
        boardName:String,
        id:Number
    },
    setup(props){
        console.log(props.boardName);

        return{

        }
    }


}
</script>
<style>
    #board{
        display: flex;
        justify-content: space-around;
        align-items: center;

        width: 500px;
        height: 100px;

        border-top:1px solid black ;
        border-bottom:1px solid black ;
    }
</style>