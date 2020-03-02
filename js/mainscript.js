console.log('het bestand Mainscript.js is met succes geladen');
var bedrijfsnaam = "Online Academie Abdullah";
var straatnaam = "Grote Markt";
var straatnummer= "1";
var postcode= "3000";
var gemeente ="Leuven";
var btwcijfers= "0999999999";
var btwplichtig=true;
var websiteadres="www.itenzo.be";
var mailadres="vsa.abdullah@gmail.com";
var bedrijfslandcode="BE";
var btwnummer= bedrijfslandcode + btwcijfers;
var bedrijfadres = straatnaam +" "+ straatnummer +" "+ postcode +" "+ gemeente;
var linebreak="<br>"

document.getElementById("mijnbedrijf").innerHTML = bedrijfsnaam + linebreak + bedrijfadres + linebreak+"BTW-nummer:"+btwnummer;;


   