$( document ).ready(function() {
    
    $(".instructions").on("click", function{
        var text = $('printNameInstructions').text;
        speak(text);
    })
    
});