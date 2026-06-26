

let virat = {
    T20: {
        TotalMatch: 125,
        TotalRuns: 12000,
    },

    ODI: {
        TotalMatch: 260,
        TotalRuns: 14000,
    },

    Test: {
        TotalMatch: 120,
        TotalRuns: 9730,
    }
};

for (let key in virat) {
  
    for(let K in virat[key]){
        console.log(virat[key][K]);
        
    }

  
}