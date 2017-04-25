/*
Authors: Esther Shimanovich

Calculates the location of the third device using the cosine formula.
a^2 = b^2 + c^2 - 2bc(cosA)
*/
import math

function localizer(distance1, distance2){
    // Assume distance in meters
    var Distance1 = distance1;
    var Distance2 = distance2;
    var DistanceBetweenNodes = 0.4;
    var x = 0.0;
    var y = 0.0;

    // So we assume that Node1 is = (0,0) , Node2 = (0, dist(Node1,Node2)) and we find relative location of Node3

        a2 = Math.pow(Distance1,2);
        b2 = Math.pow(Distance2,2);
        c2 = Math.pow(DistanceBetweenNodes,2);
        angle =  Math.acos((a2-b2-c2)/(-2*b2*c2))
        x = Math.sin(angle)*Distance2
        y = Math.cos(angle)*Distance1
return {
    x,
    y
}

}