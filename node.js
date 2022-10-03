class node{
    constructor(whgt1, whgt2, whgt3, whgt4){
        this.joywhgt = whgt1;
        this.sadwhgt = whgt2;
        this.angerwhgt = whgt3;
        this.fearwhgt = whgt4;
    }

    run(joy, sad, anger, fear){
        let sum = joy * this.joywhgt + sad * this.sadwhgt + anger * this.angerwhgt + fear * this.fearwhgt;
        let output = this.sigmoid(sum);
        return output;
    }

    sigmoid(input){
        return 1 / (1 + Math.exp(-input));
    }
}