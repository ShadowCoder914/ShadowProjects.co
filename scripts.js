alert("Hello! Welcome To ShadowProjects !"); ;


var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("dateString").innerHTML = d.toLocaleTimeString();
}