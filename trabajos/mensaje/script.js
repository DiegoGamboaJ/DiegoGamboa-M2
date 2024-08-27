function atm(){
    let option = parseInt(document.getElementById("option").value);
    let result = document.getElementById("result");

switch(option) {
    case 1:
    result.innerHTML = "Tu saldo es de $10";
    break;
    case 2:
    result.innerHTML = "Transfiriendo $5";
    break;
    case 3:
    result.innerHTML = "Girando $10...";
    break;
    case 4:
    result.innerHTML = "Depositando $6";
    break;
    case 5:
    result.innerHTML = "A salido del sistema";
    alert("Saliendo del sistema..");
    break;
    default:
    result.innerHTML = "Error, escoja una de las siguientes opciones: 1 | 2 | 3 | 4 | 5"
    break;


}
}