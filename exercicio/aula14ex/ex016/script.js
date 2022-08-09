function contar() {
    let c
    let inicio = document.getElementById("initxt")
    let fim = document.getElementById("fimtxt")
    let passo = document.getElementById("passtxt")
    let res = document.getElementById("res")
    
    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = "Impossivel contar!"
        //alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( p <= 0) {
            alert('Passo Invalido! Considera Passo 1')
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
           for (c = i; c <= f; c += p) {
              res.innerHTML += `${c} \u{1F449} `
        } 
     } else {
         // CONTATEM REGRESSIVA
        for (c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449} `
        }
     }
     res.innerHTML += `\u{1F3C1}`  
    }
}
