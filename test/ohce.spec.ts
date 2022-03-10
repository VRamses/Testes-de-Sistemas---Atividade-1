import ohce from "../src/ohce"

describe("OHCE",()=>{
    test("Caso seja palíndromo, deve retornar 'Gostei da Palavra!'", ()=>{
        expect(ohce("Ana")).toBe("Gostei da palavra!")
    })
    test("Caso não seja palíndromo, deve retornar a palavra invertida", ()=>{
        expect(ohce("Paula")).toBe("aluap")
    })
})