window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

$(document).ready(function() {
    var $audios = document.getElementsByClassName("song"); //Song Array
    var y = 0;              //Counter for Song Array Loop
    var i = $audios[y];     //Map counter to Song Element in Array
    var x = 0;              //To be used as Counter for BACKGROUND CHANGE--Going Forward
    var z = 0;              //To be used as Counter for BACKGROUND CHANGE--Going Forward
    var tr_new = 0;                             //Pause State is Zero State && Running State is One State

    function button_change_1() {
        document.getElementById("play-buton").style.display = "none";
        document.getElementById("play").style.display = "none";
        document.getElementById("pause-buton").style.display = "block";
        document.getElementById("pause").style.display = "block";
    }

    function button_change_2() {
        document.getElementById("ran").style.animationPlayState = "paused";
        document.getElementById("pause-buton").style.display = "none";
        document.getElementById("pause").style.display = "none";
        document.getElementById("play-buton").style.display = "block";
        document.getElementById("play").style.display = "block";
    }


    function anime() {

        var stringed =  Math.floor(i.duration);         //Long Seconds
        var num = stringed.toString();                  //Convert To String -- Not Really with a point
        var my_var = num + "s";                         //For Duration of Animation
        var some_var = Math.floor(i.duration)/60;       //Long Seconds Divided  (5.1833)
        var some_var2 = Math.floor(some_var);           // PURE MINUTES(m)  (5)
        var some_var3 = Math.floor(i.duration)%60;      // PURE SECONDS (s) (11)

        var ran = document.getElementById("ran");
        var dot = document.createElement("div");
        dot.id = "dot";
        dot.style.display = "block";
        dot.style.width = "10px";
        dot.style.height = "10px";
        dot.style.border = "none";
        dot.style.position = "relative";

        ran.replaceWith(dot);

        document.getElementById("time_2").innerHTML = some_var2 + ":" + some_var3;
        document.getElementById("dot").style.animationPlayState = "running";
        document.getElementById("dot").style.animationDuration = my_var;
        document.getElementById("dot").className = "classname";
        document.getElementById("dot").id = "ran";


    }


    function audio_play() {

        function pee_me() {
            if ( tr_new = 0 ) {                     //Set to Running

                i.play();                   //Play Song

                button_change_1();         //EXCHANGE BUTTONS

                document.getElementById("ran").style.animationPlayState = "running";
            }
            else if ( tr_new = 1 ) {
                i.play();                   //Play Song

                button_change_1();         //EXCHANGE BUTTONS

                anime();                //Create & Start Animation
            }

        }
        function my_funct () {
            var some_var = Math.floor(i.currentTime)/60;       //Long Seconds Divided  (5.1833)
            var some_var2 = Math.floor(some_var);           // PURE MINUTES(m)  (5)
            var some_var3 = Math.floor(i.currentTime)%60;      // PURE SECONDS (s) (11)

            document.getElementById("time_1").innerHTML = some_var2 + ":" + some_var3;
        }

        function new_funct () {

            pause_audio();
            var element = document.getElementById("ran");
            element.parentNode.removeChild(element);


        }

        pee_me();

        i.onended = function () {new_funct()};

        i.ontimeupdate = function () {my_funct()};



    }

    document.getElementById("play-buton").addEventListener("click", function () {audio_play()} );

    function pause_audio() {
        i.pause();
        button_change_2();
        tr_new -= 1;


    }

    document.getElementById("pause-buton").addEventListener("click", function () {pause_audio()});

    function prev_audio() {      //Previous Song Function
        pause_audio();
        var element = document.getElementById("ran");
        element.parentNode.removeChild(element);

        i.currentTime = 0;
        y--;
        i = $audios[y];
        tr_new += 1;
        audio_play();
        $("#myCarousel").carousel("prev");
        x--;
        changer();
    }

    document.getElementById("prev-buton").addEventListener("click", function (){prev_audio()});

    function next_audio() {      //Next Song Function
        pause_audio();
        var element = document.getElementById("ran");
        element.parentNode.removeChild(element);

        i.currentTime = 0;
        y++;
        i = $audios[y];
        tr_new += 1;
        audio_play();
        $("#myCarousel").carousel("next");
        x++;

        changer();

    }

    document.getElementById("next-buton").addEventListener("click", function(){next_audio()});

    function fast_back() {       //Rewind 10s Function
        i.pause();
        i.currentTime = (i.currentTime - 10);
        i.play();
    }

    document.getElementById("fst_prev-buton").addEventListener("click", function(){fast_back()});

    function fast_forward() {
        var yu = i.currentTime = (i.currentTime + 10);
        i.pause();
        i.play(yu);
        var stringed =  Math.floor(i.duration);                                                //Fastforward 10s Function
        var sub = stringed + Math.floor(yu);
        var num = sub.toString();                  //Convert To String -- Not Really with a point
        var my_var = num + "s";
        document.getElementById("ran").style.animationDuration = my_var;
    }

    document.getElementById("fst_next-buton").addEventListener("click", function(){fast_forward()});

    //Activate Carousel
    $("#myCarousel").carousel({interval: false});


    function changer() {

        //From Stack Overflow
        var dict_names = ['chet','revenge_1','dawn'];
        var name_picker = dict_names[x];
        var string_src = "images-2/";

        //From Stack Overflow
        var img = document.createElement("IMG");
        img.id = "nxt";
        img.src = string_src + name_picker + ".jpg";
        img.style.display = "block";
        img.style.width = "100%";
        img.style.height = "400px";
        img.style.position = "absolute";

        document.getElementById('animate').appendChild(img);
    }

    function beauty() {
        var t = document.getElementById("funimate_block");
        var r = document.getElementById("new_me");
        var s = document.getElementById("some_line");

        t.className = "funimation";
        r.className = "funimation";
        s.className = "funmemation";

        t.style.height = "400px";
        r.style.height = "400px";
        s.style.height = "300px";



    }

    document.getElementById("funimation").addEventListener("click", function(){beauty()});


});