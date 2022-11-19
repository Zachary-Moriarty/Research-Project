class agent {let 
    constructor(connections, position, slope, vals) {
        this.mask = new Array(connections).fill(1);
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
        this.height = 200 / (Math.floor(connections/8) + 1);
        this.width = 200 / (Math.floor(connections/8) + 1);
        this.joy = new nueron(joyweight, slope);
        this.sad = new nueron(sadweight, slope);
        this.fear = new nueron(fearweight, slope);
        this.anger = new nueron(angerweight, slope);
        this.values = vals;
        this.position = position;
    }

    go(vals){
        let val1 = this.joy.run(vals, this.mask);
        let val2 = this.sad.run(vals, this.mask);
        let val3 = this.fear.run(vals, this.mask);
        let val4 = this.anger.run(vals, this.mask);
        this.values = [val1, val2, val3, val4];
        console.log(this.values);
    }

    changeVals(newVals){
        this.values = newVals;
    }

    changeMask(newMask){
        this.mask = newMask;
    }
    changePosition(newRow, newCol){
        this.position = [newRow, newCol]
    }
    draw(ctx, engine){
       // ctx.fillStyle = "black";
       // ctx.fillRect(this.position[0], this.position[1], this.height, this.width);
        ctx.fillStyle = "green";
        ctx.globalAlpha = this.values[0];
        ctx.fillRect(this.position[0], this.position[1], this.height/2, this.width/2);
        ctx.fillStyle = "blue";
        ctx.globalAlpha = this.values[1];
        ctx.fillRect(this.position[0] + this.height/2, this.position[1], this.height/2, this.width/2);
        ctx.fillStyle = "yellow";
        ctx.globalAlpha = this.values[2];
        ctx.fillRect(this.position[0], this.position[1] + this.width/2, this.height/2, this.width/2);
        ctx.fillStyle = "red";
        ctx.globalAlpha = this.values[3];
        ctx.fillRect(this.position[0] + this.height/2, this.position[1] + this.width/2, this.height/2, this.width/2);
        ctx.globalAlpha = 1
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(this.position[0], this.position[1], this.height, this.width)
        ctx.beginPath();
        ctx.moveTo(this.position[0] + this.height/2, this.position[1]);
        ctx.lineTo(this.position[0] + this.height/2, this.position[1] + this.width);
        ctx.stroke();
        ctx.moveTo(this.position[0] , this.position[1] + this.width/2);
        ctx.lineTo(this.position[0] + this.height, this.position[1] + this.width/2);
        ctx.stroke();
        
    }
    update(){

    }
}