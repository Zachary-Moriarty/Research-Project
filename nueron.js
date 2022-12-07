class nueron{
    constructor(wghtList, slope, mask){
        this.weights = wghtList;
        this.slope = slope;
        this.bias = 0;
        this.mask = mask
        this.mid = 0;
        this.getMid();
    }

    getMid(){
        this.mid = 0;
        for(let i = 0; i < this.mask.length; i++){
            if(this.mask[i] != 0){
                this.mid++;
            }
        }
    }

    run(inputList){
        if(inputList.length != this.weights.length){
            return null;
        }
        let sum = 0;
        let j = -1;
        for(let i = 0; i < this.weights.length; i++){
            if(i%4==0){
                j++
            }
            sum += inputList[i] * this.weights[i] * this.mask[j] / this.mid;
        }
        sum += this.bias / (this.mid + 1);
        return this.sigmoid(sum);
    }

    sigmoid(input){
        //return 1 / (1 + Math.exp(-1 * (input - (.5))));
       let val = 1 / (1 + Math.E ** ((-1 *  this.slope)* (input - .5)));
       return val;
    }

    getWeights(){
        return this.weights;
    }

    setWeights(newWeights){
        this.weights = newWeights;
    }

    update(){

    }

    draw(ctx, engine){
        ctx.strokeStyle = 'black'
        ctx.linewidth = 1
        let x = 100;
        let y = 100;
        let size = 300;
        ctx.moveTo(x,y+size)
        for(let i = 1; i <= 100; i++){
            ctx.lineTo(x+size/100*i, y+size-this.sigmoid(i/100)*size);
        }
        ctx.stroke();
    }

    changeBias(checked){
        if(checked){
            this.bias = 1;
        }
        else{
            this.bias = 0;
        }
    }

    changeMask(newMask){
        this.mask = newMask;
    }
}