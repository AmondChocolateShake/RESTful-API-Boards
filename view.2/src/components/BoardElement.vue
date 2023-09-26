<template>
    <div id="board">
        <h3>{{ this.name }}</h3>
    </div>
</template>
<script>
export default {
    name:'BoardElement',
    props:{
        name:String
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

    }
</style>