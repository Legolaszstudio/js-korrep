# Bolt létrehozása html gomb nyomásra

Fogjuk az előző sima kódunkat és helyezzük bele egy function-be,

```js
function boltLetrehozasa() {
  const darab = parseInt(prompt("Hány dolgot szeretnél a boltodba?"));
  let boltCuccok = [];

  for (let i = 0; i < darab; i++) {
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
}
```

Hozzunk létre egy standard html fájlt, és kössük hozzá a js fájlunkat a `<head>`ben:
```html
<head>
    <script src="fajlnev.js"></script>
</head>
```

Hozzunk létre egy gombot a `<body>`ban:
Onclick-ről részletesen [itt](./html-eventek.md#onclick).
```html
<body>
    <!-- A value mezőben a gombon megjelenő szöveg található -->
    <input type="button" value="Bolt" onclick="boltLetrehozasa()">
</body>
```

Így a gomb megnyomására újra elindíthatjuk a boltunkat.