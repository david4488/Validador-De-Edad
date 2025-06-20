// We save the elements of the validate button, result and clear button in variables
const button = document.getElementById("button-validar");
const result = document.getElementById("result");
const buttonclear = document.getElementById("Button-clear");

// We save the click sound in a variable
const clickeo = document.getElementById("clickeo");

// This function is executed when the "Validate" button is clicked
function validar() {
    // We get the value that the user typed in the "name" input
    const name = document.getElementById("name").value;

    // We get the value that the user entered in the "age" input
    const age = document.getElementById("age").value;

    // We save the images in variables to show or hide them later.
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");

    // We save the sounds in variables
    const smayor = document.getElementById("smayor");
    const smenor = document.getElementById("smenor");
    const serror = document.getElementById("serror");

    // Sound when the button is clicked
    const clickeo = document.getElementById("clickeo");
    clickeo.play();

    // Here we will save the message that will be displayed
    let message;

    // Here we will save which image is displayed
    let imgdef;

    //If the age is greater than or equal to 18
    if (age >= 18) {
        message = "Hola " + name + "," + "  ​😎​ eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!🫵🤩🤗​.";

        // We show image 1 and hide the others
        imgdef = img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";

        // We reproduce the sound of "of age"
        smayor.play();

    }
    // If the age is less than 18 but greater than 0
    else if (age < 18 && age > 0) {
        message = "Hola " + name + "," + "  ​​🤓​eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!.🙊🫶😸";

        // We show image 2 and hide the others
        imgdef = img2.style.display = "block";
        img1.style.display = "none";
        img3.style.display = "none";

        // We reproduce the sound of "minor"
        smenor.play();

    }
    // If a valid age was not entered
    else {
        message = "😵​Error: Por favor, ingresa una edad válida en números.👽🫨";

        // We show error image 3 and hide the others
        imgdef = img3.style.display = "block";
        img1.style.display = "none";
        img2.style.display = "none";

        // We play the error sound
        serror.play();
    }

    // We display the message on the screen
    result.textContent = message;


}

// This function is executed when the "Clear" button is clicked
function buttonClear() {
    // We play the click sound
    const clickeo = document.getElementById("clickeo");
    clickeo.play();

    // We clean the content of the inputs (name and age)
    const name = document.getElementById("name").value = "";
    const age = document.getElementById("age").value = "";

    // We clean the message result
    result.textContent = "";

    // We clean the message result
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
}
