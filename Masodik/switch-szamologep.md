# Switch és számológép

## Switch

A switch pontosan azt csinálja mint egy if-else, csak kicsit másképp van elrendezve.
A fent megadott változót hasonlítja egyenlőségre a casekben

```js
switch (muvjel) {
  case "+": // if
    return x + y;

  case "-": // else if
    return x - y;

  case "*": // else if
    return x * y;

  case "/": // else if
    return x / y;

  default: // else
    return "Hiba";
}
```

<details>
<summary>A fenti kód if-else segítségével</summary>

```js
if (muvjel == "+") {
  return x + y;
} else if (muvjel == "-") {
  return x - y;
} else if (muvjel == "*") {
  return x * y;
} else if (muvjel == "/") {
  return x / y;
} else {
  return "HIBA";
}
```

</details>
<br/>

:warning: FONTOS: Ha nem térünk vissza a case-ből, akkor break parancsot kell használni a kód végén, mert különben az alatta lévő kódot is lefutatja

```js
let eredmeny;
switch (muvjel) {
  case "+": // if
    eredmeny = x + y;
    break;

  case "-": // else if
    eredmeny = x - y;
    break;

  case "*": // else if
    eredmeny = x * y;
    break;

  case "/": // else if
    eredmeny = x / y;
    break;

  default: // else
    eredmeny = "Hiba";
  // Nem kell break, mert nincs alatta semmi
}
```

## Számológép

```js
function szamologep(x, y, muvjel) {
  switch (muvjel) {
    case "+":
      return x + y;

    case "-":
      return x - y;

    case "*":
      return x * y;

    case "/":
      return x / y;

    default:
      return "Hiba";
  }
}

function runSzamlogep() {
  const szam1 = parseFloat(prompt("Szám1"));
  const szam2 = parseFloat(prompt("Szám2"));
  const muvjel = prompt("Művelet (+, -, *, /)");
  const eredmeny = szamologep(szam1, szam2, muvjel); // a három bekért adat átadása a függvényünknek
  alert(eredmeny);
}
```