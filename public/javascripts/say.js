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
	$("#math_result").hide();
	$("#code_container").hide();




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
		$("#my_results").hide();
		$("#math_result").hide();
		$("#code_container").show();



		console.log("In the image programme")
		if (image == "circle"){
			console.log("Circle Activated");
			$( "#the_circle" ).show( "Shake", {direction:"down"},1000 );
			draw_circle();

		}
		else if(image == "triangle"){
			console.log("Triangle Activated");
			draw_triangle();


		}

		else if(image == "rectangle"){
			console.log("Rectangle Activated");
			draw_rect();

		}
	}



	function add_numbers(number_1, number_2){
		console.log("Called the multiply numbers function")
		console.log(parseInt(number_1)+parseInt(number_2));

		var total = parseInt(number_1)+parseInt(number_2);


		$("#math_result").show();
		var content = '<div id="math_result"> The Result is: '+total.toString()+' "</div>';
		$("#math_result").replaceWith(content);

		//The following code is to display the code
		var code_1 = '<div class="the_code"> javascript: console.log( "'+number_1+' + '+number_2+' ") "</div>';
		var code_2 = '<div class="the_code"> python 2.7 : print "'+number_1+' + '+number_2+' " "</div>';
		var code_3 = '<div class="the_code"> python 2.7 : print "'+number_1+' + '+number_2+' " "</div>';

		$(".the_code").replaceWith(code_1+code_2+code_3)



	}

	function multiply_numbers(number_1, number_2){
		console.log("Called the multiply numbers function")
		console.log(parseInt(number_1)*parseInt(number_2));

		var total = parseInt(number_1)*parseInt(number_2);


		$("#math_result").show();
		var content = '<div id="math_result">print " '+total.toString()+' "</div>';
		$("#math_result").replaceWith(content);

		var code_1 = '<div class="the_code"> javascript: console.log( "'+number_1+' + '+number_2+' ") "</div>';
		var code_2 = '<div class="the_code"> python 2.7 : print "'+number_1+' + '+number_2+' " "</div>';
		var code_3 = '<div class="the_code"> python 2.7 : print "'+number_1+' + '+number_2+' " "</div>';

		$(".the_code").replaceWith(code_1+code_2+code_3)




	}



	function hello(){
		console.log("Oh hey there");
	}

	function print_to_screen(word){
		console.log("Printing to the screen");
		$("#my_results").show();
		var content = '<div id="my_results"word: '+word+' "</div>';
		$("#my_results").replaceWith(content);


		var code_1 = '<div class="the_code"> javascript: console.log( "'+word+' ") "</div>';
		var code_2 = '<div class="the_code"> python 2.7 : print "'+word+' " "</div>';
		var code_3 = '<div class="the_code"> python 2.7 : print "'+word+' " "</div>';

		$(".the_code").replaceWith(code_1+code_2+code_3)






	}



	//drawing functions

	function draw_circle(){
		$(".the_shapes").hide();
		$( "#the_circle" ).show( "shake", {direction:"down"},1000 );

		//the drawing code

		var code_1 = '<div class="the_code"> processing: circle(100,100,100,100) </div>';

		$(".the_code").replaceWith(code_1)
		success();



	}

	function draw_rect(){
		$(".the_shapes").hide();
		$( "#the_rectangle" ).show( "shake", {direction:"down"},1000 );

		var code_1 = '<div class="the_code"> processing: rect(100,100,100,100) </div>';

		$(".the_code").replaceWith(code_1)
		success();
	}

	function draw_triangle(){
		$(".the_shapes").hide();
		$( "#the_triangle" ).show( "shake", {direction:"down"},1000 );

		var code_1 = '<div class="the_code"> processing: triangle(30, 75, 58, 20, 86, 75) </div>';

		$(".the_code").replaceWith(code_1)
		success();
	}


	$('#hideEverything').click(function(){
		$('#allContent').hide();
	})
	
	function success(){
		$("#success").text(<div class="alert alert-success">Success! Well done its submitted.</div>);
	}
























});






