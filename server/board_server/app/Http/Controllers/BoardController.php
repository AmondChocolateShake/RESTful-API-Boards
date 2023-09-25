<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\MessageBag;
use App\Providers\BoardService;

class BoardController extends Controller
{

    protected $boardService;
    public function __construct(BoardService $boardService){
        $this->boardService=$boardService;
    }


    public function getAll(){
        $boards=$this->boardService->getBoards();
        return $boards;
    }



    public function getBoardWithPosts($id){
        
    }

    public function create(Request $request){
        
    }

    public function delete($id){
        
    }

    public function edit($id, $name){
        
    }


}
