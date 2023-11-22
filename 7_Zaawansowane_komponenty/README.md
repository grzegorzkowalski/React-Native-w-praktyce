# Platform logo select

1. Sprawdź, na której platformie użytkownik obecnie używa aplikacji (`android`, `ios` czy `web`)? 
1. W zależności od platformy jakiej aktualnie używa wyświetl w tle aplikacji jej logo. 
1. Wykorzystaj do tego komponent `ImageBackground`.

# Input i Pattern Matching

1. Wykorzystaj znane Ci wzorce Pattern Matchingu, żeby rozwiązać poniższe zadanie.
1. Napisz funkcje, która przyjmuje 2 parametry (dane pochodzą z dwóch osobnych inputów):

`imię` - np: Ala

`miesiąc` - np: styczeń
1. Funkcja ma zwracać:
```
jeżeli miesiąc to grudzien, styczen, luty: "Ala jezdzi na sankach"
jeżeli miesiąc to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
jeżeli miesiąc to czerwiec, lipiec, sierpien: "Ala sie opala"
jeżeli miesiąc to wrzesień, pazdzietnik, listopad: "Ala zbiera liscie"
```
1. Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiąc małymi lub dużymi literami. Jeżeli miesiąc jest "innym słowem", funkcja niech zwraca "Ala uczy się JS".
1. Wywołaj funkcję naciskając odpowiedni element i przekazując do niej zmienne: twoje imię i dowolny miesiąc.
1. Wyświetl zwracaną z funkcji informację w swojej aplikacji.

# Spróbujmy wykorzystać możliwości które dają nam aplikacje mobilne

1. Folder `expoApi` zawiera komponent główny `Home` i 3 dodatkowe routy prezentujące różne możliwości React Native. 
   Przeanalizuj zawarty w nich kod.
2. Route Vibration korzysta z modułu React Native pod nazwą `Vibration`.
3. Route Camera wykorzystuje bibliotekę `Expo Camera` - https://docs.expo.io/versions/latest/sdk/camera/.
4. Route Location wykorzystuje bibliotekę `Expo Location` - https://docs.expo.io/versions/latest/sdk/location/.
5. Zapoznaj się z dokumentacją bibliotek i zobacz, co możesz zrobić z powyższymi komponentami.
6. Zaimportuj i wykorzystaj załączony kod w swojej aplikacji. 
7. Pamiętaj o implementacji nawigacji, żeby kod działał poprawnie.
8. Projekt przetestuj za pomocą aplikacji mobilnej Expo. 

