<?php
/**
 * Created by SublimeText2.
 * User: Valentin
 * Date: 29/01/2015
 * Time: 08:30
 */

session_start();
//inclusion du fichier connexion base de données
include('../config/connexionBDD.php');
// récupérer les éléments du formulaire
// et se protéger contre l'injection MySQL (plus de détails ici: http://us.php.net/mysql_real_escape_string)
$idUser=$_SESSION['id'];

try {
        $sql = $dbh->query("SELECT * FROM drawings WHERE idUser='".$idUser."'");
        if ($sql->rowCount()<1) {
            header("Location: ../index.php?erreur=".urlencode("un problème est survenu"));
        }
        else {
            for ($i = 0; $i < $sql->rowCount(); $i++){
                $sqlfetch = $sql->fetch();
                $id = $sqlfetch['id'];
                $name = $sqlfetch['name'];
                echo '<option value="'.$id.'">'.$name.'</option>';
            }
        }
} 
catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    $dbh = null;
    die();
}



?>