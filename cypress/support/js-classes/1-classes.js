class Comment {

    constructor(text){
        this.text = text;
        this.likeQuantity = 0
    }

    addLike(){
        this.likeQuantity += 1;// or this.likeQuantity = this.likeQuantity + 
    }
}
//екземпляр класу
const firstComment = new Comment('This is comment test');

//console.log(firstComment);
//console.log(firstComment.likeQuantity);



//console.log(firstComment);
//console.log(firstComment.likeQuantity);

const secondComment = new Comment('This is comment 2 test');
const thirdComment = new Comment('This is comment 3 test');

firstComment.addLike();
console.log(firstComment);
console.log(secondComment);
console.log(thirdComment);

secondComment.addLike();
console.log(firstComment);
console.log(secondComment);
console.log(thirdComment);