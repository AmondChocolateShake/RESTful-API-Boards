<?php

namespace App\Providers;
use App\Models\Boards;
use App\Models\Posts;

class BoardService
{



    //this function provides all of boards
    public function getBoards(){
        $boards=Boards::all();

        if($boards){
            return $boards;
        }else{
            return false; 
        }


    }

    //provides A specific board by id
    public function getBoard($id){
        $board = Boards::find($id);
        
        if($board){
            return $board;
        }else{
            return false; 
        }


    }

    //this function provides all the posts by board id
    public function getPostsByBoard($id){

    }

    public function getPost($boardId,$postId){

    }


    public function deleteBoard($id){

    }

    public function deletePost($boardId,$postId){

    }


    public function createBoard(){

    }

    public function createPost(){

    }

}
