<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\MessageBag;
use App\Providers\BoardService;

class BoardController extends Controller
{

    protected $boardService;
    public function __construct(BoardService $boardService)
    {
        $this->boardService=$boardService;
    }


    //모든 게시판과 해당 게시판의 게시글을 가져오는 함수
    public function getAll()
    {
        $boards=$this->boardService->getAll();
        if($boards) return $boards;
    }


    //게시판 데이터만 가져오는 함수
    public function getBoard($id)
    {
        $board=$this->boardService->getBoard($id);
        
        if($board) return $board;
    }

    
    public function getPosts($id)
    {
        $posts=$this->boardService->getPostsByBoardId($id);
        if($posts) return $posts;
        
    }
    
    //게시판 데이터를 가져오는 함수
    public function getPost($boardId,$postId)
    {
        $post=$this->boardService->getPost($boardId,$postId);
        if($post) return $post;

    }

    public function createBoard(Request $request)
    {
        $name=$request->input('name');
        if($name){
            $status=$this->boardService->createBoard($name);
    
            if($status){
                $message=[
                    'status'=>'successed',
                    'message'=>'게시판 생성에 성공하였습니다.'
                ];
                return response()->json($message,201);
            }else{
                $message=[
                    'status'=>'failed',
                    'message'=>'게시판 생성에 실패하였습니다.'
                ];
                return response()->json($message,500);
            }
        }else{
            $message=[
                'status'=>'failed',
                'message'=>'name 속성을 포함하여 게시판을 생성하세요'
            ];
            return response()->json($message,400);
        }

    }

    public function createPost($id, Request $request)
    {
        $title= $request-> input('title');
        $context= $request-> input('context');
        $author= $request-> input('author');
        $board_id= $request-> input('board_id');

        if($title && $context && $author && $board_id){
            if($this-> boardService-> createPost($title, $context, $author, $board_id))
            {
                $message=[
                    'status'=>'successed',
                    'message'=>'게시글 생성에 성공하였습니다.'
                ];
                return response()-> json( $message, 201);
            }else {
                $message=[
                    'status'=>'failed',
                    'message'=>'게시판 생성에 실패하였습니다.'
                ];
                return response()->json($message,500);
            }

        }else{
            $message=[
                'status'=>'failed',
                'message'=>'올바른 파라미터를 전달하세요.'
            ];
            return response()->json($message,400);
        }

        

    }

    public function deleteBoard($id)
    {
        if($this-> boardService-> deleteBoard($id))
        {
            $message=[
                'status'=>'successed',
                'message'=>'게시글 삭제에 성공하였습니다.'
            ];
            return response()-> json( $message, 200);
        }else{
            $message=[
                'status'=>'failed',
                'message'=>'게시글 삭제에 실패하였습니다.'
            ];
            return response()-> json( $message, 500);
        }
    }

    public function deletePost($boardId, $postId)
    {
        if($this-> boardService-> deletePost($boardId, $postId))
        {
            $message=[
                'status'=>'successed',
                'message'=>'게시글 삭제에 성공하였습니다.'
            ];
            return response()-> json( $message, 200);
        }else{
            $message=[
                'status'=>'failed',
                'message'=>'게시글 삭제에 실패하였습니다.'
            ];
            return response()-> json( $message, 500);
        }
    }


    public function editBoard($id, Request $request)
    {
        
    }

    public function editPost($boardId, $postId, Request $request)
    {

    }


}
