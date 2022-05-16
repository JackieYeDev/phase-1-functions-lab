// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const hq = 42;
    const blocks = street - hq;
    return Math.abs(blocks);
}

function distanceFromHqInFeet(street) {
    const numberOfBlocks = distanceFromHqInBlocks(street) * 264;
    return numberOfBlocks;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination-start)*264);
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs((destination - start)*264);
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return ((distance - 400) * 0.02);
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return `cannot travel that far`;
    } else { 
        return `Error in inputs.`;
    }
}