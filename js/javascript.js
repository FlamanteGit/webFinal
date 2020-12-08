//funcion para mostrar la pagina que corresponde
function showElement(id) {
    document.getElementById("interfaces").style.display = "none";
    document.getElementById("redes").style.display = "none";
    document.getElementById("arquitectura").style.display = "none";
    document.getElementById("software").style.display = "none";
    document.getElementById("heuristica").style.display = "none";
    document.getElementById(id).style.display = "block";
}