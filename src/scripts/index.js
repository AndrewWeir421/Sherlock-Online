var url = "https://api.github.com/repos/Sherlock-Online/Sherlock-Online.github.io/dispatches";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);
var fieldValue = document.getElementById("UsernameForm").value;
xhr.setRequestHeader("Accept", "application/vnd.github.v3+json");
xhr.setRequestHeader("Authorization", "Bearer ");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds);
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

    }
}


