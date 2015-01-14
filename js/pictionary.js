// ================================ Pictionary Canvas ================================
// les quatre tailles de pinceau possible.  
    var sizes=[8,20,44,90];  
    // la taille et la couleur du pinceau  
    var size = 8;
    var color;  
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
        size = sizes[document.getElementById('size').value];
        console.log("size:" + size);  
    }  

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    window.onload = function() { 
        var canvas = document.getElementById('canvasPictionary'); 
        var context = canvas.getContext('2d');
        canvas.width = document.getElementById('sizeCanvas').offsetWidth;  
        canvas.height= 400; 

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
            command = {"command":"start", "x": (e.x - document.getElementById('Container').offsetLeft - document.getElementById('canvasPictionary').offsetLeft), "y":(e.y - document.getElementById('Container').offsetTop), "size" : size, "color" : {"r" : hexToRgb(color).r, "g" : hexToRgb(color).g, "b" : hexToRgb(color).b, "a" : 0.9}};  
            // Ce genre d'objet Javascript simple est nommé JSON. Pour apprendre ce qu'est le JSON, c.f. http://blog.xebia.fr/2008/05/29/introduction-a-json/  


            // on l'ajoute à la liste des commandes  
            drawingCommands.push(command);

            console.log("Taille : "+command.size+" Couleur : " + "rgba("+command.color.r+","+command.color.g+","+command.color.b+","+command.color.a+")" + " x : "+ command.x + " y : "+ command.y);            


            context.beginPath();
            context.lineWidth=1;
            context.strokeStyle="rgba("+command.color.r+","+command.color.g+","+command.color.b+","+command.color.a+")";
            context.arc(command.x, command.y, command.size, 0, 2 * Math.PI);
            context.stroke();
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
            context.clearRect ( 0 , 0 , canvas.width, canvas.height );
        };  

        document.getElementById('validate').onclick = function() {  
            // la prochaine ligne transforme la liste de commandes en une chaîne de caractères, et l'ajoute en valeur au champs "drawingCommands" pour l'envoyer au serveur.  
            document.getElementById('drawingCommands').value = JSON.stringify(drawingCommands);  
            console.log("drawingCommands : "+document.getElementById('drawingCommands').value);
            document.getElementById('picture').value = canvas.toDataURL();
            console.log("picture : "+canvas.toDataURL());
            // ici, exportez le contenu du canvas dans un data url, et ajoutez le en valeur au champs "picture" pour l'envoyer au serveur.  
        };  
    };  
