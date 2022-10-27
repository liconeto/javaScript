function addBinary(a,b){
    let soma = a + b

    let bin = (soma >>> 0).toString(2);

    return bin
}

let n1 = 5
let n2 = 9
teste = addBinary(n1,n2)

console.log(teste)
