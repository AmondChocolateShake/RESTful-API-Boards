<template>
    <div id="board">
        <router-link to="/posts" @click="clickHandler">
            <h3>{{boardName}}</h3>
        </router-link>
    </div>
</template>
<script>
import { useStore } from 'vuex';


export default {
    name:'BoardElement',
    props:{
        boardName:String,
        id:Number
    },
    setup(props){
        
        const store=useStore();
        const clickHandler=()=>{
            store.commit('setBoardId',props.id);
        }

        return{
            clickHandler
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