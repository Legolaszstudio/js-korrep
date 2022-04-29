# Szorgalmi bolt

Kössük össze a js fájlunkat a html fájlunkkal, majd hozzunk létre egy szöveget és pár gombot:

```html
<!-- FONTOS az id, mivel később hivatkozni fogunk rá -->
<p id="kimenet"></p>
<input type="button" value="Hozzáadás" onclick="hozzaad()" />
<input type="button" value="Legelső Törlés" onclick="eltavolit('első')" />
<input type="button" value="Utolsó Törlés" onclick="eltavolit('utolsó')" />
<input type="button" value="Bizonyos Elem Törlés" onclick="eltavolit('bizonyos')" />
```

Mint látható, az eltávolítás függvényből nem 3 van, hanem 1 db, ami paramértert vár és majd a js kódból eldöntjük, hogy első vagy utolsó elemet fogjuk eltávolítani.

```js
let boltCuccok = []; // Fontos, hogy functionon kívűl legyen, mert másképp nem tudjuk elérni mindenhonnan

function hozzaad() {
  boltCuccok.push({
    nev: prompt("Kérem a cucc nevét"),
    ar: parseInt(prompt("Kérem a cucc árát")),
  });
  kiir(); // Automatikusan írjuk ki, amit hozzáadtunk
}

function eltavolit(melyik) {
  if (melyik == "utolsó") { // It döntjük el a paraméter alapján, hogy mit töröljünk
    boltCuccok.pop();
  } else if (melyik == "első") {
    boltCuccok.shift();
  } else {
      const index = parseInt(prompt(`Hanyadikat távolítsam el? (0-tól ${boltCuccok.length-1}-ig)`));
      boltCuccok.splice(index, 1);
  }
  kiir(); // Automatikusan távolítsuk el a kiírásból
}

function kiir() {
  let kimenet = "";
  for (const element of boltCuccok) {
    kimenet += `${element.nev} : ${element.ar}Ft<br>`;
  }
  document.getElementById("kimenet").innerHTML = kimenet; // Html kód betöltése js-ből
}
```

Ami újdonság lehet, hogy alert helyett kikértük a html elementet a kódból id alapján, és annak a html kódjába írtuk bele a termékeket.
