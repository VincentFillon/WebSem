<?php
/**
 * Created by PhpStorm.
 * User: Valentin
 * Date: 14/01/2015
 * Time: 10:52
 */

session_start();
//inclusion du fichier connexion base de données
include('../config/connexionBDD.php');
echo "a";
// récupérer les éléments du formulaire
// et se protéger contre l'injection MySQL (plus de détails ici: http://us.php.net/mysql_real_escape_string)
$idUser=$_SESSION['id'];
$name=stripcslashes($_POST['name']);
$drawingCommands=stripcslashes($_POST['drawingCommands']);
$picture=stripcslashes($_POST['picture']);
echo "b";

try {
        // Tenter d'insérer le dessin dans la base
        $sql = $dbh->prepare("INSERT INTO drawings (name, idUser, drawingCommands, picture)" . "VALUES (:name, :idUser, :drawingCommands, :picture)");
        $sql->bindValue(":name", $name);
        $sql->bindValue(":idUser", $idUser);
        $sql->bindValue(":drawingCommands", $drawingCommands);
        $sql->bindValue(":picture", $picture);

        
        if (!$sql->execute()) {
            echo "PDO::errorInfo():<br/>";
            $err = $sql->errorInfo();
            print_r($err);
        }
        echo "c";
        header("Location: ../index.php?page=pictionary.tpl");
        echo "d";
} 
catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    $dbh = null;
    die();
}
?>