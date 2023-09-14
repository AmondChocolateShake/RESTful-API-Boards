import express, {Request,Response} from 'express';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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



