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
};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
        appId      : '592908420852975',
        cookie     : true,  // enable cookies to allow the server to access the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

function logout() {
    FB.logout();
}

 // This function is called when someone finishes with the Login
 // Button.
 function checkLoginState() {
     FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
     });
 }

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        FB.login(function (response) {
            if (response.authResponse) {
                document.getElementById("authToken").value = response.authResponse.accessToken;
            }
        }, {
            scope: 'public_profile, email, publish_actions, publish_stream'
        });
        connexionFB();
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

function connexionFB () {
    FB.api('/me', function(response) {
        document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';

        var name = response.name.split(" ");

        document.getElementById("email-fb").value = response.email;
        document.getElementById("nom-fb").value = name[1];
        document.getElementById("prenom-fb").value = name[0];

        document.forms["connexion-fb"].submit();
    });
}

// Post a BASE64 Encoded PNG Image to facebook
function PostImageToFacebook(authToken) {
    var imageData = document.getElementById("picture").value;
    try {
        blob = dataURItoBlob(imageData);
    } catch (e) {
        console.log(e);
    }
    var fd = new FormData();
    fd.append("access_token", authToken);
    fd.append("source", blob);
    fd.append("message", document.getElementById("share").value);
    try {
        $.ajax({
            url: "https://graph.facebook.com/me/photos?access_token=" + authToken,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            cache: false,
            success: function (data) {
                console.log("success " + data);
            },
            error: function (shr, status, data) {
                console.log("error " + data + " Status " + shr.status);
            },
            complete: function () {
                console.log("Posted to facebook");
            }
        });

    } catch (e) {
        console.log(e);
    }
}

// Convert a data URI to blob
function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
        type: 'image/png'
    });
}

