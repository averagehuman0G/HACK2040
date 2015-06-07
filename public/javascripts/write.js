

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

  function recognize_snapshot(){
        var drawRectangle = "draw rectangle";
        var drawCircle = "draw circle";
        var drawTriangle = "draw triangle";

        document.getElementById('text').innerText = "(Recognizing your command...)"
        document.getElementById('transcription').className = "recognizing"
        OCRAD(document.getElementById("video"), {
        }, function(text){

          cleanString = text.replace(/\W/g, '');
          
          draw_rect();

          document.getElementById('transcription').className = "done"
          document.getElementById('text').innerText = cleanString || "(empty)";
        })
      }

      function acquiredVideo(stream){
        var video = document.getElementById('video')
        if ('mozSrcObject' in video) { video.mozSrcObject = stream;
        } else if (window.webkitURL) { video.src = window.webkitURL.createObjectURL(stream);
        } else { video.src = stream; }
        video.play();

        
      }
      window.onload = function(){
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if(navigator.getUserMedia) navigator.getUserMedia({ video: true }, acquiredVideo, function(){})
      }



