function diasemana()
{
    dia = parseInt(document.formulario.caja.value);
    switch(dia)
    {
        case 1:
            document.formulario.respuesta.value = "Lunes"
            break;
        case 2:
            document.formulario.respuesta.value = "Martes"
            break;
        case 3:
            document.formulario.respuesta.value = "Miercoles"
            break;
        case 4:
            document.formulario.respuesta.value = "Jueves"
            break;
        case 5:
            document.formulario.respuesta.value = "Viernes"
            break;
        case 6:
            document.formulario.respuesta.value = "Sabado"
            break;
        case 7:
            document.formulario.respuesta.value = "Domingo"
            break;
        default:
            document.formulario.respuesta.value = "No es un dia de la semana"

    }
}