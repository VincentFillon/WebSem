<?php
/**
 * Created by PhpStorm.
 * User: Vincent
 * Date: 08/01/2015
 * Time: 10:20
 */
session_start();
$page = (isset($_GET['page'])) ? htmlentities($_GET['page']) : NULL;
?>

<!doctype html>
<html>
    <head>
        <title>Web Semantiques LPSIL IDSE</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="LPSIL IDSE - TP Web Sémantique">
        <meta name="author" content="Fillon Vincent">
        <!-- TODO   =>  Choisir un favicon et le placer dans le dossier img/
        <link rel="shortcut icon" href="img/favicon.ico"/>
        -->

        <!-- Local Bootstrap core CSS -->
        <link href="bootstrap-3.3.1/css/bootstrap.css" rel="stylesheet">

        <!-- CDM Bootstrap core CSS
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
        -->

        <!-- Custom styles for this template -->
        <link href="style/global.css" rel="stylesheet">
    </head>

    <body>
        <header class="navbar" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.php?page=index.tpl">Pictionnary</a>
                </div>
                <div class="collapse navbar-collapse">
                    <?php if ( isset($_SESSION['email']) ) { ?>
                    <form class="deconnexion" action="requetes/req_deconnexion.php" method="post" name="deconnexion">
                        <button href="index.php?page=deconnexion.tpl" class="btn btn-default navbar-btn navbar-right" type="submit">Deconnexion</button>
                    </form>
                    <?php }
                    else { ?>
                    <a href="index.php?page=connexion.tpl" class="btn btn-default navbar-btn navbar-right" type="button">Connexion</a>
                    <a href="index.php?page=inscription.tpl" class="btn btn-default navbar-btn navbar-right" type="button">Inscription</a>
                    <?php } ?>
                    <div id="fb-root"></div>
                    <!--   Ci-dessous, le bouton de connexion classique c'est la meilleur méthode pour laisser l'utilisateur se connecter. Ce bouton actionne la fonction FB.login(). -->
                    <div class="navbar-btn navbar-right fb-login-button" data-max-rows="1" data-show-faces="true"></div>
                </div>
            </div>
        </header>
        <section>
            <div class="container">

                <!-- Contenu importé depuis les differentes pages : "nom_page".tpl -->
                <?php

                if ( isset($_SESSION['prenom'])) {
                    echo 'Bonjour '.$_SESSION['prenom'].', ';
                }

                if ( isset($page) ) {
                    include('templates/' . $page);
                }
                else {
                    include('templates/index.tpl');
                }
                ?>
            </div>
        </section>
        <footer>
            LPSIL IDSE - WebSemantique - Projet Pictionnary - Année 2014 / 2015 - FILLON Vincent
        </footer>
    </body>

    <!-- Bootstrap core JavaScript
        ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>

    <!-- Local Bootstrap core JavaScript -->
    <script src="bootstrap-3.3.1/js/bootstrap.min.js"></script>

    <!-- CDN Bootstrap core JavaScript :
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    -->

    <!-- JavaScript du projet -->
    <script src="js/global.js"></script>

</html>