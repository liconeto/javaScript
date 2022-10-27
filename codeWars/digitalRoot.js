function digitalRoot(n){
    let val = 0
    let n1 = n
    do{
        if(val > 0){
            n1 = val
            val = 0
        }

        n1 = n1.toString()
        let arr = n1.split("")
    
        arr.forEach( indice => {
            val = val + parseInt(indice)
        });

    }while (val > 10)

    return val
}

let n = 9421

teste = digitalRoot(n)
console.log(teste)
