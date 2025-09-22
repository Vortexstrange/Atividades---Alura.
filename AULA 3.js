let Resposta = prompt ('Qual dia da semana é hoje?')

Resposta = Resposta.trim().toLowerCase()

if(Resposta == 'Sábado' || Resposta == 'Sabado'|| Resposta == 'Domingo'){
    alert('Bom Final de Semana!')
} else{
    alert('Boa semana!')
}
