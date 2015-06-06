$(document).ready(function(){
	the_numbers = { 'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9
	}

	$("#my_results").hide();



	var commands = {
  // annyang will capture anything after a splat (*) and pass it to the function.
  // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
  'draw *term': drawImage,

  'hello': hello,

  'print *term': print_to_screen,


  // A named variable is a one word variable, that can fit anywhere in your command.
  // e.g. saying "calculate October stats" will call calculateStats('October');
  'add :number1 and :number2': add_numbers,

  'multiply :number1 and :number2': multiply_numbers,

  // By defining a part of the following command as optional, annyang will respond to both:
  // "say hello to my little friend" as well as "say hello friend"
  'My name is :term': greeting
	};

	annyang.addCommands(commands);

	annyang.start();

	console.log("Annan")

	function greeting(name){
	 	console.log("hello"+name);
	}







	function drawImage(image){
		console.log("In the image programme")
		if (image == "circle"){
			console.log("Circle Activated");
			$( "#the_circle" ).show( "Shake", {direction:"down"},1000 );

		}
		else if(image == "triangle"){
			console.log("Triangle Activated");

		}

		else if(image == "rectangle"){
			console.log("Rectangle Activated");

		}
	}



	function add_numbers(number_1, number_2){
		console.log("Called the add numbers function")
		console.log(number_1);
		console.log(number_2);
		console.log(parseInt(number_1)+parseInt(number_2));
		// console.log(the_numbers[number_1]+the_numbers[number_2]);
	}

	function multiply_numbers(number_1, number_2){
		console.log("Called the multiply numbers function")
		console.log(parseInt(number_1)+parseInt(number_2));
	}



	function hello(){
		console.log("Oh hey there");
	}

	function print_to_screen(word){
		console.log("Printing to the screen");
		$("#my_results").show();
		var content = '<div id="my_results">print " '+word+' "</div>';
		$("#my_results").replaceWith(content);

	}



	//drawing functions

	function draw_circle(){
		$(".the_shapes").hide();
		$( "#the_circle" ).show( "shake", {direction:"down"},1000 );
	}

	function draw_rect(){
		$(".the_shapes").hide();
		$( "#the_rectangle" ).show( "shake", {direction:"down"},1000 );
		
	}

	function draw_triangle(){
		$(".the_shapes").hide();
		$( "#the_triangle" ).show( "shake", {direction:"down"},1000 );
		
	}


























});





