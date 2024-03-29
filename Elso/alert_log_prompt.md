# Alert, log és prompt függvények

## Alert

A programunknak kommunikálnia kell a felhasználóval, ezt legegyszerűbb módon az `alert('információ')` függvénnyel tehetjük. Pl.:

```js
alert("Hey is this thing on?");
```

![alert ablak](./assets/alert.png)

> :warning: Az alert úgynevezett **blokkoló** művelet, vagyis a kód nem fut tovább amíg a felhasználó nem csukja be az ablakot.

## Log

Gyakran szoktunk hibás kódot írni, ilyenkor segíthet egy kis kiírás mely jelzi, hogy kódunk eljutott egy bizonyos pontra, illetve, hogy egy változó milyen értéket vett fel az adott ponton.

```js
console.log("Hogy ityeg a fityeg?");
console.log({}, []); //Bonyolultabb objektumokat is hibamenetesen ki tud írni
console.log("%cKék %cPiros ", "color:blue;", "color:red"); // Akár css-t is használhatunk a színezéshez a %c paraméter segítségével
```

![output](./assets/consoleout.png)

> :heavy_check_mark: A log **nem blokkoló** művelet, így a kód nem vár felhasználói interakcióra

> :warning: Ez az üzenet a konzolba kerül, ideális helyre fejlesztőknek, de nem felhasználóknak

<details>
<summary>Hol a console kimenete?</summary>

![console](./assets/console.png)
A html-es debug ablakban

</details>
<br/>

## Prompt

A programunk sokszor kérhet a felhasználtól információt valamilyen formában, ekkor alkalmazzuk a `prompt('kérdés?')` függvényt, ami egy felugró ablakban bekér információt, pl.:

```js
prompt("Mi az ábra fiatalok?");
```

![prompt ablak](./assets/prompt.png)

Ez így önmagában nem túl hasznos, érdemes eltárolni egy [változóban](valtozo.md) majd kiírni.

```js
const abra = prompt("Mi az ábra fiatalok?");
alert(abra);
```

Mit figyeltünk meg?
Amit beírt a felhasználó az egy másik felugró ablakban megnyílt.
<br/><br/>

Illetve a prompt-nak egy alapértéket is megadhatunk, amennyiben a felhasználó nem ír be semmit:

```js
const abra = prompt("Mi az ábra fiatalok?", "Minden rendben");
alert(abra); // Minden rendben, abban az esetben ha a felhasználó nem ír be semmit
```

## Template literal

A template literal-ok, másik nevén template stringek, olyan szövegek amelyek programozási kifejezéseket is tartalmaznak.
Jelölésük a backtick, amit az AltGr+7 kombinációval tudunk csinálni, majd bennük a programozási kifejezést `${}`-vel jelöljük
Pl.:
```js
`2+2=${2+2}` // 2+2=4

const age = prompt('Hány éves vagy?'); // Mondjuk azt írják be, hogy 19
alert(`A felhasználó ${age} éves`); // A felhasználó 19 éves
```

_Pythonban_ ezt f-stringnek hívják, és hasonlóan működik, csak elhagyjuk a dollár jelet, és bactick helyett egy f betűt teszünk az idzőjel elé.
```py
print(f"2+2={2+2}") # 2+2=4
age = input("Hány éves vagy?") # Mondjuk azt írják be, hogy 19
print(f"A felhasználó {age} éves") # A felhasználó 19 éves
```

## ParseInt és ParseFloat

Sajnos a prompt csak szövegként tud bemenetet értelmezni, így amikor számokkal akarunk dolgozni elég érdekes hibákba futhatunk.
```js
const kedvenc = prompt('Mi a kedvenc számod?'); // 22
console.log(`Kedvenc szám + 2 = ${kedvenc + 2}`); // 222, mert szövegként kezeli
```

Ilyenkor a szöveget számmá kell alakítani:
- `parseInt`: Egész számok (-1, 0, 1...)
- `parseFloat`: Tört számok (-1.2, 0.96, 0.2...)
```js
const kedvenc = parseFloat(prompt('Mi a kedvenc számod?')); // 0.2
console.log(`Kedvenc szám + 2 = ${kedvenc + 2}`); // 2.2
```