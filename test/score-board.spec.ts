import ScoreKeeper from "../src/score-board"

describe('Placar', () =>{

    const placar = new ScoreKeeper()

    test('Deve retornar o placar 007:001', ()=>{
        placar.trêsPontosTimeA()
        placar.trêsPontosTimeA()
        placar.umPontoTimeA()
        placar.umPontoTimeB()
        let pontuacao = placar.getScore()
        expect(pontuacao).toBe("007:001")
    })

    test("Deve retornar a mensagem 'Máximo de pontos alcançados' caso a pontuação passe de 999", () => {
        placar.pontoTimeA = 1000
        placar.pontoTimeB = 999
        var pontuacao = placar.getScore()
        expect(pontuacao).toBe("Máximo de pontos alcançados")
    })
})