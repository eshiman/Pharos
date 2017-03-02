'''
Authors: Esther Shimanovich, Jeremy Savarin and Abbas Furniturewalla

Calculates the location of the third device using the cosine formula.
a^2 = b^2 + c^2 - 2bc(cosA)
'''
import math

class Localizer:
    'Assume distance in meters'
    Distance1 = 0
    Distance2 = 0
    DistanceBetweenNodes = 5
    xVal = 0
    yVal = 0

    'So we assume that Node1 is = (0,0) , Node2 = (0, dist(Node1,Node2)) and we find relative location of Node3'
    def __init__(self, distance1, distance2):
        self.Distance1 = distance1
        self.Distance2 = distance2
        self.DistanceBetweenNodes = 5
        a2 = math.exp(self.Distance1)
        b2 = math.exp(self.Distance2)
        c2 = math.exp(self.DistanceBetweenNodes)
        angle =  math.acos((a2-b2-c2)/(-2*b2*c2))
        self.xVal = math.sin(angle)*self.Distance2
        self.yVal = math.cos(angle)*self.Distance1

