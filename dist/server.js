"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Board_1 = __importDefault(require("./Board"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
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
const testBoard = new Board_1.default("테스트", 0);
const controller = {
    boardId: 1,
    boards: [testBoard],
    getBoardId: function () {
        return this.boardId++;
    },
    getBoardList: function () {
        return this.boards;
    },
    getBoards: function () {
        return this.boards;
    },
    getBoard: function (boardId) {
        const board = this.boards.find(obj => obj.id === boardId);
        return board;
    },
    getPosts: function (boardId) {
        const board = this.getBoard(boardId);
        return board === null || board === void 0 ? void 0 : board.getPosts();
    },
    getPost: function (boardId, postId) {
        const board = this.getBoard(boardId);
        const post = board === null || board === void 0 ? void 0 : board.getPostById(postId);
        return post;
    },
    createBoard: function (board) {
        const newBoard = new Board_1.default(board, this.getBoardId());
        this.boards.push(newBoard);
        return true;
    },
    createPost: function (boardId, post) {
        const board = this.getBoard(boardId);
        if (board) {
            board === null || board === void 0 ? void 0 : board.addNewPost(post.title, post.author, post.context);
            return true;
        }
        else {
            return false;
        }
    },
    editBoard: function (boardId, name) {
        const board = this.getBoard(boardId);
        if (board !== undefined) {
            board === null || board === void 0 ? void 0 : board.editBoard(name);
            return true;
        }
        else {
            return false;
        }
    },
    editPost: function (boardId, postId, postForm) {
        const board = this.getBoard(boardId);
        if (board) {
            board.editPost(postId, postForm.title, postForm.author, postForm.context);
            return true;
        }
        else {
            return false;
        }
    },
    deleteBoard: function (boardId) {
        const index = this.boards.findIndex(obj => obj.id === boardId);
        if (index > -1) {
            this.boards.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
        // if(board!==undefined){
        //     const index=this.boards.indexOf(board);
        //     if(index!==-1){
        //         this.boards.splice(index,1);
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }else{
        //     return false;
        // }
    },
    deletePost: function (boardId, postId) {
        const board = this.getBoard(boardId);
        // console.log(board);
        if (board) {
            if (board.deletePost(postId)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    },
};
//게시판 목록 조회
app.get('/board', (req, res) => {
    const boards = controller.getBoardList();
    // console.log(boards);
    if (boards) {
        res.status(200).json({
            boardList: boards
        });
    }
    else {
        res.status(404).json({
            status: "failed",
            message: "게시판을 찾을 수 없습니다."
        });
    }
});
// 게시판 조회
app.get('/board/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const board = controller.getBoard(id);
    if (board) {
        res.status(200).json({
            name: board.name,
            id: board.id
        });
    }
    else {
        res.status(404).json({
            status: "failed",
            message: "해당 게시판을 찾을 수 없습니다."
        });
    }
});
// 게시판 내 게시글 리스트 조회
app.get('/board/:id/post', (req, res) => {
    const id = parseInt(req.params.id);
    const board = controller.getBoard(id);
    if (board) {
        res.status(200).json(board);
    }
    else {
        res.status(404).json({
            status: "failed",
            message: "게시글을 찾을 수 없습니다."
        });
    }
});
// 게시판 내 특정 게시글 조회
app.get('/board/:boardId/post/:postId', (req, res) => {
    const boardId = parseInt(req.params.boardId);
    const postId = parseInt(req.params.postId);
    const post = controller.getPost(boardId, postId);
    if (post) {
        res.status(200).json({
            title: post.title,
            date: post.date,
            author: post.author,
            context: post.context,
            id: post.id
        });
    }
    else {
        res.status(404).json({
            status: "failed",
            message: "조회에 실패했습니다."
        });
    }
});
// 게시판 생성
app.post('/board', (req, res) => {
    const boardName = req.body.name;
    if (controller.createBoard(boardName)) {
        res.status(201).json({
            status: "successed",
            message: "게시판 생성에 성공했습니다."
        });
    }
    else {
        res.status(500).json({
            status: "failed",
            message: "게시판 생성에 실패했습니다."
        });
    }
});
// 게시글 생성
app.post('/board/:id/post', (req, res) => {
    const id = parseInt(req.params.id);
    const postForm = {
        title: req.body.title,
        context: req.body.context,
        author: "김동주"
    };
    if (controller.createPost(id, postForm)) {
        res.status(201).json({
            status: "successed",
            message: "게시판 생성에 성공했습니다."
        });
    }
    else {
        res.status(500).json({
            status: "failed",
            message: "게시판 생성에 실패했습니다."
        });
    }
    ;
});
// 게시판 수정
app.put('/board/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const boardName = req.body.name;
    if (controller.editBoard(id, boardName)) {
        res.status(201).json({
            status: "successed",
            message: "게시판 수정에 성공했습니다."
        });
    }
    else {
        res.status(500).json({
            status: "failed",
            message: "게시판 수정에 실패했습니다."
        });
    }
});
// 게시글 수정
app.put('/board/:boardId/post/:postId', (req, res) => {
    const boardId = parseInt(req.params.boardId);
    const postId = parseInt(req.params.postId);
    const postForm = {
        title: req.body.title,
        context: req.body.context,
        author: "김동주"
    };
    if (controller.editPost(boardId, postId, postForm)) {
        res.status(201).json({
            status: "successed",
            message: "게시글 수정에 성공했습니다."
        });
    }
    else {
        res.status(500).json({
            status: "failed",
            message: "게시판 수정에 실패했습니다."
        });
    }
});
// 게시판 삭제
app.delete('/board/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (controller.deleteBoard(id)) {
        res.status(201).json({
            status: "successed",
            message: "게시판 삭제에 성공했습니다."
        });
    }
    else {
        res.status(500).json({
            status: "failed",
            message: "게시판 삭제에 실패했습니다."
        });
    }
});
// 게시글 삭제
app.delete('/board/:boardId/post/:postId', (req, res) => {
    const boardId = parseInt(req.params.boardId);
    const postId = parseInt(req.params.postId);
    if (controller.deletePost(boardId, postId)) {
        res.status(201).json({
            status: "successed",
            message: "게시글 삭제에 성공했습니다."
        });
    }
    else {
        res.status(500).json({
            status: "failed",
            message: "게시글 삭제에 실패했습니다."
        });
    }
});
