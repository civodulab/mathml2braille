# mathml2braille
Script Javascript.
Convertit les équations mathML, ou du texte (braille direct), en braille Unicode.

![Une équation mathématique suivie de sa transcription en braille CBFU](header.png)

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
    - matrice trop longue ***maxCaracCell***

        correspond "à peu près" au nombre limite de caractères dans la cellule avant de basculer en mode linéaire (10 par défaut)
        ```javascript
        mathml2braille('.class',{'maxCaracCell': 14});
        ```
- Option pour la codification ***codeBrailleMath*** : (français par defaut)
    - code français
        ```javascript
        mathml2braille('.class',{'codeBrailleMath': 'fr'});
        ```
    - code Nemeth
        ```javascript
        mathml2braille('.class',{'codeBrailleMath': 'nemeth'});
        ```
    - code UEB (Unified English Braille)
        ```javascript
        mathml2braille('.class',{'codeBrailleMath': 'ueb'});
        ```
        
## Braille Direct
- Transformer du texte en braille unicode
    ```html
    <p class="js-brailleDirect">>5+25;/58=65</p>
    ```
    ```javascript
    brailledirect('.js-brailleDirect');
    ```
Sortie navigateur
    ```
    ⠰⠱⠖⠣⠱⠆⠌⠱⠳⠶⠫⠱
    ```

- Les tables de caractères sont basées sur celles du logiciel [Duxbury DBT Win](http://www.duxburysystems.com/). Pour l'instant il n'y a que les tables française et américaine.
