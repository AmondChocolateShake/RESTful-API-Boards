<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Boards;


class BoardController extends Controller
{

    public function getAll(){
        $boards=Boards::all();
        return $boards;
        
    }

    public function get($id){
        $board=Boards::find($id);
        return $board;
        // return $id;
    }

    public function create(Request $request){
        $jsonData=$request->json()->all();

        return response()->json(["data"=>$jsonData]);

        // $board=new Boards();
        
        // if($board->save())
        // return response()->json($board,201);
        // else return false;
    }

    public function delete($id){
        $board=Boards::find($id);
        if($board){
            $board->delete();
            return true;
        }else{
            return false;
        }
    }

    public function edit($id, $name){
        $board=Boards::find($id);
        $board->name=$name;
    }


}
