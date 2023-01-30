

var database = [
    {
        username: "brooke",
        password: "1"
    },    
    {
        username: "ingrid",
        password: "2"
    },    
    {
        username: "edelgard",
        password: "3"
    },
];

var newsFeed = [
    {
        username: "tang",
        timeline: "phd bad"
    },
    {
        username: "tang2",
        timeline: "frontend good"
    }
];

var userNamePrompt = prompt("what is your username?");
var passwordPrompt = prompt("what is your password?");


function isUserValid(username, password) {
    for (var i=0; i<database.length; i++) {
        if (database[i].username==username && database[i].password==password) {
            return true;
        }
    }
    return false;
}

function signIn(user, password) {
    if (isUserValid(user, password)) {
        console.log(newsFeed);
    } else {
        alert("wrong username or pin");
    }
}

signIn(userNamePrompt, passwordPrompt);