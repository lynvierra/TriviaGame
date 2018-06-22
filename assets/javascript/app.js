$(document).ready(function() {

	var counter = 45;


	function headerText() {
		$(".header").append("<h1> Baseball Trivia </h1>");
		$(".header").append("<h3> Take a swing at these questions!</h3>");
	}
		
	function headingBtn() {
		var startGame = $("<div id='begin'></div>"),
		newButton = $("<button class='btn btn-lg startBtn '>Play Ball!</button>");
		$(".header").append(startGame,[newButton]);
				
		console.log(headingBtn);
	}
		
	function timeClock(){
		var timer = $("<div class='clockdiv' id='clockdiv'></div>");
		$(".header").append(timer);		
    };
    
	headerText();
	headingBtn()
	timeClock();
	
	
	$(".startBtn").on("click", function(){

		event.preventDefault();

		var countDown = setInterval(function() {
     		counter--;

      		if (counter >= 0) {
		    	document.getElementById("clockdiv").innerHTML =counter + ' seconds'; 
      			}
	      	if (counter === 0) {
	        	clearInterval(countDown);
	        	document.getElementById("clockdiv").innerHTML = "Strike!";
		       }

	     }, 1000);
		hide ="#begin";
	});

	console.log(questionArray);
	console.log(questionArray[0].question);
	console.log(questionArray[0].choices);
	console.log(questionArray[0].correctAnswer);


var triviaForm = document.getElementById("mainContainer");
var resultsCon = document.getElementById("results");
var submitBtn = document.getElementById("submit");

triviaHTML(questionArray, triviaForm, resultsCon, submitBtn);
	

	function triviaHTML(questions, triviaForm, resultsCon, submitBtn) {

		function showQuestions(questions, triviaForm){
			var output = [];
			var answers;	
				
			for(var i = 0; i < questions.length; i++) {
				
				answers = [];
			
				for(answer in questions[i].answers){
					answers.push(
						'<label>'
						+ '<input type="radio" name="question' + i + '" value="' + answer + '">'  
						+ questions[i].answers[answer]
						+ '</label>'
					);
				}

				output.push(
					'<div class="question">' + questions[i].question + '</div>'
					+ '<div class="answers">' + answers.join('') + '</div>'
				);
			}
			triviaForm.innerHTML = output.join('');				
		}

	function showResults(questions, triviaForm, resultsCon){

		var answersCon = triviaForm.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;

		for(var i = 0; i < questions.length; i++){

			userAnswer = (answersCon[i].querySelector('input[name=question'+i+']:checked') || {}).value;
	
	
			if(userAnswer === questions[i].correctAnswer){
				numCorrect++;
				answersCon[i].style.color = 'green';
				
			} else {
				answersCon[i].style.color = 'red';
				
			}
		}	

		resultsCon.innerHTML = numCorrect + ' out of ' + questions.length;


		if(numCorrect===6){
			$('<img/>', {
				src: 'assets/images/winning.jpeg',
				width: '150px',
			}).prependTo(resultsCon);
			resultsCon.prepend("You Win!!\n");
		} else {
			$('<img/>', {
				src: 'assets/images/strike.gif',
				width: '150px',
			}).prependTo(resultsCon);
			resultsCon.prepend("You Lose! Do some research and try again later.\n");
			
		}

		}

		showQuestions(questions, triviaForm);

		submitBtn.onclick = function(){
		showResults(questions, triviaForm, resultsCon);
		clearInterval(timeClock);
		
		}
	}

}); 