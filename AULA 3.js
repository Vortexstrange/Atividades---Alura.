// Fiz está atividade de quatro maneiras; 

// A primeira foi sozinha, usando o molde da Segunda Aula;

let Resposta = prompt('Qual dia da semana é hoje?')
console.log(Resposta)

if (Resposta == 'Sábado' || Resposta == 'Sabado' || Resposta == 'Domingo') {
    alert('Bom Final de Semana!')
} else {
    alert('Boa semana!')
}

//Foi tranquilo, mas achei o código um tanto extenso e procurei uma forma de diminui-lo. No processso, encontrei três alternativas:
//".trim().toLowerCase()" e ".includes()".

// .includes();
let fimDeSemana = ['sabado', 'sábado', 'domingo']
if (fimDeSemana.includes(resposta)) {
    alert('Bom Final de Semana!')
} else {
    alert('Boa semana!')
}

//O Código com .includes() fica limpo e curto, mas pouco prático se for em grandes escalas.

//.trim().toLowerCase();
let Resposta = prompt ('Qual dia da semana é hoje?')

Resposta = Resposta.trim().toLowerCase()

if(Resposta == 'sabado'|| Resposta == 'domingo'){
    alert('Bom Final de Semana!')
} else{
    alert('Boa semana!')
}

//Já o .trim() e o .toLowerCase() deixa mais prático, mas em grande escala o código poderia ficar confuso e extenso demais.
//Então, com ajuda do ChatGPT, vi como poderia usa-los juntos.

let resposta = prompt("Qual dia da semana é hoje?")

resposta = resposta.trim().toLowerCase()

let fimDeSemana = ["sabado", "domingo"]

if (fimDeSemana.includes(resposta)) {
  alert("Bom Final de Semana!")
} else {
  alert("Boa semana!")
}

//Imagino que essa mescla não sejá utilizada para otimização de códigos em larga escala, mas é perfeito para o encerramento dessa atividade.
//Esse é meu resultado final da atividade. Foi um exercicio fácil, mas que me trouxe vários conhecimentos novos e muita curiosidade.


