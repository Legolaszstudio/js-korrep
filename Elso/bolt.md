# Bolt 2 listával

**Feladat**: Készítsünk egy programot ami bekéri a felhasználótól, hogy hány elemet szeretne a boltjába, majd ennyiszer kérdezzük meg, hogy mit és mennyiért szeretne eladni. A termékeket és áraiket Külön listában tároljuk, majd végül írjuk is ki template literalok segítsgével.

## Megoldás magyarázattal

```js
const darab = parseInt(prompt("Hány dolgot szeretnél a boltodba?"));
let boltCuccok = [];
let boltArak = [];

for (let i = 0; i < darab; i++) {
    boltCuccok.push(prompt("Kérem a cucc nevét"));
    boltArak.push(prompt("Kérem a cucc árát"));
}

let kimenet = "";
for (let i = 0; i < boltCuccok.length; i++) {
    kimenet += `${boltCuccok[i]} : ${boltArak[i]}Ft\n`;
}

alert(kimenet);
```