<h1>Connectez-vous</h1>
<form class="connexion col-sm-9" action="requetes/req_connexion.php" method="post" name="connexion">

    <div class="spacer"></div>

    <div class="form-group">
        <label for="email" class="col-sm-4">Email :</label>
        <div class="input-group col-sm-6">
            <input type="email" class="form-control" id="email" name="email" placeholder="Saisir votre email" required autofocus >
        </div>
    </div>

    <div class="form-group">
        <label for="password" class="col-sm-4">Mot de passe :</label>
        <div class="input-group col-sm-6">
            <input type="password" class="form-control" id="password" name="password" placeholder="Saisir votre mot de passe" aria-required="required" pattern="[a-zA-Z0-9]{6,8}" title="Le mot de passe doit contenir de 6 à 8 caractères alphanumériques">
        </div>
    </div>

    <button type="submit" class="btn btn-default">Connexion</button>
</form>

<form class="connexion-fb col-sm-3" action="requetes/req_connexion-fb.php" method="post" name="connexion-fb">
    <input type="email" class="form-control " id="email-fb" name="email-fb" >
    <input type="text" class="form-control " id="nom-fb" name="nom-fb" >
    <input type="text" class="form-control " id="prenom-fb" name="prenom-fb" >
    <!--   Ci-dessous, le bouton de connexion classique c'est la meilleur méthode pour laisser l'utilisateur se connecter. Ce bouton actionne la fonction FB.login(). -->
    <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button>
    <div id="status"></div>
</form>