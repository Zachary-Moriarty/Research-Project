class socialNetwork{
    constructor(){
        this.net = new networks();
        this.vals = new values();
    }

    buildNetwork(networkName, slope, value){
        params.joyValues = [];
        params.sadValues = [];
        params.fearValues = [];
        params.angerValues = [];
        let network = this.net.getNet(networkName);
        let masks = network.masks;
        let positions = network.positions;
        let basic = network.default;
        let selfConnect = network.selfConnect;
        let connections = network.connections;
        this.agents = new Array(masks.length);
        if(value == 0){
            for(let i = 0; i < masks.length; i++){
                this.agents[i] = new agent(masks.length, positions[i], slope, this.vals.getVal(basic[i]), i, selfConnect[i], this.vals, connections[i]);
                this.agents[i].changeMask(masks[i]);
            }
        }
        else{
            for(let i = 0; i < masks.length; i++){
                this.agents[i] = new agent(masks.length, positions[i], slope, this.vals.getVal(value), i, selfConnect[i], this.vals, connections[i]);
                this.agents[i].changeMask(masks[i]);
            }
        }
        for(let i = 0; i < this.agents.length; i++){
            params.joyValues.push([this.agents[i].values[0]]);
            params.sadValues.push([this.agents[i].values[1]]);
            params.fearValues.push([this.agents[i].values[2]]);
            params.angerValues.push([this.agents[i].values[3]]);
        }
        console.log(params);
    }

    changeNetwork(name){
        this.buildNetwork(name);
    }

    run(){
        let value = new Array();
        for(let i = 0; i < this.agents.length; i++){
            for(let j = 0; j < 4; j++){
                value.push(this.agents[i].values[j]);
            }
        }
        for(let i = 0; i < this.agents.length; i++){
            this.agents[i].go(value);
        }
        console.log(params);
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