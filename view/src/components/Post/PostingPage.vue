<template>
    <form @submit.prevent="handleSubmit" class="posting">
        <div class="title">
            제목: 
            <input type="title" v-model="formData.title">
        </div>
        <div class="context">
            <textarea type="context" v-model="formData.context" name="context" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="btnBox">
            <DropDownMenu :setBrdId="setBoardIdFormData"/>
            <button @click="this.writePost" type="submit" class="save">등록</button>
        </div>
    </form>
</template>

<script>
import DropDownMenu from './DropDownMenu.vue';
import { ref } from 'vue';

export default {
    

    name:'PostingPage',
    components:{
        DropDownMenu
    },
    props:{
        write:Boolean,
        writePost:Function
    },

    setup(){

        const id=ref(null);
        const formData= ref({
            title: '',
            context: '',
            author: '김동주',
            board_id:id
        });



        function handleSubmit(){
            fetch(`http://localhost/api/board/${id.value}/post`,{
                method: 'POST', // POST 메서드
                headers: {
                    'Content-Type': 'application/json' // JSON 형태로 데이터 전송
                },
                body: JSON.stringify(formData.value)
            })
        }


        function setBoardIdFormData(boardId){
            id.value=boardId;
        }

        return{
            formData,
            handleSubmit,
            setBoardIdFormData,

        }
        
    }


}
</script>
<style>
    .btnBox{
        display: flex;
        justify-content: flex-end;
    }

    .posting{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height:100%;
    }


    .title{
        display:'flex';
        width: 100%;
        height: 50px;
        border-bottom: 1px solid black;
    }

    .title > input{
        width:90%;
    }

    .context>textarea{
        resize: none;
        width: 99%;
        height: 90%;
        border: none;
    }

    .context{
        width: 100%;
        height:70%;
    }

    .save{
        width: 100px;
        height:30px;
        
    }
</style>