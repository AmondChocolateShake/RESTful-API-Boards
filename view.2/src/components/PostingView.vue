<template lang="">
    <form action="">
        <div>
            제목:
            <input type= "text">
        </div>
        <div>
            <textarea name= "" id= "" cols= "30" rows= "10"></textarea>
        </div>
        <div>
            <button @click= "submit">등록</button>
        </div>
    </form>
</template>
<script>
export default {
    setup() {
        const submit = () => {
            fetch('http://localhost/api/board/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: '제목',
                    author: '',
                    content: '내용',
                    boardId: 0
                })
            })
        }

        return{
            submit
        }
    }
}
</script>
<style lang="">
    
</style>