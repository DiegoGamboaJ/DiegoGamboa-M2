let array = [];

function mostrar() {
  document.getElementById("result").innerHTML = array;
}

function agregar() {
  let producto = document.getElementById("articulo").value;
  array.push(producto);
  console.log(array);
}

function mostrar2() {
  largo = array.length - 1;
  for (let i = 0; i <= largo; i++) {
    document.getElementById("result2").innerHTML += array[i] + "<br>";    
  }
}