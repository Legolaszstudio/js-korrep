# Objektumok

Az objektumok olyan adat típusok, amik segítségével több tulajdonságot tudunk 1 kalap alatt tárolni.
Pl.: Egy ember adatait

Az objetumokat `{}`-val jelöljük, és bennük található `kulcs: "adat"` párokat vesszővel választjuk el. Majd ezekre később pont vagy `[]` segítségével hivatkozhatunk.

```js
const adatok = {
  nev: "Novotny Levente",
  becenev: "Novy",
  eletkor: 16,
};

console.log(adatok.eletkor); // Novotny Levente
console.log(adatok["nev"]); // Novotny Levente

console.log(adatok.nev); // 16
console.log(adatok["eletkor"]); // 16
```

Az adatokat az objetumon belül lehet módosítani, még konstans esetén is, mivel maga a változó nem módosul, csak egy tulajdonsága.

```js
const adatok = {
  nev: "Novotny Levente",
  becenev: "Novy",
  eletkor: 16,
};

adatok.becenev = "Novotnyő";
adatok.eletkor = 69;
console.log(adatok);
/*
becenev: "Novotnyő"
eletkor: 69
nev: "Novotny Levente" // <-- Ez nem változik, mivel nem nyúltunk hozzá
*/
```

## Nestelt objektumok

Egy objektum tartalmazhat más objektumokat is, illetve listákat is;

```js
const adatok = {
  nev: "Novotny Levente",
  becenev: "Novy",
  eletkor: 16,
  telefonszam: [
      "+36-20-xxxx-xx",
      "+36-30-xxxx-xx",
  ],
  vegzettseg: {
      altalanos: true,
      kozep: false,
      emelt: false,
  },
};

// A telefonszámokra hivatkozva egy listát kapunk vissza, itt is működik már minden tanult lista művelet, csak adatok.telefonszam-ként kell hivatkozni
console.log(adatok.telefonszam[0]); // +36-20-xxxx-xx

// Több objektum esetén össze kell fűzni a hivatkozásokat
console.log(adatok.vegzettseg.altalanos); // true
console.log(adatok['vegzettseg']['altalanos']); // true
```

## Kulcsok használata
Ha nem tudjuk milyen kulcsok vannak a listánkban akkor meg tudhatjuk [for in](https://github.com/Legolaszstudio/js-korrep/blob/main/Elso/ciklus.md#for-in) vagy `Object.keys` segítségével.
```js
const adatok = {
  nev: "Novotny Levente",
  becenev: "Novy",
  eletkor: 16,
};

console.log(Object.keys(adatok)); // Lista:  ['nev', 'becenev', 'eletkor']
```