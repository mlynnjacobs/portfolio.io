// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function autodect the formats so that 
// if you enter HEX color format it returns RGB and if you 
// enter RGB color format it returns HEX. Bonus: Release 
// this tool as a npm package.

const hex_lett = {A: 10, B: 11, C: 12, D: 13, E: 14, F: 15};
const colors = [red,green,blue];
var rgb = [];
var hex = [];
var red = [];
var green = [];
var blue = [];

function mainConverter() { 
    var input = prompt("Enter your color code:");
    if (input.length === 6) {
        hexInput = input.toUpperCase();
        convertHex(hexInput);
        // alert(rgb);
        console.log(rgb);
    }else{rgbInput = new Array(input.split(","));
        convertRgb(rgbInput);
        hex = red.join("")+green.join("")+blue.join("");
        // alert(hex);
        console.log(hex);
    }
}

// HEX to RBG Conversion:

function hexSlicer(hex_num) {
    red.push(hex_num.slice(0,1));
    red.push(hex_num.slice(1,2));
    green.push(hex_num.slice(2,3));
    green.push(hex_num.slice(3,4));
    blue.push(hex_num.slice(4,5));
    blue.push(hex_num.slice(5,6));
}

// // hexSlicer with global red, green, blue inside
// function hexSlicer(hex_num) {
//     let red = [hex_num.slice(0,1)];
//     red.push(hex_num.slice(1,2));
//     let green = [hex_num.slice(2,3)];
//     green.push(hex_num.slice(3,4));
//     let blue = [hex_num.slice(4,5)];
//     blue.push(hex_num.slice(5,6));
//     return new Array (red,blue,green)
// }

function hexToDec(array) {
    for (key in hex_lett) {
        for (var i=0; i<2; i++) {
            if (key === array[i]) {
                array[i] = hex_lett[key];
            }
        }
    } 
}

function decToRGB(pair){
    rgb.push(Number(pair[0])*16+Number(pair[1]));
}

function convertHex() {
    hexSlicer(hexInput);
    colors.forEach(function(value) {
        hexToDec(value);
        decToRGB(value);    
    });
}

// convertHex();
function rgbSlicer(rgb_num) {
    red.push(rgb_num[0]);
    green.push(rgb_num[1]);
    blue.push(rgb_num[2]);
}

function rgbToDec(color) {
    num = Number(color)
    color.splice(0,1,(Math.floor(num/16)));
    color.push(Math.floor(num%16));
}

function decToHex(array) {
    for (var key in hex_lett) {
        for (var i=0; i<2; i++) {
            if (hex_lett[key] === array[i]) {
                array[i] = key;
            }
        }
    } 
}

function convertRgb(rgbInput) {
    rgbSlicer(rgbInput);
    colors.forEach(function(value) {
        rgbToDec(value);
        decToHex(value);
    });
}

mainConverter();
// convertRgb(["255","10","28"]);
