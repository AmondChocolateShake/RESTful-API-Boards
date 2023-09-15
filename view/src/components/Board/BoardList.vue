<template>
    <div id="boardList">
        
    </div>
</template>

<script>
export default {
    name:"BoardList",

    data(){
        return{
            boardList:[],

        }
    },

    mounted(){
        fetch('http://localhost:3000/board',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(datas=>{
            console.log(datas);
            // this.boardList=datas;
        })
    },

    components:{
        
    }
}
</script>
<style>
    #boardList{
        display: flex;
        
        width: 20%;
        height: 80%;

        border: 1px solid black;

    }
</style>