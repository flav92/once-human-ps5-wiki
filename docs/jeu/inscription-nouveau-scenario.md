# « Nouvelle inscription au scénario disponible » — faut-il accepter ?

*Dernière mise à jour : 17 septembre 2026 — message relevé en jeu sur PS5 ✅*

!!! danger "La réponse courte"
    **Ce n'est pas un reset de votre serveur.** C'est l'ouverture d'un **nouveau serveur**, et le jeu vous propose d'y aller. **Accepter = repartir de zéro tout de suite.** Refuser ne coûte rien : votre partie continue normalement jusqu'à la date de fin de votre propre serveur.

## Le message exact (PS5 FR)

> **Nouvelle inscription au scénario disponible**
> Le scénario est entré dans une nouvelle phase. L'inscription pour le nouveau serveur est disponible.
>
> `R1` + `✕` Oui — `R1` + `◯` Refuser

Capture archivée : `captures/2026-09-17-inscription-scenario/popup-nouvelle-inscription-scenario.jpg`.

Le fait qu'il faille **maintenir R1** pour valider est une sécurité console : la manipulation est volontairement inconfortable parce que le « Oui » est irréversible. Ne validez jamais ce message par réflexe en traversant la carte.

## Pourquoi il revient à chaque connexion

La fenêtre d'inscription reste ouverte pendant **toute la durée du cycle d'inscription**, pas seulement le premier jour. Tant qu'elle est ouverte et que vous n'avez pas répondu « Oui », le jeu vous la repropose à chaque session. `R1` + `◯` ne ferme la popup que pour la session en cours — ce n'est pas un bug, et il n'existe pas d'option « ne plus afficher ».

## Deux horloges différentes — d'où la confusion

Ce message ne dit rien sur *votre* serveur. Il y a deux calendriers indépendants :

| Horloge | Ce qu'elle fait | Où la lire |
|---|---|---|
| **Le cycle de votre serveur** | Détermine quand **votre** monde est remis à zéro | Nom du serveur + chrono dans **Progression du scénario** |
| **La rotation des scénarios** | De nouveaux serveurs ouvrent en continu ; chaque ouverture déclenche l'invitation | La popup, et l'écran d'inscription |

En **Mode Zone de Raid**, la durée de vie du serveur est **inscrite dans son nom**, au format `Périodicité_Étiquette-Numéro` (ex. `Biweekly_Hard-A001`) :

| Préfixe | Remise à zéro du serveur |
|---|---|
| `Weekly_` | tous les **7 jours** |
| `Biweekly_` | tous les **14 jours** (le format d'origine, et le plus répandu) |
| `Monthly_` | tous les **28 jours** |

Donc : vous n'êtes probablement pas sur un reset hebdomadaire, et l'intuition est bonne. La popup n'annonce pas votre reset — elle annonce **celui d'un autre serveur qui vient, lui, de redémarrer**.

## Ce que vous perdez si vous acceptez

### En Mode Zone de Raid

Tout ce qui se joue dans le mode est **borné au cycle** : niveau, équipement fabriqué, mods, Déviations, ressources, territoire. Le mode est cloisonné — rien du PvE classique n'y entre (les schémas et mods PvE restent stockés sur le compte mais sont **inutilisables** en Zone de Raid, pour l'équilibrage PvP), et rien de ce qui est gagné en Zone de Raid n'en sort.

Conservé au niveau du **compte**, quoi qu'il arrive :

- cosmétiques (tenues, skins de véhicules et de meubles) ;
- achats de la boutique premium, partagés entre tous les modes ;
- récompenses cosmétiques et Clé d'argent du pass ;
- nom, apparence, amis, succès et titres.

**Le vrai coût d'un départ anticipé** n'est pas l'équipement : c'est le **cycle de récompenses**. Il démarre quand votre personnage rejoint le scénario et court jusqu'au règlement de fin de cycle. Partir avant la fin, c'est le clôturer sans rien encaisser. Deux conditions connues pour toucher le règlement : être au moins **niveau 20**, et avoir rejoint le scénario **avant** que la phase de règlement soit terminée.

### Sur un scénario PvE classique — *sources PC, à confirmer sur PS5*

Le tableau est plus clément, parce que la Terre éternelle (*Eternaland*) sert de coffre entre deux saisons :

