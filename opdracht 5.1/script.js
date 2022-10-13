alert("Hallo wereld!");

//kleur aanpassen
document.getElementById("title").style.color = "red";

//variabelen gebruiken
var getal1 = 12;
var getal2 = 4;
var som = getal1 * getal2;
alert("Het antwoord is: " + som)

// promptbox
var kleur = prompt("Geef een Engelse kleurnaam: (red of blue", "");

//kleur aanpassen
document.getElementById("title").style.color = "kleur";
//document.getElementById("title").style.color = "red";

//tekst aanpassen
document.getElementById("p1").innerHTML = "Hello "+ kleur +"!";