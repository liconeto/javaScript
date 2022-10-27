function solution(number){
    let valor = number
    let retorno = 0

    if(valor < 0){

        return retorno
    }else{
         
        for(x=0; x < valor; x++){
            if((x % 3) == 0 || (x % 5) == 0){
                retorno += x
            }
        }

    }
    return retorno
}

let num = 10
let teste = solution(num)
console.log(teste)