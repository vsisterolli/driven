let selected_items = 0;
let selected = [];
let isSelected = [];
let cart = [["teste", 1.5], ["teste2", 2.5], ["teste3", 3.3]];


function send_request() {

    let name = prompt("Qual seu nome?"), address = prompt("Diga-nos o endereço de entrega");
    const url = "https://wa.me//?text=" 
                +encodeURIComponent(
                    `Olá, gostaria de fazer o pedido:\n
                    - Prato: ${cart[0][0]}\n
                    - Bebida: ${cart[1][0]}\n
                    - Sobremesa: ${cart[2][0]}\n
                    Total: R$ ${(cart[0][1] + cart[1][1] + cart[2][1]).toFixed(2)}\n
                    ${name}\n
                    ${address}
                    `    
                )
    console.log(url);
    window.location.href = url;    

}

function confirm() {

    const hide = document.querySelectorAll('.header, .page, .footer');
    for(let i = 0; i < hide.length; i++)
        hide[i].style.setProperty('opacity', '5%')

    const confirm_box = document.querySelector('.confirm');
    const items = document.querySelectorAll('.item-description h2');

    for(let i = 0; i < items.length; i+=2){
        items[i].textContent = cart[i/2][0];
        items[i+1].textContent = (cart[i/2][1].toFixed(2)).replace('.', ',');
    }
 
    const total = document.querySelectorAll('#end-value');
    total[0].textContent = "R$ " + (cart[0][1] + cart[1][1] + cart[2][1]).toFixed(2).replace('.', ',');

    console.log(total.textContent);
    
    confirm_box.style.setProperty('display', 'flex', 'important'); 


}

function cancel() {

    const hide = document.querySelectorAll('.header, .page, .footer');
    for(let i = 0; i < hide.length; i++)
        hide[i].style.setProperty('opacity', '100%')

    const confirm_box = document.querySelector('.confirm');
    confirm_box.style.setProperty('display', 'none', 'important');     
}

function selecionar(index) {
 
    const confirm_box = document.querySelector('.confirm');
    confirm_box.style.setProperty('display', 'none', 'important'); 

}

function allow_order() {

    const button = document.querySelector('.footer button');
    button.textContent = "Fechar pedido";
    button.style.setProperty("background-color", "#32B72F");
    button.setAttribute('onclick', 'confirm()');

}

function select(index) {

    const section = parseInt(index/7);

    const inicio_secao = parseInt(index/7) * 7;
    const section_start = section * 7;

    const items = document.querySelectorAll('.item');

    let imgs = document.querySelectorAll('.order-bottom img')


    for(let i = section_start; i < section_start + 7; i++) {
        if(i != index && isSelected[i]) {
            isSelected[i] = 0;
            selected_items--;
            items[i].style.setProperty("box-shadow", "none");
            imgs[i].style.setProperty("display", "none")
        }
        else if(!isSelected[i] && i == index) { 
            items[i].style.setProperty("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F");
            imgs[i].style.setProperty("display", "initial")
            selected[index] = 1;
            imgs[i].style.setProperty("display", "initial");

            cart[section][0] = document.querySelectorAll('.item h1')[i].textContent
            cart[section][1] = document.querySelectorAll('.preco')[i].textContent;

            cart[section][1] = cart[section][1].replace(',', '.')
            cart[section][1] = Number(cart[section][1]);

            isSelected[index] = 1;
            selected_items++;
        }
    }

    if(selected_items == 3)
        allow_order();

} 