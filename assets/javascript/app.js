$(document).ready(function (){
var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions = 0;
var timeRemaining = 16;
var indexQA = 0;
var answered = false;

function createQuestion(text, answers, correctIdx) {
    return {
      questionText: text,
      answers: answers,
      correctAnswerIdx: correctIdx
    }
  }
var listOfQuestions = [
    createQuestion(
      'Theon Grayjoy was given a new name by Ramsey Bolton. What was it"?', 
      ['Reek', 'Creep', 'Freak', 'Leak'], 
      0
     ),
    createQuestion('John Snow was born to:', ['Catelyn Stark', 'Lyanna Stark', 'Joanna Lanister', 'Melisandre'], 
    1),
    createQuestion('Who was The Mad King?', ['Robert Baratheon', 'Rhaegar Targaryen', 'King Joffrey', 'Aerys II'], 3),
    createQuestion('Winterfell is the home of which family?', ['Tully', 'Stark', 'Tarly', 'Baratheon'] 
    ,1),
    createQuestion('The Mountain and the Hound are:', ['brothers', 'cousins of the Lannisters', 'of the Small Council', 'rival claimants of the Iron Throne'], 0)]
    

    
