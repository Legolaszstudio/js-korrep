# Html események (alapok)

## Onclick

Amikor lenyomunk egy gombot, akkor az kibocsát egy click eseményt, amire mi ráköthetjük a saját kódunkat.

```html
<input type="button" value="Nyomj meg!" onclick="alert('Ez fájt!')">
```

Ha lenyomjuk a gombot, akkor szólni fog nekünk, hogy ez fájt neki.
Kódunk akár többsoros is lehet:

```html
<input type="button" value="Nyomj meg!" onclick="
alert('Ez fájt!');
alert('Ilyet ne csinálj többször!')
">
```

Illetve olyan függvényt is ráköthetünk, amit a js fájlunkban írtunk:

```html
<script>
    function pain() {
        alert('Ez fájt!');
        alert('Ilyet ne csinálj többször!')
    }
</script>

<input type="button" value="Nyomj meg!" onclick="pain()">
```

## Onload

Egy másik gyakran használt esemény az `onLoad`, mivel az akkor indítja el a kódot, amikor már minden teljesen betöltődött a html fájlban.

```html
<body onload="console.log('Betöltődött minden')">
    <!-- ... -->
</body>
```