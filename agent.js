class agent {let 
    constructor(connections, position, slope, vals, agentNum, selfConnect) {
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
        joyweight[agentNum * 4] = selfConnect;
        sadweight[agentNum * 4 + 1] = selfConnect;
        fearweight[agentNum * 4 + 2] = selfConnect;
        angerweight[agentNum * 4 + 3] = selfConnect;
        this.height = 200 / (Math.floor(connections/8) + 1);
        this.width = 200 / (Math.floor(connections/8) + 1);
        this.joy = new nueron(joyweight, slope, this.mask);
        this.sad = new nueron(sadweight, slope, this.mask);
        this.fear = new nueron(fearweight, slope, this.mask);
        this.anger = new nueron(angerweight, slope, this.mask);
        this.values = vals;
        this.position = position;
    }

    go(vals){
        let val1 = this.joy.run(vals);
        let val2 = this.sad.run(vals);
        let val3 = this.fear.run(vals);
        let val4 = this.anger.run(vals);
        this.values = [val1, val2, val3, val4];
    }

    changeVals(newVals){
        this.values = newVals;
    }

    changeMask(newMask){
        this.mask = newMask;
        this.joy.changeMask(newMask);
        this.joy.getMid();
        this.sad.changeMask(newMask);
        this.sad.getMid();
        this.fear.changeMask(newMask);
        this.fear.getMid();
        this.anger.changeMask(newMask);
        this.anger.getMid();
    }
    changePosition(newRow, newCol){
        this.position = [newRow, newCol]
    }
    draw(ctx, engine){
       // ctx.fillStyle = "black";
       // ctx.fillRect(this.position[0], this.position[1], this.height, this.width);
        let font = this.width/4;
        ctx.font = font + "px ariel";
        ctx.fillStyle = "green";
        ctx.globalAlpha = this.values[0];
        ctx.fillRect(this.position[0], this.position[1], this.height/2, this.width/2);
        ctx.fillStyle = "black";
        ctx.globalAlpha = 1;
        ctx.fillText(Math.round(this.values[0]*100), this.position[0] + font/2, this.position[1] + font*1.25);
        ctx.fillStyle = "blue";
        ctx.globalAlpha = this.values[1];
        ctx.fillRect(this.position[0] + this.height/2, this.position[1], this.height/2, this.width/2);
        ctx.fillStyle = "black";
        ctx.globalAlpha = 1;
        ctx.fillText(Math.round(this.values[1]*100), this.position[0] + this.height/2 + font/2, this.position[1] + font*1.25);
        ctx.fillStyle = "yellow";
        ctx.globalAlpha = this.values[2];
        ctx.fillRect(this.position[0], this.position[1] + this.width/2, this.height/2, this.width/2);
        ctx.fillStyle = "black";
        ctx.globalAlpha = 1;
        ctx.fillText(Math.round(this.values[2]*100), this.position[0] + font/2, this.position[1] + this.width/2 + font*1.25);
        ctx.fillStyle = "red";
        ctx.globalAlpha = this.values[3];
        ctx.fillRect(this.position[0] + this.height/2, this.position[1] + this.width/2, this.height/2, this.width/2);
        ctx.fillStyle = "black";
        ctx.globalAlpha = 1;
        ctx.fillText(Math.round(this.values[3]*100), this.position[0] + this.height/2 + font/2, this.position[1] + this.width/2 + font*1.25);
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