function ohce(palavra: string){
    var palavraMinuscula = palavra.toLowerCase();
    var palavraReversa = palavraMinuscula.split('').reverse().join('');
    if(palavraReversa === palavraMinuscula){
        return 'Gostei da palavra!';
    }
    else{
        return palavraReversa;
    }
}

export default ohce;