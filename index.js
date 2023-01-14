//Vai buscar um array com todos os li de classe "continente"
const continentes_array = document.getElementsByClassName("continente")

//Itera sobre o array anterior
for(const continente of continentes_array){
    //Adiciona uma funcionalidade de click em cada li
    continente.addEventListener("click", function onClick(){
        //Seleciona o li de classe "paises" que vem imediatamente após o li "continente" e coloca num array, mas como só existe um, escolhemos o primeiro do array
        var paises = continente.parentElement.getElementsByClassName("paises")[0]
        
        //Verifica se esse li de classe "paises" está escondido
        if(paises.classList.contains("hide")){
            //Se estiver escondido, mostra-o, removendo a classe "hide"
            paises.classList.remove("hide")
            //Muda o icon, mudando a classe
            var icon = continente.querySelector("i.fa-chevron-down")
            icon.classList.remove("fa-chevron-down")
            icon.classList.add("fa-chevron-up")

        } else {
            //Se não estiver escondido, esconde-o, adicionando a classe "hide"
            paises.classList.add("hide")
            //Muda o icon, mudando a classe
            var icon = continente.querySelector("i.fa-chevron-up")
            icon.classList.remove("fa-chevron-up")
            icon.classList.add("fa-chevron-down")
        }
    })
}
