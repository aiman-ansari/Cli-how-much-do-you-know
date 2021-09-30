var readlineSync = require('readline-sync');
var name= readlineSync.question("Please Enter Your Name ");
console.log("Welcome " +name+ " Let's see how much you know about me?");
console.log("-------------------------------------------------------------------");
questionAnswer = [
  questionOne = {
    question : "What is my favourite color? ",
    answer : "Black"
  },
  questionTwo = {
    question : "What do I prefer? Tea/Coffee  ",
    answer : "Tea"
  },
  questionThree = {
    question : "What I love to do ? Painting/Sketching  ",
    answer : "Sketching"
  },
  questionFour = {
    question : "What is my favourite tourist place ? Manali/Goa  ",
    answer : "Manali"
  },
  questionFive = {
    question : "My favourite cuisine? Indian/ Chinese ",
    answer : "Indian"
  },
  questionSix = {
    question : "What is my favourite game? Cricket / football ",
    answer : "Cricket"
  },
  questionSeven = {
    question : "My birth month?  ",
    answer : "July"
  },
];
var score = 0;

function checkAnswer(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() ===answer.toUpperCase()){
    console.log("Yay!!!! You are right");
    score = score + 1;
  }
  else{
    console.log("Oops! You are wrong");
  }
  console.log("Your score = " +score);
}
for(var i=0;i<questionAnswer.length;i++){
 checkAnswer(questionAnswer[i].question,questionAnswer[i].answer);
 console.log('-----------------------------------------------------------------');
}
console.log("*******************************************************************");
                                               
console.log("Your Total score = " +score);