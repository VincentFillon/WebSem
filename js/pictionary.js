// ================================ Pictionary Canvas ================================
// les quatre tailles de pinceau possible.  
    var sizes=[8,20,44,90];  
    // la taille, l'epaisseur et la couleur du pinceau  
    var size = 8;
    var color;
    var fill;
    var transparent = 0.8;
    var thick = 1;
    // la dernière position du stylo  
    var x0, y0;  
    // le tableau de commandes de dessin à envoyer au serveur lors de la validation du dessin  
    var drawingCommands = [];  

    if(document.getElementById("drawingCommands") != ""){

    }




    var setColor = function() {  
        // on récupère la valeur du champs couleur  
        color = document.getElementById('color').value;  
        console.log("color:" + color);  
    }

    var setFill = function() {  
        // on récupère la valeur du champs couleur  
        fill = document.getElementById('fill').value;  
        console.log("fill:" + fill);  
    }

    var setTransparent = function() {  
        // on récupère la valeur du champs couleur  
        transparent = document.getElementById('transparent').value;  
        console.log("transparent:" + transparent);  
    }  

    var setSize = function() {  
        // ici, récupèrez la taille dans le tableau de tailles, en fonction de la valeur choisie dans le champs taille.  
        size = sizes[document.getElementById('size').value];
        console.log("size:" + size);  
    }

    var setThick = function() {  
        // on récupère la valeur du champs epaisseur  
        thick = document.getElementById('thick').value;
        console.log("thick:" + thick);  
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
        canvas.width = 650;  
        canvas.height= 400; 

        setSize();
        setThick();
        setColor();
        setFill();
        setTransparent();
        document.getElementById('size').onchange = setSize;
        document.getElementById('thick').onchange = setThick; 
        document.getElementById('color').onchange = setColor;
        document.getElementById('fill').onchange = setFill;
        document.getElementById('transparent').onchange = setTransparent; 

        var isDrawing = false;  

        var startDrawing = function(e) {  
            console.log("start");  
            // crér un nouvel objet qui représente une commande de type "start", avec la position, la couleur  
            var command = {};  
            command.command="start";  
            command = {"command":"start", "x": (e.x - document.getElementById('Container').offsetLeft - document.getElementById('canvasPictionary').offsetLeft), "y":(e.y - document.getElementById('Container').offsetTop), "size" : size, "thick" : thick ,"color" : { "border" : {"r" : hexToRgb(color).r, "g" : hexToRgb(color).g, "b" : hexToRgb(color).b, "a" : transparent}, "fill" : {"r" : hexToRgb(fill).r, "g" : hexToRgb(fill).g, "b" : hexToRgb(fill).b, "a" : transparent}}};  
            // Ce genre d'objet Javascript simple est nommé JSON. Pour apprendre ce qu'est le JSON, c.f. http://blog.xebia.fr/2008/05/29/introduction-a-json/  


            // on l'ajoute à la liste des commandes  
            drawingCommands.push(command);

            console.log("Taille : "+command.size+ " Epaisseur : "+command.thick+" Couleur : " + "rgba("+command.color.border.r+","+command.color.border.g+","+command.color.border.b+","+command.color.border.a+")" + " x : "+ command.x + " y : "+ command.y);            
            console.log("remplissage : " + "rgba("+command.color.fill.r+","+command.color.fill.g+","+command.color.fill.b+","+command.color.fill.a+")")

            context.beginPath();
            context.arc(command.x, command.y, command.size, 0, 2 * Math.PI); // Taille du cercle
            context.lineWidth=command.thick; // Epaisseur
            context.strokeStyle="rgba("+command.color.border.r+","+command.color.border.g+","+command.color.border.b+","+command.color.border.a+")"; // Couleur bordure
            context.fillStyle="rgba("+command.color.fill.r+","+command.color.fill.g+","+command.color.fill.b+","+command.color.fill.a+")"; // Couleur remplissage
            context.fill();
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
            drawingCommands = [];
            
            console.log(document.getElementById('drawingCommands').value);
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
