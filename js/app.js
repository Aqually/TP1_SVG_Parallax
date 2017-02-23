var arbres
var taille = 1;

function getTranformTranslate(element){
    string = element.getAttribute("transform");
    return string.substring(string.indexOf("(")+1, string.indexOf(")")).split(" ");
}

function animRandomEtoile(){
    
}

function scaleEtoile() {
    var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var trace = taille * fractionDuScroll +1
    for (var i = 0; i < arbres.length; i++) {
            var translate = getTranformTranslate(arbres[i]);
            arbres[i].style.transform = "translateX("+ translate[0] +"px) translateY("+ translate[1] +"px) scale("+trace+")";
    }
}

function changerTailleDesArbres(){
    // on cible l'élément « path » que l'on veut animer
    arbres = document.getElementsByClassName("uneEtoile");
    window.addEventListener("scroll", scaleEtoile);
}

window.onload = function() {
    var rellax = new Rellax('.rellax');
    changerTailleDesArbres();
};
