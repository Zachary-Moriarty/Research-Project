class socialNetwork{
    constructor(agentCount){
        this.agents = new Array(agentCount);
        for(let i = 0; i < agentCount; i++){
            this.agents[i] = new agent(agentCount);
        }
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
}