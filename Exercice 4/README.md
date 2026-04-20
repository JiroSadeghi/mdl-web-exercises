# Exercice 4

## Description

Cette page web permet d’interroger l’API des cours de la Maison des Langues et d’afficher dynamiquement les cours disponibles selon la langue et le niveau.

## Fonctionnalités réalisées

- liste déroulante pour sélectionner la langue ;
- liste déroulante pour sélectionner le niveau ;
- bouton pour envoyer la requête ;
- affichage des résultats de l’API ;
- affichage d’un message de chargement ;
- affichage d’un message d’erreur en cas de problème.

## Choix techniques

La solution utilise uniquement du HTML, du CSS et du JavaScript simple, comme demandé.  
L’appel API est réalisé avec `fetch()` et les paramètres sont construits avec `URLSearchParams`.

## Améliorations proposées pour l’API

1. **Documenter plus clairement les valeurs attendues**
   - Exemple : la documentation mentionne `English`, alors que les données semblent utiliser `english` en minuscule.
   - Une documentation précise éviterait les erreurs de requête.

2. **Retourner les niveaux sous forme lisible**
   - Aujourd’hui, le niveau est renvoyé sous forme numérique.
   - Retourner directement `A1`, `B1`, etc. simplifierait l’affichage côté client.

3. **Ajouter une meilleure gestion des erreurs**
   - L’API pourrait renvoyer des messages d’erreur plus détaillés en cas de paramètre invalide ou de problème technique.

4. **Prévoir un champ de recherche plus complet**
   - Le paramètre `q` est mentionné, mais il serait utile d’indiquer clairement sur quels champs il agit.

5. **Permettre le tri ou la pagination**
   - Cela serait utile si le nombre de cours augmente à l’avenir.
