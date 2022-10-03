class agent {let 
    constructor(connections) {
        let joyweight = [connections*4];
        let sadweight = [connections*4];
        let fearweight = [connections*4];
        let angerweight = [connections*4];
        for(let i = 0; i < connections * 4; i++){
            if(i % 4 == 0){
                joyweight[i] = 1
                sadweight[i] = 0
                fearweight[i] = 0
                angerweight[i] = 0
            }
            else if(i % 4 == 1){
                joyweight[i] = 0
                sadweight[i] = 1
                fearweight[i] = 0
                angerweight[i] = 0
            }
            else if(i % 4 == 2){
                joyweight[i] = 0
                sadweight[i] = 0
                fearweight[i] = 1
                angerweight[i] = 0
            }
            else if(i % 4 == 3){
                joyweight[i] = 0
                sadweight[i] = 0
                fearweight[i] = 0
                angerweight[i] = 1
            }
        }
        this.joy = new nueron(joyweight);
        this.sad = new nueron(sadweight);
        this.fear = new nueron(fearweight);
        this.anger = new nueron(angerweight);
        this.values = [0, 0, 0, 0]
    }

    go(vals){
        let val1 = this.joy.run(vals);
        let val2 = this.sad.run(vals);
        let val3 = this.anger.run(vals);
        let val4 = this.fear.run(vals);
        this.values = [val1, val2, val3, val4];
        console.log(this.values);
    }
}