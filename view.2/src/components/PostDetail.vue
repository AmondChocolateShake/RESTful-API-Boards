<template>
    <div class="postDetails">
        <div>
            제목 : {{ post.title }}
        </div>
        <div>
            작성자 : {{ post.author }}     
        </div>
        <div>
            날짜 : {{ post.date }}
        </div>
        <div>
            {{ post.context }}
        </div>
        <div>
            <router-link to="/boards" @click="deletePost">
                <button>삭제</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    
    setup(){
        const store=useStore();
        const post=ref({});

        const boardId=store.getters.getBoardId;
        const postId=store.getters.getPostId;

        fetch('http://localhost/api/board/'+boardId+'/post/'+postId)
        .then(res=>res.json())
        .then(data=>{
            post.value={
                id:data.id,
                title:data.title,
                author:data.author,
                date:data.created_at,
                context:data.context
            }
        })

        const deletePost=()=>{
            fetch('http://localhost/api/board/'+boardId+'/post/'+postId, {
                method: 'DELETE'
            })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
          })
        }

        return {
            post,
            deletePost
        }
    }
}


</script>
<style>
    .postDetails{
        display: flex;
        flex-direction: column;

        width: 90%;
        height: 500px;
        border: 1px solid black ;
    }
</style>