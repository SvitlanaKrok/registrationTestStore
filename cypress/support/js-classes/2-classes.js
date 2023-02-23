class Comment {

    constructor(text){
        this.text = text;
        this.likeQuantity = 0
    }

    addLike(){
        this.likeQuantity += 1;// or this.likeQuantity = this.likeQuantity + 
    }
// статичні методи не наслідуються екземплярами класів
// доступні, як властивість самого класу
    static mergeComments(first, second){
        return `${first} + ${second}`
    }
}

const firstComment = new Comment('Test 1');
const secondComment = new Comment('Test 2');

let mergedText = Comment.mergeComments(firstComment.text, secondComment.text);

console.log(mergedText);

firstComment.addLike();

console.log(firstComment);