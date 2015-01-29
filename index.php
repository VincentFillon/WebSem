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
        <meta name="author" content="Fillon Vincent-Passe Valentin- Pacheco Melanie">
        <!-- TODO   =>  Choisir un favicon et le placer dans le dossier img/
        <link rel="shortcut icon" href="img/favicon.ico"/>
        -->

        <!-- Local Bootstrap core CSS -->
        <link href="bootstrap-3.3.1/css/bootstrap.css" rel="stylesheet">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

        <!-- CDM Bootstrap core CSS
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
        -->

        <!-- Custom styles for this template -->
        <link href="style/global.css" rel="stylesheet">
    </head>

    <body>
        <div id="fb-root"></div>
        <header class="navbar" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <a id="titre" class="navbar-brand" href="index.php?page=index.tpl">Web Semantique</a>
                </div>
                <div class="collapse navbar-collapse">
                    <?php if ( isset($_SESSION['email']) ) { ?>
                        <form class="deconnexion" action="requetes/req_deconnexion.php" method="post" name="deconnexion">
                            <a href="index.php?page=Maps.tpl" type="button" class="btn btn-default navbar-btn">Maps Seisme</a>
                            <a href="index.php?page=pictionary.tpl" type="button" class="btn btn-default navbar-btn">Pictionary</a>
                            <button class="btn btn-default navbar-btn navbar-right" type="submit" onclick="logout()">Deconnexion</button>
                        </form>
                    <?php }
                    else { ?>
                        <a href="index.php?page=connexion.tpl" class="btn btn-default navbar-btn navbar-right" type="button">Connexion</a>
                        <a href="index.php?page=inscription.tpl" class="btn btn-default navbar-btn navbar-right" type="button">Inscription</a>
                    <?php } ?>
                </div>
            </div>
        </header>
        <section>
            <div class="container" id="Container">
                <!-- Contenu importé depuis les differentes pages : "nom_page".tpl -->
                <?php
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
            LPSIL IDSE - WebSemantique - Projet Pictionnary - Année 2014 / 2015 - FILLON Vincent & Pacheco Mélanie & Passé Valentin
            <a href="index.php?page=privacy_policy.tpl">Politique de confidentialité</a>
        </footer>
    </body>

    <!-- Bootstrap core JavaScript
        ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>

    <!-- Google Maps Javascript API v2 -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"></script>

    <!-- Local Bootstrap core JavaScript -->
    <script src="bootstrap-3.3.1/js/bootstrap.min.js"></script>

    <!-- CDN Bootstrap core JavaScript :
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    -->

    <!-- JavaScript du projet -->
    <script src="js/global.js"></script>
    <script src="js/pictionary.js"></script>
    <script src="js/maps.js"></script>

</html>