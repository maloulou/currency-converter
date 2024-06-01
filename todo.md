# ToDo List

## Améliorations UX/UI

1. **Améliorer l'affichage du taux de change**:
   - Ajouter une animation de transition pour rendre les changements de taux plus fluides.
   - Afficher la date et l'heure de la dernière mise à jour du taux de change.

2. **Optimiser l'input de conversion**:
   - Ajouter une validation de saisie pour empêcher les valeurs négatives ou invalides.
   - Afficher des messages d'erreur clairs en cas de saisie incorrecte.
   - Améliorer le style des boutons de conversion pour les rendre plus attrayants et intuitifs.

3. **Améliorer le tableau d'historique**:
   - Permettre le tri des colonnes pour faciliter la recherche des conversions passées.
   - Ajouter une pagination pour gérer de manière efficace un grand nombre d'entrées dans l'historique.

4. **Expérience utilisateur globale**:
   - Ajouter des tooltips ou des infobulles pour expliquer les fonctionnalités.
   - Ajouter un thème sombre pour améliorer le confort visuel des utilisateurs.

## Raccourcis pris

1. **Validation et gestion des erreurs**:
   - La validation de saisie est basique, sans gestion avancée des erreurs ni messages d'erreur détaillés.
   - Les valeurs négatives ou non numériques ne sont pas explicitement gérées.

2. **Style et animations**:
   - Les styles sont principalement basés sur Bootstrap avec peu de personnalisation avancée.
   - Aucune animation n'a été ajoutée pour les transitions ou les mises à jour du taux de change.

3. **Accessibilité**:
   - Les infobulles et les indications supplémentaires pour les utilisateurs malvoyants sont absentes.

4. **Tests unitaires et end-to-end (E2E)**:
   - Aucun test unitaire ou E2E n'a été mis en place pour vérifier le bon fonctionnement des composants et des services.

5. **Gestion des états**:
   - La gestion des états et des données se fait principalement via des observables simples sans utilisation de solutions de gestion d'état plus robustes comme NgRx.

6. **Utilisation des routes**:
   - L'application ne fait pas usage de la fonctionnalité de routage d'Angular. Tous les composants sont directement inclus dans le template principal (`AppComponent`). Une application plus complexe ou extensible devrait utiliser le `RouterModule` d'Angular pour naviguer entre différentes vues ou composants, ce qui permettrait de mieux structurer l'application et de faciliter la navigation et la gestion des états.
