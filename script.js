
       var playerResultFlag = false;
       var computerResultFlag = false;
       var winnerCounter = 5;

       var playerWins = 0;
       var compWins = 0;

       var vPlayerScores = document.querySelector('#playerScores');
       var vComputerScores = document.querySelector('#computerScores');

       var div = document.querySelector('#status');
		var buttons = Array.from(document.querySelectorAll('button'));
		  buttons.forEach((button) => {
		    button.addEventListener('click', (e) => {
		    var computerChoice = computerPlay();

		    if(button.id === 'rock'){
		      div.textContent = playRound(button.id, computerChoice);
		      
		      scores()

		    }else if(button.id === 'paper'){
		     div.textContent = playRound(button.id, computerChoice);

		     scores();

		   }else if(button.id === 'scissors'){
		     div.textContent = playRound(button.id, computerChoice);

		     scores();
		 		
		   }
		 })
		})

       function scores(){

       	if (playerWins >= winnerCounter || compWins >= winnerCounter) {
		    	if (playerWins > compWins) {
		    		div.textContent = 'You won';
		    		return;
		    	}else{
		    		div.textContent = 'Computer wins';
		    		return;
		    	}
		    }

       	   if (playerResultFlag == true) {
		 			vPlayerScores.textContent = ++playerWins;
		 			playerResultFlag = false;
		 			div.style.color = 'green';
		 	}

		 	if (computerResultFlag == true){
		 			vComputerScores.textContent = ++compWins;
		 			computerResultFlag = false;
		 			div.style.color = 'red';
		 	}
       }

		function computerPlay(){
			var comMoves = ['Rock', 'Paper', 'Scissors'];
			return comMoves[random(comMoves.length)];
		}

		function random(number) {
		  return Math.floor(Math.random()*number);
		}

		 function playRound(playerSelection, computerSelection) {
		    var roundChoice = '';

		    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
		    	playerResultFlag = true;
		    	return roundChoice = "You Won! Rock beat Scissors";

		    }else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
		    	computerResultFlag = true;
		    	return roundChoice = "You Lose! Scissors beat Paper";

		    }else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
		    	playerResultFlag = true;
		    	return roundChoice = "You Won! Paper beat Rock";

		    }else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
		    	computerResultFlag = true;
		    	return roundChoice = "You Lose! Paper beat rock";

		    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
		    	playerResultFlag = true;
		    	return roundChoice = "You Won! Scissors beat Paper";

		    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
		    	computerResultFlag = true;
		    	return roundChoice = "You Lose! Rock beat Scissors";
		    	
		    }else{
		    	if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
		    		return roundChoice = "It's a draw";
		    	}
		    }
		 }
