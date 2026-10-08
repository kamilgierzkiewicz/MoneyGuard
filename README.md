# MoneyGuard — PWA

Koszty stałe (osobiste i firmowe), raty i leasingi, wydatki bieżące z kategoriami, przychody, bilans, wykresy i analiza AI.

## Wgranie (GitHub Pages)
1. Nowe publiczne repo `moneyguard` → wgraj wszystkie pliki z tego folderu (bez podfolderu).
2. Settings → Pages → Deploy from a branch → `main`, `/ (root)`.
3. Adres: `https://TWÓJLOGIN.github.io/moneyguard/MoneyGuard.html`
4. iPhone: Safari → Udostępnij → Do ekranu początkowego. Android: Chrome → ⋮ → Zainstaluj aplikację.

## Synchronizacja telefon ↔ MacBook
1. Nowe **prywatne** repo `moneyguard-dane` (zaznacz „Add a README file”).
2. Fine-grained token: dostęp tylko do `moneyguard-dane`, **Contents: Read and write**.
3. W aplikacji: Ustawienia → Synchronizacja → `TWÓJLOGIN/moneyguard-dane` + token. To samo na drugim urządzeniu.

## Analiza AI
Ustawienia → Asystent AI → klucz z platform.claude.com/settings/keys (zostaje tylko w urządzeniu).

## Aktualizacje
Podmieniasz `MoneyGuard.html` i `sw.js`. Dane zostają.
