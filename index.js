var gameStart;

function loadanim() {

    console.log("TEST");

    setTimeout(() => {
        console.log("TEST2");
        var element = document.getElementById('cred');
        element.classList.add('anim2');
        element.style.top = "-200px"
        anim2();
    }, 1500);

}

function anim2() {

    setTimeout(() => {
        console.log("TEST3");
        var element = document.getElementById('theGame');
        element.style.top = "-100px"
        element.style.display = "block"
        element.classList.add('anim3')
        anim3();
    }, 1000)

}

function anim3() {

}

document.onkeyup = function(e) {
    if(e.keyCode == 32) {
        document.getElementById('gameRoot').innerHTML = ""
    }
}