function Contar(){
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let print = document.getElementById("print")

    if(ini.value.length ==0 || fim.value.length == 0 || passo.value.length ==0){
        print.innerHTML += `Impossível contar!`
        alert("[ERRO] Faltam dados")

    }else  {
        print.innerHTML = 'Contando... <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( p <=0 ){
            alert(`Passo Inválido! `)
           // p =1
            print.innerHTML = 'Considere PASSO 1... <br> '
        }
         else if (i < f){
             //contagem crescente
            for(let c = i; c <= f; c += p){
            print.innerHTML += ` ${c} \u{1F449}`
        }
       
        }else {
            // contagem regressiva
            for( let c =i; c>=f; c-=p){
                print.innerHTML += ` ${c} \u{1F449}`
            }
        }
        print.innerHTML += `\u{1F3C1}`
    }
}