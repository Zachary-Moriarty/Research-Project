class socialNetwork{
    constructor(){
        this.net = new networks();
        this.vals = new values();
    }

    buildNetwork(networkName, slope, vals){
        let network = this.net.getNet(networkName);
        let masks = network.masks;
        let positions = network.positions;
        let basic = network.default;
        this.agents = new Array(masks.length);
        if(vals == 0){
            for(let i = 0; i < masks.length; i++){
                this.agents[i] = new agent(masks.length, positions[i], slope, this.vals.getVal(basic[i]));
                this.agents[i].changeMask(masks[i]);
            }
        }
        else{
            for(let i = 0; i < masks.length; i++){
                this.agents[i] = new agent(masks.length, positions[i], slope, this.vals.getVal(vals));
                this.agents[i].changeMask(masks[i]);
            }
        }
    }

    changeNetwork(name){
        this.buildNetwork(name);
    }

    run(){
        let vals = new Array();
        for(let i = 0; i < this.agents.length; i++){
            for(let j = 0; j < 4; j++){
                vals.push(this.agents[i].values[j]);
            }
        }
        for(let i = 0; i < this.agents.length; i++){
            this.agents[i].go(vals);
        }
    }
    loopRun(times){
        for(let i = 0; i < times; i++){
            this.run();
        }
    }
    draw(ctx, engine){
        for(let i = 0; i < this.agents.length; i++){
            this.agents[i].draw(ctx, engine);
        }
    }
    update(){

    }
}