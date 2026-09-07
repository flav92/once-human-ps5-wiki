# Prendre une zone d'affrontements

*Dernière mise à jour : 6 septembre 2026 — guide vérifié en jeu PS5 ✅*

!!! success "Séquence validée par une prise réelle"
    Cette méthode a été **exécutée avec succès le 06/09/2026** sur un serveur console EU (secteur de Rippleby) : destruction des Entraves protoïdes et installations adverses, puis prise de contrôle par la Ruche (« Ruche sous contrôle » affichée sur la carte).

## La zone d'affrontements, c'est quoi ?

Sur la carte : **« Zone d'affrontements »** ✅ (avec un « Niveau de gestion » et un niveau suggéré, ex. 25). Son infobulle officielle : *« **La zone d'engagement ne peut être contrôlée que par la ruche.** »* Elle affiche la **« Ruche sous contrôle »** et les **Ressources** produites (Stardust, carburant premium en barils — production boostée).

- **PvP libre permanent** (icône rouge **GVG** à l'écran) : tout le serveur s'y croise, pas d'instances, aucune déclaration de guerre nécessaire — on entre, on détruit, on occupe.
- La zone s'articule autour de ses **sites d'extraction** (foreuses) : tant que votre Ruche n'en contrôle pas, **tout est verrouillé**. Messages du jeu ✅ : *« Aucun permis de construire pour cette zone »*, *« Aucun accès. Vous devez d'abord occuper un site d'extraction »*.
- **Le HUD de zone est votre boussole** : compteurs relevés `431/640` (structures), `12/60`, `0/12`, `0/12`, `1/1` avec les pseudos des occupants. Après chaque destruction, regardez quel compteur bouge.

## La séquence de prise

**1. Raser les défenses de l'occupant.** Vérifié en jeu : **le bois tombe même sous les balles** dans ces zones (lent mais gratuit). Les explosifs servent à aller vite et à percer la pierre — voir [Explosifs et munitions](../craft/explosifs.md).

**2. Détruire ce qui tient la zone**, dans l'ordre :

1. Le **générateur** ennemi → coupe tourelles et installations alimentées.
2. Les **relais électriques** reliés (suivez les câbles).
3. Les **Entraves protoïdes** ✅ — tours « R.S.T » sur trépied, étiquetées quand on les vise. Ce sont les objectifs comptés par le HUD : toutes.
4. L'**Équipement de sécurité** ennemi s'il y en a un.

**3. Prendre le contrôle** : soyez **en Ruche**, interagissez avec le **site d'extraction**, et vérifiez sur la carte que « Ruche sous contrôle » passe à votre nom.

**4. Poser votre Équipement de sécurité** ✅ (*« pour gérer les droits de zone d'engagement »*) — recette :

| Matériau | Qté | Source |
|---|---|---|
| Lingot de cuivre | 20 | Minerai de cuivre au fourneau |
| Lingot de fer | 10 | Minerai de fer au fourneau |
| Pièces | 8 | Exploration, démontage de déchets |
| Composant électronique | 3 | Bric-à-brac techno au Bureau de démontage |
| Acide | 5 | Déviants et exploration de la nature |
| Câble d'alimentation | 1 | Exploration ou Boutique |

**5. Fortifier immédiatement** — les 10 premières minutes sont les plus dangereuses :

- Vos propres **Entraves protoïdes** ✅ (elles se **construisent** : menu construction, catégorie **Extérieur**) — dispersées et **cachées** derrière des murs, jamais à découvert.
- Mines Claymore, sacs de sable, tourelles + générateur protégé, couches de murs (« honeycombing ») en matériaux durs.
- Collectez ensuite régulièrement les **ressources** de la zone.

### La défense en oignon (schéma testé en zone ✅)

Montage appliqué sur le terrain pour protéger un générateur, en **pierre** (stabilité niv. 3 — les balles n'y font rien, contrairement au bois) :

```
┌───────────────────────────┐  ← anneau 1 : mur extérieur pierre
│   (espace tampon vide)    │  ← Claymores + zone de tir ici
│   ┌───────┬───────┐       │  ← anneau 2 : petits murs + plafonds
│   │ ⚡ GÉNÉRATEUR │       │     (toit = pas de tir en cloche ni de saut)
│   └───────┴───────┘       │
└───────────────────────────┘  + toit couvrant l'ensemble
```

Pourquoi ça marche :

- **La pierre force l'explosif** : chaque quart de fondation marbre = 6 400 PV (~6 Explosifs surpuissants). Trois anneaux = un raid hors de prix pour l'attaquant.
- **Le toit** interdit les lancers d'explosifs en cloche et l'accès par le dessus (la faille classique).
- **L'espace tampon** entre les anneaux : posez-y des Mines Claymore et gardez-y un angle de tir — l'attaquant qui perce l'anneau 1 se retrouve à découvert.

### Les Installations de combat (catalogue relevé en jeu ✅)

Le menu de construction a une catégorie dédiée **« Installation de combat »** — une douzaine d'unités. Ce qu'on en sait :

| Installation | Munitions / rôle | Notes |
|---|---|---|
| **Tourelle « Fusil d'assaut » niv. 1+** | Visée auto, consomme des **munitions de fusil** — *« la meilleure arme qui soit pour protéger son territoire »* | Écran Tech. **Coût de pose relevé ✅** : 200 Balles en cuivre de calibre moyen (la tourelle arrive chargée) + 30 Lingots d'acier alliage (**fourneau électrique**) + 10 Pièces + 5 Lingots de cuivre + 5 Composants + 8 Adhésif |
| **Tourelle « Fusil de chasse » niv. 1+** | Visée auto, munitions de **fusil à pompe** — *« attaquer sans retenue est la meilleure des défenses »* | Idéale à bout portant : couloirs et espace tampon |
| **Tourelle opérée** (manuelle) | *« Puissance de feu colossale »* — un joueur monte dedans | Faible contre les structures (niv. 1) : anti-personnel |
| **Caméra de surveillance** | Détection/alerte | ⚡ |
| **Tourelle mitrailleuse portative** | Autonome, déployable | Voir ci-dessous |

Trois règles logistiques qui changent tout :

1. **Les tourelles à visée auto consomment VOS munitions** (fusil, pompe…) — approvisionnez-les, une tourelle à sec est un pot de fleurs.
2. L'icône **⚡** = besoin d'électricité → câblée au générateur. Encore une raison d'avoir un **générateur de secours** caché.
3. Les tourelles montent en **niveaux** (niv. 1, 2…) via l'écran Tech — améliorez-les au fil de la saison.

**⚠️ Tourelle mitrailleuse portative = TEMPORAIRE (vérifié en jeu)** : elle **disparaît à la déconnexion** du joueur qui l'a posée. C'est un outil de **combat actif** (défense en direct, assaut, tenir un point pendant qu'on est en ligne — PV 750 % Psi, dégâts 78 + 100 % Psi, 20 s de fabrication), **pas** une défense permanente.

**Pour la défense permanente de la zone, il faut les tourelles FIXES** de la catégorie Installation de combat (Fusil d'assaut niv. 1, Fusil de chasse niv. 1…), à **débloquer dans l'écran Tech** : elles restent en place hors connexion — câblées au générateur (⚡) et approvisionnées en munitions. Un **Leurre** existe aussi dans la même catégorie de fabrication — à documenter.

À compléter pour la version parfaite :

- **Stock de réparation dans un coffre sur place** : la réparation est ridiculement bon marché (1 brique la fondation !) — un défenseur présent qui répare pendant le siège rend la percée quasi impossible. C'est votre plus gros avantage : exploitez-le.
- **Séparez les cibles** : Équipement de sécurité et Entraves protoïdes dans d'AUTRES bunkers du même type, pas tous avec le générateur — l'attaquant devra tout percer.
- **Doublez le générateur** : un générateur de secours caché ailleurs, câblé aux tourelles, pour que la perte du premier ne coupe pas toute la défense.

## Combien de PV ont les structures ? (mesuré en jeu ✅)

| Élément | PV | Coût constaté |
|---|---|---|
| Quart de plafond en bois massif | **3 200** | **3 × Explosifs surpuissants** (vérifié) |
| Quart de fondations en marbre | **6 400** | ~6 Explosifs surpuissants (estimation) |

- Visez un élément pour afficher sa durabilité — comptez vos cibles **avant** de dépenser.
- ⚠️ La **réparation est très bon marché** pour le défenseur (4 bois le plafond, 1 brique la fondation) : concentrez le feu sur UN point et engouffrez-vous, ne saupoudrez jamais.

## La checklist du raid

Leçon du premier assaut (arrêté faute de munitions) — chaque membre emporte :

- [ ] **Munitions ×2** de l'estimation
- [ ] **Explosifs surpuissants** (30 s/pièce — production lancée AVANT de partir)
- [ ] **Coquilles de roquette** si le RPG7 sort
- [ ] **Kit de prise** : Équipement de sécurité pré-fabriqué, générateur, Claymores, murs
- [ ] **Soins et nourriture**

Répartition : 1-2 démolisseurs, 1 guetteur, 1 porteur du kit qui re-teste la prise après chaque destruction. À la base arrière : un membre **produit pendant l'assaut**.

**Doctrine de butin ✅** : ne détruisez pas tout — **récupérez les installations ennemies** et tout objet à **icône jaune** quand c'est possible : passés à l'établi de [rétro-ingénierie](../craft/explosifs.md#la-retro-ingenierie-lautre-voie-de-deblocage), ils débloquent des crafts gratuits ou donnent des **ossements**.

**Astuce logistique** : déplacez le **territoire** d'un membre (déménagement gratuit, ~10 min de recharge) en bordure de zone → base avancée avec établis, coffres et lit de réapparition. C'est comme ça que les grosses équipes ont leurs forteresses sur place.

## Voir aussi

- [Explosifs et munitions](../craft/explosifs.md) — quoi fabriquer, à quel coût
- [Guerres de frontières](frontieres.md) — l'autre système, avec enchères et batailles programmées
- [Factions armées et Ruches](factions.md)
