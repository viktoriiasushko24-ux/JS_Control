//1
function TriangleArea(base = 5, height = 4) {
    let area = base * height / 2;
    console.log(area);
    return area;
}

TriangleArea(3, 6);
TriangleArea();

//2
function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.pointOfDestination = pointOfDestination;
}

Jet.prototype.AssignPilot = function(name, yearsOfExperience, hasChildren) {
    this.pilot = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasChildren: hasChildren
    };
};

let jet = new Jet("pink", 850, 12000, "Boeing", "London");
jet.AssignPilot("Viktoria Sushko", 3, false);
console.log(jet);


//3
class EquilateralTriangle {
    constructor(equalSide) {
        this.equalSide = equalSide;
    }
    get side() {
        return this.equalSide;
    }
}

class IsoscelesTriangle extends EquilateralTriangle{
  constructor(equalSide, base){
    this.equalSide = equalSide;
    this.base=base;
  }
}
  S=(b/4)*Math.sqrt(4*a**2-b**2)
console.log(IsoscelesTriangle(4, 7))

