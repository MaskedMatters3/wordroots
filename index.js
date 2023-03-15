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
    var arr = [
        "able",
        "ible",
        "ac",
        "ic",
        "acious",
        "icious",
        "al",
        "ant",
        "ent"
    ]

    return arr[rand];
}

var gameStart = false;
var origin;

function start() {

    if (gameStart == false) {
        origin = wordRoot();
        var root = "<h1>" + origin + "</h1>";
        document.getElementById('gameRoot').innerHTML = "";
        setTimeout(() => {
            document.getElementById('gameRoot').innerHTML = root;
            document.getElementById('instruct').innerHTML = "Type a word that has this word root."
        }, 1000)

        gameStart = true;
    }
}

function check() {
    if(gameStart == true) {
        var checkit = document.getElementById('input').value;

        let reader = new FileReader();
        reader.onload = (e) => {
            const file = e.target.result;
 
            // This is a regular expression to identify carriage
            // Returns and line breaks
            const lines = file.split(/\r\n|\n/);
            textarea.value = lines.join('\n');
        };
    }
}