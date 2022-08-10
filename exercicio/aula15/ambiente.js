
let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
/*console.log(num) TRADIDIONAL
console.log(`O vetor tem ${num.length} posicões`)
console.log(`O primeiro valor do vetor ${0}`)

for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
} 

let pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log('O valor está na posição ${pos})
}


*/


for(let i in num) { // abreviando o for
    console.log(`a posição ${i} é o valor ${num[i]}`)
}