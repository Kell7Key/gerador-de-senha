const numerosenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numerosenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '123456789';
const simbolos = '!@%*#?#'
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        //taamnhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numerosenha.textContent = tamanhoSenha;
    geraSenha();
}
 
function aumentaTamanho() {
   
        if(tamanhoSenha < 20) {
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
        }
    numerosenha.textContent = tamanhoSenha;
    geraSenha();
}

     for(i = 0; i < checkbox.length; i++){

        checkbox[i].onclick = geraSenha;

     }

      geraSenha();
      function geraSenha(){
        let alfabeto = '';
        if(checkbox[0].cheked){
            alfabeto = alfabeto + letrasMaiusculas;
        }
        if(checkbox[1].cheked){
            alfabeto = alfabeto + letrasMinusculas;
        }
      }

  if (checkbox[2].cheked){
    alfabeto = alfabeto + numeros;
  }

  if(checkbox[3].cheked){
         alfabeto = alfabeto + simbolos;
  }
 
         let senha = '';
         for (let i=0;i,tamanhoSenha;i++){
            let numeroAleatorio = Math.random()*alfabeto.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + alfabeto[numeroaleatorio];
         }
           
         campoSenha.value = senha;
         classificaSenha(alfabeto.length);

         campoSenha.value = senha;


   
classificaSenha(alfabeto.length);{

}

function classificaSenha(tamanhoAlfabeto) {


    let entropia =
tamanhoSenha * Math.log2(tamanhoAlfabeto);


   
console.log(entropia);


   
forcaSenha.classList.remove('fraca', 'media', 'forte');


    if (entropia >
57) {


       
forcaSenha.classList.add('forte');


    } else if
(entropia > 35 && entropia < 57) {


       
forcaSenha.classList.add('media');


    } else if
(entropia <= 35) {


       
forcaSenha.classList.add('fraca');


    }


    const
valorEntropia = document.querySelector('.entropia');


valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2 ** entropia / (100e6 * 60 * 60 * 24)) + " dias para descobrir essa senha.";


}

Postada por EMILLY LOPES DUARTE
EMILLY LOPES DUARTE
Criado em: 11:1411:14
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Gerador de Senhas</title>
</head>
<body>
   <section class="conteudo">
    <div class="conteudo-titulo">
        <img src="" alt="imagem de um cadeado">
        <h2 class="titulo-principal">Gerador de Senhas</h2>
        <h3 class="titulo-secundario">Gere senhas aleatorias e seguras</h3>
    </div>
    <div class="conteudo-senha">
        <label for="senha">Senha</label>
        <input name="senha" type="text" id="campo-senha">
    </div>
    <div class="parametro">
        <h3 class="parametro-titulo">Personalize sua senha</h3>
        <div class="parametro-coluna__senha">
            <div class="parametro-senha">
                <h4 class="parametro-senha__titulo">Numero de Caracteres</h4>
                <div class="parametro-senhas-botoes">
                    <button class="parametro-senha__botao">-</button>
                    <p class="parametro-senha__texto">12</p>
                    <button class="parametro-senha__botao">+</button>
                </div>
            </div>
            <div class="parametro-coluna-senha">
                <h4 class="parametro-senha__titulo">Caracteristicas da Senha</h4>
                <div class="parametro-senha-checkbox">
                    <input name="maiusculo" type="checkbox" class="checkbox" checked>
                    <label for="">Letras maiusculas</label>
                </div>
                <div class="parametro-senha-checkbox">
                    <input name="minusculo" type="checkbox" class="checkbox" checked>
                    <label for="minusculo">Letras minusculas</label>
                </div>
                    <div class="parametro-senha-checkbox">
                    <input name="numero" type="checkbox" class="checkbox" checked>
                    <label for="numero">Numeros</label>
                </div>
                <div class="parametro-senha-checkbox">
                    <input name="simbolo" type="checkbox" class="checkbox" checked>
                    <label for="simbolo">Simbolos</label>
                </div>
            </div>
            <div class="parametro-senha">
                <h4 class="parametro-senha__titulo">Força da Senha</h4>
                <div class="barra"></div>
                <div class="forca fraca"></div>
                <div class="parametro-senha-textos">
                    <p>Fraca</p>
                    <p>Media</p>
                    <p>forte</p>
                </div>
                <p class="entropia"></p>
            </div>
        </div>
    </div>
   </section>
   <script src="main.js"></script>
</body>
</html>
