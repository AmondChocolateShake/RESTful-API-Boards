<?php

namespace App\Providers;
use App\Models\Boards;
use App\Models\Posts;

class BoardService
{



    //this function provides all of boards wih posts whihc are involved in each board
    public function getAll()
    {
        $boards=Boards::all();
        $result=[];
        foreach($boards as $board){
            $posts=$this->getPosts($board->id);
            $board->posts=$posts;

            $result[]=$board;       
        }

        return $result;


    }

    //provides A specific board by id
    public function getBoard($id)
    {
        $board = Boards::find($id);

        if($board){
            return $board;
        }else{
            return false; 
        }
    }


    //this function provides all the posts by board id
    public function getPostsByBoardId($id)
    {
        $board= Boards::find($id);
        $posts= Posts::where('board_id', $id)->get();
        if($posts && $board)
        {
            $board->posts= $posts;
            return $board;

        }
    }

    public function getPosts($boardId) 
    {
        $posts= Posts::where('board_id',$boardId)-> get();
        return $posts;
    }

    //provides one post
    public function getPost($boardId, $postId) 
    {
        $post= Posts::where('board_id',$boardId)
                    ->where('id',$postId)
                    ->first();
        if($post) {
            return $post;
        }else {
            return false;
        }
    }


    public function deleteBoard($id)
    {
        $board= Boards::find($id);
        if($board){ 
            $board->delete();
            return true;
        }
        else return false;
    }


    public function deletePost($boardId, $postId)
    {
        $post= $this -> getPost($boardId, $postId);
        if ($post) {
            $post-> delete();
            return true;
        }else {
            return false;
        }
    }


    public function createBoard($name)
    {
        $newBoard= Boards::create([
            'name'=>$name
        ]);
        if($newBoard) return true;
        else return false;
    }

    public function createPost($title,$context,$author)
    {
        $newPost= Posts::create([
            'title'=>$title,
            'context'=>$context,
            'author'=>$author
        ]);
        if($newPost) return true;
        else return false;
    }





}
