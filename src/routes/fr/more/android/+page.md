---
layout: blog
title: Configurer Android
name: android-fr
---

Même si Android est développé par Google, il existe différentes configurations qui permettent de rendre votre smartphone plus sobre et respectueux de votre vie privée. Voici quelques **rapides réglages** à mettre en place.

<!-- --------------------------------------------- -->
<details>
<summary>
Restreindre l'accès à l'utilisation des données pour les applications
</summary>

Certaines applications peuvent avoir l'autorisation de "surveiller quelles autres applications vous utilisez et à quelle fréquence, identifier votre opérateur, vos paramètres de langues et d'autres données d'utilisation". Cette option d'espionnage peut être désactiver en allant dans les **Paramètres** et en suivant ce chemin :

> **> Applications**

> **> Cliquez sur &#8285 en haut à droite**

> **> Accès spécial**

> **> Données d'utilisation**

> **> Sélectionnez les applications une par une et désactivez "Autorisation suivi utilisation"**

</details>

<!-- --------------------------------------------- -->
<details>
<summary>
Désactiver le service de personnalisation
</summary>

Android propose un service de personnalisation du contenu suivant votre utilisation, un autre moyen de pister vos données. Pour le désactiver, allez dans les **Paramètres** et suivez ce chemin :

> **> Confidentialité**

> **> Service de personnalisation**, désactivez l'option. Cette option peut ne pas avoir été activée par défaut, dans ce cas laissez la désactivée.

</details>

<!-- --------------------------------------------- -->
<details>
<summary>
    Désactiver la saisie automatique
</summary>

La saisie automatique permet à Google de savoir ce que vous tapez sur votre clavier à tout moment (même en navigation privée). Pour désactiver cette fonctionnalité allez dans les **Paramètres** et suivez ce chemin :

> **> Langue et saisie**

> **> Clavier à l’écran**

> **> Désactivez Saisie automatique/intelligente** parfois aussi appelée _Texte intuitif_

</details>
<!-- --------------------------------------------- -->
<details>
<summary>
    Ne pas envoyer les données d'utilisation et de diagnostic à Google
</summary>

Ce sont des informations de votre utilisation envoyées à Google en arrière-plan. Désactiver l'envoie de ces données permet de lutter contre l'accaparement de vos données par Google. Cela permet aussi d'économiser de la batterie et des données mobiles. Pour cela allez dans les **Paramètres** et en suivez ce chemin :

> **> Confidentialité**

> **> Envoie des données de diagnostic**, désactivez l'option

</details>
<!-- --------------------------------------------- -->
<details>
<summary>
    Désactiver et supprimer votre trace sur les services Google
</summary>

Google enregistre votre activité comme votre localisation. Cela lui permet de garder en mémoire toutes vos positions et différentes activités pour les analyser afin de vous proposer du contenu davantage ciblé dont des publicités. Vous pouvez supprimer ce traçage et le désactiver en allant dans les **Paramètres** et en suivant ce chemin :

> **> Google**

> **> Gérer votre compte Google**

> **> Données et confidentialités** (le troisième onglet)

> **> Désactiver les paramètres de l'historique :**

> > - De l'**Activité sur le Web et les applications**
> > - De l'**Historique des positions**
> > - De l'**Historique Youtube**

> Toujours dans l'onglet "Données et confidentialités" **> Paramètres des annonces**

> Désactivez **Personnalisation des annonces**

Dans cet onglet "Données et confidentialités", il peut y avoir d'autres options de Google activées. Si vous voyez des options qui pourraient faire fuiter vos données personnelles, désactivez-les.

</details>

<!-- --------------------------------------------- -->
<details>
<summary>
    Gérer les autorisations des applications
</summary>

De nombreuses applications accèdent à certaines fonctionnalités et données de votre smartphone dont elles n'ont pas besoin pour fonctionner. Par exemple Facebook peut avoir accès à votre microphone même en arrière-plan (quand vous ne l'utilisez pas directement). Vous pouvez restreindre l'accès des applications en allant dans les **Paramètres** et en suivant ce chemin :

