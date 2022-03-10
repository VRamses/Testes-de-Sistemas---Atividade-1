class ScoreKeeper{
    public pontoTimeA = 0; 
    public pontoTimeB = 0;

    public umPontoTimeA(){
        return this.pontoTimeA += 1;
    }

    public doisPontosTimeA(){
        return this.pontoTimeA += 2;
    }

    public trêsPontosTimeA(){
        return this.pontoTimeA += 3;
    }

    public umPontoTimeB(){
        return this.pontoTimeB += 1;
    }

    public doisPontosTimeB(){
        return this.pontoTimeB += 2;
    }

    public trêsPontosTimeB(){
        return this.pontoTimeB += 3;
    }

    public getScore() {
        let placarTimeA = `000`;
        let placarTimeB = `000`;

        //Possibilidades placares time A (1, 2 ou 3 dígitos)
        if(this.pontoTimeA <= 9){
            placarTimeA = "000" + this.pontoTimeA;
       }
        if(this.pontoTimeA <= 99){
            placarTimeA = "00" + this.pontoTimeA;
        }
        if(this.pontoTimeA > 100){
            placarTimeA = `${this.pontoTimeA}`;
        }
        
        //Possibilidades placares time B (1, 2 ou 3 dígitos)
        if(this.pontoTimeB <= 9){
            placarTimeB = "000" + this.pontoTimeB;
        }

        if(this.pontoTimeB <= 99){
            placarTimeB = "00" + this.pontoTimeB;
        }

        if(this.pontoTimeB > 100){
            placarTimeB = `${this.pontoTimeB}`;
        }

        if(this.pontoTimeA >= 999|| this.pontoTimeB >= 999){
            this.pontoTimeA = 999;
            this.pontoTimeB = 999;
            return "Máximo de pontos alcançados"
        }
        
        return `${placarTimeA}:${placarTimeB}`
    }

}

export default ScoreKeeper