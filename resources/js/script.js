


var currentNumber = 1;
var num1;
var num2;
var click = 1;

var $screen = $("#screen") ;
var $number = $(".number") ;

$number.on('click', function() { 
    if (click > 8){
        return;
    }
    click++
    var numberPressed = $(this).html();
    $screen.append(numberPressed)

    if (currentNumber == 1) {
    
    if (num1 == null) {
        num1 = numberPressed;
    }  else {
        num1 = num1 + numberPressed;
    }
    
 } 
 if (currentNumber == 2) {
    
    if (num2 == null) {
        num2 = numberPressed;
    }  else {
        num2 = num2 + numberPressed;
    }
    
 }
});
function more(){ 
    if (click > 8){
        click = click - 5;
    }
    if (currentNumber == 2){
        findAnswer();
        $screen.empty();
        $screen.append(num1);
    }
}







 
    $("#clear").on('click' , function ()
    { 
             $("#screen").empty();
             answer = null;
             num1 =null;
             num2 = null;
        });

        $("#plus").on('click' , function ()
    { 
       more();
             $("#screen").append("+")
        op = "+"
        currentNumber++;
    });

    $("#minus").on('click' , function ()
    {
        more();
             $("#screen").append("-")
        op = "-"
        currentNumber++;

    });

        $("#multiply").on('click' , function ()
    {
        more();
             $("#screen").append("x")
        op = "x"
        currentNumber++;

    });
    

    $("#divide").on('click' , function ()
    {
        more();
             $("#screen").append("/")
        op = "/"
        currentNumber++;

    });
    function findAnswer(){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        console.log (num1, op, num2);
        
        if (op =="+") {
            answer = num1 + num2
        }
        if (op =="-") {
            answer = num1 - num2
        }
        if (op =="x") {
            answer = num1 * num2
        }
        if (op =="/") {
            answer = num1 / num2
        }
        num1 = answer;
        num2 = null;
        currentNumber = 1;
        
    }
                    $("#equals").on('click' , function () 
                    { 
                        $screen.append("=");
                        findAnswer();
                        if (click > 8){
                            $screen.empty();
                            var answerLength = answer.toString();
                            click = answerLength.length;
                            console.log(click);
                        } 
                        $screen.append(answer);

        
        
    });
    

