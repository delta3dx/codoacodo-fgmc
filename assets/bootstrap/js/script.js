function resumen() {
    alert("¡Mensaje de alerta...!");
    var str = document.getElementById('total');
    str.value = "Total a pagar" + document.getElementById('cnt').value * 200;
}