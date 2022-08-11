let itens_selecionados = 0;
let selected = [];

function selecionar(index) {

    const inicio_secao = parseInt(index/7) * 7;

    let elements = document.getElementsByClassName('item');
    for(let i = inicio_secao; i < inicio_secao + 7; i++) {
        console.log(i, index, selected[i]);
        if(selected[i]) {
            selected[i] = 0;
            elements[i].style.setProperty("border", "solid 0px red");
        }
        else if(i == index) { 
            elements[i].style.setProperty("border", "solid 4px #32B72F");
            selected[index] = 1;
        }
    }
    

}