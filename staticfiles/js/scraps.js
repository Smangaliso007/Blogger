
function myMove() {                                             //Function must be embedded onto the #DIV carrying #Images
    var id = setInterval(frame, 5);
    var elem = document.getElementById("animate");
    var x = 400;
    function frame() {
        if (x == 0) {
            clearInterval(id);
        } else {                                                   //The code that changes/animates the change in background
            x--;
            elem.style.height = x + "px";
        }
    }
}