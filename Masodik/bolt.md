# Bolt, 1 listával és objektumokkal

```js
const darab = parseInt(prompt("Hány dolgot szeretnél a boltodba?"));
let boltCuccok = [];

for (let i = 0; i < darab; i++) {
  // Annyi az újdonság, hogy egy közös objetumban tároljuk az árat és a nevet is egyszerre
  const objektum = {
    nev: prompt("Kérem a cucc nevét"),
    ar: parseInt(prompt("Kérem a cucc árát")),
  };
  boltCuccok.push(objektum);
}

let kimenet = "";
for (const item of boltCuccok) {
  kimenet += `${item.nev} : ${item.ar}Ft\n`;
}
alert(kimenet);
```
