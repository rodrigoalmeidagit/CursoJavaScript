var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não não pode votar!')
} else if (idade < 18 || idade > 65) {
    console.log('Seu voto é facultativo!')
} else {
    console.log('Voto Obrigatório!')
}

