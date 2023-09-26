<template>
    <div class="postDetails">
        <div>
            제목 : {{ title }}
        </div>
        <div>
            작성자 : {{ author }}     
        </div>
        <div>
            날짜 : {{ date }}
        </div>
        <div>
            {{ context }}
        </div>
        <div>
            <button>삭제</button>
        </div>

    </div>
</template>
<script>
export default {
    
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