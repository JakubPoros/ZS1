var imie;
imie = "Janusz";
var nazwisko = "Kowal";
//+ konkatencja
document.write("Imię: " + imie + "<br>");
document.write("Nazwisko: " + nazwisko + "<br>");

var wiek = "17";
if (wiek >= 18) {
    document.write("Jesteś pełnoletni");
} else if (wiek < 15) {
    document.write("Jesteś jeszcze dzieckiem");
} else {
    document.write("Nie jesteś pełnoletni");
}
