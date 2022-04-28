# If, else if, else

Az if, else illetve az else az elágazások közé tartozik, amiknek a segítségével egy feltételtől függően más kódot futtatunk le. Pl.: Eldöntjük egy szám alapú [változó](valtozo.md)ról, hogy pozitív, negatív vagy 0 az értéke.

```js
const valtozo = 20;
if (valtozo > 0) {
    console.log('Pozitív');
} else if (valtozo < 0) {
    console.log('Negatív');
} else {
    console.log('Nulla');
}
```

Részletek az összehasonlításhoz használható **operátorokról** (műveleti jelekről) [itt](https://www.w3schools.com/js/js_comparisons.asp)

<br><br>

- Az if-ben található kód akkor fut le, ha a feltétel igaz.
- Az else if-ben található kód akkor fut le, ha az elötte található feltételek hamissak, de ami benne van az igaz.
- Az else akkor fut le, amikor egyik feltétel sem érvényesül

Pl.:
```js
let szo = 'boci';
if (szo.startsWith('b')) {
    console.log('b-vel kezdődik'); // Le fut, mert igaz
} else if (szo.endsWith('i')) {
    console.log('i-vel végződik'); // Hiába igaz, mivel már az előtte található is igaz volt, ezért ő nem fut le
}

// Ha függetlenül szeretnénk tesztelni, akkor külön kell választani (else-t eltávolítani), így mind2 feltétel teljesülésekor le fog futni a kód
if (szo.startsWith('b')) {
    console.log('b-vel kezdődik'); // Le fut, mert igaz
} 
if (szo.endsWith('i')) {
    console.log('i-vel végződik'); // Le fut, mert igaz és független az előtte lévőtől
}

// Amennyiben egyik sem érvényesül, akkor az else fut le
szo = 'alma';
if (szo.startsWith('b')) {
    console.log('b-vel kezdődik'); // Nem fut le, mert hamis
} else if (szo.endsWith('i')) {
    console.log('i-vel végződik'); // Nem fut le, mert hamis
} else {
    console.log('Nem b-vel kezdődik és i-re sem végződik...') // Le fut, mert minden előtte hamis
}
```