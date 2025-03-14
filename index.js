// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if (location >= 42) {
        return location - 42
    } else {
        return Math.abs(location - 42)
    }
}

function distanceFromHqInFeet(location) {
    distanceFromHqInBlocks(location);
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    } else {
        return Math.abs(destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
  }