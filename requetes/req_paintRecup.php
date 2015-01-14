<?php
function getDrawingCommands($id)
{
    
	$sql = $dbh->query("SELECT d.drawingCommands FROM drawings d WHERE d.id=".$id);
    if ($sql->rowCount()<1) {
        header("Location: ../index.php?erreur=".urlencode("un problème est survenu"));
    }
    else {
        $sqlfetch = $sql->fetch();
        $drawingCommands = $sqlfetch['drawingCommands'];
        return $drawingCommands;
    }
}
function getPicture($id)
{
	$sql = $dbh->query("SELECT d.picture FROM drawings d WHERE d.id=".$id);
    if ($sql->rowCount()<1) {
        header("Location: ../index.php?erreur=".urlencode("un problème est survenu"));
    }
    else {
        $sqlfetch = $sql->fetch();
        $picture = $sqlfetch['picture'];
        return $picture;
    }
}
?>