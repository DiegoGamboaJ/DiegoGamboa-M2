$(document).ready(function(){
    $("#text1").mouseenter(function(){
        $("#text2").fadeIn(); // Muestra el text2 al asomar la flecha
    });

    $("#text1").mouseleave(function(){
        $("#text2").fadeOut(); // Oculta el text2 cuando la flecha se retira
    });
});

$(document).ready(function(){
    $("#img").mouseenter(function(){
        $(this).css("width", "100%");  // Maximiza la imagen al 100%
    });

    $("#img").mouseleave(function(){
        $(this).css("width", "20%");  // Vuelve la imagen a su tamaño original del 20%
    });
});

$(document).ready(function(){
    $("#caja3").dblclick(function(){
        $(this).css("font-size", function(index, currentSize) {
            // Obtener el tamaño actual del texto y duplicarlo
            return parseFloat(currentSize) * 2 + "px";
        });
    });
});