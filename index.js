//Array Reduce Lab

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//solution 

const totalBatteries = batteryBatches.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0)

//No recreation of common functions