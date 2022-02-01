//onsubmit med alert 

function myFunction(){
    alert("Din bokning är nu skickad!")
}

//switch sats - som sätter case efter tiden på dygnet 
const hour = new Date().getHours(); 
let message;
switch (hour) {
    case 7: case 8: case 9: case 10:
        message = "God Morgon! Är du sugen på supergod frukost?";
        break;
        
    case 11: case 12: case 13:
        message = "God dag! Sugen på supergod brunch eller lunch?";
        break;

    case 14: case 15: case 16:
        message = "God Eftermiddag! Sugen på supergod och nyttig fika?";
        break;

    default:
        message = "Vi bjuder på supergod och nyttig frukost, brunch, lunch och fika!";
}

document.getElementById("switch").innerHTML = message;
