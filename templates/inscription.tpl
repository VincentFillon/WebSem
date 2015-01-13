<h1>Inscrivez-vous</h1>
<form class="inscription" action="requetes/req_inscription.php" method="post" name="inscription">

    <span class="required_notification">Les champs obligatoires sont indiqués par *</span>

    <div class="spacer"></div>

    <div class="form-group">
        <label for="email" class="col-sm-4">Email :</label>
        <div class="input-group col-sm-6">
            <input type="email" class="form-control" id="email" name="email" placeholder="Saisir email sous la forme : email@example.com" required autofocus >
            <span class="input-group-addon">*</span>
        </div>
    </div>

    <div class="form-group">
        <label for="password" class="col-sm-4">Mot de passe :</label>
        <div class="input-group col-sm-6">
            <input type="password" class="form-control" id="password" name="password" placeholder="Saisir mot de passe" aria-required="required" pattern="[a-zA-Z0-9]{6,8}" title="Le mot de passe doit contenir de 6 à 8 caractères alphanumériques">
            <span class="input-group-addon">*</span>
        </div>
        <label for="password-confirm" class="col-sm-4">Confirmation de mot de passe :</label>
        <div class="input-group col-sm-6">
            <input type="password" class="form-control" id="password-confirm" placeholder="Confirmer le mot de passe" aria-required="required" onkeyup="validateMdp2()" >
            <span class="input-group-addon">*</span>
        </div>
    </div>

    <div class="form-group">
        <label for="nom" class="col-sm-4">Nom :</label>
        <div class="input-group col-sm-6">
            <input type="text" class="form-control" id="nom" name="nom" placeholder="Saisir votre nom" >
        </div>
    </div>

    <div class="form-group">
        <label for="prenom" class="col-sm-4">Prénom :</label>
        <div class="input-group col-sm-6">
            <input type="text" class="form-control" id="prenom" name="prenom" placeholder="Saisir votre prénom" required >
            <span class="input-group-addon">*</span>
        </div>
    </div>

    <div class="form-group">
        <label for="tel" class="col-sm-4">Téléphone :</label>
        <div class="input-group col-sm-6">
            <input type="tel" class="form-control" id="tel" name="tel" placeholder="Saisir votre numéro de téléphone" >
        </div>
    </div>

    <div class="form-group">
        <label for="site-web" class="col-sm-4">Site Web :</label>
        <div class="input-group col-sm-4">
            <input type="url" class="form-control" id="site-web" name="website" placeholder="Saisir l'url de votre site web" >
        </div>
    </div>

    <div class="form-group">
        <label for="sexe" class="col-sm-4">Sexe :</label>
        <div class="input-group col-sm-6">
            <div class="col-sm-6">
                <input type="radio" name="sexe" value="H">  M.
            </div>
            <div class="col-sm-6">
                <input type="radio" name="sexe" value="F">  Mme.
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="birthdate" class="col-sm-4">Date de naissance :</label>
        <div class="input-group col-sm-6">
            <input type="date" class="form-control" id="birthdate" name="birthdate" placeholder="Choisir votre date de naissance" required oninput="computeAge()">
            <span class="input-group-addon">*</span>
        </div>
    </div>

    <div class="form-group">
        <label for="age" class="col-sm-4">Age :</label>
        <div class="input-group col-sm-6">
            <input type="text" class="form-control" id="age" disabled>
            <span class="label label-danger" id="alert-age" style="display: none">Vous devez avoir plus de 13ans pour vous inscrire</span>
        </div>
    </div>

    <div class="form-group">
        <label for="ville" class="col-sm-4">Ville :</label>
        <div class="input-group col-sm-6">
            <input type="text" class="form-control" id="ville" name="ville" placeholder="Saisir votre ville" >
        </div>
    </div>

    <div class="form-group">
        <label for="taille" class="col-sm-4">taille :</label>
        <div class="input-group col-sm-6">
            <div class="col-sm-6">
                <input type="range" min="0" max="2.50" step="0.01" oninput="this.form.taille.value=this.value" class="form-control" id="tailleRange">
            </div>
            <div class="col-sm-6">
                <input type="number" id="taille" name="taille" placeholder="Taille" min="0" max="2.50" step="0.01" required oninput="this.form.tailleRange.value=this.value"> mètre
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="couleur" class="col-sm-4">Couleur préférée :</label>
        <div class="input-group col-sm-6">
            <input type="color" class="form-control" id="couleur" name="couleur" value="black" >
        </div>
    </div>

    <div class="form-group">
        <label for="profilepic" class="col-sm-4">Photo de profil:</label>
        <div class="input-group col-sm-6">
            <div class="col-sm-6">
                <input type="file" id="profilepic" name="profilepic" onchange="loadProfilePic()" class="form-control" />
            </div>
            <div class="col-sm-6">
                <canvas id="preview" width="0" height="0"></canvas>
            </div>
        </div>

    </div>

    <button type="submit" class="btn btn-default">Inscription</button>
</form>