# Függvények/metódusok

A függvények névvel ellátott kódrészek, amire hivatkozni tudsz, ezért nem kell legépelni a kódot többször, elég csak a nevére hivatkozni.

> :ok_hand: Jó tudni: Azok a kód részek amik nem térnek vissza, azokat **nem** függvénynek, hanem **metódusnak** hívják.

Pl.: Egy function ami kiírja, hogy alma
```js
function alma() { // Elnevezzük ezt a kód rész almának (de nem fut le, csak elnevezzük)
    console.log('alma');
}

alma(); // A név mögötti zárójel jelzi, hogy ezt a kódot le kell futatni
```

## Viszatérés

A függvények tudnak értékeket visszadni, amiket később felhasználhatunk máshol a kódban:
Ehhez a `return` kulcsszót használjuk; 
```js
function kerdes() {
    const valasz = prompt('Mit érzel?');
    return valasz;
}

function kettoMegKetto() {
    return 2+2;
}

const kerdesreValasz = kerdes();
console.log(kerdesreValasz);

const eredmeny = kettoMegKetto();
console.log(eredmeny); // 4
```

## Paraméterek

A paraméterek segítségével változókat adhatunk a függvényeken belülre kívülről.
