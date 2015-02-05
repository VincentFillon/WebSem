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

<div class="fb_connexion_div col-sm-3">
    <!--
      Below we include the Login Button social plugin. This button uses
      the JavaScript SDK to present a graphical Login button that triggers
      the FB.login() function when clicked.
    -->

    <fb:login-button scope="public_profile,email,publish_actions,publish_stream" onlogin="checkLoginState();">
    </fb:login-button>

    <div id="status">
    </div>
</div>

<form id="form_connexion-fb" class="hidden" action="requetes/req_connexion-fb.php" method="post" name="connexion-fb">
    <input type="authToken" class="form-control" id="authToken" name="authToken" >
    <input type="email" class="form-control" id="email-fb" name="email-fb" >
    <input type="text" class="form-control" id="nom-fb" name="nom-fb" >
    <input type="text" class="form-control" id="prenom-fb" name="prenom-fb" >
</form>