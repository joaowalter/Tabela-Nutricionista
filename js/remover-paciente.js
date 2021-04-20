var tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function(event){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;

        event.target.parentNode.classList.add("fadeout");

        setTimeout(function(){
            paiDoAlvo.remove();
        }, 500);
});