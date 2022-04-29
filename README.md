Sur la base du fichier json ci-joint, représentant des mesures système d'un serveur Linux (fichiers, cpu, mémoire), nous vous demandons d’instancier un serveur NodeJS incluant des API permettant de  :

§  Calculer la valeur minimale (avec date), valeur maximale (avec date) et moyenne pour n’importe quelle valeur numérique

    Utiliser les routes /minValue/:name, /maxValue/:name et /avgValue/:name.

§  Renvoyer l'ensemble des mesures comprises en deux dates (time)

    Utiliser la route /dataBetweenDates/:date1/:date2.

§  Renvoyer l’ensemble des valeurs d’une mesure (ex : « used » ou « recv) comprises en deux dates (time)

    Utiliser la route /metricValueBetweenTwoDates/:name/:date1/:date2.

§  Ajouter une mesure (sous forme d'objet JSON)

    Utiliser la route /addValue.