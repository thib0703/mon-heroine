# Mon héroïne — mise en ligne

## 1. Firebase (une seule fois, ~10 min)
1. Sur console.firebase.google.com : créez un **nouveau** projet « mon-heroine » (ne réutilisez pas celui des mimichats : ses règles seraient remplacées).
2. **Authentication** → Méthodes de connexion → activer **Anonyme**.
3. **Firestore Database** → Créer (mode production, région europe-west) → onglet **Règles** → coller le contenu de `firestore.rules` → Publier.
4. **Paramètres du projet** → Vos applications → ajouter une app **Web** → copier l'objet `firebaseConfig`.
5. Ouvrir `firebase-config.js` et remplacer `null` par cet objet.

## 2. GitHub Pages
1. Créer un dépôt (ex. `mon-heroine`) et y déposer tous les fichiers de ce dossier.
2. Settings → Pages → Branch `main` / dossier racine → Save.
3. L'adresse est du type `https://VOTRE-NOM.github.io/mon-heroine/`.
4. Firebase → Authentication → Paramètres → Domaines autorisés → ajouter `VOTRE-NOM.github.io`.

## 3. Installer
- **Son Android (Chrome)** : ouvrir l'adresse → menu ⋮ → « Ajouter à l'écran d'accueil » / « Installer l'application ».
  Faire la préparation (prénom, nom de l'héroïne, code secret), puis sur l'écran « Tout est prêt » : « Créer le code famille ». La lettre de mission attend le jour J.
- **Vos iPhone (Safari)** : ouvrir l'adresse → bouton Partager → « Sur l'écran d'accueil ».
  Au premier lancement : « Je suis un grand frère : j'ai un code famille » → entrer le code.

## Ce qui se synchronise
- De son téléphone vers les vôtres : étoiles, niveau, missions faites, défis, signalements « À regarder ».
- De vos téléphones vers le sien : messages vocaux, missions, réglages, vos avatars d'alliés.
- Son carnet de fierté reste privé : il n'est pas affiché sur vos téléphones.
