/**
 * Created by Vincent on 08/01/2015.
 */

validateMdp2 = function() {
    var mdp1 = document.getElementById('password').value;
    var mdp2 = document.getElementById('password-confirm').value;
    if (mdp1 == mdp2) {
        document.getElementById('mdp2').setCustomValidity('');
    } else {
        document.getElementById('mdp2').setCustomValidity('Les mots de passes doivent être identiques.');
    }
}

computeAge = function() {
    try{
        var date = new Date();
        var birthdate = new Date(document.getElementById('birthdate').value);
        var age = date.getFullYear() - birthdate.getFullYear();

        if (age <= 13){
            document.getElementById('alert-age').removeAttribute("style");
        }
        else {
            document.getElementById('alert-age').setAttribute("style", "display : none");
        }
        if (date.getMonth() >= birthdate.getMonth() && date.getDay() >= birthdate.getDay()){
            document.getElementById('age').value = age;
        }
        else {
            document.getElementById('age').value = age -1;
        }
    } catch(e) {
        document.getElementById("age").value = "0";
    }
};

loadProfilePic = function () {
    // on récupère le canvas où on affichera l'image
    var canvas = document.getElementById("preview");
    var ctx = canvas.getContext("2d");
    // on réinitialise le canvas: on l'efface, et déclare sa largeur et hauteur à 0
    ctx.setFillColor("white");
    ctx.fillRect(0,0,canvas.width,canvas.height);
    canvas.width=0;
    canvas.height=0;
    // on récupérer le fichier: le premier (et seul dans ce cas là) de la liste
    var file = document.getElementById("profilepicfile").files[0];
    // l'élément img va servir à stocker l'image temporairement
    var img = document.createElement("img");
    // l'objet de type FileReader nous permet de lire les données du fichier.
    var reader = new FileReader();
    // on prépare la fonction callback qui sera appelée lorsque l'image sera chargée
    reader.onload = function(e) {
        //on vérifie qu'on a bien téléchargé une image, grâce au mime type
        if (!file.type.match(/image.*/)) {
            // le fichier choisi n'est pas une image: le champs profilepicfile est invalide, et on supprime sa valeur
            document.getElementById("profilepicfile").setCustomValidity("Il faut télécharger une image.");
            document.getElementById("profilepicfile").value = "";
        }
        else {
            // le callback sera appelé par la méthode getAsDataURL, donc le paramètre de callback e est une url qui contient
            // les données de l'image. On modifie donc la source de l'image pour qu'elle soit égale à cette url
            // on aurait fait différemment si on appelait une autre méthode que getAsDataURL.
            img.src = e.target.result;
            // le champs profilepicfile est valide
            document.getElementById("profilepicfile").setCustomValidity("");
            var MAX_WIDTH = 96;
            var MAX_HEIGHT = 96;
            var width = img.width;
            var height = img.height;

            if (width > MAX_WIDTH){width = MAX_WIDTH;}
            if (height > MAX_HEIGHT){height = MAX_HEIGHT;}

            var width = MAX_WIDTH;
            var height = MAX_HEIGHT;

            canvas.width = width;
            canvas.height = height;
            // on dessine l'image dans le canvas à la position 0,0 (en haut à gauche)
            // et avec une largeur de width et une hauteur de height
            ctx.drawImage(img, 0, 0, width, height);
            // on exporte le contenu du canvas (l'image redimensionnée) sous la forme d'une data url
            var dataurl = canvas.toDataURL("image/png");
            // on donne finalement cette dataurl comme valeur au champs profilepic
            document.getElementById("profilepic").value = dataurl;
        };
    }
    // on charge l'image pour de vrai, lorsque ce sera terminé le callback loadProfilePic sera appelé.
    reader.readAsDataURL(file);
}

window.fbAsyncInit =function(){
    FB.init({
        appId      :'592908420852975',
        status     :true,// vérifier le statut de connexion
        cookie     :true,// autoriser les cookies pour permettre au serveur (et le SDK PHP) d'accéder à la session
        xfbml      :true// analyser le XFBML (déprécié par Facebook, c.f., https://developers.facebook.com/blog/post/568/)
    });

    // Ici on s'abonne à l'évèement JavaScript auth.authResponseChange. Cet évènement est généré pour tout
    // changement dans l'authentification, comme la connexion, la déconnexion, ou le rafraîchissement de la session.
    // Donc lorsqu'un utilisateur déjà connecté tente se se connecter à nouveau, le cas correct ci-dessous sera géré
    FB.Event.subscribe('auth.authResponseChange',function(response){
        // Est-ce que l'utilisateur est connecté au moment où l'évènement est généré ?
        if(response.status ==='connected'){
            console.log("Y'a quelqu'un");
            // c.f. l'objet response passé en paramète du callback est un objet JSON décrit après ce code.
            testAPI();
        } else if (response.status ==='not_authorized'){
            console.log("Y'a quelqu'un, mais il n'est pas connecté à l'application");
            // Dans ce cas, la personne est loguée Facebook, mais pas à l'application.
            // Donc on appelle FB.login() pour afficher la boîte de dialogue de connexion à l'application.
            // On ferait pas comme ça pour une vrai application, pour deux raisons:
            // (1) Un popup créé automatiquement par JavaScript serait bloqué par la plupart des navigateurs
            // (2) c'est pas cool de sauter au cou de l'utilisateur dès le chargement de la page comme ça.
            FB.login();
        }else{
            console.log("l'utilisateur n'est pas connecté à Facebook");
            // Dans ce cas, la personne n'est pas connectée à Facebook. Donc on appelle la méthode login().
            // A ce moment, on ne sait pas si l'utilisateur s'est déjà connecté à l'application.
            // si ils ne se sont jamais connecté à l'application, ils verront la boîte de dialogue de connection
            // à l'application juste après s'être connecté à Facebook.
            FB.login();
        }
    });
};

// Charger le SDK de manière asynchrone (comme pour les boutons j'aime et partager)
(function(d){
    var js, id ='facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if(d.getElementById(id)){return;}
    js = d.createElement('script'); js.id = id; js.async =true;
    js.src ="//connect.facebook.net/fr_FR/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

// Ici on fait un requête très simple à l'API Open Graph lorsque l'utilisateur est connecté
function testAPI(){
    console.log('Bienvenue !  On récupère vos informations.... ');
    FB.api('/me',function(response){
        console.log('Bienvenue, '+ response.name +'.');
    });
}