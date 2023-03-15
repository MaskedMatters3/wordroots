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
        element.style.visibility = "visible"
        element.classList.add('anim3')
    }, 1000)

}

function wordRoot() {
    var rand = Math.floor(Math.random() * 9);
    var arr = {
        able,
        ible,
        ac,
        ic,
        acious,
        icious,
        al,
        ant,
        ent
    }

    return arr[rand];
}

function start() {
    document.getElementById('gameRoot').innerHTML = wordRoot();
}