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
};

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
};

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        connexionFB(response.authResponse.accessToken);
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '592908420852975',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function connexionFB (accessToken) {
    FB.api('/me', function(response) {
        document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';

        document.getElementById("authToken").value = accessToken;
        document.getElementById("email-fb").value = response.email;
        document.getElementById("nom-fb").value = response.last_name;
        document.getElementById("prenom-fb").value = response.first_name;
        document.getElementById("form_connexion-fb").submit();
    });
}

function logout() {
    FB.logout(function(response) {
        // Person is now logged out
    });
}

// Post a BASE64 Encoded PNG Image to facebook
function PostImageToFacebook(accessToken) {
    var dataUrl = document.getElementById("picture").value;
    var imgdata = dataUrl.match(/data:(image\/.+);base64,(.+)/);
    try{
        blob = dataURItoBlob(imgdata[2], imgdata[1]);
    }catch(e){ console.log(e); }
    var fd = new FormData();
    // set your FB accessToken
    fd.append("access_token", accessToken);
    fd.append("source", blob);
    fd.append("message", "My Photo Description");

    $.ajax({
        url:"https://graph.facebook.com/me/photos?access_token=" + accessToken,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        cache: false
    });
}

function dataURItoBlob(dataURI, mime) {
    var byteString = window.atob(dataURI);
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return blob = new Blob([ia],
        {
            type: mime
        });
}