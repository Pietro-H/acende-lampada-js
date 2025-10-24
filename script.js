const lampada = document.getElementById("lampada");

lampada.addEventListener("mouseover",acender);
lampada.addEventListener("mouseout",apagar);

function acender(){
    lampada.src = "on.png";
    document.body.style.background = "rgba(12, 12, 12, 1)"
}
function apagar(){
    lampada.src = "off.png";
    document.body.style.background = "rgba(32, 11, 224, 1)"
}