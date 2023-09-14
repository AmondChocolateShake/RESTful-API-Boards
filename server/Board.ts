
function getDateToday():string{
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;
    
    return dateString;
}


class Post{
    title:string;
    date:string;
    author:string;
    context:string;
    id:number;
    constructor(title:string,author:string,context:string,id:number){//다 필수야? 라는 질문을 계속 던지길 바람
        this.title=title;
        this.date=getDateToday();
        this.author=author;
        this.context=context;
        this.id=id;
    }
}

//게시판 클래스
export default class Board{
    name:string;
    id:number;
    posts:Post[];
    postId:number



    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
        this.posts=[];
        this.postId=1;
    };
    
    //중복되지 않는 post id를 생성 후 반환
    getPostId():number{
        return this.postId++;
    }


    //새로운 게시글을 생성 후 삽입
    addNewPost(title:string, author:string, context:string):void{
        const post= new Post(title,author,context,this.getPostId());
        this.posts.push(post);
        console.log(JSON.stringify(post)+" 데이터 -> posts 삽입 완료.");
    }


    //id로 게시글 찾기
    private findPostById(id:number):Post|undefined{
        const post=this.posts.find(obj=>obj.id===id);
        return post
    }


    //id를 이용해 Post클래스 객체를 찾고 반환하는 함수
    getPostById(id:number):Post|undefined{
        const post = this.findPostById(id);
        if(post){
            return post;
        }else{
            console.log("failed to search post data by"+id);
            return undefined;
        }
    }



    getPosts():Post[]{
        return this.posts;
    }

    //게시글 수정 함수. (수정 성공시 true / 실패시 false)
    editPost(id:number,title:string,author:string,context:string):boolean{
        const post=this.findPostById(id);

        if(post!==undefined){
            post.title=title;
            post.author=author;
            post.context=context
            console.log("수정 완료");
            return true
        }else{
            console.log(id+"에 해당하는 게시글이 존재하지 않습니다.")
            return false
        }
    }

    deletePost(id:number):boolean{
        const index=this.posts.findIndex(obj=>obj.id===id);

        if(index){
            this.posts.splice(index,1);
            return true;
        }else{
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



    editBoard(name:string):boolean{
        this.name=name;
        return true
    }



}












