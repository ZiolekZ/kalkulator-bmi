// Logika kalkulatora BMI - plik do uzupełnienia przez członka zespołu.
//
// Elementy w index.html:
//   #bmi-form  - formularz
//   #weight    - waga w kg
//   #height    - wzrost w cm
//   #result    - miejsce na wynik
//
// Do zrobienia:
// 1. Obsłużyć zdarzenie "submit" formularza (pamiętaj o preventDefault).
// 2. Obliczyć BMI = waga / (wzrost w metrach)^2.
// 3. Wyświetlić wynik (zaokrąglony do 1 miejsca po przecinku) w #result.
// 4. Wyświetlić kategorię: <18.5 niedowaga, 18.5-24.9 prawidłowa, 25-29.9 nadwaga, >=30 otyłość.
// 5. Sprawdzić poprawność danych (puste pola, liczby <= 0) i pokazać komunikat błędu.

const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultBox = document.getElementById("result");

// BMI = waga (kg) / wzrost w metrach do kwadratu
function calculateBmi(weightKg, heightCm) {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

function getCategory(bmi) {
  if (bmi < 18.5) return "niedowaga";
  if (bmi < 25) return "waga prawidłowa";
  if (bmi < 30) return "nadwaga";
  return "otyłość";
}
