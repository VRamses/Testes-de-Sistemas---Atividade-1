import stringCalculator from "../src/string-calculator"

describe('Calculador de string convertida para inteiro', ()=> {
    test('Deve retornar o número 6', () =>{
        var soma = stringCalculator("1,2,3");
        expect(soma).toBe(6);
    })
    test("Deve retornar o número 3", () =>{
        var soma = stringCalculator("1,2,1001");
        expect(soma).toBe(3);
    })
    test("Deve retornar 'Um dos números na String é negativo'", () =>{
        const resposta = stringCalculator("1,2,-1");
        expect(resposta).toBe('Um dos números na String é negativo');
    })
})