function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data .getHours();
    msg.innerHTML = "Agora são "+ hora +" horas.";

    if (hora >= 0 && hora < 12) {
        img.src = './img/manha.jpg';
        document.body.style.background = 'rgb(212, 212, 126)';
    } else if (hora >= 12 && hora <18){
        img.src = './img/tarde.jpg';
        document.body.style.background = 'rgb(228, 85, 28)';
    }else{
        img.src = './img/noite.jpg';
        document.body.style.background = 'rgb(41, 20, 59)';
    }
}
