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
    deletePost:function(boardId:number,postId:number):boolean{
        const board=this.getBoard(boardId);
        if(board!==undefined){
            if(board.deletePost(postId)){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    },

}


//게시판 목록 조회
app.get('/board',(req:Request,res:Response)=>{
    const boards=controller.getBoards;
    if(boards!==undefined){
        res.status(200).json({
            boardList:boards
        })
    }else{
        res.status(500).json({
            status:"failed",
            message:"게시판을 찾을 수 없습니다."
        })
    }

})

// 게시판 조회
app.get('/board/:id',(req:Request,res:Response)=>{
    const id =parseInt(req.params.id);
    const board=controller.getBoard(id);
    if(board!==undefined){
        res.status(200).json({
            name:board.name,
            id:board.id
        })
    }else{
        res.status(400).json({
            status:"failed",
            message:"해당 게시판을 찾을 수 없습니다."
        })
    }

})

// 게시판 내 게시글 리스트 조회
app.get('/board/:id/post',(req:Request,res:Response)=>{
    const id =parseInt(req.params.id);
    const board=controller.getBoard(id);
    const posts=controller.getPosts(id);
    if(board!==undefined&&posts!==undefined){
        res.status(200).json({
            board:{
                name:board.name,
                id:board.id
            },
            posts:posts
        })
    }else{
        res.status(400)
    }
})

// 게시판 내 특정 게시글 조회
app.get('/board/:boardId/post/:postId',(req:Request,res:Response)=>{
    const boardId=parseInt(req.params.boardId);
    const postId=parseInt(req.params.postId);

    const post=controller.getPost(boardId,postId);

    if(post!==undefined){
        res.status(200).json({
            title:post.title,
            date:post.date,
            author:post.author,
            context:post.context,
            id:post.id
        })
    }else{
        res.status(400)
    }

})

// 게시판 생성
app.post('/board',(req:Request,res:Response)=>{
    const boardName=req.body.name
    if(controller.createBoard(boardName)){
        res.status(201).json({
            status:"successed",
            message:"게시판 생성에 성공했습니다."
        })
    }else{
        res.status(500).json({
            status:"failed",
            message:"게시판 생성에 실패했습니다."
        })
    }


})

// 게시글 생성
app.post('/board/:id/post',(req:Request,res:Response)=>{
    const id=parseInt(req.params.id);
    const postForm={
        title:req.body.title,
        context:req.body.context,
        author:"김동주"
    }
    if(controller.createPost(id,postForm)){
        res.status(201).json({
            status:"successed",
            message:"게시판 생성에 성공했습니다."
        })
    }else{
        res.status(500).json({
            status:"failed",
            message:"게시판 생성에 실패했습니다."
        })
    };


})


// 게시판 수정
app.put('/board/:id',(req:Request,res:Response)=>{
    const id=parseInt(req.params.id);
    const boardName=req.body.name;
    if(controller.editBoard(id,boardName)){
        res.status(201).json({
            status:"successed",
            message:"게시판 수정에 성공했습니다."
        })
    }else{
        res.status(500).json({
            status:"failed",
            message:"게시판 수정에 실패했습니다."
        })
    }

})

// 게시글 수정
app.put('/board/:boardId/post/:id',(req:Request,res:Response)=>{
    const boardId=parseInt(req.params.boardId);
    const postId=parseInt(req.params.postId);
    const postForm={
        title:req.body.title,
        context:req.body.context,
        author:"김동주"
    }

    if(controller.editPost(boardId,postId,postForm)){
        res.status(201).json({
            status:"successed",
            message:"게시글 수정에 성공했습니다."
        })
    }else{
        res.status(500).json({
            status:"failed",
            message:"게시판 수정에 실패했습니다."
        })
    }

})


// 게시판 삭제
app.delete('/board/:id',(req:Request,res:Response)=>{
    const id=parseInt(req.params.id);
    if(controller.deleteBoard(id)){
        res.status(201).json({
            status:"successed",
            message:"게시판 삭제에 성공했습니다."
        })
    }else{
        res.status(500).json({
            status:"failed",
            message:"게시판 삭제에 실패했습니다."
        })
    }
})

// 게시글 삭제
app.delete('/board/:id/post/:id',(req:Request,res:Response)=>{
    const boardId=parseInt(req.params.boardId);
    const postId=parseInt(req.params.postId);

    if(controller.deletePost(boardId,postId)){
        res.status(201).json({
            status:"successed",
            message:"게시글 삭제에 성공했습니다."
        })

    }else{
        res.status(500).json({
            status:"failed",
            message:"게시글 삭제에 실패했습니다."
        })
    }

})



