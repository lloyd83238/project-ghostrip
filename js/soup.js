let start = document.getElementsByClassName('start')[0];
start.addEventListener('click', function () {
    // console.log(123);
    let body = document.getElementsByClassName('body')[0];
    body.className = 'bodyhidden';
    let footer = document.getElementsByClassName('footer')[0];
    footer.className = 'footerhidden';
    let close = document.getElementsByClassName('close')[0];
    close.addEventListener('click', function () {
        body.className = 'body';
        footer.className = 'footer';
    });
});

let checkboxinput = document.getElementsByClassName('checkboxinput')[0];
let gamebtn = document.getElementsByClassName('gamebtn')[0];
let index = 0;

checkboxinput.addEventListener('click', function () {

    if (gamebtn.onclick) {

        window.location.href = "game.html";

    } else {

    };

})

gamebtn.addEventListener('click', function () {

    if (checkboxinput.checked) {

        window.location.href = "game.html";

    } else {

        alert('請勾選確認了解相關資訊');

    };

})

