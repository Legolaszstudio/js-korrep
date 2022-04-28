# Listák/Tömbök

A listák és a tömbök teljesen küönböző dolgok, még is nagyon hasonlóak, js-ben szerencsére csak Array-ek vannak, ha valaki itt azt mondja, hogy lista, akkor egy Array-re gondol.

#### Mi egy array?

Az array egy oyan adat struktúra, amely képes több elemet összefoglalni sorrendben, hogy később hivatkozhassunk rá.

Jelőlése szögletes zárójelekkel történik: `[]`
```js
let arr = []; // Arr-ba elmentünk egy üres listát
```

Listákba található elemeket vesszővel választjuk el:
```js
let gyumolcsok = [
    "alma",
    "körte",
    "szilva"
];
```

Az elemek a listában sorrendben vannak és **index** (sorszám) szerint hivatkozhatuknk rájuk:
> :warning: Az első elem a 0-ás indexet kapja
```js
let gyumolcsok = [
    "alma", // gyumolcsok[0]
    "körte", // gyumolcsok[1]
    "szilva" // gyumolcsok[2]
];
console.log(gyumolcsok[1]); // --> körte
```

### .length
A `.length` segítségével megtudhatjuk hány elem van a listánkban.

```js
let gyumolcsok = [
    "alma",
    "körte",
    "szilva"
];
console.log(gyumolcsok.length); // --> 3
```
> :ok_hand: Jó tudni: Az utolsó elem mindig a `list.length - 1` helyen található
```js
let gyumolcsok = [
    "alma",
    "körte",
    "szilva"
];
console.log(gyumolcsok[gyumolcsok.length - 1]); // --> szilva (mérettől függetlenül mindig az utolsót adja)
```

### .push
Új dolog helyezése a lista legvégére
```js
let gyumolcsok = [
    "alma",
    "körte",
    "szilva"
];
gyumolcsok.push("eper");
console.log(gyumolcsok.length); // --> 4
console.log(gyumolcsok[gyumolcsok.length - 1]); // --> eper
```

### .pop
Legutolsó elem eltávolítása és visszadása
```js
let gyumolcsok = [
    "alma",
    "körte",
    "szilva",
    "eper"
];
const utolsoGyumi = gyumolcsok.pop();
console.log(utolsoGyumi); // --> eper
console.log(gyumolcsok[gyumolcsok.length - 1]); // --> szilva
```

### .shift
Legelső elem eltávolítása és visszadása
```js
let gyumolcsok = [
    "alma",
    "körte",
    "szilva",
    "eper"
];
const legelsoGyumi = gyumolcsok.shift();
console.log(legelsoGyumi); // --> alma
console.log(gyumolcsok[0]); // --> körte
```

### .splice(index, 1)
Bizonyos indexű elem eltávolítása
- Első paraméter: Hanayadik indextől
- Második paraméter: Mennyit töröljön jobbra
```js
let gyumolcsok = [
    "alma",
    "körte",
    "szilva",
    "eper"
];
gyumolcsok.splice(2, 1); // 2-es elem törlése
gyumolcsok[2]; // eper
```