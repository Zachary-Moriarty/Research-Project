class agent {let 
    constructor() {
        this.joy = new node(2, -1, -1, -1);
        this.sad = new node(-1, 2, -1, -1);
        this.anger = new node(-1, -1, 2, -1);
        this.fear = new node(-1, -1, -1, 2);
        this.values = [1, 1, 1, 1]
    }

    go(vals){
        let val1 = this.joy.run(vals[0], vals[1], vals[2], vals[3]);
        let val2 = this.sad.run(vals[0], vals[1], vals[2], vals[3]);
        let val3 = this.anger.run(vals[0], vals[1], vals[2], vals[3]);
        let val4 = this.fear.run(vals[0], vals[1], vals[2], vals[3]);
        this.values = [val1, val2, val3, val4];
        console.log(this.values);
    }
}