function converter() {
    var valorDolar = document.getElementById('valor')
    var dolarInicial = parseFloat(valorDolar.value)
    var valorConvertidoCripto = document.getElementById('valorConvertido')
    var criptoMoeda = document.getElementsByName('cripto')

    if (criptoMoeda[0].checked) {
            let dolarBitcoin = dolarInicial * 0.000053

            valorConvertidoCripto.innerHTML = `O valor de US$ ${dolarInicial}  em Bitcoin é ${dolarBitcoin.toFixed(6)} BTC`

      
    }
    
    if (criptoMoeda[1].checked) {
        let dolarParaEtherium = dolarInicial * 0.00063

        valorConvertidoCripto.innerHTML = `O valor de US$ ${dolarInicial}  em Ethereum é ${dolarParaEtherium.toFixed(4)} ETH`
    }
}