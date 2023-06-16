let speed;
const speedLimit = 70;
const pointsPerDemerit = 1;

function speedDetector(speed){
    if (speed < 70){
        return "OK";
    }
}

function calculateDemerit(speed){
 if(speed < speedLimit){
    return 0;
 } else if (speed > speedLimit){
    const points = Math.floor((speed - speedLimit) / 5) * pointsPerDemerit;
    return points;
 } else if(points === 12){
    return "License Suspended";
 }
}