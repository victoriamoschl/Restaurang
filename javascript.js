//onsubmit med alert 

function myFunction(){
    alert("Din bokning är nu skickad!")
}

//switch sats - som sätter case efter tiden på dygnet 
const hour = new Date().getHours(); 
let message;
switch (hour) {
    case 7, 8, 9, 10:
        message = "God Morgon! Är du sugen på supergod frukost?";
        break;
        
    case 11, 12, 13:
        message = "God dag! Sugen på supergod brunch eller lunch?";
        break;

    case 14, 15, 16:
        message = "God Eftermiddag! Sugen på supergod och nyttig fika?";
        break;

    default:
        message = "Vi bjuder på supergod och nyttig frukost, brunch, lunch och fika!";
}

document.getElementById("switch").innerHTML = message;
