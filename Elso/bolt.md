# Bolt 2 listával

**Feladat**: Készítsünk egy programot ami bekéri a felhasználótól, hogy hány elemet szeretne a boltjába, majd ennyiszer kérdezzük meg, hogy mit és mennyiért szeretne eladni. A termékeket és áraiket külön listában tároljuk, majd végül írjuk is ki template literalok segítségével.

## Megoldás magyarázattal

```js
const darab = parseInt(prompt("Hány dolgot szeretnél a boltodba?")); // Számmá alakítás

// Két üres listával kezdünk
let boltCuccok = [];
let boltArak = [];

for (let i = 0; i < darab; i++) { // Elmentett darabszámszor ismétlés
    // Név és Ár bekérése majd betöltése listába
    boltCuccok.push(prompt("Kérem a cucc nevét"));
    boltArak.push(prompt("Kérem a cucc árát"));
}

// Üres szöveg létrehozása, amihez majd később hozzáadunk
let kimenet = "";
for (let i = 0; i < boltCuccok.length; i++) { // Boltcuccok hosszaszor ismétlés
    kimenet += `${boltCuccok[i]} : ${boltArak[i]}Ft\n`;
    // i-edik elem és ár összekötése, majd a kimenethez hozzáadása
}

alert(kimenet);
```

> :ok_hand: Jó tudni: A `\n` egy speciális karakter melyet a számítógép új sorként értelmez, ezért kerül minden termék kiíráskor új sorba.