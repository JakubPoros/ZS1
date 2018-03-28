//document.getElementById('blok1').innerHTML = 'Janusz'
/*
var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var inner = document.getElementById('inner');
var content = document.getElementById('content');
var wynik = document.getElementById('wynik');

b1.innerHTML = 'Anna';
b1.innerHTML = 'Agnieszka';
b2.innerHTML = 'Jacek';

//var imie = prompt('Podaj imię');
b3.innerHTML = imie;

b4.textContent = 'Tomek';

//różnica pomiędzy inner HTML a textContent

inner.innerHTML = '<a href="http://wp.pl"><h1>inner</h1>';
content.textContent = '<a href="http://wp.pl"><h1>content</h1></a>';*/


/* użytkownik podaje z klawiatury 2 wartości.
długość podstawy oraz wysokość trójkąta. wyświetl wynik w div w formacie "pole trójkąta wynosi: ... cm2".
wynik ma być w kolorze białym na tle czarnym.
ogranicz blok wyświetlający do szerokości 200 px.
zaokrąglij wynik do 2 miejsc po przecinku.
w arkuszu stylów ustaw wyrówanie tekstu do środka.
*/

var dlugosc = prompt('Podaj długość podstawy');
var wysokosc = prompt('Podaj wysokość');
oblicz = (dlugosc * wysokosc) / 2;
oblicz = oblicz.toFixed(2);
wynik.innerHTML = 'Pole trójkąta wynosi: ' + oblicz + 'cm<sup>2</sup>';




