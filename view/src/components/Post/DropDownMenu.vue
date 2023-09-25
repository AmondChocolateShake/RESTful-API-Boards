<template>
    <div class="dropdown">
      <button @click="toggleDropdown">Toggle Dropdown</button>
      <ul v-if="isDropdownOpen" class="dropdown-menu">
        <li></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props:{

    },

    data() {
      return {
        isDropdownOpen: false
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      }
    }
  };
  </script>
  
  <style>
  /* 스타일링은 필요에 따라 조절하십시오 */
  .dropdown {
    position: relative;
    display: inline-block;
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
  