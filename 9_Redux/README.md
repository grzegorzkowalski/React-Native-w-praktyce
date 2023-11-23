# Redux

## Zadanie 1 Stop-watch wersja Redux

Zaimplementuj aplikację stopera. Ma ona wyświetlać dwa przyciski start oraz stop.
Odpowiednio startujące i zatrzymujące licznik po kliknięciu. Przyciski te powinny być na zmianę wyłączone tj.:
jeśli licznik nie jest włączony to przycisk stop jest disabled,
jeśli licznik jest włączony to przycisk start jest disabled.
Wykorzystaj do tego komponent `Pressable`.
W komponencie `Text` wyświetl aktualną wartość licznika.

Po wystartowaniu licznik ma zwiększać się co sekundę, a jego wartość powinna być trzymana w stanie aplikacji.
Na dole aplikacji wyrenderuj przycisk zapis. Po kliknięciu na niego powinniśmy dodać do listy wyników aktualną
wartość licznika.

Przykładowy stan aplikacji:

```js
{
  "isCounting": false,
  "value": 0
}
```

## Zadanie 2

Wykonaj powyższe zadanie z wykorzystaniem Redux Toolkit.