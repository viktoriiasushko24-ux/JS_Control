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

class IsoscelesTriangle extends EquilateralTriangle {
    constructor(equalSide, base) {
        super(equalSide);
        this.base = base;
    }
    static area(a, b) {
        return b / 4 * Math.sqrt(4 * a * a - b * b);
    }
}

//4
let triangle1 = new EquilateralTriangle(6);
console.log(triangle1);
console.log(triangle1.side);

let triangle2 = new IsoscelesTriangle(5, 6);
console.log(triangle2);
console.log(IsoscelesTriangle.area(triangle2.equalSide, triangle2.base));

//5
function AddGenerator(number) {
    return function(value) {
        return number + value;
    };
}

let add1 = AddGenerator(5);
let add2 = AddGenerator(10);

console.log(add1(3));
console.log(add2(7));
