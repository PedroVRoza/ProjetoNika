const Luffy = document.querySelector('.Luffy');
const BB = document.querySelector('.BarbaNegra');


const jump =() =>{

    Luffy.classList.add('jump');

    setTimeout(()=>{
        Luffy.classList.remove('jump');
    },500);
}

const loop = setInterval(()=>{

 const BBPosition = BB.offsetLeft;
 const LuffyPosition = +window.getComputedStyle(Luffy).bottom.replace('px' , '' );
 
 
    if(BBPosition <= 2 && LuffyPosition < 100.00 && BBPosition > -80 ) {

        BB.style.animation = 'none';
        BB.style.left = `${BBPosition}px`;
        Luffy.style.animation = 'none';
        Luffy.style.bottom = `${LuffyPosition}px`;

        Luffy.src = './Imagens/NikaFail.gif';
        Luffy.style.width =  '250px'
        Luffy.style.margin = '50px'

        clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', jump);
