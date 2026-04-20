## Exercice 3

### Analyse des faiblesses

Ce code présente plusieurs points positifs, notamment l’utilisation d’une requête préparée avec PDO et de `password_verify()` pour la vérification du mot de passe.  
Cependant, plusieurs faiblesses restent présentes :

1. La gestion de session n’est pas complètement sécurisée :
   - l’identifiant de session n’est pas régénéré après connexion ;
   - cela peut exposer à un risque de session fixation.

2. Le code utilise `fetchAll()` alors qu’un seul utilisateur est attendu.

3. L’utilisation de `rowCount()` sur une requête `SELECT` n’est pas toujours la méthode la plus fiable.

4. La redirection après connexion se fait en JavaScript, alors qu’une redirection côté serveur est plus propre.

5. Il n’y a pas de contrôle complémentaire sur les entrées utilisateur (par exemple champ vide).

6. Il n’existe pas de mécanisme contre les tentatives répétées de connexion.

### Améliorations proposées, par ordre de priorité

#### 1. Sécuriser la session
- démarrer correctement la session avec `session_start()`
- utiliser `session_regenerate_id(true)` après une authentification réussie

#### 2. Simplifier et fiabiliser la récupération de l’utilisateur
- remplacer `fetchAll()` par `fetch()`
- tester directement si un utilisateur existe

#### 3. Utiliser une redirection serveur
- remplacer le script JavaScript par `header('Location: profile.php'); exit;`

#### 4. Ajouter des validations de base
- vérifier que le nom d’utilisateur et le mot de passe ne sont pas vides

#### 5. Renforcer la sécurité à plus long terme
- prévoir une limitation des tentatives de connexion
- ajouter une protection CSRF si nécessaire

### Explication des modifications

Les modifications proposées visent d’abord à renforcer la sécurité du système de connexion, surtout au niveau des sessions.  
Elles permettent aussi d’améliorer la lisibilité et la robustesse du code en simplifiant la récupération de l’utilisateur et en utilisant une redirection plus appropriée.  
Enfin, elles préparent le code à une meilleure sécurisation globale de l’authentification.
