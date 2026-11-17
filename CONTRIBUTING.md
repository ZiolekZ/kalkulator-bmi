# Zasady współpracy (CONTRIBUTING)

Dziękujemy za udział w projekcie! Poniżej opisujemy, jak pracujemy w repozytorium.

## Model pracy: Fork + Pull Request

Nikt (poza kierownikiem projektu) nie pracuje bezpośrednio w głównym repozytorium.

1. Zrób **fork** głównego repozytorium na swoje konto GitHub.
2. Sklonuj swój fork:
   ```bash
   git clone https://github.com/<twoj-login>/<nazwa-repozytorium>.git
   ```
3. Dodaj główne repozytorium jako `upstream`:
   ```bash
   git remote add upstream https://github.com/<login-kierownika>/<nazwa-repozytorium>.git
   ```
4. Przed rozpoczęciem pracy pobierz aktualny stan `main`:
   ```bash
   git checkout main
   git pull upstream main
   ```
5. Utwórz **gałąź roboczą** dla swojego zadania.
6. Wprowadź zmiany i zrób commity.
7. Wypchnij gałąź do swojego forka: `git push origin <nazwa-galezi>`.
8. Utwórz **Pull Request** do gałęzi `main` głównego repozytorium.

## Nazewnictwo gałęzi

Format: `typ/krotki-opis`

- `feature/logika-bmi`
- `feature/style-strony`
- `fix/walidacja-pustych-pol`
- `docs/aktualizacja-readme`

Nazwy piszemy małymi literami, słowa łączymy myślnikami.

## Zasady commitów

- Commity są małe i dotyczą jednej zmiany.
- Komunikat pisany w trybie rozkazującym, krótko i konkretnie, np.:
  - `Dodaj obliczanie BMI`
  - `Dodaj style dla formularza`
  - `Popraw walidację pustych pól`
- Nie commitujemy plików z `.gitignore`.

## Zasady Pull Requestów

Każdy Pull Request musi zawierać:

- **Tytuł** opisujący wprowadzone zmiany.
- **Krótki opis** wykonanych prac.
- **Link do karty Trello**, której dotyczy zadanie.
- **Informację o problemach lub ograniczeniach** (jeśli brak, napisz "brak").

Pull Request nie jest scalany przez jego autora. Przegląda i scala go kierownik projektu. Jeśli kierownik poprosi o poprawki, wprowadź je na tej samej gałęzi i wypchnij ponownie (PR zaktualizuje się automatycznie).

## Trello

- Każde zadanie ma kartę z opisem, osobą odpowiedzialną, terminem i (jeśli trzeba) checklistą.
- Karty przesuwamy między listami: **Do zrobienia → W trakcie → Zrobione**.
- Karta trafia do **Zrobione** po scaleniu Pull Requesta.

## Styl kodu

- Wcięcia: 2 spacje.
- Nazwy zmiennych i funkcji po angielsku, w stylu `camelCase`.
- Komentarze tam, gdzie kod nie jest oczywisty.
