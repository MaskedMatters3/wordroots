let origin;
let usedWords = [];

function loadanim() {
    console.log("TEST");

    setTimeout(() => {
        console.log("TEST2");
        let element = document.getElementById('cred');
        element.classList.add('anim2');
        element.style.top = "-200px"
        anim2();
    }, 1500);
}

function anim2() {

    setTimeout(() => {
        console.log("TEST3");
        let element = document.getElementById('theGame');
        element.style.top = "-100px"
        element.style.visibility = "visible"
        element.classList.add('anim3')
        start();
    }, 1000)

}

function anim3() {

}

function wordRoot() {
    let rand = Math.floor(Math.random() * 9);
    let arr = [
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

function start() {
    origin = wordRoot();
    document.getElementById('instruct').style.color = "black";
    document.getElementById('gameRoot').innerHTML = origin;
    document.getElementById('instruct').innerHTML = "Type a word that has this word root."
}

function check() {
    let correct = false;
    let checkit = document.getElementById('input').value.toLowerCase();
    
    for(let i = 0; i < words.length; i++) {
        if(words[i] == checkit && usedWords.includes(checkit) == false) {
            correct = words[i].includes(origin);
            console.log('Cor. Word: ' + words[i])
            break;
        }
    }

    if(correct == true) {
        document.getElementById('instruct').style.color = "#A3F255";
        document.getElementById('instruct').innerHTML = "CORRECT!!";
        usedWords.push(checkit)

        setTimeout(() => { // THIS IS A REALLY WEIRD WAY TO SET TIMEOUT
            start()        // THIS IS A REALLY WEIRD WAY TO SET TIMEOUT
        }, 2000);          // THIS IS A REALLY WEIRD WAY TO SET TIMEOUT
    }
    else if(usedWords.includes(checkit) == true) {
        document.getElementById('instruct').style.color = "#F2433D";
        document.getElementById('instruct').innerHTML = "USED THE SAME WORD TWICE!! TRY AGAIN";
    }
    else {
        document.getElementById('instruct').style.color = "#F2433D";
        document.getElementById('instruct').innerHTML = "INCORRECT!! TRY AGAIN";
        usedWords.push(checkit)
    }
}