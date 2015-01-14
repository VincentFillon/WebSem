<?php 
if(isset($_GET['id'])){
	include('config/connexionBDD.php');
	$sql = $dbh->query("SELECT d.name, d.drawingCommands, d.picture FROM drawings d WHERE d.id=".$_GET['id']);
    if ($sql->rowCount()<1) {
        header("Location: ../index.php?erreur=".urlencode("un problème est survenu"));
    }
    else {
        $sqlfetch = $sql->fetch();
        $name = $sqlfetch['name'];
        $drawingCommands = $sqlfetch['drawingCommands'];
        $picture = $sqlfetch['picture'];
    }
}
?>

<div class="row" id="sizeCanvas">
	<div class="col-sm-12">
		<canvas id="canvasPictionary" style="background-color:white;" > 
			Votre navigateur ne peut pas faire de dessins ! Faîte une mise à jour ou changer de navigateur.
		</canvas>
	</div>
</div>


<div class="row">
	<form name="tools" action="requetes/req_paint.php" method="post">  
	    <div class="form-group">
        	<label for="size" class="col-sm-1">Taille</label> 
        	<div class="col-sm-3">
	    		<input type="range" min="0" max="3" step="1" value="0" oninput="this.form.taille.value=this.value" class="form-control" id="size">
	    	</div>
	    	<div class="col-sm-1">
	    		<input type="number" id="taille" name="taille" placeholder="Taille" min="0" max="3" step="1" value="0" required oninput="this.form.size.value=this.value" readonly class="form-control">
			</div>
			<label for="color" class="col-sm-1">Couleur</label>
			<div class="col-sm-2"> 
	    		<input type="color" class="form-control" id="color" name="color" value="<?php if(isset($_SESSION['email'])) echo '#'.$_SESSION['couleur']; ?>" >
			</div>
			<div class="col-sm-2"> 
				<input id="restart" type="button" class="btn btn-danger col-sm-12" value="Recommencer" style="width:100%"/>  			
			</div>
			<label for="name" class="col-sm-1">Nom</label> 
        	<div class="col-sm-3">
	    		<input id="name" name="name" type="text" class="form-control" value="<?php if(isset($_GET['id'])) echo $name; ?>" required>
	    	</div>
			<div class="col-sm-2"> 
	    		<input id="validate" type="submit" class="btn btn-success col-sm-12" value="Valider" style="width:100%"/> 
			</div>
			
		</div>
	    <!-- ici, insérez un champs de type color avec id="color", et comme valeur l'attribut  de session couleur (à l'aide d'une commande php echo).
	    ) --> 

	    <input type="text" id="drawingCommands" name="drawingCommands" value="<?php if(isset($_GET['id'])) echo $drawingCommands; ?>"/>  
	    <!-- à quoi servent ces champs hidden ? -->  
	    <input type="text" id="picture" name="picture" value="<?php if(isset($_GET['id'])) echo $picture; ?>" />	    
	</form>  
</div>