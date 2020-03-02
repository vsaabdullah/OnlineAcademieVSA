console.log('het bestand Mainscript.js is met succes geladen');
var bedrijfsnaam = "Online Academie VSA";
var straatnaam = "Grote Markt";
var straatnummer= "1";
var postcode= "3000";
var gemeente ="Leuven";
var btwnummer= "BE0999999999";
var btwplichtig=true;
var websiteadres="www.itenzo.be";
var mailadres="vsa.abdullah@gmail.com";
var bedrijfadres = straatnaam +" "+ straatnummer +" "+ postcode +" "+ gemeente;

document.getElementById("mijnbedrijf").innerHTML = bedrijfsnaam +" "+ bedrijfadres;

   