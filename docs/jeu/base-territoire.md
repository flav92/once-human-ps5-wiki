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
| **Four électrique** | 1er onglet (icône pioche) | 4 | À relier par câble à un générateur ; fond l'alliage d'aluminium |
| **Fonte du tungstène** | 1er onglet | 5 | Débloque le tungstène |

## Objets particuliers

- **Chien robot** : simple jouet du bric-à-brac — sa seule utilité est d'être démantelé (pièces électroniques).
- **Hôte de Rosetta** : purement décoratif, aucune utilité fonctionnelle.

## La ferme à eau (retour terrain PS5 ✅, 08/09/2026)

Stratégie testée : **une petite base dédiée à la production d'eau**, posée au bord de l'eau.

**Le montage :**

1. Supprimez/déplacez votre base (la démolition **rend les matériaux dans l'inventaire**) et reconstruisez **compact** au bord de l'eau. Le **Terminal de territoire** ✅ est le cœur de la base : il l'agrandit (« Extension du territoire »), affiche vos quotas de construction et gère réparation et permissions.
2. Alimentation mixte : **2 générateurs hydrauliques** (les roues à eau — interaction « Utilisation de la roue ») **+ 3 panneaux solaires** → **9/10 appareils alimentés** (pompes à eau et le reste).
3. Laissez tourner : la production continue **hors connexion**.

**Rendement mesuré** : ~**900 eaux contaminées en 2-3 heures** avec la première configuration. Projection calculée : **~40 000 par semaine avec 8 pompes à eau**. C'est une usine.

**À quoi ça sert — la chaîne de l'acide (capturé en jeu ✅ 08/09/2026) :**

```
Pompe à eau → Eau contaminée → FILTRE À EAU COMPACT (2:1) → Acide impur → purification → ACIDE
```

La station est le **Filtre à eau compact** : on y choisit la **sortie de ressources** — **Acide impur** (taux de conversion **2:1** : 2 eaux contaminées → 1 acide impur) ou **Eau purifiée** (2:1). Fiche de l'Acide impur : *« Solution acide extraite d'eau contaminée, elle peut être purifiée davantage pour en faire de l'acide. »* L'**Acide** est un ingrédient stratégique (balles en acier, Équipement de sécurité…) : cette ferme le **produit industriellement**. *(Reste à capturer : la station de la 2ᵉ étape, Acide impur → Acide.)*

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

**La réparation se fait en un clic depuis le Terminal de territoire** ✅ (onglet **« Réparation du territoire »**) : sélection par catégorie (Structures, Installation, Meubles et décor, Production de courant) avec « Réparation maximale »/« Tout sélectionner » — pas besoin de viser pièce par pièce. Coût relevé pour ~28 structures d'une nuit : **25 briques + 19 lingots d'acier + 14 bois** et quelques unités diverses — c'est bon marché, même en béton. La ferme testée (murs/fondations **béton**, plafonds **pierre/brique**) est donc tout à fait tenable. Gardez la base **compacte** : moins de bâtiments = moins de Corrosion (règle n°2 ci-dessus). *(Test comparatif en cours : ferme béton+brique vs ferme tout bois — chiffres à comparer.)*

⚠️ **La Corrosion touche aussi les coffres** ✅ : **500 PV confirmés sur fiche** (Petite ET Grande caisse de rangement — même durabilité). Le rythme (~1 PV/min estimé) reste à mesurer, mais la règle du Terminal est claire : coffre détruit = **le contenu au-delà de la capacité restante est perdu**. Réparez-les en priorité dans l'écran de Réparation du territoire.

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
