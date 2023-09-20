// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice (0,2)
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice (-2)
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
];

function createFareMultiplier (num) {
    return function (fare) {
        return (fare * num);
    }
}

function fareDoubler(fare){
    return (fare*2)
}

function  fareTripler(fare) {
    return (fare*3)
}

function selectDifferentDrivers (drivers, firstTwoOrLastTwo) {
    if (firstTwoOrLastTwo == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);}
    else if (firstTwoOrLastTwo == returnLastTwoDrivers) {
        return returnLastTwoDrivers (drivers);
    }
    }
