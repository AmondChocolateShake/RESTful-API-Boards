"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDateToday() {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;
    return dateString;
}
class Post {
    constructor(title, author, context, id) {
        this.title = title;
        this.date = getDateToday();
        this.author = author;
        this.context = context;
        this.id = id;
    }
}
//게시판 클래스
class Board {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.posts = [];
        this.postId = 1;
    }
    ;
    //중복되지 않는 post id를 생성 후 반환
    getPostId() {
        return this.postId++;
    }
    //새로운 게시글을 생성 후 삽입
    addNewPost(title, author, context) {
        const post = new Post(title, author, context, this.getPostId());
        this.posts.push(post);
        console.log(JSON.stringify(post) + " 데이터 -> posts 삽입 완료.");
    }
    //id로 게시글 찾기
    findPostById(id) {
        const post = this.posts.find(obj => obj.id === id);
        return post;
    }
    //id를 이용해 Post클래스 객체를 찾고 반환하는 함수
    getPostById(id) {
        const post = this.findPostById(id);
        if (post) {
            return post;
        }
        else {
            console.log("failed to search post data by" + id);
            return undefined;
        }
    }
    getPosts() {
        return this.posts;
    }
    //게시글 수정 함수. (수정 성공시 true / 실패시 false)
    editPost(id, title, author, context) {
        const post = this.findPostById(id);
        if (post !== undefined) {
            post.title = title;
            post.author = author;
            post.context = context;
            console.log("수정 완료");
            return true;
        }
        else {
            console.log(id + "에 해당하는 게시글이 존재하지 않습니다.");
            return false;
        }
    }
    deletePost(id) {
        const index = this.posts.findIndex(obj => obj.id === id);
        console.log("인덱스 번호 : " + index);
        if (index > -1) {
            this.posts.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
        // let post=this.findPostById(id);
        // if(post!==undefined){//첫 if는 긍정
        //     const index=this.getPostIndex(post);
        //     if(index!==-1){
        //         this.posts.splice(index,1);
        //         console.log(id+" 게시글 삭제 완료")
        //     }else{
        //         console.log(id+"에 해당하는 게시글이 존재하지 않습니다.")
        //         return false;
        //     };
        //     return true
        // }else{
        //     console.log(id+"에 해당하는 게시글이 존재하지 않습니다.")
        //     return false
        // }
    }
    editBoard(name) {
        this.name = name;
        return true;
    }
}
exports.default = Board;
