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

  var maanden = ['januari ','februari ', 'maart', 'april', 'mei', 'juni', 'juli','augustus ','september ', 'oktober', 'november','december'];
var maand;
switch (new Date().getMonth()) {
    case 0:
      maand = maanden[0]
      break;
    case 1:
      maand = maanden[1]
      break;
    case 2:
      maand = maanden[2]
      break;
    case 3:
      maand = maanden[3]
      break;
    case 4:
      maand = maanden[4]
      break;
    case 5:
      maand = maanden[5]
      break;
    case 6:
      maand = maanden[6]
      case 7:
      maand = maanden[7]
      break;
    case 8:
      maand = maanden[8]
      break;
    case 9:
      maand = maanden[9]
      break;
    case 10:
      maand = maanden[10]
      break;
    case 11:
      maand = maanden[11]
    
  }
 
  document.getElementById("vandaag").innerHTML= day + " " + vraagDatum.getDate() + " " + maand + " " + vraagDatum.getFullYear();