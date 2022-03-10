function stringCalculator(string: string){
    var stringConvertida = string.split(",").map(Number)
    var somaString = 0;
    var controlador = 0;
    for(controlador = 0; controlador < stringConvertida.length; controlador++){
        if(stringConvertida[controlador] < 0){
            return 'Um dos números na String é negativo'
        }
        if(stringConvertida[controlador] > 1000){
            stringConvertida[controlador] = 0;
        }
        somaString = stringConvertida[controlador] + (somaString);
    }
    return somaString
}


export default stringCalculator