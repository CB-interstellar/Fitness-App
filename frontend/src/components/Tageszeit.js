const date = new Date();
const daytime = date.getHours();

let Tageszeit;

if (daytime < 12) {
    Tageszeit = "Morgen"
 } else if (daytime < 18) {
    Tageszeit = "Nachmittag"
 } else {
    Tageszeit = "Abend"
 }

export default Tageszeit;