var readlineSync = require('readline-sync');
console.log("Hello!!");
console.log("\n");

var userName = readlineSync.question("May I know Your Name? ");
console.log("Welcome " + userName);
console.log("Let us see how well do you know your country!!");
console.log("Let's Start the Quiz ");
console.log("\n");
var score = 0;
function check(correctanswer,enteredanswer)
   { 
     if(correctanswer.toUppercase === enteredanswer.toUppercase)
     {
       console.log("You are Right !!");
       score++;
     }
     else
     {
       console.log("You are wrong!");

     }
   }
 var quiz =[
   {
   question : "The city of Amritsar is famous for which holy destination? ",
   optionA :"AksharDham Temple",
   optionB : "Golden Temple",
   optionC : "Kumbh Mela",
   answer : "b",
 },
 {
   question : "What is Goa famous for? ",
   optionA : "Beaches",
   optionB : "Palaces",
   optionC : "Wildlife",
   answer : "a",
 },
 {
   question : "Which of this is an island territory of India? ",
   optionA : "Pondicherry",
   optionC : "Lakshadweep Islands",
   optionB : "Kerala",
   answer : "c",
 },
 {
   question : "Which Indian city is capital of two states? ",
   optionA : "Mumbai",
   optionB : "Chandigargh",
   optionC : "Bhopal",
   answer : "b",

 },
 {
   question : "How many countries border India? ",
   optionA : "6",
   optionB : "9",
   optionC : "4",
   answer : "a",
 },
 {
   question : "Which of these is capital of Gujrat? ",
   optionC : "Gandhinagar",
   optionB : "Bihar",
   optionA :"Kolkata",
   answer : "c",
 },
 
 {
   question : "Which of these bodies of water does not border India? ",
   optionA : "Bay of Bengal",
   optionB : "Red Sea",
   optionC : "Arabian Sea",
   answer : "b",
 },
 {
   question : "Which state in India do we find the wettest regions? ",
   optionA : "Assam",
   optionB : "West Bengal",
   optionC : "Meghalya",
   answer : "c",
 },
 {
   question : "Which Indian city hosted the First Kabaddi World Cup? ",
   optionA : "Chennai",
   optionB : "Delhi",
   optionC : "Mumbai",
   answer : "c",
 },
 ]
 
 
 for(i=0; i<quiz.length; i++)
 {
   console.log(quiz[i].question),
   console.log("a.  " + quiz[i].optionA);
   console.log("b.  " + quiz[i].optionB);
   console.log("c.  " + quiz[i].optionC);
   var useranswer= readlineSync.question("Enter your Answer  ");
   var checkone = quiz[i].answer;
   

   check(checkone,useranswer);
   console.log("\n");
 }
 console.log("\n");
 console.log("Your Final Score is "+ score);
 console.log ("Congratulations " +  userName);




