var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var dropdown = document.getElementById("select");
var button = document.getElementById("btn");

function changeColors() {
    body.style.background = "linear-gradient("
    + dropdown.value
    + ", " 
    + color1.value 
    + ", " 
    + color2.value 
    +")";

    css.textContent = body.style.background + ";";
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function getRandomDir() {
    var directions = [
        "to right",
        "to right top",
        "to right bottom",
        "to left",
        "to left top",
        "to left bottom",
        "to top",
        "to bottom"
      ];
      
    return directions[Math.floor(Math.random()*directions.length)];
}

function assignRandom() {
    var direction=getRandomDir();
    var colorFirst=getRandomColor();
    var colorSecond=getRandomColor();
    body.style.background = "linear-gradient("
    + direction
    + ", " 
    + colorFirst
    + ", " 
    + colorSecond 
    +")";
    color1.value = colorFirst;
    color2.value = colorSecond;
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeColors); 
color2.addEventListener("input", changeColors);
dropdown.addEventListener("input", changeColors);
button.addEventListener("click", assignRandom);

