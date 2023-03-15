const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + '/index.js');
})

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
})

var words = fs.readFileSync('words.txt').toString().split("\n");

var origin;

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
        start();
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

function start() {
    origin = wordRoot();
    document.getElementById('gameRoot').innerHTML = "";
    document.getElementById('gameRoot').innerHTML = origin;
    document.getElementById('instruct').innerHTML = "Type a word that has this word root."
}

function check() {
    var correct = false;
    var checkit = document.getElementById('input').value.toLowerCase();
    for(ob in words) {
        console.log(ob);
        if(ob == checkit) {
            //correct = ob.includes(origin);
            correct = true;
            break;
        }
    }
    document.getElementById('instruct').innerHTML = correct;
}

app.listen(3000, () => {
    console.log("Started on https://localhost:3000/");
})