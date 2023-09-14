
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
    constructor(title:string,author:string,context:string,id:number){
        this.title=title;
        this.date=getDateToday();
        this.author=author;
        this.context=context;
        this.id=id;
    }
    
}


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
        if(post!==undefined) return post;
        else return undefined;
    }


    //id를 이용해 Post클래스 객체를 찾고 반환하는 함수
    getPostById(id:number):Post|undefined{
        const post = this.findPostById(id);
        if(post===undefined){
            console.log("failed to search post data by"+id);
            return undefined;
        }else{
            return post;
        }
    }



    getPosts():Post[]{
        return this.posts;
    }

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


}












