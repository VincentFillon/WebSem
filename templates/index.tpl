<script>  
  
    // les quatre tailles de pinceau possible.  
    var sizes=[8,20,44,90];  
    // la taille et la couleur du pinceau  
    var size, color;  
    // la dernière position du stylo  
    var x0, y0;  
    // le tableau de commandes de dessin à envoyer au serveur lors de la validation du dessin  
    var drawingCommands = [];  

    var setColor = function() {  
        // on récupère la valeur du champs couleur  
        color = document.getElementById('color').value;  
        console.log("color:" + color);  
    }  

    var setSize = function() {  
        // ici, récupèrez la taille dans le tableau de tailles, en fonction de la valeur choisie dans le champs taille.  
        console.log("size:" + size);  
    }  

    window.onload = function() {  
        var canvas = document.getElementById('myCanvas');  
        canvas.width = 400;  
        canvas.height= 400;  
        var context = canvas.getContext('2d');  

        setSize();  
        setColor();  
        document.getElementById('size').onchange = setSize;  
        document.getElementById('color').onchange = setColor;  

        var isDrawing = false;  

        var startDrawing = function(e) {  
            console.log("start");  
            // crér un nouvel objet qui représente une commande de type "start", avec la position, la couleur  
            var command = {};  
            command.command="start";  
            command.x=e.x;  
            ...  
            //c'est équivalent à:   
            command = {"command":"start", "x": e.x, ...};  

            // Ce genre d'objet Javascript simple est nommé JSON. Pour apprendre ce qu'est le JSON, c.f. http://blog.xebia.fr/2008/05/29/introduction-a-json/  

            // on l'ajoute à la liste des commandes  
            drawingCommands.push(command);  

            // ici, dessinez un cercle de la bonne couleur, de la bonne taille, et au bon endroit.   

            isDrawing = true;  
        }  

        var stopDrawing = function(e) {  
            console.log("stop");  
            isDrawing = false;  
        }  

        var draw = function(e) {  
            if(isDrawing) {  
                // ici, créer un nouvel objet qui représente une commande de type "draw", avec la position, et l'ajouter à la liste des commandes.  
                // ici, dessinez un cercle de la bonne couleur, de la bonne taille, et au bon endroit.   
            }  
        }  

        canvas.onmousedown = startDrawing;  
        canvas.onmouseout = stopDrawing;  
        canvas.onmouseup = stopDrawing;  
        canvas.onmousemove = draw;  

        document.getElementById('restart').onclick = function() {  
            console.log("clear");  
            // ici ajouter à la liste des commandes une nouvelle commande de type "clear"  
            // ici, effacer le context, grace à la méthode clearRect.  
        };  

        document.getElementById('validate').onclick = function() {  
            // la prochaine ligne transforme la liste de commandes en une chaîne de caractères, et l'ajoute en valeur au champs "drawingCommands" pour l'envoyer au serveur.  
            document.getElementById('drawingCommands').value = JSON.stringify(drawingCommands);  

            // ici, exportez le contenu du canvas dans un data url, et ajoutez le en valeur au champs "picture" pour l'envoyer au serveur.  
        };  
    };  
</script> 


Bienvenue sur l'application Pictionnary

<div style="background-color:white">
	<canvas id="canvasPictionary" width="500" height="400"> 
		Votre navigateur ne peux pas faire de dessins ! Faîte une mise à jour ou changer de navigateur.
	</canvas>
		<form name="tools" action="req_paint.php" method="post">  
	    <!-- ici, insérez un champs de type range avec id="size", pour choisir un entier entre 0 et 4) --> 
	    <input type="range" min="0" max="4" step="1" oninput="this.form.taille.value=this.value" class="form-control" id="size">
	    <input type="number" id="taille" name="taille" placeholder="Taille" min="0" max="4" step="1" required oninput="this.form.size.value=this.value" style="color:black">
	    <!-- ici, insérez un champs de type color avec id="color", et comme valeur l'attribut  de session couleur (à l'aide d'une commande php echo).
	    ) -->  
	    <input type="color" class="form-control" id="color" name="color" value="black" >
	  
	    <input id="restart" type="button" value="Recommencer"/>  
	    <input type="hidden" id="drawingCommands" name="drawingCommands"/>  
	    <!-- à quoi servent ces champs hidden ? -->  
	    <input type="hidden" id="picture" name="picture"/>  
	    <input id="validate" type="submit" value="Valider"/>  
	</form>  
</div>

 