/* console.log("***********Elementos del documento************")
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);//hojas de estilos enlazadas al documnto
console.log(document.scripts);//hojas de js enlazadas al documnto

setTimeout(()=>{
    console.log(document.getSelection().toString())
},3000);
 */



//----------------SELECTORES EN JAVASCRIPT--------------------------
console.log("---------Selectores en js ----------")
/*Traer los nodos de tipo elemento son las etiquetas html*/ 
console.log(document.getElementsByTagName("li")); //trae todos lo li 
console.log(document.getElementsByClassName("card"));  //trae todos lo elementos que tengan la clase ej: card
console.log(document.getElementsByName("nombre")); //trae todos los elementos que tengan en el name ej: nombre 
console.log(document.getElementById("name")); //trae todos los elementos que tengan en el id ej: name

/*getElementsByTagName, getElementsByClassName, getElementsByName han sido reemplazados por dos metodos
que han sido muy populares 
*/

console.log(document.querySelector("#que-es")); /* recibe como parametro un selector valido de css (una clase, un id, 
    una etiqueta html que este dentro de cierta clase o cierto id) hay que especificar si es clase o id por medio del 
    . o el #
    
    a nivel de rendimiento el metodo querySelector es mas lento que el metodo getElementById 
    
    querySelector solo va a traer el primer selector de tipo que se le haya especificado que haya encontrado en el html*/

console.log(document.querySelector("a"));

/*si se quisiera traer todos los selectores de ese tipo se puede hacer con querySelectorAll*/
console.log(document.querySelectorAll("a"));

console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach(element => {
    console.log(element);
});

console.log(document.querySelectorAll(".card"));

console.log(document.querySelectorAll(".card")[2]); //aqui podemos acceder a una card por su posicion

console.log(document.querySelectorAll("#name li")); //aqui podemos acceder a los elementos dentro de una clase o un id especificado
console.log(document.querySelector("#name li")); //solo trae la primera encontrada




//--------------------INTERACTUAR CON ATRIBUTOS DE HTML
console.log("--------Interactuar con atributos de html-------------");
//todos los tag, name, href, src , charset ect. son atributos que tienen la etiquetas html



//hay dos maneras de mandar a llamar los atributos y estblecerles valores

//OBTENER ATRIBUTO
//una es la notacion del punto 
console.log(document.documentElement.lang);

//esta es mejor por a veces la connotacion del punto da un resultado no siempre viable
console.log(document.documentElement.getAttribute("lang"));

//Ejemplo
console.log(document.querySelector(".link-dom").href); //resultado http://127.0.0.1:5500/JS/DOM.html
console.log(document.querySelector(".link-dom").getAttribute("href")); //resultado  DOM.html

//ESTABLECER VALORES
document.documentElement.lang = "es";
document.documentElement.setAttribute("lang", "es-CO"); //establecemos el atributo y luego el valor del atributo

//GUARDAR EN VARIABLES ELEMENTOS DEL DOM 
//si se en variables que en el nombre anteponen el signo $, probablemente hace referencia a que esa variable guarda un elemento de DOM

let $LinkDOM = document.querySelector(".link-dom");

$LinkDOM.setAttribute("target", "_blank");
//para evitar kacjeos al usar _blank, se agrega otro atributo llamado rel: noopener 
$LinkDOM.setAttribute("rel", "noopener");

//
console.log($LinkDOM.hasAttribute("rel"));

$LinkDOM.removeAttribute("rel");

console.log($LinkDOM.hasAttribute("rel"));


//DATA-ATTRIBUTES
//HTML 5 nos permite crear nuestro propios data-atributte, para esto los atributos deben emepezar con data- ej: data-description

console.log($LinkDOM.getAttribute("data-description"));

//tambien se pueden obtener asi:
console.log($LinkDOM.dataset);
console.log($LinkDOM.dataset.description);
console.log($LinkDOM.dataset.id);

$LinkDOM.setAttribute("data-description", "DOM");
console.log($LinkDOM.dataset.description);
$LinkDOM.setAttribute("data-id", "13");
console.log($LinkDOM.dataset.id);

