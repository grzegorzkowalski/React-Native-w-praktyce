# Praca z kodem natywnym

## Komponenty natywne

1. Zapoznaj się ze strukturą projektu AwesomeProject utworzonego za pomocą React Native CLI.
1. Zapoznaj się z modułem `RCTWheelPickerManager.java`, który jest implementacją natywnego modułu dla Androida [https://github.com/BlackBoxVision/material-wheel-view](https://github.com/BlackBoxVision/material-wheel-view).
1. Uruchom Metro `npm start` i uruchom aplikację w wersji Android `a`. 
1. Przetestuj natywny moduł.

## Dodanie obsługi kamery

1. Utwórz nową aplikację React Native CLI `npx react-native@latest init RNWorkshop`.
1. Dodaj do projektu React Native CLI bibliotekę [react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera).
1. Zapoznaj się i zastosuj w swoim projekcie instrukcję instalacji i konfiguracji uprawnień.
1. Stwórz build aplikacji - plik `apk`.
1. Zainstaluj plik na fizycznym telefonie i uruchom aplikację.

## Dodanie obsługi map google

1. Dodaj do projektu bibliotekę [react-native-maps](https://github.com/react-native-maps/react-native-maps).
2. Wykorzystaj komponent `MapView` w swoim projekcie.

## Dodanie obsługi uwierzytelniania firebase/auth

1. Dodaj do projektu bibliotekę [firebase/auth](https://www.npmjs.com/package/@react-native-firebase/auth).
2. Dodaj do aplikacji logowanie za pomocą konta email.
3. Aby to osiągnąć konieczne jest skonfigurowanie aplikacji do pracy z [firebase](https://www.npmjs.com/package/@react-native-firebase/app).
4. Wymagane jest też założenie konta i konfiguracja usługi [w konsoli firebase](https://console.firebase.google.com/).


