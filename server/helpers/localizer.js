/*
Authors: Esther Shimanovich
Calculates the location of the third device using the cosine formula.
a^2 = b^2 + c^2 - 2bc(cosA)
*/

function localizer(distance1, distance2){
    // Assume distance in meters
    var DistanceBetweenNodes = 2.0;

    let d1 = distance1;
    let d2 = distance2;

    while(distance1+DistanceBetweenNodes< distance2){
        d1 += 0.3;
    }

    while (distance2+DistanceBetweenNodes< distance1){
        d2 += 0.3;
    }
    // So we assume that Node1 is = (0,0) , Node2 = (0, dist(Node1,Node2)) and we find relative location of Node3

    let a2 = Math.pow(d1,2);
    let b2 = Math.pow(d2,2);
    let c2 = Math.pow(DistanceBetweenNodes,2);
    let angle =  Math.acos((a2-b2-c2)/(-2*distance2*DistanceBetweenNodes));
    var x = Math.sin(angle)*distance2;
    var y = Math.cos(angle)*distance1;

    return {
        x,
        y
    };
}

// console.log(localizer(3, 3));

module.exports = localizer;
