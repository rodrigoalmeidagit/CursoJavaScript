var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${min} min.`)

if (hora < 6){
    console.log('Boa madrugada!')
} else if (hora < 13) {
    console.log('Bom dia!')
} else if (hora < 19) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}
 