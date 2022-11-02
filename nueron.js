class nueron{
    constructor(wghtList){
        this.weghts = wghtList;
    }

    run(inputList, mask){
        if(inputList.length != this.weghts.length){
            return null;
        }
        let mid = 0;
        for(let i = 0; i < mask.length; i++){
            if(mask[i] != 0){
                mid++;
            }
        }
        let sum = 0;
        let j = -1;
        for(let i = 0; i < this.weghts.length; i++){
            if(i%4==0){
                j++
            }
            sum += inputList[i] * this.weghts[i] * mask[j] / mid;
        }
        return this.sigmoid(sum);
    }

    sigmoid(input){
        //return 1 / (1 + Math.exp(-1 * (input - (.5))));
       let val = 1 / (1 + Math.E ** (-4 * (input - .5)));
       return val;
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
}