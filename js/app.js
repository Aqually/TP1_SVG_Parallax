var etoiles
var taille = 1;

function getTranformTranslate(element){
    string = element.getAttribute("transform");
    return string.substring(string.indexOf("(")+1, string.indexOf(")")).split(" ");
}



function scaleEtoile() {
    var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var trace = taille * fractionDuScroll +1
    for (var i = 0; i < etoiles.length; i++) {
            var translate = getTranformTranslate(etoiles[i]);
            etoiles[i].style.transform = "translateX("+ translate[0] +"px) translateY("+ translate[1] +"px) scale("+trace+")";
    }
}

function animerEtoile(){
    etoiles = document.getElementsByClassName("uneEtoile");
    window.addEventListener("scroll", scaleEtoile);
}

window.onload = function() {
    var rellax = new Rellax('.rellax');
    animerEtoile();
};
