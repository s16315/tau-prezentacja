# JasmineJsx
`https://github.com/theasci/jasminejsx`

### Deskrypcja

Biblioteka umożliwiająca tworzenie testów jednostkowych dla skryptów i rozszerzeń (_Extension_) do pakietu _Adobe CC_ napisanych w _ExtendScript_. Rozwiązanie zostalo oparte o framework _Jasmine_ (`https://jasmine.github.io`).

### Instalacja

Skrypty w ExtendScript nie używają Node JS, rozszerzenia mogą go używać, ale nie muszą. 
JasmnineJsx jest modułem Node i wymaga go do działania. 
Jednak nawet tworząc strukturę projektu dla rozszerzenia, trzeba oddzielić Node tworzący warstwę narzędziową dla dewelopera od Node działającego we wtyczce.

1. Instalujemy Node (`https://nodejs.org/en/`) jako warstwę narzędziową projektu.
2. Instalujemy JasmineJsx z lini poleceń `npm install jasminejsx` lub dodajemy odpowiednią zależność do konfiguracji Node:
   
   `"devDependencies": {`
   
   `"jasminejsx": "^0.1.0"`
   
   `}`

    i wydajemy polecenie `npm install`.

### Tworzenie testów


### Przykłady
