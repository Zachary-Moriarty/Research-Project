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
        'positions' : [[0,0], [200,0], [400, 0], [600, 0], [0,200], [200,200], [400,200], [600,200]],
        'default' : [1,1,1,1,1,1,1,1],
        'selfConnect' : [1,1,1,1,1,1,1,1],
        'connections' : [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]},
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
    'positions' : [[0,0], [200,0], [400, 0], [600, 0], [0,200], [200,200], [400,200], [600,200], [0,400], [200, 400], [400, 400]],
    'default' : [2,3,1,1,1,1,1,1,1,1,1],
    'selfConnect' : [2,-1,1,1,1,1,1,1,1,1,1],
    'connections' : [[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]]},
    'TraditionalMediaSmallLessConnected' : {'masks' : [
        [1,0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0],
        [1,0,1,1,1,1,1,1,0,0,0],
        [1,0,1,1,1,1,1,1,0,0,0],
        [1,0,1,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1],
        [0,1,0,0,0,1,1,1,1,1,1],
        [0,1,0,0,0,1,1,1,1,1,1],
        [0,1,0,0,0,1,1,1,1,1,1]],
    'positions' : [[0,0], [200,0], [400, 0], [600, 0], [0,200], [200,200], [400,200], [600,200], [0,400], [200, 400], [400, 400]],
    'default' : [2,3,1,1,1,1,1,1,1,1,1],
    'selfConnect' : [2,-1,1,1,1,1,1,1,1,1,1],
    'connections' : [[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]]},
    'single': {'masks': [[1]],'positions' : [[0,0]],'default' : [1], 'selfConnect' : [1],'connections' : []},
    'singleStoic': {'masks': [[1]],'positions' : [[0,0]],'default' : [1], 'selfConnect' : [-1],'connections' : []},
    'singleExcitable': {'masks': [[1]],'positions' : [[0,0]],'default' : [1], 'selfConnect' : [2],'connections' : []},
    'fourOnOne' : {'masks' : [
        [1,1,1,1,1],
        [1,1,0,0,0],
        [1,0,1,0,0],
        [1,0,0,1,0],
        [1,0,0,0,1]],
    'positions' : [[100,200], [200,0], [0,0], [0,400], [200,400]],
    'default' : [1,4,5,6,7],
    'selfConnect' : [1,1,1,1,1],
    'connections' : [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]},
    'twin':{'masks' : [[1,1],[1,1]],
    'positions' : [[0,0],[200,200]],
    'default' : [1,1],
    'selfConnect' : [1,1],
    'connections' : [[0,0],[0,0]]},
    'twinPersonality':{'masks' : [[1,1],[1,1]],
    'positions' : [[0,0],[200,200]],
    'default' : [1,1],
    'selfConnect' : [-1,2],
    'connections' : [[0,0],[0,0]]},
    'tripleAll':{'masks' : [[1,1,1],[1,1,1],[1,1,1]],
    'positions' : [[0,0],[0,300],[300,150]],
    'default' : [1,1,1],
    'selfConnect' : [1,1,1],
    'connections' : [[0,0,0],[0,0,0],[0,0,0]]},
    'tripleAllPersonality':{'masks' : [[1,1,1],[1,1,1],[1,1,1]],
    'positions' : [[0,0],[0,300],[300,150]],
    'default' : [1,1,1],
    'selfConnect' : [1,-1,2],
    'connections' : [[0,0,0],[0,0,0],[0,0,0]]},
    'tripleOneWay':{'masks' : [[1,1,0],[0,1,1],[1,0,1]],
    'positions' : [[0,0],[0,300],[300,150]],
    'default' : [4,5,6],
    'selfConnect' : [1,1,1],
    'connections' : [[0,0,0],[0,0,0],[0,0,0]]},
    'tripleOneWayPersonality':{'masks' : [[1,1,0],[0,1,1],[1,0,1]],
    'positions' : [[0,0],[0,300],[300,150]],
    'default' : [4,5,6],
    'selfConnect' : [1,-1,2],
    'connections' : [[0,0,0],[0,0,0],[0,0,0]]}}
    getNet(name){
        return this.nets[name];
    }
}
