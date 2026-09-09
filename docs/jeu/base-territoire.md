# Base et territoire

*Dernière mise à jour : 6 septembre 2026*

!!! note
    Astuces issues de l'expérience en jeu sur PS5. À confirmer/compléter.

## Déménager sa base

- Le déménagement de territoire est **gratuit**, avec un temps de recharge d'environ **10 minutes**. Toute la base se téléporte d'un bloc.
- 🎮 **Astuce manette PS5** : l'option « Déplacer le territoire » n'apparaît **pas** quand le catalogue de construction (l'écran vert avec les fondations) est ouvert. Fermez le catalogue (**Rond**) tout en restant en mode construction : l'option s'affiche alors (souvent via **L3** ou **R3**).

## Électricité et éclairage

- **Éclairage électrique de base** : débloqué via les Mémétiques (arbre Logistique). Pas besoin de fragments de rétro-ingénierie — juste des matériaux de base et un raccordement à un générateur.
- **Éclairage sans électricité** : torches (ne coûtent que du bois) ou stations de fabrication (feu de camp, fourneaux) qui éclairent autour d'elles.
- **Appliques murales décoratives** : les plans s'obtiennent souvent via des fragments trouvés en exploration. L'applique doit être fixée à un **mur construit** (hologramme bleu) puis raccordée via un câble (**X**).

Matériaux utiles : cuivre (câbles et circuits), pièces électroniques (générateurs et lampes), verre (ampoules) — voir [Ressources](ressources.md).

## Installations importantes (Mémétiques)

| Installation | Onglet Mémétiques | Palier | Notes |
|---|---|---|---|
| **Bureau de démontage** | — | tôt | Indispensable : recycle le bric-à-brac en matériaux (pièces électroniques, ferraille, caoutchouc). Utilisez « Tout insérer » pour gagner du temps |
| **Réchaud avancé** | Logistique (icône sac/feu de camp) | 3–4 | Doit être relié à l'électricité ; cuisine des plats complexes et des conserves |
| **Fourneau électrique** ✅ (nom exact capturé 08/09/2026) | 1er onglet (icône pioche) | 4 | À relier par câble (« Fixer le fil électrique ») ; produit charbon, lingots (cuivre, fer, acier, acier alliage, **tungstène** = 5 minerais + 1 acide), verre et **brique en terre cuite** |
| **Fonte du tungstène** | 1er onglet | 5 | Débloque le tungstène (le lingot se fond ensuite au Fourneau électrique) |

## Objets particuliers

- **Chien robot** : simple jouet du bric-à-brac — sa seule utilité est d'être démantelé (pièces électroniques).
- **Hôte de Rosetta** : purement décoratif, aucune utilité fonctionnelle.

## La ferme à eau (retour terrain PS5 ✅, 08/09/2026)

Stratégie testée : **une petite base dédiée à la production d'eau**, posée au bord de l'eau.

**Le montage :**

1. Supprimez/déplacez votre base (la démolition **rend les matériaux dans l'inventaire**) et reconstruisez **compact** au bord de l'eau. Le **Terminal de territoire** ✅ est le cœur de la base : il l'agrandit (« Extension du territoire »), affiche vos quotas de construction et gère réparation et permissions.
2. Alimentation mixte : **2 générateurs hydrauliques** (les roues à eau — interaction « Utilisation de la roue ») **+ 3 panneaux solaires** → **9/10 appareils alimentés** (pompes à eau et le reste).
3. Laissez tourner : la production continue **hors connexion**.

**Coût d'une Pompe à eau (fiche capturée ✅ 08/09/2026)** : 35 Lingots d'acier + 20 Fibres + 20 Pièces + 20 Composants électroniques — comptez ×8 pour l'usine complète (280 lingots…).

**La sortie de la pompe dépend de la zone où elle est posée (menu capturé ✅ 09/09/2026)** : **Eau contaminée** (uniquement en *Zone de pollution* — c'est le cas de l'emplacement testé), **Eau non potable** (toutes les zones), **Eau de mer** (zone océanique), **Pétrole brut** (*Zone de Champ Pétrolifère*), plus une sortie verrouillée par la technologie d'extraction minière. Le choix d'emplacement détermine donc ce que produit la ferme — une ferme à pétrole utilisera exactement le même matériel sur un champ pétrolifère.

**Cadence relevée** : « Temps nécessaire : 01:38 » par unité (efficacité 0,8), soit environ **37 unités/heure par pompe** — cohérent avec les ~900 eaux contaminées produites en 2-3 h par la première configuration.

**Emplacement de la ferme testée** : Delta de Broken (zone niv. 12, une zone de départ — donc hors GvG, normalement impillable).

**Rendement mesuré** : ~**900 eaux contaminées en 2-3 heures** avec la première configuration. Projection calculée : **~40 000 par semaine avec 8 pompes à eau**. C'est une usine.

**À quoi ça sert — la chaîne de l'acide COMPLÈTE (capturée en jeu ✅ 08/09/2026) :**

```
Pompe à eau → Eau contaminée → FILTRE À EAU COMPACT (2:1) → Eau purifiée / Acide impur
                                            → CUVE DE BRASSAGE (10:1) → ACIDE
```

- **Filtre à eau compact** : sortie au choix — **Acide impur** (2:1) ou **Eau purifiée** (2:1). Fiche de l'Acide impur : *« Solution acide extraite d'eau contaminée, elle peut être purifiée davantage pour en faire de l'acide. »*
- **Cuve de brassage** : recette affichée **« Eau purifiée >> Acide — Taux de conversion 10:1 »** (deux emplacements d'entrée, capacité 4 000 chacun ; le rôle exact du 2ᵉ emplacement — acide impur en complément ? — reste à préciser). Une seconde recette y est verrouillée derrière *« la technologie d'extraction minière du Caillot de… »* (Étoffe de M… — à documenter).

**Le rendement en bout de chaîne** : à 2:1 puis 10:1, il faut ~20 eaux contaminées par acide → les ~900 eaux/2-3 h ≈ **45 acides**, et les ~40 000/semaine ≈ **2 000 acides/semaine**. C'est exactement ce que consomme l'industrie : la [poudre à canon (3 acides), le lingot de tungstène (1 acide)](../craft/explosifs.md#munitions--les-recettes-exactes-capturees-) et l'Équipement de sécurité (5 acides).

**Les matériaux — PV mesurés sur fiches (capturé ✅ 08/09/2026)** :

| Élément | PV (Durabilité) | Coût de réparation relevé |
|---|---|---|
| Mur/Plafond **« en pierre 01 »** | **1 800** | 1 brique en terre cuite (+ 1 bois pour le mur) |
| **Mur en béton 01** | **3 200** | 1 brique + 1 bois + 1 lingot d'acier |
| Petite / Grande **caisse de rangement** | **500** | — |
| **Terminal de territoire** | **9 999** | — |

⚠️ **Piège de nommage vérifié** : le « Mur en pierre 01 » a pour description *« Mur de briques »* — dans le jeu, **le palier « pierre » EST la brique** (une seule et même chose). Et les fiches de structures n'affichent **aucun « niveau de stabilité »** (Durabilité + Coût seulement) — les niveaux 1/2/3 n'apparaissent que sur les fiches d'explosifs. Ordre de solidité constaté : bois < pierre/brique (1 800) < **béton (3 200)**. Règle simple : **production en zone sûre = bois ou pierre ; tout ce qui est raidable ou contient vos coffres = béton**.

**La dégradation s'appelle officiellement la « Corrosion » (Terminal de territoire, capturé ✅ 08/09/2026).** Les règles affichées en jeu :

1. *« Les effets de Corrosion réduiront progressivement la Durabilité de toutes les structures dans le Territoire jusqu'à une destruction complète. Une fois détruites, tous les actifs dépassant la capacité du coffre seront perdus. »*
2. *« Les Renforts peuvent temporairement empêcher la Corrosion. »* Le bouton **« Renforcement de territoire »** (Terminal, touche Carré) achète cette protection temporaire — et la Corrosion augmente avec **le nombre de bâtiments** et la **valeur de pollution** du territoire.

**La réparation se fait en un clic depuis le Terminal de territoire** ✅ (onglet **« Réparation du territoire »**) : sélection par catégorie (Structures, Installation, Meubles et décor, Production de courant) avec « Réparation maximale »/« Tout sélectionner » — pas besoin de viser pièce par pièce. Coût relevé pour ~28 structures d'une nuit : **25 briques + 19 lingots d'acier + 14 bois** et quelques unités diverses — c'est bon marché, même en béton. La ferme testée (murs/fondations **béton**, plafonds **pierre/brique**) est donc tout à fait tenable. Gardez la base **compacte** : moins de bâtiments = moins de Corrosion (règle n°2 ci-dessus). *(Test comparatif en cours : ferme en **béton** vs ferme en **pierre** — les captures du 08/09 montrent bien les structures « en pierre 01 » du coéquipier. Chiffres de réparation à comparer ; le **bois** n'a pas de donnée, personne n'a construit en bois.)*

**Le rythme de la Corrosion, mesuré sur deux bases (relevés des 08-09/09/2026 ✅).** Sur une même période d'environ une journée (heures exactes non notées) :

| Base | Note de construction | Élément | Perte relevée | Soit |
|---|---|---|---|---|
| Base 1 | 129 | Mur en béton (3 200 PV max) | 3 161 → 2 837 | **−10,1 %** |
| Base 1 | 129 | Caisses de rangement (500 PV max) | 500 → 451 | **−9,8 %** |
| Base 2 | 55 | Mur en pierre (1 800 PV max) | 1 773 → 1 752 | **−1,2 %** |

Deux conclusions provisoires, cohérentes avec les règles affichées au Terminal : la Corrosion retire un **pourcentage des PV max** (identique pour un mur et une caisse de la même base), et son rythme **dépend fortement de la taille de la base** (Note de construction 129 : ~10 % par jour ; Note 55 : ~1 %). À affiner avec des relevés horodatés.

**Coûts de réparation unitaires relevés ✅** : mur en béton = 1 brique + 1 bois + 1 lingot d'acier ; mur en pierre = 1 brique + 1 bois ; plafond en pierre = 1 brique ; **grande caisse = 2 lingots de fer + 1 caoutchouc + 1 pièce** ; **petite caisse = 2 bois + 1 bout de ferraille**.

**La facture complète d'une journée (écran « Toutes les pièces », capturé ✅ 09/09/2026)** : la réparation couvre quatre catégories — Structures, Installation, Meubles et décor, Production de courant — et **ce sont les installations et les meubles qui coûtent le plus cher**, pas les murs : pour l'ensemble du territoire (Note de construction 129), de l'ordre de 71 bois, ~109 lingots, 37 pièces, 33 composants électroniques et 27 briques (quantités lues sur les icônes, certaines à confirmer). Les structures seules ne représentaient que ~25 briques + 19 lingots + 16 bois. Budget d'entretien à prévoir en conséquence.

**Au-dessus du béton : l'Amélioration de structure (capturé ✅ 09/09/2026).** Le deuxième onglet du Terminal, « Amélioration de structure », propose trois filières — **Structure en Pierre, Structure Métallique, Structure en alliage** — avec notamment des **Fondations en marbre 01**, la plupart verrouillées (technologies à débloquer). Le béton n'est donc **pas** le sommet : les structures s'améliorent vers des paliers supérieurs. C'est l'explication probable des fondations en marbre à 6 400 PV observées sur les bases fortifiées en zone d'affrontements.

⚠️ **La Corrosion touche aussi les coffres** ✅ (500 PV, pertes mesurées ci-dessus). La règle du Terminal est claire : coffre détruit = **le contenu au-delà de la capacité restante est perdu**. Réparez-les en priorité — et gardez un petit stock de réparation SUR PLACE, la panne du 09/09 (tous les matériaux stockés ailleurs, réparation impossible) l'a montré.

## Stockage et encombrement

- L'encombrement de l'inventaire peut exploser vite (relevé terrain : **1 400 %** en transportant toute une base démontée !) — au-delà de 100 %, les malus rendent le personnage pénible à jouer.
- **Règle de prudence ✅** : ne laissez **jamais tout votre stuff dans une base posée en zone dont vous n'avez pas confirmé la sécurité** (raidable ou pas — à vérifier sur place avant d'y stocker quoi que ce soit). Tant que le doute existe, mieux vaut le garder sur soi, même sur-encombré.
- **Astuce d'équipe testée ✅** : demandez **une pièce chez un allié** (coéquipier de Ruche/faction) dont la base est en **zone sûre confirmée**, pour y poser vos coffres et vous délester. Le stockage mutualisé entre membres est la solution naturelle quand une base spécialisée (ferme à eau compacte) est posée dans une zone non vérifiée ou n'a pas la place pour tout le loot.
- Rappel : la **démolition rend les matériaux** dans l'inventaire — démontez plutôt que de détruire quand vous déménagez.

## Aquarium et pêche

- Le **plan de l'aquarium** s'obtient chez **Margerie** (Deadsville ou Marché de Meyer) via une ligne de dialogue cachée : « l'Échange de poissons ».
- Il coûte un **poisson spécifique entier** (pas des crédits).
- Sa fabrication requiert du **Verre** (gravier + charbon au fourneau).

## Sources

- Constaté en jeu sur PS5 (recherches personnelles, septembre 2026) — à confirmer par la communauté.
