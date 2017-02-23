//les SVGs etoiles
var etoiles

//fonction pour obtenir le translate courant d'un element
function getTranformTranslate(element){
    string = element.getAttribute("transform");
    return string.substring(string.indexOf("(")+1, string.indexOf(")")).split(" ");
}

//fonction pour changer la taille de l'étoile
function scaleEtoile() {
    var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var leScale = fractionDuScroll +1
    for (var i = 0; i < etoiles.length; i++) {
            var translate = getTranformTranslate(etoiles[i]);
            etoiles[i].style.transform = "translateX("+ translate[0] +"px) translateY("+ translate[1] +"px) scale("+leScale+")";
    }
}

//fonction pour commencer l'animation des étoiles
function animerEtoile(){
    etoiles = document.getElementsByClassName("uneEtoile");
    window.addEventListener("scroll", scaleEtoile);
}

window.onload = function() {
    //pour permettre l'effet de parralax
    var rellax = new Rellax('.rellax');
    //pour animer les étoiles
    animerEtoile();
};
