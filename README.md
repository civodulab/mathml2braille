# mathml2braille
Converti les équations mathML, ou du texte (braille direct), en braille Unicode.
## mathML
* Convertir toutes les équations
```
mathml2braille();
```
* Ne convertir que les éléments d'une classe
```
mathml2braille('.class');
```
## Braille Direct
* Transformer du texte en braille unicode
```
brailledirect('.class');
```
* Les tables de caractères sont basées sur celles de DBTWin
## Langues
* Le choix de la table de caractères est basé sur la langue définie sur l'équation ou, par défaut, celle du document
```
<math xmlns="http://www.w3.org/1998/Math/MathML" lang="en" xml:lang="en">
```
sinon
```
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
```