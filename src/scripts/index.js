var url = "https://api.github.com/repos/Sherlock-Online/Sherlock-Online.github.io/dispatches";
const RanNum1 = "vLasWP7FMsSMqe"
var xhr = new XMLHttpRequest();
xhr.open("POST", url);
var fieldValue = document.getElementById("UsernameForm").value;
const RanNum2 = "pHjp0my2bJREwJxf0udu2E"
xhr.setRequestHeader("Accept", "application/vnd.github.v3+json");
xhr.setRequestHeader("Authorization", "Bearer ghp_" + RanNum1 + RanNum2);
xhr.setRequestHeader("Content-Type", "application/json");
var txt;

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds);
  }


function readTxt(){
   while (True){
      txt = loadStrings("/home/runner/work/Sherlock-Online.github.io/Sherlock-Online.github.io/usernames/" + fieldValue + ".txt");
      if(txt != ""){
         break;
      }
      
   }
   console.log(txt);
}

function start(){
    fieldValue = document.getElementById("UsernameForm").value;
    warning = document.getElementById("Warning");
    if (fieldValue == ""){
        alert("Please Enter A Username!")
    } else {
    var data = `{
        "event_type": "start",
        "client_payload": {
            "username": "${fieldValue}"
        }
    }`;
    console.log(fieldValue)
    console.log(data)
    xhr.send(data);
    readtxt()
    }
}


