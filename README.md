# Mise en place

Dans le terminal, entrer `npm i` pour installer les dépendances.

Entrer `node index.js` pour lancer le serveur.

Lancer un navigateur et entrer l'adresse `http://localhost:3000`

## Valeur Minimale, valeur maximale et moyenne

Entrer dans la barre de recherche `/minValue/:name` (remplacer `:name` par la mesure voulue, ex: files) pour récupérer la valeur minimale d'une valeur.

Entrer dans la barre de recherche `/maxValue/:name` (remplacer `:name` par la mesure voulue, ex: files) pour récupérer la valeur maximale d'une valeur.

Entrer dans la barre de recherche `/avgValue/:name` (remplacer `:name` par la mesure voulue, ex: files) pour récupérer la moyenne d'une valeur.

## Ensemble de mesures entre deux dates

Entrer dans la barre de recherche `/dataBetweenDates/:date1/:date2` (remplacer `:date1`  et `date2` par la mesure voulue, par ex : `http://localhost:3000/dataBetweenDates/2022-16-03 10:08:28/2022-16-03 10:13:28`) pour récupérer les mesures entre ces deux dates.

## Ensemble des valeurs d'une mesure entre deux dates

Entrer dans la barre de recherche `/metricValueBetweenTwoDates/:name/:date1/:date2` (remplacer `:date1`  et `date2` par la date voulue, et `name` par la mesure voulue, par ex : `http://localhost:3000/metricValueBetweenTwoDates/files/2022-16-03 10:08:28/2022-16-03 10:13:28`) pour récupérer les valeurs d'une mesure entre ces deux dates.

## Ajouter une mesure

Entrer dans la barre de recherche `http://localhost:3000/addValue`, utiliser le formulaire pour entrer les valeurs des mesures puis appuyer sur Send. La mesure sera ajoutée au fichier metrics.json situé dans le dossier `data`. 