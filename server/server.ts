import express, {Request,Response} from 'express';


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



interface Post{
    title:string
    author:string
    context:string
}

interface Board{
    name:string
}


const controller={
    boardCnt:1,
    

    getBoards:function(){},
    getBoard:function(boardId:number){},
    getPosts:function(){},
    getPost:function(boardId:number,postId:number){},
    
    createBoard:function(board:Board){},
    createPost:function(post:Post){},

    editBoard:function(boardId:number){},
    editPost:function(boardId:number,postId:number){},

    deleteBoard:function(boardId:number){},
    deletePost:function(boardId:number,postId:number){},

}


//게시판 목록 조회
app.get('/board',(req:Request,res:Request)=>{

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



