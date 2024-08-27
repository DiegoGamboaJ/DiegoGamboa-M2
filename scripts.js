function calc() {
    comensales = parseInt(document.getElementById("numComen").value);

    // para 1 persona: 200 gr papas, 1 huevo, 60 gr cebolla
    patatas = comensales * 200;
    huevo = comensales * 1;
    cebolla = comensales * 60;

    document.getElementById("comen").textContent = comensales;
    document.getElementById("papas").textContent = patatas;
    document.getElementById("huevos").textContent = huevo;
    document.getElementById("cebollas").textContent = cebolla;

}

function vari() {
    variA = parseInt(document.getElementById("variA").value);
    variB = parseInt(document.getElementById("variB").value);

    let temp = variA;

    variA = variB;
    variB = temp;

    document.getElementById("variA").value = variA;
    document.getElementById("variB").value = variB;

}

function trueFalse() {
    numPar = parseInt(document.getElementById("numPar").value);
    result = document.getElementById("result");

    document.getElementById("numResult").textContent = numPar;

    if (numPar % 2 == 0) {
        result.textContent = "Par";
    } else {
        result.textContent = "Impar";
    }
}

function uniDecen() {
    let numUniDecen = parseInt(document.getElementById("numUniDecen").value);

    if (isNaN(numUniDecen) || numUniDecen < 10 || numUniDecen > 99) {
        // Refresca la página si el valor no es válido
        alert("El valor ingresado no es válido. La página se recargará.");
        location.reload(); // Esto refresca la página actual
        return;
    }
    let cociente = Math.floor(numUniDecen / 10);
    let resto = numUniDecen % 10;

    document.getElementById("num").textContent = numUniDecen;
    document.getElementById("numDec").textContent = cociente;
    document.getElementById("numUni").textContent = resto;

}

function consumo(){
    let litros = parseInt(document.getElementById("litros").value);
    let kilometros = parseInt(document.getElementById("kilometros").value);

    let result = litros / kilometros;

    document.getElementById("lit").textContent = litros;
    document.getElementById("km").textContent = kilometros;
    document.getElementById("result").textContent = result;
}