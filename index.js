// Add your Circle class here

const pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return (this.radius * 2)
    }

    get circumference(){
        return (this.radius * 2) * pi
    }

    get area(){
        return (this.radius * this.radius) * pi
    }

    set diameter(newDiameter){
        this.radius = (newDiameter / 2)
    }

    set circumference(newCircum){
        this.radius = ((newCircum / 2) / pi)
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea) / pi + 3
    }
}