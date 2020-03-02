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
var vraagDatum = new Date();
var vandaag = vraagDatum.getDate() + "/" + (vraagDatum.getMonth() + 1) + "/" + (vraagDatum.getFullYear());
var dagen= ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];

document.getElementById("mijnbedrijf").innerHTML = bedrijfsnaam + linebreak + bedrijfadres + linebreak+"BTW-nummer:"+btwnummer;
document.getElementById("vandaag").innerHTML= vandaag +" "+ dagen[vraagDatum.getDay()];

var dagenVanDeWeek = new Array('Zondag','Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
var day;
switch (new Date().getDay()) {
    case 0:
      day = "Zondag";
      break;
    case 1:
      day = "Maandag";
      break;
    case 2:
       day = "Dinsdag";
      break;
    case 3:
      day = "Woensdag";
      break;
    case 4:
      day = "Donderdag";
      break;
    case 5:
      day = "Vrijdag";
      break;
    case 6:
      day = "Saturday";
  }
  console.log('Eerste dag van de week: ' + day );
   