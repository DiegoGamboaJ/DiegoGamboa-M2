function mayorMenor(){
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById('numero2').value);
    let num3 = parseInt(document.getElementById('numero3').value);

    if(num1 > num2 && num1 > num3 ){
        if(num2 < num1 && num2 < num3){
            alert(num1 + " es mayor que " + num2 + " y " + num3 + " y el menor es " + num2);
        }else{
            alert(num1 + " es mayor que " + num2 + " y " + num3 + " y el menor es " + num3);
        }
    }else if(num2 > num1 && num2 > num3){
        if(num1 < num2 && num1 < num3){
            alert(num2 + " es mayor que " + num1 + " y " + num3 + " y el menor es " + num1);
        }else{
            alert(num2 + " es mayor que " + num1 + " y " + num3 + " y el menor es " + num3);
        }
    }else if(num3 > num1 && num3 > num2){
        if(num1 < num3 && num1 < num2){
            alert(num3 + " es mayor que " + num1 + " y " + num2 + " y el menor es " + num1);
        }else{
            alert(num3 + " es mayor que " + num1 + " y " + num2 + " y el menor es " + num2);
        }
    }else{
        alert("son iguales")
    }
}

