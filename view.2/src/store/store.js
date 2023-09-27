import { createStore } from "vuex";

export default createStore({
    state: {

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
        },


    },
    actions: {
        //전달받는 url에 HTTP 요청을 보낸다
        makeRequest(url,method="GET",body=null){
            let result;

            if(body){
                fetch(url,{
                    method:method,
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:body
                })
                .then(res=>res.json())
                .then(data=>result=data)
            }else{
                fetch(url,{
                    headers:{
                        "Content-Type":"application/json"
                    },
                })
                .then(res=>res.json())
                .then(data=>result=data)
            }

            return result;
        }

    },
    getters: {

        getBoardList: state => state.boardList,
        getPostList: state => state.postList,
        getBoardId: state => state.selected_board_id,
        getPostId: state => state.selected_post_id,
    }
})






