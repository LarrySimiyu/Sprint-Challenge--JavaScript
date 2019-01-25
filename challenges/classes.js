// 1. Copy and paste your prototype in here and refactor into class syntax.

// changed the class name so it can be seen in the console with prototype file
//was conflicting before showing CuboidMaker as already created.


class BoidMaker {
    constructor(cuboidAttr){
    this.length = cuboidAttr.length;
    this.width = cuboidAttr.width;
    this.height = cuboidAttr.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);

    }
}


const lilBoid = new BoidMaker({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(lilBoid.volume()); // 100
console.log(lilBoid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.