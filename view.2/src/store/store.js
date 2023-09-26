import { createStore } from "vuex";

export default createStore({
    state: {
        title: '',
        context: '',
        author: '',
        board_id: 0,
    },
    mutations: {
        setTitle(title) {
            state.title= title;
        },
        setContext(context) {
            state.context= context;
        },
        setAuthor(author) {
            state.author= author;
        },
        setBoardId(id) {
            state.board_id= id;
        },
    },
    actions: {
        
    },
    getters: {
        getFormData: state=>{
            const formData={
                title:state.title,
                context:state.context,
                board_id:state.board_id,
            };
            return formData;
        }
    }
})






