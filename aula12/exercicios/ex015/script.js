function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancamas.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'adolemas.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultomas.png')
            } else {
                img.setAttribute('src', 'idosomas.png')
            }            
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criancafem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'adolefem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultofem.png')
            } else {
                img.setAttribute('src', 'idosofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}