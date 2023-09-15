<template>
    <h1>게시판</h1>
    <MainContainer/>
</template>

<script>
import MainContainer from './components/MainContainer.vue' 

export default {

  name: 'App',
  components: {
    MainContainer,
}
}
</script>

<style>
  #app{
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    
    width:100%;
    height:100%;

  }

  body{
      margin: 0;
      width:100vw;
      height:100vh;
  }

</style>
