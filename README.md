# JasmineJsx
https://github.com/theasci/jasminejsx

### Deskrypcja

Biblioteka umożliwiająca tworzenie testów jednostkowych dla skryptów i rozszerzeń (_Extension_) do programów z pakietu [_Adobe CC_](https://www.adobe.com/pl/creativecloud.html?gclid=CjwKCAiApNSABhAlEiwANuR9YEZs93bTLGfFPfXKCql51zQBHiWFQaVcKbaJ4U-sTa1KrpO7SuoDVhoC_VEQAvD_BwE&sdid=8JD95K3R&mv=search&skwcid=AL!3085!3!281574922020!e!!g!!adobe%20cc&ef_id=CjwKCAiApNSABhAlEiwANuR9YEZs93bTLGfFPfXKCql51zQBHiWFQaVcKbaJ4U-sTa1KrpO7SuoDVhoC_VEQAvD_BwE:G:s&s_kwcid=AL!3085!3!281574922020!e!!g!!adobe%20cc!1471239077!56488853705) napisanych w [_ExtendScript_](https://javascript-tools-guide.readthedocs.io/extendscript-toolkit/).
Rozwiązanie zostalo oparte o framework [_Jasmine_](https://jasmine.github.io).

### Instalacja

Skrypty w ExtendScript nie używają Node JS, rozszerzenia mogą go używać, ale nie muszą. 
JasmnineJsx jest modułem Node i wymaga go do działania. 
Jednak nawet tworząc strukturę projektu dla rozszerzenia, trzeba oddzielić Node tworzący warstwę narzędziową dla dewelopera od Node działającego we wtyczce.

1. Instalujemy [Node](https://nodejs.org/en/) jako warstwę narzędziową projektu.
2. Instalujemy JasmineJsx z lini poleceń `npm install jasminejsx` lub dodajemy odpowiednią zależność do konfiguracji Node:  
   `"devDependencies": {`  
   `"jasminejsx": "^0.1.0"`  
   `}`  
    i wydajemy polecenie `npm install`.

### Konfiguracja

Konfiguracja odbywa się poprzez ustawienie zmiennych w `run.jsx`. 

### Tworzenie testów

Testy tworzy się analogicznie jak w Jasmine dla JS. 
Należy jedynie pamiętać, że ExtendScript jest zgodny ze standardem ECMA 3.

### Przykłady

Testy tworzymy według klucza:
- describe
- it
- expect
- toBe

Przykładowy test klasy Calculator 

   `  describe("Calculator", function () {`    
   `     var calculator = new Calculator();`  
   `     it("returns sum of two parameters", function () {`    
   `        expect(calculator.sum(4 ,2)).toBe(6);`  
   `     });`   
   `     it("returns the result of multiplying two parameters", function () {`   
            `expect(calculator.multiply(4 ,2)).toBe(8);`  
    `    });`  
   `  })`

### Tutoriale

[Jasmine JS: A From-Scratch Tutorial to Start Testing](https://www.testim.io/blog/jasmine-js-a-from-scratch-tutorial-to-start-testing)  
[Jasmine, testy jednostkowe w JavaScript - testy w praktyce](https://www.youtube.com/watch?v=g6oEpkbhoeQ)  
[Jasmine, testy jednostkowe w JavaScript - pierwsze kroki](https://www.youtube.com/watch?v=y4FxyLOBlUA)