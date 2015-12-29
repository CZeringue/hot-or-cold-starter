
/*Generates Random Number */
var rnumber = Math.floor(Math.random() * 101);

$(document).ready(function(){
/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


$(".new").on ('click', function() {
		newGame();
	});

$("#guessButton").on('click', function () {
	guessCounter();
})



});

/*New Game Function*/
function newGame() {
$('#count').text('0');
}

/*Guess Counter*/

function guessCounter () {
	var guessCounter = parseInt($('#count').html(), 10)
	guessCounter++;
	$('#count').html(guessCounter);
}

