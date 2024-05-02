## Getting Started

Le projet n'est pas relier au backend.
Concernant le front, il faudra cloner localement le projet et faire un `npm install`.

Enfin, pour lancer le projet, faites :

```bash
npm run dev
```

Ensuite, ouvrez [http://localhost:3000/pokedex-front](http://localhost:3000/pokedex-front) dans votre navigateur.

## Github Page

Le site est accessible au lien suivant : [https://sinjitou.github.io/pokedex-front/](https://sinjitou.github.io/pokedex-front/)

## Features

Le projet contient les fonctionnalités suivantes :

- Connexion et inscription qui marche avec mon backend. Mais pour le rendu : fausse connexion où l'on rentre le ogin et mdp que l'on veut.
- Liste de tous les pokemons avec un système de recherche et de pagination. C'est une liste json depuis le front. La fonctionnalité d'ajout de pokemon avec le bouton "+" en haut à droite en étant connecté n'affichera que la modal mais on ne pourra pas créer le pokemon.
- Details d'un pokemon avec la liste des types, région et sa description.
- On peut écouter la synthèse vocale de la description du pokemon (Seul à une description Bulbasaur) avec le bouton avec un icône "play"
- On peut voir notre profil, mais pas le modifier
- On peut voir notre faux profil, mais pas le changer.
- On peut voir nos pokemons vus et attrapés, et aussi ajouter des pokemons à ces listes.
- Pas de triage par type des pokemons.
