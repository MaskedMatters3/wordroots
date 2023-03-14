// function afteranim() {
//     setTimeout(anim2(), 3000);
// }

// function anim2() {
//     var element = document.getElementById('anim1');
//     element.classList.add("afteranimate");
// }

document.onkeyup = function(e) {
    if(e.keyCode == 32) {
        document.getElementById('gameRoot').innerHTML = ""
    }
}