$LinkDOM.dataset.description = "Nueva descripcion";
console.log($LinkDOM.dataset.description);




/*------------------------- Estilos y Variables CSS --------------------------*/

let $LinkDOM2 = document.querySelector(".link-dom");
console.log($LinkDOM2.style);

console.log(window.getComputedStyle($LinkDOM2));
/* Importante tener en cuenta que con la propiedad style del elemento no podremos acceder a propiedades declaradas en una hoja de estilos externa al documento HTML, solamente podremos acceder a los estilos declarados dentro del atributo style del elemento, si queremos consultar propiedades establecidas desde la hoja de estilos externa debemos usar getComputedStyle */

console.log(getComputedStyle($LinkDOM2).getPropertyValue("color"));

//establecer valores 
$LinkDOM2.style.setProperty("text-decoration", "none");
$LinkDOM2.style.setProperty("display", "block");
$LinkDOM2.style.width = "50%";
$LinkDOM2.style.textAlign = "center";
$LinkDOM2.style.marginLeft= "auto";
$LinkDOM2.style.marginRight= "auto";
$LinkDOM2.style.padding = "1rem";
$LinkDOM2.style.borderRadius = ".5rem";

console.log($LinkDOM2.style);
console.log(window.getComputedStyle($LinkDOM2));




/*--------------- VARIABLES CSS -----------------*/
const $html = document.documentElement,
      $body = document.body;


let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

    console.log(varDarkColor, varYellowColor);


//primera manera de hacerlo 
/*  $body.style.backgroundColor = varDarkColor;
    $body.style.color = varYellowColor;

    $html.style.setProperty("--dark-color", "pink");
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    $body.style.setProperty("background-color", varDarkColor); 
*/


//OTRA MANERA DE HACERLO - mas rapida y con las variables css
  
    $body.style.setProperty("background-color", "var(--dark-color)");
    $body.style.setProperty("color", "var(--yellow-color)"); 

    //$html.style.setProperty("--dark-color", "pink");




/* ----------------Clases CSS--------------- */

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);

console.log($card.classList.contains("rotate-45")); 

//añadir clase a un elemento
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); 

//eliminar una clase
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45")); 



//-----Toogle 
/* Alterne entre agregar y eliminar un nombre de clase de un elemento con JavaScript. */
//-----EJEMPLO
const $toogle = document.querySelector(".toggle"); 
 function myFunction(){
    $toogle.classList.toggle("toogle");
 }

const $div = document.querySelector(".dark");
 function myFunction2(){
    $div.classList.toggle("darkmode");
 }

$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80", "sepia");





/* ----------------------Texto y HTML------------------------- */
const $whatisDOM = document.getElementById("que-es");
let text = `
<p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.
</p>
<p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>`;

//no es parte del estandar - solo lo usa internet explorer, pero funciona en cualquier navegador 

/* $whatisDOM.innerHTML = text; */

//esta si forma parte del estandar 
$whatisDOM.textContent = text;

//reemplzar lo que tenga como contenido ese nodo y va a insertar contenido html. 
$whatisDOM.innerHTML = text;

//Cuando usar textContent o innerHTML
/* cuando se necesite insertar solo texto se usa textContent y cuando se necesite insertar solo codigo HTML se usa innerHTML  */

//outerHTML reemplaza el elemento del DOM por el contenido designado 
//EJ: quita el parrafo con id: que-es y lo reemplaza por los tres parrafos de la variable text 
$whatisDOM.outerHTML = text; 




//------------------------DOM Traversing: Recorriendo el DOM--------------------


$cards= document.querySelector(".cards");
 console.log($cards);

 //hacer referencia a sus hijos 
 console.log($cards.children);

 //Acceder a un hijo en especifico
 console.log($cards.children[2]);

 //acceder al padre del elemento 
 console.log($cards.parentElement);

 //obtener el primer elemento hijo 
 console.log($cards.firstElementChild);

  //obtener el ultimo elemento hijo 
  console.log($cards.lastElementChild);

  //obtener el hermano anterior
  console.log($cards.previousElementSibling);

  //obtener el hermano posterioir
  console.log($cards.nextElementSibling);

  //buscara el padre mas cercano del tipo de selector que le indiquemos ejemplo si ponemos div, buscara el padre de tipo div mas cercano
  console.log($cards.closest("div"));

  console.log($cards.children[3].closest("section"));




  //----------------------------Creando Elementos y Fragmentos--------------------------


