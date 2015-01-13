<h1>Connectez-vous</h1>
<form class="connexion" action="requetes/req_connexion.php" method="post" name="connexion">

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