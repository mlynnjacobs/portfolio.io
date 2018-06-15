var database = [{
    username: "mlynnj",
    password: "secret"
},
{
    username: "ozzy",
    password: "bone"
},
{
    username: "gert",
    password: "rawhide"
},
{
    username: "marcus",
    password: "wheel"
},
{
    username: "cashew",
    password: "pellets"
}
];


var newsfeed = [{
    username: "Laurie",   
    timeline: "Jo's the bomb!"
},
{
    username: "Amy",
    timeline: "I burned her novel!"
},
{
    username: "Meg",
    timeline: "Laurie's tutor is CYOOT!"
}];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid (username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username && 
            database[i].password === password) {
            return true;
        } 
    } return false;
}
function signIn(username, password){
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    }else{
        alert("Sorry, wrong username and password.");
        }   
    }; 


signIn(userNamePrompt, passwordPrompt);
