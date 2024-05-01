let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (var x in statistics) {
    //console.log(x);
    //console.log(statistics.blackCars)
    if ((x[0] === 'r')) {
        console.log(statistics[x]);
    }
    else if (statistics[x]%2 === 1) {
        console.log(statistics[x]);
    }
}