# mathml2braille
Script Javascript.
Convertit les équations mathML, ou du texte (braille direct), en braille Unicode.

![Une équation mathématique suivie de sa transcription en braille CBFU](header.png)

## mathML
- Convertir toutes les équations
    ```javascript
    new Mathml2braille();
    ```
- Ne convertir que les éléments d'une classe
    ```javascript
    new Mathml2braille('.class');
    ```
- Options pour les matrices : (mode bloque par défaut)
    - mode linéaire
        ```javascript
        new Mathml2braille('.class',{'matriceLineaire': true});
        ```
    - mode bloque
        ```javascript
        new Mathml2braille('.class',{'matriceLineaire': false});
        ou
        new Mathml2braille('.class');
        ```
    - matrice trop longue ***maxCaracCell***

        correspond "à peu près" au nombre limite de caractères dans la cellule avant de basculer en mode linéaire (10 par défaut)
        ```javascript
        new Mathml2braille('.class',{'maxCaracCell': 14});
        ```
  
- Option   ***coupureFormule***

    correspond aux nombres de caractères où la formule sera coupée (0 par défaut -> pas de coupure)

    ```javascript
    new Mathml2braille('.class',{'coupureFormule': 14});
    ```

- Options pour la codification ***codeBrailleMath*** : (français par defaut)
    - code français
        ```javascript
        new Mathml2braille('.class',{'codeBrailleMath': 'fr'});
        ```
    - code Nemeth
        ```javascript
        new Mathml2braille('.class',{'codeBrailleMath': 'nemeth'});
        ```
    - code UEB (Unified English Braille)
        ```javascript
        new Mathml2braille('.class',{'codeBrailleMath': 'ueb'});
        ```

## mathml2text()
- Transforme le mathML en texte (qu'en français pour l'instant)
    ```javascript
    var mesEqua=new Mathml2braille('.class');
    mesEqua.mathml2text();
    ```

## Braille Direct
- Transformer du texte en braille unicode
    ```html
    <p class="js-brailleDirect">>5+25;/58=65</p>
    ```
    ```javascript
    new Brailledirect('.js-brailleDirect');
    ```
Sortie navigateur
    ```
    ⠰⠱⠖⠣⠱⠆⠌⠱⠳⠶⠫⠱
    ```
- codification ***fr***, ***nemeth*** ou ***ueb*** : (***fr*** par defaut)
    ```javascript
    new Brailledirect('.js-brailleDirect','nemeth');
    ```

- Les tables de caractères sont basées sur celles du logiciel [Duxbury DBT Win](http://www.duxburysystems.com/). Pour l'instant il n'y a que les tables française et américaine.