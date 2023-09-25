<template>
    <form @submit.prevent="handleSubmit" class="posting">
        <div class="title">
            제목: 
            <input type="title" v-model="formData.title">
        </div>
        <div class="context">
            <textarea type="context" v-model="formData.context" name="context" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
            <DropDownMenu/>
            <button type="submit" class="save">등록</button>
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

    setup(){
        const formData= ref({
            title: '',
            context: '',
            author: '김동주'
        });

        function handleSubmit(){
            // console.log(formData.title.value);
        }
        return{
            formData,
            handleSubmit,

        }
        
    }


}
</script>
<style>
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
    }

    .context>textarea{
        resize: none;
        width: 99%;
        height: 90%;
        border: none;
    }

    .context{
        width: 100%;
        height:30%;
    }

    .save{
        width: 100px;
        height:30px;
        
    }
</style>