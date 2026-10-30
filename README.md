# Stepwise — studium po předmětech

Osobní studijní web pro různé předměty. Obsahuje krátké lekce, procvičování, přehled předmětů a knihovnu dokončených lekcí. Lekce mohou být seskupené podle školní složky a tématu; například materiály z STM jsou rozdělené do přehledných tematických částí.

## Spuštění

Otevři `index.html` v prohlížeči. Instalace ani účet nejsou potřeba. Obsah lekcí je v souboru `lessons.js`.

## Přidávání lekcí přes chat

Napiš předmět, téma, úroveň nebo ročník a co se chceš naučit. Například: „Přidej do pozemního stavitelství téma základové konstrukce, 1. ročník: chci umět rozlišit typy základů.“ Připravím lekci v češtině a přidám ji do `lessons.js`. Tlačítko „Přidat téma“ také vytvoří zadání, které můžeš poslat v chatu.

Každá lekce má `subject`, `subjectId` a vlastní stálé `id`. Pro zařazení do složek může mít také `sourceFolder` a `collection`. Příklady používají obecná pole `content` a `result`, takže se stejný formát hodí pro jazyky, matematiku i odborné předměty. Díky stálému `id` se uložený pokrok zachová, i když přidáme další předměty a lekce.

## Ukládání pokroku

Dokončené lekce se ukládají do úložiště prohlížeče a zůstanou tam i po opětovném otevření webu na tomto zařízení. V knihovně můžeš stáhnout záložní JSON soubor a později ho nahrát, třeba v jiném prohlížeči. Synchronizace mezi zařízeními zatím není k dispozici.
