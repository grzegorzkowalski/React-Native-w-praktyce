# Pobierz IP

1. Wyślij zapytanie po swój adres IP i poczekaj na odpowiedz.
2. Użyj serwisu `https://www.ipify.org/`.
3. Po otrzymaniu odpowiedzi odpytaj serwis `https://ip-api.com/` o szczegóły dla Twojego adresu IP.
4. Gdy dane z drugiego serwisu zostaną zwrócone wyrenderuj je.
5. Do czasu otrzymania drugiej odpowiedzi nie renderuj komponentu.

# Aplikacja Pogodynka

1. Stwórz nową aplikację Expo `npx create-expo-app pogodynka`.
1. Zainstaluj dodatkowe pakietu do widoku webowego `npx expo install react-native-webreact-dom @expo/webpack-config`.
1. Stwórz nawigację z 3 stronami lub tabami `Home, CityWeather, FindWeather`.
1. Na każdej stronie przygotuj przyciski, które pozwolą poruszać się po aplikacji.
1. W komponencie home stwórz tablicę z listą wybranych miast. 
1. Wykorzystaj komponent `FlatList` w celu wyrenderowania listy miast wraz z przyciskiem przekierowującym na podstronę `CityWeather`.
1. W przekierowaniu powinieneś przekazać nazwę miasta.
1. Utwórz konto na portalu `https://openweathermap.org/api `.
1. W komponencie `CityWeather` na podstawie przekazywanej nazwy miasta utwórz zapytanie do powyższego api, które zwróci prognozę pogody.
1. Wyświetl w komponencie nazwę miasta, aktualną temperaturę i ogólny opis pogody.
1. Utwórz konto w portalu `https://pixabay.com/api/docs/ `.
1. Na podstawie opisu pogody z API pogodowego wyślij zapytanie do portalu pixabay i znajdź obrazek ilustrujący opisaną pogodę.
1. Wyświetl go w komponencie.
1. W komponencie `FindWeather` stwórz `TextInput` i `Button`. Pozwól użytkownikowi wpisać nazwę miasta i zapisać ją w stanie komponentu.
1. Po naciśnięciu guzika wyślij zapytanie do API o pogodę dla danego miasta.
1. Jeśli pogoda dla danego miasta zostanie znaleziona wykonaj kroki z punktów 9-12.
1. Jeśli pogoda dla danego miasta nie zostanie znaleziona, wyświetl komponent z informacją error 404 brak danych.

# All over the world!!!

1. Stwórz aplikację, której celem jest wyświetlenie listy wszystkich krajów naszego globu. 
   Aplikacja pobiera dane z publicznego api – znajdującego się pod adresem [Klik!](https://countrylayer.com/documentation/). Przyjrzyj się danym pobieranym z api. 
2. Musisz założyć darmowe konto, żeby otrzymać klucz API [pod tym adresem](https://manage.countrylayer.com/signup/free).   
3. Wykorzystajmy komponent `FlatList`, żeby wyświetlić listę państw, flagę, oraz szczegółowe informacje o kraju.
4.  Nie przejmuj się, że nie wszystkie flagi są dostępne.
5. Sprawdź w konsoli, jakie dane otrzymujesz z serwera. 
6. Potrzebujesz inspiracji:
  * Wyświetl stolicę państwa.
  * Wyświetl nazwę kraju w jego własnym języku.
  * Podaj przybliżony dystans stolicy kraju do Twojego rodzinnego miasta. Koordynaty Twojego miasta pobierz 
    z google maps a koordynaty stolicy danego kraju z pliku `capitalLangLong.js` w folderze data. 
  ```javascript
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

```
7. Gdybyś przekroczył limit zapytań, dane masz zapisane dodatkowo w folderze `data`.

## Fetch z nawigacją

1. Połącz sie z https://jsonplaceholder.typicode.com/ i pobierz użytkowników wykonując zapytanie na odpowiedni EndPoint.
2. Wypisz w konsoli to co dostałeś.
3. Robiąc pętlę po danych z odpowiedzi wygeneruj dla każdego użytkownika element wypełniając go odpowiednimi danymi.
4. W każdym elemencie dodaj przycisk `show-posts`. Po kliknięciu w taki przycisk przejdź do nowego widoku i na podstawie przekazanego parametru pobierz i wyświetl listę postów dla danego usera.

# Async Storage

1. Zainstaluj bibliotekę AsyncStorage.
2. Zapisz swoje imię do AsyncStorage. Następnie pobierz je do stanu komponentu (zrób to również dla wartości początkowe `name` w useState).
3. Wewnątrz funkcji `handleGame` napisz logikę gry w papier, nożyce, kamień.
4. Po każdej grze zapisz informacje o zwycięzcy do asyncStorage. Uwaga dane powinny być zapisywane do jednego klucza w formacie: `['Computer won', 'Name won', 'Computer won']` itd. Pamiętaj, że dane w AsyncStorage możesz zapisać w stringu. Użyj funkcji `JSON.stringify` `JSON.parse` do zapisywania i odczytywania historii. 
5. Pokaż historię w ekranie - musisz przekazać ją z AsyncStorage do stanu
6. Wyłącz aplikację i włącz ponownie aby przekonać się czy dane się przechowały

# Gra w stolice

1. Pamiętasz API z listą państw z jednego z poprzednich zadań?
2. Wylosuj z listy w zemiennej `countries` jeden klucz kraju. 
3. Wyślij zapytanie do API i pobierz informacje o kraju. Zapisz informacje do stanu i pokaż użytkownikowu nazwę kraju. 
4. W polu input użytkownk może wpisać stolice kraju. Sprawdź czy jest poprawna – napisz logikę sprawdzania w funkcji `handleGame`.
5. Pokaż użytkownikowi informacje o tym czy wpisał poprawnie.
6. Dla chętnych: Stwórz przycisk do restartowania gry.
7. Dla chętnych: Stwórz historię gry w AsyncStorage.
