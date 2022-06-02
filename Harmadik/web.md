# A webes GitHub felület

> :ok_hand: Jó tudni: Ha lenyomjuk a `.  (pontot)`, akkor a github átírányít egy vsc szerű felületre, ahonnan könyebben menedzselhetünk nagyobb kódok szerkesztését is. (csak akkor működik, ha be vagyunk jelentkezve)

## Commit

Nyomjunk egy fájl szerkesztésére, és így kb ennyi, alul meg lesz egy nagy zöld commit gomb
![commit](./assets/web/edit_1.png)

## Branch

Branchet a branch menübe való gépeléssel kell létrehozni. Vagy már létezőt is választhatunk.
![branch](./assets/web/branch.png)

## Merge (pull request)

A pull request fülön, a nagy zöld: `Crate pull request` gombot nyomja, valami ilyet kapunk:
![pull request](./assets/web/pull.png)

![pull request](./assets/web/pull2.png)

Ha sikeresen ki választunk 2 különböző branchet, akkor mutatja, hogy mik a különbségét, és egy mezőt, ahova beírhatjuk, hogy mit csináltunk:

![pull request](./assets/web/pull3.png)

Létrehozás után, a pull request-t a `Merge` gombbal lehet befésülni:

![pull request](./assets/web/pull4.png)

### Merge conflict

Merge conflict akkor alakul ki, ha két branchen módosítják ugyanazt a kódot, ilyenkor a git felajánlja, hogy mit szeretnénk tenni:

![merge_conflict](./assets/web/conflict.png)

Itt neked kell a kódot átírnod, hogy csak az marajdon, amit szeretnél, majd jobb felül nyomd meg a resolve gombot, ha minden resolve sikeres, akkor átvált commitra, nyomjuk meg azt is:
![merge_conflict](./assets/web/conflict2.png)

Ha minden sikerült, akkor megjelenik a resolve commit, és már tudunk is mergelni.
![merge_conflict](./assets/web/conflict3.png)

## Emberek meghívása a projektünkhöz

Ha szeretnénk másoknak is engedni, hogy turkáljanak és módosítsanak kódunkban:
![merge_conflict](./assets/web/contributor.png)