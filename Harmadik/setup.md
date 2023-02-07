# Első használat

## Git letöltése és telepítése (windows-ra)

A gitet a [https://git-scm.com/downloads](https://git-scm.com/downloads) címről lehet letölteni.
A monitorban megjelenő gomb fog minket a megfelelő oldralra vinni, amenyiben nem, akkor a mellette található négyzetben van a többi lehetőség.

![letöltés](./assets/setup/download1.png)

A standalone installer fájlra van szükségünk:

![letöltés](./assets/setup/download2.png)


A telepítő megnyitásakor el kell fogadnunk a szerződési feltételeket, illetve meg kell adni a telepítés helyét. **FONTOS**: Ezekhez ne nyúljunk hozzá csak lépjünk tovább

Győződjünk meg róla, hogy ez a három opció be van a pipálva:
- A frissítések keresése ajánlott, de nem kötelező
- Illetve **win11** felhasználóknak ajánlott a Bash profile Terminálhoz adása
![telepítés](./assets/setup/install1.png)

A telepítő még megkérdezi a shorcut nevét, ezt hagyjuk Git-en

Következő lépésben adjuk meg, hogy a vsc az alapértelmezett szerkesztő.
> :warning: Figyeljünk, hogy **NE** az insider verziót adjuk meg

![telepítés](./assets/setup/install2.png)

Ajánlott a GitHub szabvány `main`-re átállítani az alapértelmezett branch nevet.

![telepítés](./assets/setup/install3.png)

A következő lépésben a környezeti változókról (PATH-ról) van szó ezt hagyjuk az alap `Git from cmd line and also from 3rd party` értéken

![telepítés](./assets/setup/install4.png)

Aztán az ssh könyvtárat is hagyjuk az alap `bundled` beállításon

![telepítés](./assets/setup/install5.png)

HTTPs könyvtárat is hagyjuk az alap `OpenSSl` beállításon

![telepítés](./assets/setup/install6.png)

A line checkout style is maradhat az alap `checkout Windows, commit Unix`-on

![telepítés](./assets/setup/install7.png)

A terminál maradjon az alap `MinTT`-n

![telepítés](./assets/setup/install8.png)

A `git pull` viselkedése is maradhat az alapon

![telepítés](./assets/setup/install9.png)

A credential manager maradjon bekapcsolva:

![telepítés](./assets/setup/install10.png)

**Ajánlott** a symbolic linkek engedélyezése, illetve a cache is legyen bekapcsolva

![telepítés](./assets/setup/install11.png)

Az experimental feature beállításokat hagyjuk kikapcsolva

És ha eljutottunk idáig, akkor már csak a telepítés gombot kell megnyomni.

Ha elkészült a telepítés, vegyük ki a pipát a release notes mellől, és nyomjuk meg a Finish gombot.

🎉 Készen vagyunk! 🎉

## Felkészülés az első használatra

A gitet informálni kell, hogy milyen néven szeretnénk használni.
Nyissunk egy parancssort és futtasuk az alábbi parancsokat a GitHub-os adatainkkal.

```sh
git config --global user.name "Legolaszstudio"
git config --global user.email "legolaszstudio@novy.software"
```

> Az idézőjelek **közé** írjuk be a felhasználónevünket és GitHub-os email címünket.

### Készítsünk egy teszt repository-t a Github oldalán

Navigáljunk az aszoút kezdő oldalra, majd nyomjunk rá bal felül a new gombra.

![repo](./assets/setup/repo1.png)

- Adjunk a reponak egy frappáns nevet, mondjuk `hello-world`
- Állítsuk a repot publikusra
- És pipáljuk be a `README`-t
- Majd kattintsunk a létrehozásra

![repo](./assets/setup/repo2.png)

### Másoljuk a teszt repository-t a gépünkre

Nyissuk egy terminált, oda ahova a kódot szeretnénk másolni.
(Shift+Jobb klikk -> `Open Git Bash here` vagy `Open powershell here`)

> :warning: Ne csináljunk külön mappát, a git csinál majd nekünk

Másoljuk a `CODE` gombnál található linket egy `git clone` parancs után:

![repo](./assets/setup/clone.png)

Nyissuk meg az új mappákant, amiben a `README.md`-t találjuk, vsc-ben.
Folytatás a [vsc](vsc.md)-s oldalon!