//crear elemento del DOM

const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      //nodo de texto
      $figcaptionText = document.createTextNode("Animals"),
      //capturar el elemento donde se insertara la tarjeta
      $cardsPadre = document.querySelector(".cards");


      //al padre agregarle un hijo 
      $img.setAttribute("src", "https://placeimg.com/200/200/animals");
      $img.setAttribute("alt", "Animals");
      $figcaption.appendChild($figcaptionText);
      $figure.appendChild($img);
      $figure.appendChild($figcaption);
      $cardsPadre.appendChild($figure);
      $figure.classList.add("card");


      // otra forma de agregar un elemento hijo (no recomendada porque no esta creando un NODO html)
      const $figure2 = document.createElement("figure");
        $figure2.innerHTML = `
        <img src="https://placeimg.com/200/200/people" alt="People">
        <figcaption>People</figcaption>
        `;
        $figure2.classList.add("card");
        $cardsPadre.appendChild($figure2);


        //ejemplo 

        const estaciones = ["primavera", "otoño", "invierno", "verano"];
        const $ul = document.createElement("ul");

       document.write("<h3>Estaciones del año</h3>");
       document.body.appendChild($ul);
       
       estaciones.forEach(el=> {
        const $li = document.createElement("li");
        $li.textContent=el;
        $ul.appendChild($li);
       });


       // otra forma
        const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
        $ul2 = document.createElement("ul");

        document.write("<h3>Continentes del Mundo</h3>");
        document.body.appendChild($ul2);
        $ul2.innerHTML = "";
        continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));
    

        //Crear un fragmento dinamico para que la insercion pegue a ese fragmento y no a todo el DOM
        //forma correcta de agregar un elemento dinamico 
        //manera mas optima para no perdirle tanta demanda de recursos ak navegador 
        //USAR ESTA 

        const meses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Dicimebre"
        ];

        $ul3 = document.createElement("ul"),
        $fragment = document.createDocumentFragment();

        meses.forEach(el => {
            const $li = document.createElement("li");
            $li.textContent = el;
            $fragment.appendChild($li);
        });

        document.write("<h3>Meses del año</h3>");
        $ul3.appendChild($fragment);

        document.body.appendChild($ul3);



    //-----------------------------TEMPLATES HTML---------------------------------//

    /* las etiquetas template no se renderizan en el DOM porque el objetivo es para ser un modelo a seguir, y desde este empezar a generar estructuras del DOM dinamicamente*/

    const $cards4 = document.querySelector(".cards"),
    $template2 = document.getElementById("template-card").content,
    $fragment2 = document.createDocumentFragment(),
    $cardContent = [
        {
            tittle: "Tecnologia",
            img:"https://placeimg.com/200/200/tech"
        },
        {
            tittle: "Animales",
            img:"https://placeimg.com/200/200/animals"
        },
        {
            tittle: "Personas",
            img:"https://placeimg.com/200/200/people"
        },
        {
            tittle: "Arquitectura",
            img:"https://placeimg.com/200/200/arch"
        },
        {
            tittle: "Naturaleza",
            img:"https://placeimg.com/200/200/nature"
        }
    ];

    $cardContent.forEach(el =>{
        $template2.querySelector("img").setAttribute("src", el.img);
        $template2.querySelector("img").setAttribute("alt", el.tittle);
        $template2.querySelector("figcaption").textContent = el.tittle;

        //clonar estrucutra del nodo (template)
        let $clone = document.importNode($template2, true);
        $fragment2.appendChild($clone); 
    }); 

    $cards4.appendChild($fragment2);




    /* ----------------------Modificando Elementos (Old Style)-------------------------- */
    //metodos antiguos 

    const $cardsOld = document.querySelector(".cards")
    $newCard = document.createElement("figure"),
    $clonecards = $cardsOld.cloneNode(true);

    $newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
    `;

    $newCard.classList.add("card");


    //reemplazar un nodo 
    $cardsOld.replaceChild($newCard, $cardsOld.children[2]);

    //Ponerlo al principio o anterioir a un nodo 
    $cardsOld.insertBefore($newCard, $cardsOld.firstElementChild);

    //Metodo para eliminar 
    $cardsOld.removeChild($cardsOld.lastElementChild);

    document.body.appendChild($clonecards);



    /* ---------------------Modificando Elementos (Cool Style)------------------------ */

    
    const $cardsOld2 = document.querySelector(".cards")
        $newCard2 = document.createElement("figure"),
        $clonecards2 = $cardsOld2.cloneNode(true);

        $newCard2.innerHTML = `
        <img src="https://placeimg.com/200/200/any" alt="Any">

        <figcaption>Any</figcaption>
        `;

        $newCard2.classList.add("card");

        /* 
        .insertAdjacent...
        .insertAdjacentElement(position,el)
        .insertAdjacentHTML(position,html)
        .insertAdjacentText(position,text) 
        */

        //posiciones
        /* beforebegin = (hermano anterior)
           afterbegin = (primer hijo)
           beforeend = (ultimo hijo)
           afterend = (hermano siguiente) 
        */

        //insertar como hermano de un nodo 

        //$cardsOld2.insertAdjacentElement("beforebegin", $newCard);
        //$cardsOld2.insertAdjacentElement("afterbegin", $newCard);
        //$cardsOld2.insertAdjacentElement("beforeend", $newCard);
        //$cardsOld2.insertAdjacentElement("afterend", $newCard);

    
        const $cardsOld3 = document.querySelector(".cards"),
        $newCard3 = document.createElement("figure");
        
        let $contentCard = `
        <img src="https://placeimg.com/200/200/any" alt="Any">
        <figcaption> </figcaption>
        `;

        $newCard3.classList.add("card");

        $newCard3.insertAdjacentHTML("beforeend", $contentCard);
        $newCard3.querySelector("figcaption").insertAdjacentText("beforeend", "Any2");
        $cardsOld3.insertAdjacentElement("afterbegin", $newCard3);


        //probar quitadando el asjacentElement
        //$cardsOld3.prepend($newCard3); //primer hijo 
        //$cardsOld3.before($newCard3); //hermano anterior
        //$cardsOld3.append($newCard3); //ultimo hijo
        //$cardsOld3.after($newCard3); //hermano posterior




        /* ---------------------Manejadores de Eventos---------------------- */

        /**
        * 📝 Los Eventos

        👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan 
        en cierto momento o cuando se cumplan algunas condiciones.

        👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
        
        👉 Hay 3 maneras de definir los Eventos en JS : */

        //1️⃣ COMO ATRIBUTO DEL HTML
    
        //👀 Muy importante: 
        /*
        👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
        
        👉PARA QUE UN EVENTO FUNCIONE A MANERA DE ATRIBUTO SE DEBE INVOCAR DE MANERA SEMANTICA

        //NO ES LA FORMA MAS RECOMEDADA
        */ 

        function holaMundo(event){
            alert("Hola Mundo");
            /* Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q 
             es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event' */
             console.log(event);
        }

        //👉 type.- es el tipo de evento q se desencadeno
        //👉 target.- es el elemento que origino el evento


          //1️⃣ COMO MANEJADOR SEMANTICO 
          //👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo


          const $eventoSemantico = document.getElementById("evento-semantico");
          //cuando se define un evento como semnatico a la hora de llamar la funcion se llama sin parentesis 
          $eventoSemantico.onclick = holaMundo; //debe ir sin parentesis o se cargara el evento automaticamente cuando se recargue la pagina 

          $eventoSemantico.onclick = function (e){
            alert("Hola esto es un manejador de eventos semantico");
            console.log(e);
          }

          //una vez definido el evento semantico, solamente podra ejecutar una sola funcion (por cada evento solo se podra asignar una funcion)
          //toda funcion que se convierte en un manejador de eventos no puede recibir parametros, el unico parametro que recibe es el evento en si 


          const $eventoMultiple = document.getElementById("evento-multiple");

          $eventoMultiple.addEventListener("click", holaMundo);//recibe, el nombre del evento y la funcion que se va a ejecutar 

          //con arrow function 
          $eventoMultiple.addEventListener("click", (e)=>{
            alert("Hola Mundo 2"); 
            console.log(e);
            console.log(e.type);
            console.log(e.target);
            console.log(event);
        });//recibe, el nombre del evento y la funcion que se va a ejecutar 




        /* --------------------Eventos con Parámetros y Remover Eventos--------------------- */

        //recuerda esra es una funcion declarada 
        function saludar(nombre = "Desconocid@"){
            alert(`Hola ${nombre}`);

        }

        $eventoMultiple.addEventListener("click", ()=>{
            saludar("Luisa"); //como la arrow fuction es la funcion manejadora la funcion dentro de esta si debe llevar parentesis 
        });


        //para remover un evento solo se podra hacer con manejadores multiples 
        //para remover un evento la funcion removeEventListener va a pedir el evento que se quiere remover y el nombre de la funcion manejadora asociada al evento 
        $removerEventoMultiple = document.getElementById("evento-remover");

        //recuerda esta es una funcion expresada
        const removerEvento = (e)=>{
            alert(`removiendo el evento de tipo ${e.type}`);
            $removerEventoMultiple.removeEventListener("dblclick", removerEvento);
            $removerEventoMultiple.disabled = true;
        }

        $removerEventoMultiple.addEventListener("dblclick", removerEvento);



        /* --------------------Flujo de Eventos (Burbuja y Captura)------------------ */

        /* Una vez que el evento se origina tiene una propagacion a lo largo del arbol del DOM. Por defecto esa propagacion se va dando desde el elemento mas 
        interno hacia el elemento mas externo, que en este caso es el document, y esa fase se llama 💧FASE DE BURBUJA. */


        const $divsEventos = document.querySelectorAll(".eventos-flujo div");

        console.log($divsEventos);

        function flujoEventos(e) {
            console.log(`Hola te saluda ${this.className} el click lo origino ${e.target.className}`);
        }


        $divsEventos.forEach(div=>{
            //fase de burbuja
            //div.addEventListener("click", flujoEventos);
            //fase de captura
            //div.addEventListener("click", flujoEventos, true);
            //ejecutar la funcion solo una vez, sin importar cual objeto origino el evento 
            /* div.addEventListener("click", flujoEventos, {
                capture:false,
                once: true 
            }); */
        });

        /* Contiene un tercer parametro predefinido en false: quiere decir que estamos en fase de burbuja, el flujo de los eventos se propaga del mas interno al mas externo
        pero si queremos la fase de captura: del elemento mas externo al mas interno   */




        /* ------------------stopPropagation & preventDefault----------------- */

        //detener la propagacion de un evento 

        const $divsEventos2 = document.querySelectorAll(".eventos-flujo div");

        /* console.log($divsEventos2);

        function flujoEventos2(e) {
            console.log(`Hola te saluda ${this.className} el click lo origino ${e.target.className}`);
            e.stopPropagation();
        }


        $divsEventos2.forEach(div=>{
            //fase de burbuja
            div.addEventListener("click", flujoEventos2);
            
        });

        const $a = document.querySelector(".eventos-flujo a");
        
        $a.addEventListener("click", (e)=>{
            alert("Hola Como estas");
            e.preventDefault(); //cancelar la accion que tenga por defecto ele elemtno (el elemento es un enlace por default va a abrir la referencia brindada en el atributo href)
            e.stopPropagation(); //evita que se propague y muestre tambien el mensaje del la caja div 
        }); */




        /*--------------------- Delegación de Eventos------------------- */

        //En ve z de generar listener para cada elemento, generar un solo listener para el documento y detecar cual es el elemento que va a desencadenar ese evento  
        
        function flujoEventos2(e) {
            console.log(`Hola te saluda ${this.className} el click lo origino ${e.target.className}`);
            e.stopPropagation();
        }

        



        

        

















 























