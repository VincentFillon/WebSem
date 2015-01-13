<?php
/**
 * Created by PhpStorm.
 * User: Vincent
 * Date: 12/01/2015
 * Time: 08:18
 */

//inclusion du fichier connexion base de données
include('../config/connexionBDD.php');

$email=stripslashes($_POST['email-fb']);
$nom = stripslashes($_POST['nom-fb']);
$prenom = stripslashes($_POST['prenom-fb']);

try {
    // En SQL: sélectionner tous les tuples de la table USERS tels que l'email est égal à $email.
    $sql = $dbh->query("SELECT * FROM users WHERE email='".$email."'");
    if ($sql->rowCount() < 1) {
        // Tenter d'inscrire l'utilisateur dans la base
        $sql = $dbh->prepare("INSERT INTO users (email, nom, prenom) "
            . "VALUES (:email, :nom, :prenom)");
        $sql->bindValue(":email", $email);
        $sql->bindValue(":nom", $nom);
        $sql->bindValue(":prenom", $prenom);
    }

    // on tente d'exécuter la requête SQL, si la méthode renvoie faux alors une erreur a été rencontrée.
    if (!$sql->execute()) {
        echo "PDO::errorInfo():<br/>";
        $err = $sql->errorInfo();
        print_r($err);
    } else {
        session_start();

        // ensuite on requête à nouveau la base pour l'utilisateur qui vient d'être inscrit, et
        $sql = $dbh->query("SELECT u.id, u.email, u.nom, u.prenom FROM USERS u WHERE u.email='".$email."'");
        if ($sql->rowCount() < 1) {
            header("Location: ../index.php?erreur=".urlencode("un problème est survenu"));
        }
        else {
            $sqlfetch = $sql->fetch();
            $_SESSION['id'] = $sqlfetch['id'];
            $_SESSION['email'] = $sqlfetch['email'];
            $_SESSION['nom'] = $sqlfetch['nom'];
            $_SESSION['prenom'] = $sqlfetch['prenom'];
        }

        header("Location: ../index.php?page=index.tpl");
    }

} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    $dbh = null;
    die();
}
?>