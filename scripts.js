alert(" Welcome, Shadowprojectscreativestudios Portfolio !"); ;


var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("dateString").innerHTML = d.toLocaleTimeString();
}