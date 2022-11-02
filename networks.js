class networks{
    nets = { 'allConnectedSmall' :{ 'masks' : [
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1]],
        'positions' : [[0,0], [100,0], [200, 0], [300, 0], [0,100], [100,100], [200,100], [300,100]]},
    'TraditionalMediaSmall' : {'masks' : [
        [1,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0],
        [1,0,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1]],
    'positions' : [[0,0], [100,0], [200, 0], [300, 0], [0,100], [100,100], [200,100], [300,100], [0,200], [100, 200], [200, 200]]},
    'single': {'masks': [1],'positions' : [0,0]}}
    getNet(name){
        return this.nets[name];
    }
}
