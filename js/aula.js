function mudaCordeFundo(){
    const body = document.getElementById('corpo');
    let random = Math.random() * 8;
    let cores =["green", "blue","red", "gray","pink", "white", "black"];
    let cor = cores [parseInt(random)];
    body.style.background = cor;

}
function calculaTotal(){
    const qntd = document.getElementById('qtd');
    if(qntd.value > 0){
        document.getElementById('comprar').disabled = false;
         let value = qntd.value;
    const total= document.getElementById('total');
    const mult = document.getElementById('valor');
    total.innerHTML = value *parseInt (mult.textContent);
    }else{
        document.getElementById('comprar').disabled = true;
    }
}
function comprar(){
    const msg = document.getElementById('msg');
    msg.classList.add ('alert');
    msg.classList.add ('alert-succ ess');
    msg.innerHTML = "obg pela compra";
    
    
}