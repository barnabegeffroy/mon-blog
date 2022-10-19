<div class="content">

# Remplacer Android par un système **open source**

**Attention** ! Ce remplacement est une opération très technique qui nécessite des compétences avancées.

## Pourquoi /e/OS ?

/e/OS est un système d'exploitation [**open source**](https://gitlab.e.foundation) développé par Murena, une société qui met en oeuvre des solutions libres et respectueuses de la vie privée (avec /e/OS notamment). /e/OS se base sur Android mais est **démuni des services Google** (Play Store, Google Photo, GMail, ...).

## Les fonctionnalités

### Les applications système

<div class="block">

Les applications pré-installées sur le système sont **open source et respectueuses de la vie privée**. Vous pouvez donc utiliser les notes, l'agenda, le client mail et autres **sans avoir à installer une alternative** plus éthique. Seule l'application de navigation, Cartes, reste propriétaire mais vous pouvez télécharger OsmAnd (l'alternative à Google Maps) sur l'_App Lounge_.
<a href="/mon-blog/img/menu.webp" target="_blank" rel='noopener noreferrer'>
<img src="/mon-blog/img/menu.webp" alt="Menu d'/e/OS" width="300px">
</a>

</div>

### App Lounge

<div class="block">
<a href="/mon-blog/img/app_lounge.webp" target="_blank" rel='noopener noreferrer'>
    <img src="/mon-blog/img/app_lounge.webp" alt="Capture du App Loungue" width="300px">
</a>
<div>

Même si vous enlevez les services Google et donc le Play Store, vous pouvez tout de même installer **toutes les applications** disponibles sur Android grâce à l'_App Lounge_, le magasin d'application d'/e/OS. Il réunit les applications du Play Store mais aussi celles de **F-Droid**. _App Lounge_ donne également un **score de vie privée** sur 10 pour chaque applications et **indique si l'application est open source**.

L'_App Lounge_ **ne nécessite aucun compte**. Si vous souhaitez récupérer les applications que vous avez achetées sur votre ancien Android, vous pouvez toutefois vous connecter à votre compte Google pour télécharger vos achats.

</div>
</div>

### Advanced Privacy

<div class="block">

/e/OS **intègre un bloqueur de publicités et de pisteurs** au niveau du système avec la fonctionnalité _Advanced Privacy_. Vous n'aurez donc aucune pub, sur votre navigateur mais également sur les autres applications que vous utilisées. _Advanced Privacy_ permet également de masquer sa localisation et son adresse IP.

<a href="/mon-blog/img/advanced_privacy.webp" target="_blank" rel='noopener noreferrer'>
    <img src="/mon-blog/img/advanced_privacy.webp" alt="Capture d'Advanced Privacy" width="300px">
</a>

</div>

## Comment changer ?

Avant toute chose, assurer vous d'avoir bien **sauvegarder toutes les données que vous souhaitez garder**, cette opération **effacera l'intégralité de vos données**.

1. Vérifier que son smartphone est compatible

Tous les smartphones Android ne supportent pas /e/OS, il faut donc vérifier dans [**la liste de compatibilité**](https://doc.e.foundation/fr/devices) que votre smartphone s'y trouve. Il faut également vérifier que votre smartphone possède une **version stable** d'/e/OS pour s'assurer du bon fonctionnement du système.

<a href="/mon-blog/img/eos_list.webp" target="_blank" rel='noopener noreferrer'>
    <img src="/mon-blog/img/eos_list.webp" alt="Capture d'Advanced Privacy" width="100%">
</a>

2. Suivre la documentation

Suivant le smartphone la démarche peut être différente. Il faut donc suivre la documentation spécifique à votre smartphone en cliquant sur le _install doc_ ou sur le nom de votre smartphone depuis la liste de compatibilité.

Certains smartphones ont un **_easy installer_** qui permet depuis une interface graphique. Cela permet d'installer /e/OS de façon simplifier (sans ligne de commande).

</div>

<style>
    .block{
        display:flex;
    }

    img{
        margin : 10px;
    }
    h1,h2,h3{
        margin-right: auto;
    }

    .content{ 
        width: 70%;
    }


  @media (max-width: 775px) {
    .block{
        flex-direction : column;
    }
    .content{
        width: 90%;
    }
  }
</style>
