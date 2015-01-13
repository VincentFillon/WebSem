<?php
/**
 * Created by PhpStorm.
 * User: Vincent
 * Date: 12/01/2015
 * Time: 08:18
 */

$email=stripslashes($_POST['email']);
$password=stripslashes($_POST['password']);

try {
    // Connect to server and select database.
    $dbh = new PDO('mysql:host=localhost;dbname=websemantique', 'test', 'test');

    // En SQL: sélectionner tous les tuples de la table USERS tels que l'email est égal à $email et tels que le password est égal à $password.
    $sql = $dbh->query("SELECT * FROM users WHERE email='".$email."' AND password='".$password."'");
    if ($sql->rowCount() < 1) {
        header("Location:../index.php?page=connexion.tpl");
        print "L'email ou le mot de passe est incorrect";
    }
    else {
        session_start();

        // ensuite on requête à nouveau la base pour l'utilisateur qui vient d'être inscrit, et
        $sql = $dbh->query("SELECT u.id, u.email, u.nom, u.prenom, u.couleur, u.profilepic FROM USERS u WHERE u.email='".$email."'");
        if ($sql->rowCount()<1) {
            header("Location: ../index.php?erreur=".urlencode("un problème est survenu"));
        }
        else {
            $sqlfetch = $sql->fetch();
            $_SESSION['id'] = $sqlfetch['id'];
            $_SESSION['email'] = $sqlfetch['email'];
            $_SESSION['nom'] = $sqlfetch['nom'];
            $_SESSION['prenom'] = $sqlfetch['prenom'];
            $_SESSION['couleur'] = $sqlfetch['couleur'];
            $_SESSION['profilepic'] = $sqlfetch['profilepic'];
        }

        header("Location: ../index.php?page=index.tpl");
    }

} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    $dbh = null;
    die();
}
?>