let selected_items = 0;
let selected = [];

function selecionar(index) {

    const inicio_secao = parseInt(index/7) * 7;

    let items = document.getElementsByClassName('item');
    let imgs = document.querySelectorAll('.order-bottom img')
        
    for(let i = inicio_secao; i < inicio_secao + 7; i++) {
        if(selected[i]) {
            selected[i] = 0;
            items[i].style.setProperty("box-shadow", "none");
            imgs[i].style.setProperty("display", "none")
            selected_items--;
        }
        else if(i == index) { 
            items[i].style.setProperty("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F");
            imgs[i].style.setProperty("display", "initial")
            selected[index] = 1;
            selected_items++;
        }
    }
    

}