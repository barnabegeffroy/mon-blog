---
layout: blog
sommaire: true
title: Remplacer Windows par un système open source
---

<script> 
    import Img from '$lib/Components/Img.svelte'
</script>

**Attention** ! Ce remplacement est une opération très technique qui nécessite des compétences avancées. N'hésitez pas à demander de l'aide à une personne compétente si vous souhaitez faire cette manipulation.

## C'est une distribution Linux ?

Linux est une famille de systèmes d'exploitation **open source**. Il existe ainsi différentes **distributions** répondant aux besoins spécifiques des utilisateur⋅ices. Il y a des **distributions grand public** où il n'y pas besoin d'être professionnel⋅le de l'informatique pour les utiliser comme des distributions minimales qui nécessitent davantage de connaissances en informatique.

Voici une capture d'écran d'Ubuntu, la distribution la plus répandue dans le grand public :
<Img file="ubuntu.webp" alt="Capture d'écran Ubuntu" width="100%" />

## Pourquoi changer ?

En remplaçant Windows, vous coupez l'accès de Microsoft à vos données. De plus, de manière générale les distributions Linux sont souvent plus légères que Windows, ainsi vous économisez de la batterie et **allongez la durée de vie de votre appareil**. En effet, si des vieux ordinateurs sont (très) lents sous Windows, ils peuvent très bien fonctionner sous une distribution Linux légère.

Passer sous Linux permet donc à la fois de **protéger votre vie privée** et de **garder son appareil plus longtemps**, point essentiel pour une sobriété numérique.

Aussi, il n'y a **pas besoin d'antivirus sous Linux**. Les pirates s'attaquent en effet très peu aux systèmes Linux des utilisateur⋅ices car cela représente une part trop faible par rapport à celleux de Windows et Mac.

## Les caractéristiques

Comme il existe de nombreuses distributions, il y a beaucoup de fonctionnalités qui diffèrent. Voici celles principalement communes :

### Les logiciels

Peu importe votre distribution, vous aurez accès à tous les logiciels disponibles sur Linux. Certaines distributions proposent des **magasins d'applications/logiciels**. Il n'y a donc pas besoin d'aller sur le web pour télécharger un logiciel. Cela permet de s'assurer que le logiciel est installé depuis une **source sûre**.

Vous aurez également accès par défaut à de nombreuses applications **open source** comme Firefox, visionneur de PDF, des outils du système (gestionnaire de fichiers, calculatrice, ...).

### La personnalisation

Les distributions Linux permettent **une grande personnalisation**. Vous pouvez créer un espace de travail répondant à vos besoins, à **l'expérience que vous souhaitez** avoir. Bien entendu si vous souhaitez ne rien configurer, les environnements sont parfaitement utilisables sans rien toucher.

Ces configurations peuvent être simples : raccourcis claviers, la disposition de barre de tâches... Ou bien des restructuration totale, par exemple, voici une distribution Linux configurée pour ressembler à l'environnement de MacOS :
<Img file="mac.webp" alt="Capture d'écran d'un environnement Linux ressemblant à MacOS" width="100%" />

### Les inconvénients

Le plus gros frein au passage à Linux, est la **non disponibilité de certains logiciels propriétaires**. Parmi eux, la suite Adobe et la suite Office. Bien évidemment il existe des alternatives open source et gratuites : GIMP pour Photoshop,
Inkscape pour Illustrator, OnlyOffice pour la suite Office. Toutefois, il se peut que certaines contraintes ne vous permettent pas d'effectuer cette transition.

Certains jeux ne sont pas disponibles également. De nombreux jeux restent disponibles (LoL, Steam, ...).

Il faut donc bien vérifier que toutes les applications que vous utilisez sont disponibles sur Linux pour ne pas avoir de mauvaise surprise.

Si vous souhaitez faire la transition progressivement, vous pouvez tout de même installer un **_Dual Boot_** qui vous permet de choisir au démarrage si vous souhaitez utiliser Windows ou Linux.

## Comment changer ?

Avant toute chose, assurer vous d'avoir bien **sauvegarder toutes les données que vous souhaitez garder**, cette opération **effacera l'intégralité de vos données**.

Voici un résumé de l'opération d'installation de Linux. Il est toutefois préférable de suivre un tutoriel spécifique à votre distribution.

1. **Choisir la distribution Linux** que vous souhaitez installer. Ubuntu est la plus répandue dans le grand public, Fedora est en essor ces dernières années. Vous pouvez vous voir quelle distribution vous correspond le mieux sur .
2. Il faut **créer un clé bootable** avec la distribution que vous avez choisi. Pour cela il faut suivre [ce tutoriel](https://lecrabeinfo.net/creer-une-cle-usb-bootable-avec-rufus.html) qui permet de créer une telle clé.

3. Il faut ensuite **éteindre votre ordinateur**, laissez bien insérer la clé bootable. Redémarrez votre ordinateur en lançant le **_Boot Menu_**. La commande d'ouverture de ce menu est spécifique à chaque ordinateur (souvent une touche de F1 à F10), il est donc préférable de se renseigner sur la commande à actionner pour votre machine.

4. Dans le _Boot Menu_, **sélectionnez votre clé USB**. Vous venez de lancer Linux sur votre ordinateur. Ensuite on vous proposera de tester la distribution ou de l'installer directement. Il faut **tester la distribution** pour s'assurer que votre ordinateur fonctionne bien avec cette distribution avant de l'installer.

5. Vous pouvez ensuite **installer la distribution**. Il y a souvent une fenêtre de dialogue qui vous permet de configurer l'installation de Linux. C'est notamment là que vous allez choisir si vous remplacer totalement Windows ou faites un _Dual Boot_ (installer Linux à côté de Windows)

6. Une fois l'installation terminée, votre ordinateur redémarre et **Linux est installé** !
