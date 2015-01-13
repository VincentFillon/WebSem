<div class="row" id="sizeCanvas">
	<div class="col-sm-12">
		<canvas id="canvasPictionary" style="background-color:white; text-align:center;" > 
			Votre navigateur ne peut pas faire de dessins ! Faîte une mise à jour ou changer de navigateur.
		</canvas>
	</div>
</div>


<div class="row">
	<form name="tools" action="req_paint.php" method="post">  
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
	    		<input type="color" class="form-control" id="color" name="color" value="<?php if(isset($_SESSION['email'])){ echo $_SESSION['couleur'];} else {echo 'black';} ?>" >
			</div>
			<div class="col-sm-2"> 
				<input id="restart" type="button" class="btn btn-danger col-sm-12" value="Recommencer" />  			
			</div>
			<div class="col-sm-2"> 
	    		<input id="validate" type="submit" class="btn btn-success col-sm-12" value="Valider" style="width:100%"/> 
			</div>
		</div>
	    <!-- ici, insérez un champs de type color avec id="color", et comme valeur l'attribut  de session couleur (à l'aide d'une commande php echo).
	    ) --> 

	    <input type="hidden" id="drawingCommands" name="drawingCommands"/>  
	    <!-- à quoi servent ces champs hidden ? -->  
	    <input type="hidden" id="picture" name="picture"/>
	</form>  
</div>