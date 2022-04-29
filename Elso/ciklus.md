# Ciklusok

A ciklusok/hurkok (loopok) olyan kódrészek, amíg addig futnak, míg egy feltétel teljesül.

## For (i)

A for loopot akkor szoktuk használni, amikor szükséges a futattások száma is a kódunkhoz.
Pl.: Egy kód, ami kiírja a számokat 0-tól 100-ig

```js
for (
  let i = 0; // Egyszer fut le a kód elején
  i <= 100; // Feltétel, amit vizsgálunk minden lefutás előtt, ha igaz, akkor folytatjuk a futattást
  i++ // Minden utolsó instrukció után lefut (minden log után hozzáad 1-et az i-hez)
) {
  console.log(i);
}
```

## While

A while loop addig fut amíg a feltétele igaz, így könnyen csinálhatunk kódot, ami a "végtelenségig" fut.

```js
while (true) {
  console.log("alma"); // Addig irogatja, hogy alma, amíg meg nem állítják
}
```

A feljebb található 1-től 100-ig számláló `while` segítségével:

```js
let i = 0; // Magunknak kell a futás számot számontartani
while (
  i <= 100 // Feltétel, amit vizsgálunk minden lefutás előtt, ha igaz, akkor folytatjuk a futattást
) {
  console.log(i);
  i++; // Magunknak kell a futások számát is növelni
}
```

## For of

[Listáknál](array.md) elemein való végig menésre használjuk:

```js
let gyumolcsok = ["alma", "körte", "szilva", "eper"];
for (const elem of gyumolcsok) {
  console.log(`A(z) ${elem} finom`); // A(z) alma/körte/stb finom
}
```

Vagy akár egy szöveg betűin is végig ugrálhatunk:

```js
for (const elem of "Urbin") {
  console.log(elem);
}
// U
// r
// b...
```

## For in

[Objektumok](../Masodik/object.md) kulcsjain való végig ugráláshoz használjuk:

```js
const novy = {
  age: 16,
  name: "Novy",
  hobby: "Programing",
};
for (const kulcs in novy) {
  console.log(`Novy's ${kulcs} - ${novy[kulcs]}`);
}
// Novy's age - 16
// Novy's name - Novy
// Novy's hobby - Programing
```

# Loop módosító utasítások

Velük módosíthatjuk, hogy hogyan viselkedik egy loop. (az összes fent említett ciklussal működik)

## break

Megszakítja a futattását a loopnak és loopon kívűlre ugrik.
A 100-as számláló, de 3 után kilép:

```js
for (let i = 0; i <= 100; i++) {
  console.log(i);
  if (i == 3) break;
}
console.log("Loopon kívül");
// 1
// 2
// 3
// Loopon kívül
```

## continue

Abbahagyja a jelenlegi ciklus kört és visszaugrik a ciklus elejére.
A 100-as számláló, de 3-mal oszható számokat kihagyja:

```js
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0) continue;
  console.log(i);
}
// 1
// 2
// 4
// 5
// 7
// 8
// 10
// 11
// 13...
```
