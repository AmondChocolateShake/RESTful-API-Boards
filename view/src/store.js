import { createStore } from "vuex";



const store=new Vuex.Store({
    state:{
        board,
        post,
        posting
    },
    mutations:{

    },
    actions:{
        setBoardId(context,id){
            context.state.board=id
        },
        setPostId(context,id){
            context.state.post=id
        }

    }
})


