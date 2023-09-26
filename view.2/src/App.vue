<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/boards">게시판</router-link> | 
    <router-link to="/posting">글쓰기</router-link>
  </nav>
  <div class="content">
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80%;

}
</style>
