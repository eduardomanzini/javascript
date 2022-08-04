function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if(Fano.value.length == 0 || Fano.value > ano) { //length valor do comprimento que recebe
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value) // conta de subtracao
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img) 
    }
    

}