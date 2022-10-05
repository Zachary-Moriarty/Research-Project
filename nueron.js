class nueron{
    constructor(wghtList){
        this.weghts = wghtList;
    }

    run(inputList){
        if(inputList.length != this.weghts.length){
            return null;
        }
        let sum = 0;
        for(let i = 0; i < this.weghts.length; i++){
            sum += inputList[i] * this.weghts[i];
        }
        return this.sigmoid(sum);
    }

    sigmoid(input){
        return 1 / (1 + Math.exp(-3 * (input - (this.weghts.length / 8))));
    }
}