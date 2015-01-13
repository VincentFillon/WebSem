<?php
/**
 * Created by PhpStorm.
 * User: Vincent
 * Date: 12/01/2015
 * Time: 08:18
 */

// récupérer les éléments du formulaire
// et se protéger contre l'injection MySQL (plus de détails ici: http://us.php.net/mysql_real_escape_string)
$email=stripslashes($_POST['email']);
$password=stripslashes($_POST['password']);
$nom=stripslashes($_POST['nom']);
$prenom=stripslashes($_POST['prenom']);
$tel=stripslashes($_POST['tel']);
$website=stripslashes($_POST['website']);
$sexe=stripslashes($_POST['sexe']);
$birthdate=stripslashes($_POST['birthdate']);
$ville=stripslashes($_POST['ville']);
$taille=stripslashes($_POST['taille']);
$couleur=stripslashes($_POST['couleur']);
$profilepic=stripslashes($_POST['profilepic']);

try {
    // Connect to server and select database.
    $dbh = new PDO('mysql:host=localhost;dbname=websemantique', 'test', 'test');

    // Vérifier si un utilisateur avec cette adresse email existe dans la table.
    // En SQL: sélectionner tous les tuples de la table USERS tels que l'email est égal à $email.
    $sql = $dbh->query("SELECT * FROM users WHERE email='".$email."'");
    if ($sql->rowCount() > 0) {
        header("Location:../index.php?page=inscription.tpl");
        print "Cet utilisateur existe déjà !";
    }
    else {
        // Tenter d'inscrire l'utilisateur dans la base
        $sql = $dbh->prepare("INSERT INTO users (email, password, nom, prenom, tel, website, sexe, birthdate, ville, taille, couleur, profilepic) "
            . "VALUES (:email, :password, :nom, :prenom, :tel, :website, :sexe, :birthdate, :ville, :taille, :couleur, :profilepic)");
        $sql->bindValue(":email", $email);

        $sql->bindValue(":password", $password);

        if ($nom != '') { $sql->bindValue(":nom", $nom); }
        else { $sql->bindValue(":nom", NULL); }

        if ($prenom != '') { $sql->bindValue(":prenom", $prenom); }
        else { $sql->bindValue(":prenom", NULL); }

        if ($tel != '') { $sql->bindValue(":tel", $tel); }
        else { $sql->bindValue(":tel", NULL); }

        if ($website != '') { $sql->bindValue(":website", $website); }
        else { $sql->bindValue(":website", NULL); }

        if ($birthdate != '') { $sql->bindValue(":birthdate", $birthdate); }
        else { $sql->bindValue(":birthdate", NULL); }

        if ($ville != '') { $sql->bindValue(":ville", $ville); }
        else { $sql->bindValue(":ville", NULL); }

        if ($taille != '') { $sql->bindValue(":taille", $taille); }
        else { $sql->bindValue(":taille", NULL); }

        if ($profilepic != '') { $sql->bindValue(":profilepic", $profilepic); }
        else { $sql->bindValue(":profilepic", NULL); }

        if ($couleur != '') { $color = substr($couleur, 1); $sql->bindValue(":couleur", $color); }
        else { $sql->bindValue(":couleur", NULL); }

        if ($sexe != '') { $sql->bindValue(":sexe", $sexe); }
        else { $sql->bindValue(":sexe", NULL); }

        // on tente d'exécuter la requête SQL, si la méthode renvoie faux alors une erreur a été rencontrée.
        if (!$sql->execute()) {
            echo "PDO::errorInfo():<br/>";
            $err = $sql->errorInfo();
            print_r($err);
        } else {
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
        $dbh = null;
    }
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    $dbh = null;
    die();
}
?>