> **> Applications**

> **> Gestionnaire d'autorisations**

> **> Sélectionnez le paramètre que vous souhaitez restreindre** (Localisation, Appareil Photo, Microphone, etc.)

> Vous verrez la liste des applications qui ont pour ce paramètre :

> > - toujours accès
> > - seulement pendant l'utilisation
> > - non autorisés

> **> Cliquez sur les applications dont vous souhaitez restreindre l'accès**

Essayez au maximum de **refuser l'accès** et si ce n'est pas possible donnez l'autorisation **seulement si l'application est en cours d'utilisation**.
Par exemple, je refuse que mon navigateur de recherche est accès à ma position (il n'en a pas besoin) mais j'accepte que mon application de navigation est accès à ma localisation seulement si l'application est en cours d'utilisation.

Si l'application a réellement besoin de ce paramètre pour fonctionner, elle vous demandera l'autorisation à votre prochaine utilisation.

</details>

<!-- --------------------------------------------- -->
<details>
<summary>
    Désactiver les notifications inutiles
</summary>

Certaines applications vous envoie des notifications sans grand utilité. Cela nécessite **de la batterie et des données cellulaires**. Vous pouvez sélectionner quelles applications ont l'autorisation de vous envoyer des notification en allant dans **Paramètres** et suivez ce chemin :

> **> Applis et notifications**

> **> Notifications**

> **> Tout afficher depuis les sept derniers jours**

> **>** Changez **Les plus récentes** par **Toutes les applis**

> **> Désélectionnez les applications qui n'ont pas besoin de vous envoyer des notifications**

</details>
<!-- --------------------------------------------- -->
<details>
<summary>
    Supprimer votre identifiant publicitaire
</summary>

Votre smartphone possède un identifiant publicitaire Google, un numéro unique pour votre appareil. Grâce à ce numéro, les sociétés peuvent vous pister et créer un profil très facilement sur vos usages.

Vous pouvez désactiver cet identifiant.

- Premièrement vous devez mettre à jour les _Google Play Services_ (si ce n'est pas déjà fait). Allez dans le Play Store et suivez ce chemin :

> **> Cliquez sur votre profil en haut à droite**

> **> Gérer les applications et l'appareil**

> **> Mises à jour disponibles**

> **> Google Play Services** (s'il n'est pas dans la liste des applications à mettre à jour, c'est qu'il est déjà à jour)

> **> Mettre à jour**

- Allez ensuite dans les **Paramètres** de votre smartphone et suivez ce chemin :

> **> Google**

> **> Annonces**

> **> Supprimer l'identifiant publicitaire** puis confirmer une nouvelle fois la suppression

Cela n'empêche pas le pistage mais rend le profilage plus compliqué. Si vous souhaitez un exemple illustré, voici une [vidéo explicative](https://mastodon.social/@datarequestsorg/108834246398108839) (en anglais).

</details>

<!-- --------------------------------------------- -->
<details>
<summary>
    Déconnecter son compte Google
</summary>

Google va enregistrer de nombreuses informations liées à votre compte Google. Si vous le pouvez, déconnectez votre compte de votre smartphone. Pour cela **assurez-vous d'avoir les magasins d'applications F-Droid et Aurora Store** ([alternatives au Play Store](../gafalt)) pour pouvoir installer toutes les applications Android sans compte Google. Vous pouvez ensuite déconnecter votre compte en allant dans **Paramètres** et suivez ce chemin :

> **> Comptes et sauvegardes**

> **> Comptes**

> **> Sélectionnez votre compte Google**

> **> Supprimer le compte**

</details>

Bien évidemment, ces options restreignent la capacité à Google à pister vos données mais ne les bloquent pas entièrement car le système lui-même, Android, est géré par Google. Certains smartphones permettent de remplacer Android par un système dégooglisé : /e/OS (voir [cet article](./eos)).
