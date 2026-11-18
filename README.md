# Kalkulator BMI

Prosta strona internetowa do obliczania wskaźnika BMI (Body Mass Index). Projekt zaliczeniowy z przedmiotu *Zarządzanie projektem wdrożeniowym*, stworzony w celu ćwiczenia pracy z Git, GitHub (fork + Pull Request) oraz Trello.

## Funkcjonalności

- wpisanie wagi (kg) i wzrostu (cm),
- obliczenie wskaźnika BMI,
- wyświetlenie kategorii wyniku (niedowaga, waga prawidłowa, nadwaga, otyłość),
- walidacja błędnych danych,
- responsywny, czytelny wygląd strony.

## Wykorzystane technologie

- HTML5
- CSS3
- JavaScript (bez bibliotek)
- Git i GitHub (fork, branch, Pull Request)
- Trello (zarządzanie zadaniami)

## Uruchomienie

1. Sklonuj repozytorium (lub swój fork):
   ```bash
   git clone https://github.com/<nazwa-uzytkownika>/<nazwa-repozytorium>.git
   ```
2. Wejdź do katalogu projektu:
   ```bash
   cd <nazwa-repozytorium>
   ```
3. Otwórz plik `index.html` w przeglądarce (dwukrotne kliknięcie wystarczy). Nie jest potrzebna żadna instalacja.

## Struktura projektu

```
.
├── index.html        # struktura strony
├── style.css         # wygląd strony
├── script.js         # logika obliczania BMI
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

## Skład zespołu

| Rola | Imię i nazwisko | GitHub |
|------|-----------------|--------|
| Kierownik projektu (Project Manager) | Dawid Łoszewski
| Członek zespołu | Zuzanna Wengrzyn
| Członek zespołu | Konrad Ziółkowski

## Podział zadań

| Zadanie | Osoba | Plik |
|---------|-------|------|
| Logika obliczania BMI i kategorii | Konrad Ziółkowski | `script.js` |
| Stylowanie strony | Zuzanna Wengrzyn | `style.css` |
| Przegląd i scalanie Pull Requestów | Kierownik projektu

## Zasady współpracy

Szczegóły znajdują się w pliku [CONTRIBUTING.md](CONTRIBUTING.md).

Autor Zmian: Konrad Ziółkowski, zadanie: logika kalkulatora BMI
