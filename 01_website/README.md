# Weboldal a pontszámok megtekintéséhez

A kiadott feladatokra pontok járnak, ezért csináltam egy weboldalt, ahol lehet versenyezni, hogy ki ér el több pontot.

Itt érhető el: [korrep.novy.vip](https://korrep.novy.vip/)

U.I: A kódot is nyugodtan lehet böngészni :)

# Building for arm

```
docker buildx build --platform linux/arm/v7 -f ./frontend/dockerfile -t korrep-frontend-arm ./frontend && docker save -o ./korrep-frontend.arm.tar korrep-frontend-arm
docker buildx build --platform linux/arm/v7 -f ./fetcher/dockerfile -t korrep-backend-arm ./fetcher && docker save -o ./korrep-backend.arm.tar korrep-backend-arm
```