import { createStore } from "vuex";

export default createStore({
    state: {
        //게시글 작성에 필요한 폼 데이터 상태
        title: '',
        context: '',
        author: '',
        boardId:0,

        //게시판 생성용 state
        name:'',

        //선택된 게시판, 게시글 id 저장 state
        selected_board_id: 0,
        selected_post_id:0,

        //서버에서 받은 렌더링용 게시판,게시글 리스트 데이터 state
        boardList:[],
        postList:[],
        
    },
    mutations: {
        setTitle(state, title) {
            state.title= title;
        },
        setContext(state, context) {
            state.context= context;
        },
        setAuthor(state, author) {
            state.author= author;
        },

        //게시판 생성에 사용되는 name state
        setName(state,name){
            state.name=name;
        },

        //선택된 게시판, 게시글 셋업
        setBoardId(state, id) {
            state.selected_board_id= id;
        },
        setPostId(state, id){
            state.selected_post_id= id;
        },

        //게시판 리스트 저장
        setBoardsIntoList(state, boards){
            state.boardList= boards;
        },
        //게시글 리스트 저장
        setPostsIntoList(state,posts){
            state.postList= posts;
        }

    },
    actions: {
        GETBoardList(){
            fetch('http://localhost/board')
            .then(console.log('호출쓰'))
        },

    },
    getters: {
        getFormData: state=>{
            const formData={
                title:state.title,
                context:state.context,
                board_id:state.board_id,
            };
            return formData;
        },
        getBoardList: state => state.boardList,
        getPostList: state => state.postList,

    }
})






