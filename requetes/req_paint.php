<?php
/**
 * Created by SublimeText2.
 * User: Valentin
 * Date: 14/01/2015
 * Time: 10:52
 */

session_start();
//inclusion du fichier connexion base de données
include('../config/connexionBDD.php');
// récupérer les éléments du formulaire
// et se protéger contre l'injection MySQL (plus de détails ici: http://us.php.net/mysql_real_escape_string)
$idUser=$_SESSION['id'];
$name=stripcslashes($_POST['name']);
$drawingCommands=stripcslashes($_POST['drawingCommands']);
$picture=stripcslashes($_POST['picture']);

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

        $sql = $dbh->query("SELECT d.id FROM drawings d WHERE d.drawingCommands='".$drawingCommands."' AND d.idUser='".$idUser."'");
        if ($sql->rowCount()<1) {
            header("Location: ../index.php?erreur=".urlencode("un problème est survenu"));
        }
        else {
            $sqlfetch = $sql->fetch();
            $id = $sqlfetch['id'];
            header("Location: ../index.php?page=pictionary.tpl&id=".$id);
        }
} 
catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    $dbh = null;
    die();
}



?>