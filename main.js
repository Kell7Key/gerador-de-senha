const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letraMaiuculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinucula = 'abcdefghijklmnopqrstuvwxy';
const nomeros = '0123456789';
const simbolos = ' !@%#*?&';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#cmpo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();

}

function aumentaTamanho() {
    if(tamanhoSenha < 20) {
        //tamanhoSenha = tamanhoSenha +1;
        tamanhoSenha++;
    
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
for ( i = 0; i < checkbox.length;i++);{
checkbox[i].onclick = geraSenha;
}
geraSenha();

function geraSenha(){
    let alfabeto = '';
    if(checkbox[0].cheked){
        alfabeto = alfabeto + letraMaiuculas;
    }
    if (checkbox[1].cheke){
        alfabeto = alfabeto + letrasMinucula
    }
    if(checkbox[2].cheked){
        alfabeto = alfabeto + numeroSenha;
    }
    if(checkbox[3].cheked) {
        alfabeto = alfabeto + simbolos;
    }
    
    let senha = '';
    for(let i=0;i<tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];

    }

    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}

