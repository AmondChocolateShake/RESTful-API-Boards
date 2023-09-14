import express, {Request,Response} from 'express';
import Board from './Board'

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Example route to handle JSON data
app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);

  // Add your logic here to handle the data

  res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



interface PostIF{
    title:string
    author:string
    context:string
}

interface BoardIF{
    name:string
}

const testBoard=new Board("테스트",0);
const controller={
    boardId:1,
    boards:[testBoard],
    getBoardId:function(){
        return this.boardId++;
    },

    getBoards:function(){
        return this.boards;
    },
    getBoard:function(boardId:number):Board | undefined{
        const board=this.boards.find(obj=>obj.id===boardId);
        return board;
    },
    getPosts:function(boardId:number){
        const board=this.getBoard(boardId);
        return board?.getPosts;
    },
    getPost:function(boardId:number,postId:number){
        const board=this.getBoard(boardId);
        const post=board?.getPostById(postId);
        return post;
    },
    
    createBoard:function(board:BoardIF):boolean{
        const newBoard=new Board(board.name,this.getBoardId());
        this.boards.push(newBoard);
        return true
    },
    createPost:function(boardId:number,post:PostIF){
        const board=this.getBoard(boardId);
        board?.addNewPost(post.title,post.author,post.context)
        return true;
    },

    editBoard:function(boardId:number,boardForm:BoardIF){
        const board=this.getBoard(boardId);
        if(board!==undefined){
            board?.editBoard(boardForm.name);
            return true;
        }else{
            return false;
        }
    },
    editPost:function(boardId:number,postId:number,postForm:PostIF){
        const board=this.getBoard(boardId);
        if(board!==undefined){
            board.editPost(postId,postForm.title,postForm.author,postForm.context);
            return true;
        }else{
            return false;
        }
    },

    deleteBoard:function(boardId:number){
        const board=this.getBoard(boardId);
        if(board!==undefined){
            const index=this.boards.indexOf(board);
            if(index!==-1){
                this.boards.splice(index,1);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    },
    deletePost:function(boardId:number,postId:number){
        const board=this.getBoard(boardId);
        board?.deletePost(postId);
    },

}


//게시판 목록 조회
app.get('/board',(req:Request,res:Response)=>{
    const boards=controller.getBoards;
    if(boards!==undefined){
        res.status(200).
    }

})

// 게시판 조회
app.get('/board/:id',(req:Request,res:Request)=>{

})

// 게시판 내 게시글 리스트 조회
app.get('/board/:id/post',(req:Request,res:Request)=>{

})

// 게시판 내 특정 게시글 조회
app.get('/board/:id/post/:id',(req:Request,res:Request)=>{

})

// 게시판 생성
app.post('/board',(req:Request,res:Request)=>{

})

// 게시글 생성
app.post('/board/:id/post',(req:Request,res:Request)=>{

})


// 게시판 수정
app.put('/board/:id',(req:Request,res:Request)=>{

})

// 게시글 수정
app.put('/board/:id/post/:id',(req:Request,res:Request)=>{

})


// 게시판 삭제
app.delete('/board/:id',(req:Request,res:Request)=>{

})

// 게시글 삭제
app.delete('/board/:id/post/:id',(req:Request,res:Request)=>{

})



