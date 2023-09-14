
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
    postIdCnt:number;

    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
        this.posts=[];
        this.postIdCnt=1;
    };

    addPost(title:string, author:string, context:string, id:number){
        

    }


}












