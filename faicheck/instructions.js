
/*
 * (c)2017 David Ricardo Araújo Piñeiro
 * Esta obra está bajo una licencia de Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional.
 * http://creativecommons.org/licenses/by-sa/4.0/
 */


function showInstructions(){
    
    var selectedos=document.instructions.os.value;
    var javainstalled=document.instructions.javainstalled.value=="yes";
    var noideajavainstalled=document.instructions.javainstalled.value=="noidea";
    var where=document.instructions.where.value;
    
    var output="<h1>Instrucciones para instalar " + (!javainstalled ? "Java y " : "") + "la aplicación en " + (where == "usb" ? "un USB" : "tu ordenador") + " usando " + selectedos + "</h1><ol>";
    
    var pasodescargafaicheck=(noideajavainstalled ? "</ol>" : "") + "<li><b>Descarga</b> la última versión de <b>Faicheck</b> de la <a href=\"https://github.com/davovoid/faitic-checker/releases\">página de releases de GitHub</a> (El archivo tiene un nombre del tipo <i>Faicheck-vX.X.XX.jar</i>).</li>";
    
    if(noideajavainstalled){
        
        if(selectedos == "Windows") output+="<li>Para comprobar si está instalado Java, pulsa la tecla de Windows + R, escribe <span class=\"codigo\">cmd</span> y pulsa Enter.</li>";
        else output+="<li>Para comprobar si está instalado Java, ejecuta una Terminal de " + selectedos + ".</li>";
        
        output+="<li>Escribe <span class=\"codigo\">java -version</span> y pulsa Enter. Si sale la versión de Java significa que este ya está instalado. En caso de que no lo esté...</li><ol>";
        
    }
        
    
    if(selectedos=="Windows" || selectedos=="Mac OS X"){
        
        if(!javainstalled) output+="<li><b>Descarga</b> el instalador de <b>Java</b> que puedes encontrar en la <a href=\"https://www.java.com/es/download/\">página oficial de Oracle</a> e <b>instálalo</b> en tu ordenador.</li>";
        
        output+=pasodescargafaicheck;
        output+="<li>Ve a la carpeta donde guardaste el archivo descargado y colócalo en " + (where == "usb" ? "el USB de destino" : "la carpeta de tu ordenador que más te guste") + ".</li>";
        output+="<li>Doble click en el archivo que acabas de mover y espera a que el programa cargue.";
        
    } else if(selectedos=="Linux"){
        
        if(!javainstalled){
            output+="<li>Abra una <b>terminal</b> de comandos de Linux.</li>";
            output+="<li>Si usa <b>Ubuntu, Debian o derivados</b> ejecuta:<br /><span class=\"codigo\">sudo apt-get install default-jre</span><br />Si usas <b>Ret Hat, Fedora, CentOS</b> u otro sistema basado en paquetes <b>RPM</b> ejecuta como superusuario:<br /><span class=\"codigo\">yum install java</span><br /></li>";
        }
        
        output+=pasodescargafaicheck;
        output+="<li>Ve a la carpeta donde guardaste el archivo descargado y colócalo en " + (where == "usb" ? "el USB de destino." : "la carpeta de tu ordenador que más te guste") + ".</li>";
        output+="<li>Abre las propiedades del archivo, ve al apartado permisos y <b>proporciónale al archivo permiso de ejecución</b>.</li>";
        output+="<li>Doble click en el archivo que acabas de mover y espera a que el programa cargue.";
        
    }
    
    
    output+="<li>Si es la primera vez que abres el programa te saldrá una ventana de bienvenida preguntándote dónde guardar la configuración. ";
    
    if(where=="usb"){
     
        output+="En tu caso elige la <b>opción número 2 (Los ajustes se guardarán <u>junto a la aplicación</u>)</b> y pulsa <b>siguiente</b>.</li>";
        
    } else{
     
        output+="En tu caso elige la <b>opción número 1 (Los ajustes se guardarán <u>en este ordenador</u>)</b> y pulsa <b>siguiente</b>.</li>";
        
    }
    
    output+="<li>El menú de inicio de sesión aparecerá y ya podrás usar la aplicación con normalidad.</li></ol>";
    
    document.getElementById("generatedinstructions").innerHTML=(output);
    document.getElementById("generatedinstructions").style.display = "block";
    
    document.location.href="#generatedinstructions";
    
    
    
}
