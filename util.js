/** Global Parameters Object */
const params = {
    joyValues : [],
    sadValues : [],
    fearValues : [],
    angerValues : [],
    compiled : [],
    previousNetwork : ''
 };

 function compileVals(){
    params.compiled.push(params.previousNetwork);
    for(let i = 0; i < params.joyValues.length; i++){
        for(let j = 0; j < params.joyValues[i].length; j++){
            params.joyValues[i][j] = Math.round(params.joyValues[i][j] * 100);
        }
        params.compiled.push(' joy', params.joyValues[i])
        for(let j = 0; j < params.sadValues[i].length; j++){
            params.sadValues[i][j] = Math.round(params.sadValues[i][j] * 100);
        }
        params.compiled.push(' sadness', params.sadValues[i])
        for(let j = 0; j < params.fearValues[i].length; j++){
            params.fearValues[i][j] = Math.round(params.fearValues[i][j] * 100);
        }
        params.compiled.push(' fear', params.fearValues[i])
        for(let j = 0; j < params.angerValues[i].length; j++){
            params.angerValues[i][j] = Math.round(params.angerValues[i][j] * 100);
        }
        params.compiled.push(' anger', params.angerValues[i])
    }
 }

 function clearSaved(){
    joyValues = [];
    sadValues = [];
    fearValues = [];
    angerValues = [];
    compiled = [];
    previousNetwork = '';
 }

 //global "print" function.
 function printValues(){
    let csvContent = "data:text/csv;charset=utf-8,";
    var prev = false;
    params.compiled.forEach(function(rowArray) {
        if(Array.isArray(rowArray)){
            let row = rowArray.join(",");
            csvContent += row + "\r\n";
            prev = false;
        }
        else{
            if(prev){
                csvContent += '\r\n' + rowArray + ",";
                prev = false;
            }
            else{
                csvContent += rowArray + ',';
                prev = true;
            }
        }
    });
    // params.sadValues.forEach(function(rowArray) {
    //     let row = rowArray.join(",");
    //     csvContent += row + "\r\n";
    // });
    // params.fearValues.forEach(function(rowArray) {
    //     let row = rowArray.join(",");
    //     csvContent += row + "\r\n";
    // });
    // params.angerValues.forEach(function(rowArray) {
    //     let row = rowArray.join(",");
    //     csvContent += row + "\r\n";
    // });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "FealingValues.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
 }

/**
 * @param {Number} n
 * @returns Random Integer Between 0 and n-1
 */
const randomInt = n => Math.floor(Math.random() * n);

/**
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 * @returns String that can be used as a rgb web color
 */
const rgb = (r, g, b) => `rgba(${r}, ${g}, ${b})`;

/**
 * @param {Number} r Red Value
 * @param {Number} g Green Value
 * @param {Number} b Blue Value
 * @param {Number} a Alpha Value
 * @returns String that can be used as a rgba web color
 */
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;

/**
 * @param {Number} h Hue
 * @param {Number} s Saturation
 * @param {Number} l Lightness
 * @returns String that can be used as a hsl web color
 */
const hsl = (h, s, l) => `hsl(${h}, ${s}%, ${l}%)`;

/** Creates an alias for requestAnimationFrame for backwards compatibility */
window.requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        /**
         * Compatibility for requesting animation frames in older browsers
         * @param {Function} callback Function
         * @param {DOM} element DOM ELEMENT
         */
        ((callback, element) => {
            window.setTimeout(callback, 1000 / 60);
        });
})();

/**
 * Returns distance from two points
 * @param {Number} p1, p2 Two objects with x and y coordinates
 * @returns Distance between the two points
 */
const getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};