| Conservé | Remis à zéro |
|---|---|
| Schémas d'armes, d'armures, de maison et leurs étoiles | Niveau du personnage |
| Mods et cosmétiques | Arbre technologique (ex-Mémétiques) |
| Devises majeures (Protochrome, etc.) | Exploration de la carte |
| Objets, matériaux, munitions, Déviations capturées — déposés en Terre éternelle | Objets propres au scénario |
| Plan de votre base (le **plan**, pas les murs) | Structures construites — à reconstruire avec de nouveaux matériaux |

Nuance importante : ce qui part en Terre éternelle n'est pas automatiquement réimporté dans le scénario suivant — la réimportation est plafonnée par des **points d'héritage de ressources**.

## Ce qu'il faut faire, concrètement

1. **Identifiez votre échéance** : nom du serveur (préfixe de périodicité) + chrono de l'écran **Progression du scénario**.
2. **Il reste plusieurs jours ?** → `R1` + `◯`. Vous ne ratez rien : la popup reviendra, et d'autres serveurs ouvriront après celui-ci.
3. **Votre serveur arrive en fin de cycle ou en règlement ?** → acceptez, mais **seulement une fois vos récompenses encaissées**.
4. **Avant de valider « Oui »**, dans l'ordre :
    - sauvegardez le **plan de votre base** (il survit, les murs non) ;
    - dépensez les devises à plafond hebdomadaire — notamment le **Protochrome** (30 000/semaine) : garder un stock ne sert à rien, un schéma déverrouillé est acquis pour de bon ;
    - récupérez les récompenses de pass, de classement et de faction en attente ;
    - videz les **Liens d'énergie** (convertis selon les règles de règlement).

!!! warning "Une inscription n'est pas annulable à la légère"
    Depuis la 3.0.5 (2 septembre 2026), la période de **verrouillage** après inscription est de **quatre heures**. Considérez « Oui » comme définitif : le personnage du cycle en cours n'est pas récupérable.

## À confirmer sur PS5 — captures bienvenues

- [ ] Le nom exact et la périodicité des serveurs Zone de Raid côté **console EU** (`Weekly_` / `Biweekly_` / `Monthly_` ?).
- [ ] L'écran d'inscription lui-même après `R1` + `✕` : liste-t-il les serveurs, ou l'inscription est-elle immédiate et automatique ?
- [ ] Le transfert est-il instantané ou différé à l'ouverture du serveur ?
- [ ] Existe-t-il un bouton d'annulation d'inscription pendant les 4 h de verrouillage ?
- [ ] Le texte exact de l'écran de règlement de fin de cycle (récompenses listées).

## Sources

- [Dev update — Once Human: RaidZone, aperçu du lancement officiel](https://www.oncehuman.game/news/update/20250728/40780_1250063.html) (nommage des serveurs, périodicités, contenus conservés au niveau du compte)
- [Dev update — calendrier des serveurs RaidZone](https://www.oncehuman.game/news/update/20250728/40780_1250055.html) (cycles de 14 jours, fenêtres d'inscription anticipée)
- [Annonce de version 2.1.0](https://www.oncehuman.game/news/update/20250729/40780_1250363.html) (cloisonnement PvE / Zone de Raid, inscription en escouade)
- [Scenario Sign-up System 2.0](https://www.oncehuman.game/news/update/20241114/40780_1193574.html) (inscription anticipée, verrouillage, annulation)
- [À propos des saisons et des scénarios](https://www.oncehuman.game/news/devBlog/20240813/40781_1174043.html) (phases, règlement, ce qui est conservé)
- [Once Human améliore RaidZone avec la mise à jour 3.0.5](https://infinity-area.com/article/once-human-ameliore-raidzone-avec-sa-mise-a-jour-3-0-5) (verrouillage d'inscription ramené à 4 h, 2 septembre 2026)
- [MMORPG.com — RaidZone : serveurs, resets et équilibrage](https://www.mmorpg.com/news/once-human-raidzone-launches-tomorrow-details-on-servers-resets-and-balance-changes-released-2000135618)
- [Meta-builds — ce qui est conservé lors d'un reset](https://meta-builds.net/guides/once-human-server-scenario-reset-what-do-you-keep/) (tableau PvE, à confirmer sur console)
- Message relevé en jeu sur PS5 le 17/09/2026 (capture archivée)
