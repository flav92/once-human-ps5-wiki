# Contribuer au wiki

*Dernière mise à jour : 20 octobre 2026*

## D'où viennent les informations

Le wiki se construit au fil des parties sur PS5 : observations en jeu, tests, captures d'écran, puis recherches dans des guides et des annonces officielles. Ces informations peuvent être **incomplètes, contradictoires ou dépassées** par une mise à jour. Les sources externes concernent souvent une autre plateforme, une autre version, un autre niveau ou un autre scénario.

Le wiki ne garantit donc pas l'exactitude de chaque donnée. Il indique d'où vient chaque information pour que vous sachiez quel crédit lui accorder.

## Niveaux de fiabilité

Les marques indiquent la **provenance** de l'information, pas une certification :

| Marque | Signification |
|---|---|
| ✅ | **Capture d'écran PS5** : l'information a été relevée à l'écran, dans un contexte donné (scénario, date, niveau) |
| 🎮 | **Constaté en jeu, sans capture** : observation d'une session de jeu ; un nom ou un chiffre peut être mal retenu |
| ⚠️ | **Source externe** (lien sur la page) : guide, wiki ou annonce, pas encore confirmé sur PS5 |
| *À compléter* | **Inconnu** : l'information manque |
| ❓ / *à confirmer* | **Doute ou contradiction** : à revérifier en jeu (utilisé notamment dans le glossaire et la liste des captures) |

Une capture prouve ce qui était affiché ce jour-là, dans ce scénario. Elle ne prouve pas que la règle vaut partout, ni qu'elle n'a pas changé depuis. Quand deux relevés se contredisent, la page garde les deux et l'indique « à confirmer », sans choisir arbitrairement.

## Périmètre : scénario et serveur

Indiquez toujours **le scénario** (Evolution's Call, Way of Winter…), et **le serveur** s'il s'agit d'un serveur privé. Les règles d'un serveur privé comme [RaidZone / Red Zone](scenarios/raidzone.md) ne s'appliquent pas aux scénarios officiels, et inversement.

## Ce qu'on cherche en priorité

- Les points marqués **À compléter** ou **à confirmer**, en particulier ceux de la [liste des captures à faire](captures-a-faire.md)
- Les captures qui font passer une information 🎮 ou ⚠️ en ✅
- Les bugs PS5 reproductibles, avec les étapes pour les reproduire
- Les notes de patch console et leurs effets constatés

## Règles

1. **Sourcez** : capture d'écran, lien, ou « constaté en jeu le JJ/MM » avec le scénario.
2. **Signalez les incertitudes et les contradictions** au lieu de les arrondir.
3. **Pas d'avis présenté comme un fait** : une analyse ou une recommandation se présente comme telle.
4. **Pas d'information personnelle** : pas de pseudo, d'inventaire, d'emploi du temps ou de position de base d'un joueur. Masquez les pseudos sur les captures.
5. Mettez à jour la ligne *Dernière mise à jour* de la page modifiée.

La [méthode de relevé](carnet-de-terrain-historique.md) détaille quoi noter pour une recette, une statistique ou des coordonnées.

## Comment proposer une modification

- Ouvrez une **issue** sur [le dépôt GitHub](https://github.com/flav92/once-human-ps5-wiki/issues) pour signaler une erreur ou proposer une page.
- Ou soumettez une **pull request** avec vos modifications.

## Modèle de page

```markdown
# Titre

*Dernière mise à jour : JJ mois AAAA*

!!! note "Fiabilité et périmètre"
    Scénario, plateforme et période des relevés.

(contenu, avec les marques ✅ 🎮 ⚠️ et « À compléter »)

## Sources
- liens
```
