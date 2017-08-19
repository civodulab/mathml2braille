# mathml2braille
Script Javascript.
Convertit les équations mathML, ou du texte (braille direct), en braille Unicode.

![](header.png)

## mathML
- Convertir toutes les équations
    ```javascript
    mathml2braille();
    ```
- Ne convertir que les éléments d'une classe
    ```javascript
    mathml2braille('.class');
    ```
- Option pour les matrices : (mode bloque par défaut)
    - mode linéaire
        ```javascript
        mathml2braille('.class',{'matriceLineaire': true});
        ```
    - mode bloque
        ```javascript
        mathml2braille('.class',{'matriceLineaire': false});
        ou
        mathml2braille('.class');
    ```
## Braille Direct
- Transformer du texte en braille unicode
```html
<p class="js-brailleDirect">>5+25;/58=65</p>

Sortie navigateur
⠰⠱⠖⠣⠱⠆⠌⠱⠳⠶⠫⠱
```
```javascript
javascript
brailledirect('.js-brailleDirect');
```
- Les tables de caractères sont basées sur celles du logiciel [Duxbury DBT Win](http://www.duxburysystems.com/). Pour l'instant il n'y a que les tables française et américaine.
## Langues
- Le choix de la table de caractères est basé sur la langue définie sur l'équation ou, par défaut, celle du document
    ```html
    <math xmlns="http://www.w3.org/1998/Math/MathML" lang="en" xml:lang="en">
    ```
    sinon
    ```html
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
    ```