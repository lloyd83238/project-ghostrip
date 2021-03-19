
var game_btn = document.getElementsByClassName("game_btn")[0];
let btn1 = game_btn.children[0];
let btn2 = game_btn.children[1];
let btn3 = game_btn.children[2];
// console.log(btn1); 


let index = 0;
btn1.setAttribute("data-answer", true);
btn2.setAttribute("data-answer", false);
btn3.setAttribute("data-answer", false);
let answerlength = 0;
let game_react = document.getElementsByClassName("game_react")[0];
let soup = document.getElementsByClassName("ans_p")[0];
let code_output = document.getElementsByClassName("code_output")[0];
let clue = document.getElementsByClassName("clue")[0];



for (let i = 0; i < game_btn.children.length; i++) {
    game_btn.children[i].addEventListener("click", function (e) {
        index++;
        let span = document.querySelector(`.userindex`);
        span.innerHTML = ` ${index}`;

        console.log(index);
        e.preventDefault();
        let answer = game_btn.children[i].getAttribute("data-answer");
        // console.log(answer)
        if (answer == 'true') {
            answerlength++;
            // console.log(answerlength);
            question();
            game_react.innerHTML = "答案:是";

        } else {
            game_react.innerHTML = "答案:否";
        }
    });

}

function question() {
    if (answerlength == 1) {
        btn1.innerHTML = "<p>死者是被女<br>友殺了嗎?</p>";
        btn2.innerHTML = "<p>死者是被鄰<br>居殺了嗎?</p>";
        btn3.innerHTML = "<p>死者是自殺嗎?</p>";
        clue.innerHTML = "<h2>線索二:</h2> ";

    }

    if (answerlength == 2) {
        btn1.setAttribute("data-answer", false);
        btn2.setAttribute("data-answer", true);
        btn3.setAttribute("data-answer", false);

        btn1.innerHTML = "<p>死者是被下毒嗎</p>";
        btn2.innerHTML = "<p>死者是被砍死的嗎</p>";
        btn3.innerHTML = "<p>死者是被電死的嗎</p>";
        clue.innerHTML = "<h2>線索三:</h2> ";

    }

    if (answerlength == 3) {
        btn1.setAttribute("data-answer", true);
        btn2.setAttribute("data-answer", false);
        btn3.setAttribute("data-answer", false);
        btn1.innerHTML = "<p>死者有被肢解嗎?</p>";
        btn2.innerHTML = "<p>死者身上插<br>著凶器嗎?</p>";
        btn3.innerHTML = "<p>死者被砍的<br>時候就死了嗎?</p>";
        clue.innerHTML = "<h2>線索四:</h2> ";
    }

    if (answerlength == 4) {
        btn1.setAttribute("data-answer", false);
        btn2.setAttribute("data-answer", false);
        btn3.setAttribute("data-answer", true);
        btn1.innerHTML = "<p>死者是用滾<br>動前去求救嗎?</p>";
        btn2.innerHTML = "<p>死者是用匍<br>匐前去求救嗎?</p>";
        btn3.innerHTML = "<p>死者是用咬<br>草前去求救嗎?</p>";
        clue.innerHTML = "<h2>線索五:</h2> ";
    }

    if (answerlength == 5) {

        var jumpgame = document.getElementById("jumpgame");
        jumpgame.scrollIntoView({ behavior: "smooth" });

        // window.location.href = "#jumpgame";
        soup.innerHTML = "<p>女友不滿分手砍斷男子手腳 ，牛吃草來自男子用牙齒咬草前進的聲音。</p>";

    }

    if (answerlength == 5 && index < 10) {
        // console.log("A");
        code_output.innerHTML = "fji2bm5hsylr";
    } else {

        code_output.innerHTML = "點太多次，再試試吧";

    }


}

$(window).scroll(function () {

    if ($(window).width() > 414) {

        if ($(window).scrollTop() > 1000) {
            $('.vk>p').t({
                // blink: false,
                speed: 50,
                caret: '<span style="color:black;">.</span>',
            })
        } else {
            $('.vk>p').addClass('disappear');
        }
    } else {
        if ($(window).scrollTop() > 300) {
            $('.vk>p').t({
                // blink: false,
                speed: 50,
                caret: '<span style="color:black;">.</span>',
            })

        } else {
            $('.vk>p').addClass('disappear');
        }

    }
});
