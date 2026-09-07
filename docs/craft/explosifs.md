# Explosifs et munitions

*Dernière mise à jour : 6 septembre 2026 — recettes et fiches relevées en jeu PS5 ✅*

Tout ce qui explose : quoi débloquer, quoi fabriquer, à quel coût — et lequel choisir selon la cible.

## Comment lire une fiche d'explosif

La ligne clé : *« Très efficace contre les structures de **niv. X** ou inférieur en stabilité »*. C'est la **stabilité du matériau visé** (rien à voir avec votre niveau) : **bois = niv. 2, pierre = niv. 3, béton = niv. 4**. Pas de ligne, ou « dégâts modérés » = mauvais outil de démolition. Aucun explosif n'est « anti-joueurs uniquement » — tout touche tout, seule l'efficacité change.

## Le comparatif (phase 1), du plus au moins rentable contre les structures

| Outil | Dégâts | Casse quoi | Fabrication / déblocage |
|---|---|---|---|
| 🥇 **Balles** | — | **Bois** (vérifié en zone d'affrontements ✅) | Quasi gratuit — l'option éco quand la zone est calme |
| 🥈 **Explosifs surpuissants** ✅ | **3639** + 800 % Psi (~1100 effectifs/structure) | **Bois + pierre** (niv. 3) | **Arbre Tech, 180 points** — dispo dès la phase 1. Établi de synthèse, 30 s : 15 lingots d'acier alliage + 3 Explosifs variés + 10 plastique* + 2 composants |
| **Coquille de roquette** ✅ (RPG7) | 297/tir (rang II) | **Bois + pierre** (niv. 3) | ⚠️ **Retour terrain : peu rentable** comparée aux Explosifs surpuissants — coût élevé (5 Explosifs variés + acier + protoplasme/tir) pour moins d'effet. À réserver au tir à **distance** (tourelles actives) |
| **Ogive de fusée plasma rouge** ✅ | **+30 % dégâts constructions** | Cibles coriaces | Même établi, matériaux rares — à réserver pierre/béton |
| **Grenade HE** ✅ | — | *Vérifiez sa ligne « niv. X » en jeu* | Débloquée (branche Établi de synthèse des Mémétiques) |
| ❌ **Grenade** de base ✅ (×8/craft) | 698 | **Niv. 1 seulement** — inefficace sur le bois | Pour les joueurs et créatures uniquement |

*\* icône du plastique à confirmer. Les « Explosifs améliorés » des wikis PC n'ont pas été retrouvés sur PS5 — les Explosifs surpuissants les remplacent.*

## Le goulot de toute la chaîne : Explosifs variés → soufre

Grenades, surpuissants, roquettes : **tout** consomme des **Explosifs variés** ✅ (fabriqués au **Grand établi de synthèse**, à base de **soufre**). La puissance de feu se mesure donc en soufre : rochers à **cristaux jaunes** (Broken Delta, Iron River) ou Déviant **Garçon Digby** en farm passif — voir [Ressources](../jeu/ressources.md#soufre). File de production en continu !

## Arbre de production des roquettes

```mermaid
flowchart TD
    R["🚀 COQUILLE DE ROQUETTE<br/>(Établi d'équipement avancé)"]

    R --> A["10 × Lingot d'acier"]
    R --> E["5 × Explosifs variés"]
    R --> P["15 × Source protoplasmique"]
    R --> C["10 × Composant électronique"]
    R --> F["15 × Mélange de carburant portatif"]

    A --> A1["Minerai de fer<br/>(rochers rouge sombre,<br/>Broken Delta)"]
    A --> A2["Charbon<br/>(bois brûlé au fourneau)"]

    E --> E0["Grand établi de synthèse"]
    E0 --> E1["Soufre<br/>(rochers à cristaux jaunes<br/>Broken Delta / Iron River,<br/>ou Déviant Garçon Digby)"]

    C --> C1["Bric-à-brac techno<br/>(claviers, écrans, chiens robots)<br/>→ Bureau de démontage"]

    P --> P1["❓ source à confirmer en jeu<br/>(butin de créatures ?)"]
    F --> F1["❓ recette à confirmer en jeu<br/>(carburant / biofuel ?)"]

    style R fill:#7c4dff,color:#fff
    style P1 stroke-dasharray: 5 5
    style F1 stroke-dasharray: 5 5
```

## Le RPG7

- **Le lanceur** (« RPG7 — Schéma : lance-roquette » ✅) : Mémétiques (points mémétiques), coffres mystérieux, ou Machine à vœux. Stats rang II relevées : **297 DÉG**, chargeur de **1**, +25 % critique/points faibles, trait *« très efficace contre les structures de niv. 3 ou inférieur »*. Existe en rangs II → V — refabriquez-le à un rang supérieur au fil de la saison.
- **Les Coquilles de roquette** se **lootent** aussi (conteneurs, ennemis) et s'achètent aux **distributeurs** d'autres joueurs.
- Le **Résonateur protoïde** (détection des Entraves en guerre de frontières) se fabrique au Grand établi de synthèse — voir [Guerres de frontières](../guerre/frontieres.md).

## Munitions : l'acide et la Source protoplasmique sont stratégiques

Retour terrain PS5 : la fabrication des **balles en acier** consomme de l'**Acide** et de la **Source protoplasmique** (les fioles roses/violettes). Ces deux ressources ne servent donc pas qu'aux explosifs — **stockez-les en priorité** : Acide sur les Déviants et dans la nature, Source protoplasmique en butin. *(Recette exacte des balles en acier : à relever en jeu.)*

## La rétro-ingénierie : l'autre voie de déblocage

**Le système, vérifié terrain PS5 ✅** — l'établi s'appelle le **« Banc de synthèse technologique »** et a **deux onglets** :

**Onglet « Rétro-ingénierie »** :

1. Placez-y les objets marqués d'une **icône jaune** (lootés en exploration ou récupérés sur les installations ennemies).
2. **La première fois** qu'un objet y passe → son **craft se débloque** (sans dépenser de points Tech !).
3. **Les fois suivantes**, le même objet donne des **ossements** — la monnaie qui sert à **acquérir de nouveaux crafts** (c'est probablement elle qui chiffre les gros déblocages, comme l'établi de munitions vu à « 6000 »).

**Onglet « Inventions technologiques »** ✅ : on y place des **matériaux** (« Matériaux d'invention ») → l'« Aperçu du résultat de l'invention » montre les machines/objets que la combinaison peut produire → **« Activer l'invention »** (~3 min). C'est une seconde voie de découverte : expérimentez des combinaisons de matériaux pour inventer de nouvelles installations. *(À documenter : les combinaisons connues.)*

**Doctrine de la faction** : *favoriser la récupération des installations et la rétro-ingénierie* — en raid comme en exploration, **ramenez tout objet à icône jaune** au lieu de le broyer, et récupérez les installations ennemies quand c'est possible plutôt que de tout détruire. Chaque objet analysé = un craft gratuit ou des ossements.

## Déblocages et verrous de phase

- **Explosifs surpuissants : PAS bloqués en phase 1** (vérifié ✅) — Arbre Tech, 180 points Tech, à débloquer en priorité absolue.
- Branche **Établi de synthèse** des Mémétiques (Grenade → Mines Claymore → Grenade HE) : disponible tôt.
- Équipement de **palier 5** : verrouillé (niveau 40 + phases suivantes). Corps d'arme **palier IV** : derrière le mur rouge (zones niv. 30+) en phase 1.
- Astuce faction : un seul membre paie le déblocage et produit pour tous sur ses établis partagés.

## Voir aussi

- [Prendre une zone d'affrontements](../guerre/prise-de-zone.md) — les PV des structures et combien de bombes prévoir
- [Ressources : où trouver quoi](../jeu/ressources.md)
