<?php 

include('config/connexionBDD.php');
if(isset($_GET['id'])){
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
	<div class="col-lg-7">
		<canvas id="canvasPictionary" style="background-color:white;" > 
			Votre navigateur ne peut pas faire de dessins ! Faîte une mise à jour ou changer de navigateur.
		</canvas>
	</div>

	<div class="col-lg-5">
		<form name="tools" action="requetes/req_paint.php" method="post">  
		    <div class="form-group">
		    	<!-- === TAILLE === -->
		    	<div class="row form-group">
			    	<label for="size" class="col-sm-2">Taille</label> 
			    	<div class="col-sm-5">
			    		<input type="range" min="0" max="3" step="1" value="0" oninput="this.form.taille.value=this.value" class="form-control" id="size">
			    	</div>
			    	<div class="col-sm-3">
			    		<input type="number" id="taille" name="taille" placeholder="Taille" min="0" max="3" step="1" value="0" required oninput="this.form.size.value=this.value" readonly class="form-control">
					</div>
				</div>
				<!-- === EPAISSEUR === -->
				<div class="row form-group">
			    	<label for="thick" class="col-sm-2">Epaisseur</label> 
			    	<div class="col-sm-5">
			    		<input type="range" min="1" max="20" step="1" value="1" oninput="this.form.epaisseur.value=this.value" class="form-control" id="thick">
			    	</div>
			    	<div class="col-sm-3">
			    		<input type="number" id="epaisseur" name="epaisseur" placeholder="Taille" min="1" max="20" step="1" value="1" required oninput="this.form.thick.value=this.value" readonly class="form-control">
					</div>
				</div>
				<!-- === COULEUR BORDURE === -->
				<div class="row form-group">
					<label for="color" class="col-sm-2">Couleur Bordure</label>
					<div class="col-sm-5">
			    		<input type="color" class="form-control" id="color" name="color" value="<?php if(isset($_SESSION['email'])) echo '#'.$_SESSION['couleur']; ?>" oninput="this.form.couleur.value=this.value" >
					</div>
					<div class="col-sm-3">
			    		<input type="text" id="couleur" name="couleur" placeholder="Couleur bordure" value="<?php if(isset($_SESSION['email'])) echo '#'.$_SESSION['couleur']; else echo '#'.'000000'?>" required readonly class="form-control">
					</div>
				</div>
				<!-- === COULEUR REMPLISSAGE === -->
				<div class="row form-group">
					<label for="fill" class="col-sm-2">Couleur Remplissage</label>
					<div class="col-sm-5"> 
			    		<input type="color" class="form-control" id="fill" name="fill" value="<?php if(isset($_SESSION['email'])) echo '#'.$_SESSION['couleur']; ?>" oninput="this.form.filling.value=this.value" >
					</div>
					<div class="col-sm-3">
			    		<input type="text" id="filling" name="filling" placeholder="Couleur remplissage" value="<?php if(isset($_SESSION['email'])) echo '#'.$_SESSION['couleur']; else echo '#'.'000000'?>" required readonly class="form-control">
					</div>
				</div>
				<!-- === TRANSPARENT === -->
				<div class="row form-group">
			    	<label for="transparent" class="col-sm-2">Transparent</label> 
			    	<div class="col-sm-5">
			    		<input type="range" min="0" max="1" step="0.1" value="0.8" oninput="this.form.transp.value=this.value" class="form-control" id="transparent">
			    	</div>
			    	<div class="col-sm-3">
			    		<input type="text" id="transp" name="transp" placeholder="Transparent" min="0" max="1" step="0.1" value="0.8" required oninput="this.form.transparent.value=this.value" readonly class="form-control">
					</div>
				</div>
				<!-- === NOM === -->
				<div class="row form-group">
					<label for="name" class="col-sm-2">Nom</label> 
					<div class="col-sm-8">
		    			<input id="name" name="name" type="text" class="form-control" value="<?php if(isset($_GET['id'])) echo $name; ?>" required>
		    		</div>
				</div>
				<!-- === BOUTONS === -->
				<div class="row form-group">
					<div class="col-sm-offset-2 col-sm-4"> 
						<input id="restart" type="button" class="btn btn-danger col-sm-12" value="Reset" style="width:100%"/>  			
					</div>
					<div class="col-sm-4"> 
		    			<input id="validate" type="submit" class="btn btn-success col-sm-12" value="Valider" style="width:100%"/> 
					</div>
				</div>
				<div class="row form-group">
					<div class="col-sm-4"> 
		    			<div class="row">
		    				<label for="previsualisation" class="col-sm-2">Prévisualisation</label> 
		    			</div>
		    			<div class="row">
		    				<select multiple class="form-control">
		    					<?php include('requetes/req_listPictionary.php'); ?>
		    				</select>
		    			</div>
		    			<div class="row">
		    				<input id="visualiser" type="button" class="btn btn-success col-sm-12" value="Visualiser" style="width:100%"/> 
		    			</div>
					</div>
					<div class="col-sm-6" style="margin-top:20px;"> 
		    			<img id="previsualisation" src='<?php if(isset($_GET['id'])) echo $picture; ?>' style="width:100%; background:white;"/> 
					</div>
				</div>

		    	
				
				
			</div>
		    <!-- ici, insérez un champs de type color avec id="color", et comme valeur l'attribut  de session couleur (à l'aide d'une commande php echo).
		    ) --> 

		    <input type="text" id="drawingCommands" name="drawingCommands" value='<?php if(isset($_GET['id'])) echo $drawingCommands; ?>'/>  
		    <!-- à quoi servent ces champs hidden ? -->  
		    <input type="text" id="picture" name="picture" value='<?php if(isset($_GET['id'])) echo $picture; ?>' />	    
		</form>  
	</div>


</div>
