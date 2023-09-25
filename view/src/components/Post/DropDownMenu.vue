<template>
    <div class="dropdown">
      <button @click.prevent="toggleDropdown">Toggle Dropdown</button>
      <ul v-if="isDropdownOpen" class="dropdown-menu">
        <li @click="selected(board.id)" v-for="board,index in boards" :key="index">{{ board.name }}</li>
      </ul>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
  props:{
    setBrdId:Function
  },
  setup(props) {
        const boards=ref([]);
        const isDropdownOpen=ref(false);
        
        function toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
           
        }


        fetch('http://localhost/api/board')
        .then(res=>res.json())
        .then(res=>{
            boards.value=res;
            console.log(boards);
        })
  
        function selected(id){
            this.isDropdownOpen=false;
            props.setBrdId(id);
            console.log(id);
        }

      return{
          isDropdownOpen,
          toggleDropdown,
          boards,
          selected
      }
  }

  };
  </script>
  
  <style>
  /* 스타일링은 필요에 따라 조절하십시오 */
  .dropdown {
    position: relative;
    display: inline-block;
    margin-right: 10px;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .dropdown-menu li {
    padding: 10px;
    background-color: #f9f9f9;
  }
  
  .dropdown-menu li a {
    text-decoration: none;
    color: #333;
  }
  
  .dropdown-menu li a:hover {
    background-color: #e0e0e0;
  }
  </style>
  