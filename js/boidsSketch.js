
let flockSize;

var flock = [];
let winWidth, winHeight;

// making it 11 since 0 index will not be used


function setup() {
    flock = [];
    winWidth = window.innerWidth - 80;
    winHeight = window.innerHeight;

    flockSize = Math.round(map(winWidth, 100, 1440, 10, 60, true));

    var cnv = createCanvas(winWidth, winHeight);
    cnv.style('display', 'block');
    cnv.parent('boids-sketch');

    // new


    // TODO: Remove below line
    //flockSize = 20;


    for (let i = 0; i < flockSize; i++) {
        flock.push(new Boid());
    }

    // vid 8:53

}
/*
console.log(flockSize);

flock = new Flock();
// Add an initial set of boids into the system
for (let i = 0; i < flockSize; i++) {
    let b = new Boid(width / 2, height / 2);

    // new -----------
    console.log(b);

    let column = int(b.position.x) / 10;
    let row = int(b.position.y) / 10;
    boidGrid[column][row].push(b);

    //----------------


    flock.addBoid(b);
}
 
}
*/

// TODO: Remove below
var outputted = false;


function draw() {
    frameRate(60);
    background('#949494');

    // creating a 2d array for holding boid objects at the corresponding column and row index
    let boidCells = new Array(10);

    for (let i = 0; i < boidCells.length; i++) {
        boidCells[i] = [new Array(1)]; // for holding the row index
    }

    if (outputted === false) {

        let columnsNum = 10;
        let rowsNum = 10;
        // ceil --> round up number

        // TODO: might need to change to floor?
        /*
        let columnCellSize = Math.ceil(winWidth / columnsNum);
        let rowCellSize = Math.ceil(winHeight / rowsNum);


        let columnIndex;
        let rowIndex;
        */

        /*
        for (let boid of flock) {
            console.log('in for loop');
            // Organize each boid into a quadrant (row & column index)

            // column index = floor round(x position / x cell or quadrant width)
            console.log(`boid x position = ${boid.position.x}   columnCellSize = ${columnCellSize}`);
            let columnIndex = Math.floor(boid.position.x / columnCellSize);

            // row index = ceiling round(y position / y cell/quadrant width)
            let rowIndex = Math.floor(boid.position.y / rowCellSize);

            console.log(`rowIndex = ${rowIndex}   colIndex = ${columnIndex}`);
            // boidCells[columnIndex][rowIndex].push(boid);

            // create a array at the 2d array index and push the boid into it
            boidCells[columnIndex][rowIndex] = [];
            boidCells[columnIndex][rowIndex].push(boid);

            // make boid object keep track of its col and row index
            boid.column = columnIndex;
            boid.row = rowIndex;
        }
        */

        // for (let boid of flock) {
        //     boid.checkEdgeBoundaries();

        //     // find and store nearby boids
        //     // let nearbyBoidsArray = getNearbyBoids(boid.column, boid.row, boidCells, boid, rowsNum, columnsNum);

        //     // console.log(nearbyBoidsArray);


        //     // Below line needs to be optimized
        //     boid.applyBoidProperties(flock);

        //     boid.update();
        //     boid.show();
        // }

        console.log(boidCells);
        outputted = true;
    }

    for (let boid of flock) {
        boid.checkEdgeBoundaries();

        // find and store nearby boids
        // let nearbyBoidsArray = getNearbyBoids(boid.column, boid.row, boidCells, boid, rowsNum, columnsNum);

        // console.log(nearbyBoidsArray);


        // Below line needs to be optimized
        boid.applyBoidProperties(flock);

        boid.update();
        //boid.show();
        boid.render();
    }

}

function windowResized() {

    console.log('window resized');
    setup();
}

function getNearbyBoids(boidCellX, boidCellY, boidCells, boid, rows, columns) {


    console.log(boidCells);

    let nearbyBoids = [];

    let newX;
    let newY;

    console.table(boidCells);
    // current cell
    if (boidCells[boid.column][boid.row].length != 0) {
        nearbyBoids = nearbyBoids.concat(boidCells[boid.column][boid.row]);
    }

    // top cell
    newY = (boidCellY + 1 < rows) ? boidCellY + 1 : 0;
    console.log(boidCells[boidCellX][newY]);
    let topBoidCell = []
    topBoidCell = topBoidCell.concat(boidCells[boidCellX][newY]);

    if (topBoidCell.length != 0) {
        nearbyBoids = nearbyBoids.concat(topBoidCell);
    }

    // top-right cell
    newX = (boidCellX + 1 < columns) ? boidCellX + 1 : 0;
    let topRightBoidCell = boidCells[newY][newX];

    if (boidCells[newY][newX].length != 0) {
        nearbyBoids = nearbyBoids.concat(topRightBoidCell);
    }

    // right cell
    let rightBoidCell = boidCells[newX][boidCellY];

    if (rightBoidCell.length != 0) {
        nearbyBoids = nearbyBoids.concat(rightBoidCell);
    }

    // bottom-right cell
    newY = (boidCellY - 1 >= 0) ? boidCellY - 1 : rows - 1;
    let bottomRightCell = boidCells[newX][newY];

    if (bottomRightCell.length != 0) {
        nearbyBoids = nearbyBoids.concat(bottomRightCell);
    }

    // bottom cell
    let bottomCell = boidCells[boidCellX][newY];

    if (bottomCell.length != 0) {
        nearbyBoids = nearbyBoids.concat(bottomCell);
    }

    // bottom-left cell
    newX = (boidCellX - 1 >= 0) ? boidCellX - 1 : columns - 1;
    let bottomLeftCell = boidCells[newX][newY];

    if (bottomLeftCell.length != 0) {
        nearbyBoids = nearbyBoids.concat(bottomLeftCell);
    }

    // left cell
    let leftCell = boidCells[newX][boidCellY];

    if (leftCell.length != 0) {
        nearbyBoids = nearbyBoids.concat(leftCell);
    }

    // top-left cell
    newY = (boidCellY + 1 < rows) ? boidCellY + 1 : 0;
    let topLeftCell = boidCells[newX][newY];

    if (topLeftCell.length != 0) {
        nearbyBoids = nearbyBoids.concat(topLeftCell);
    }

    return nearbyBoids;
}

// ------------------------------------------------
class Boid {
    constructor() {
        // boid will spawn in the middle of the canvas
        this.position = createVector(random(winWidth), random(winHeight));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4))
        this.acceleration = createVector();
        this.column;
        this.row;

        // TODO: Make separate force values for cohesion, alignment and ...
        // maxForce determines how much each boid will be attracted to each other 
        // Higher values increase attraction
        this.maxForce = 0.2;

        this.maxSpeed = 3;

        // Cool things, maxForce set to 1 and speed to 5 and just apply seperation.
    }

    // Handle when boids hit edges
    checkEdgeBoundaries() {
        if (this.position.x >= winWidth) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = winWidth;
        }

        if (this.position.y >= winHeight) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = winHeight;
        }
    }

    applyBoidProperties(boids) {
        // Reset acceleration since the acceleration should not accumulate
        //this.acceleration.set(0, 0);
        // below does the same thing as above, multiplying a vector makes it zero
        this.acceleration.mult(0);


        let alignment = this.align(boids);
        let cohesion = this.applyCohesion(boids);
        //this.acceleration = Math.sqrt(Math.pow(alignment, 2) + Math.pow(cohesion, 2));

        let separation = this.applySeparation(boids)


        // Add the forces together (sum the forces)
        // NOTE: Since mass is equal for all (1), acceleration is the force value
        // F = m * a   --->     F = 1 * a    --->    F = a
        this.acceleration.add(separation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
    }

    // this function will align this boid with all the other boids
    // Steer towards the average heading of local flockmates/boids - Craig Reynolds
    align(boids) {
        let perceptionRadius = 50;

        let steeringForce = createVector();

        let total = 0;

        // TODO: Optimize later
        for (let other of boids) {

            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (d < perceptionRadius && other != this) {

                // adding all the velocity "vectors" into steeringForce, will be used to find average velocity of boids in its perceptions range
                steeringForce.add(other.velocity);

                total++;
            }

        }

        // only divide when there atleast one boid in the perception range
        if (total > 0) {
            steeringForce.div(total);
            steeringForce.setMag(this.maxSpeed);
            steeringForce.sub(this.velocity);
            steeringForce.limit(this.maxForce);
        }

        return steeringForce;

    }

    applyCohesion(boids) {
        let perceptionRadius = 50;

        let steeringForce = createVector();

        let total = 0;

        // TODO: Optimize later
        for (let other of boids) {

            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (d < perceptionRadius && other != this) {
                // adding all the position "vectors" into steeringForce, will be used to find average velocity of boids in its perceptions range
                steeringForce.add(other.position);

                total++;
            }

        }

        // only divide when there atleast one boid in the perception range
        if (total > 0) {
            steeringForce.div(total);

            steeringForce.sub(this.position);

            steeringForce.setMag(this.maxSpeed);
            steeringForce.sub(this.velocity);
            steeringForce.limit(this.maxForce);
        }

        return steeringForce;
    }

    // Steer to avoid crowding local flock-mates - Craig Reynolds
    applySeparation(boids) {

        let perceptionRadius = 50;

        let steeringForce = createVector();

        let total = 0;

        // TODO: Optimize later
        for (let other of boids) {

            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);

            // d (distance from other boid has to be within the perception radius)
            // AND the other boid cant be the one we are already analyzing
            if (d < perceptionRadius && other != this) {

                // p5.Vector.sub( __ , __ ) ==> Subtract two vectors and gets a new vector
                let diff = p5.Vector.sub(this.position, other.position);

                // Make it so the vector diff is inversely proportionate to the distance
                // EX: larger distance to other boid = smaller diff vector,
                //     smaller distance to another boid = larger diff vector
                // diff.mult(1 / d)
                diff.div(d);

                // adding the diff vector to get sum later
                steeringForce.add(diff);

                total++;
            }

        }

        // only divide when there at least one boid in the perception range
        if (total > 0) {
            steeringForce.div(total);

            steeringForce.setMag(this.maxSpeed);
            steeringForce.sub(this.velocity);
            steeringForce.limit(0.25);
        }

        return steeringForce;

    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed)
    }

    show() {
        strokeWeight(8);
        stroke(255);
        point(this.position.x, this.position.y)

    }

    render() {
        // Draw a triangle rotated in the direction of velocity
        let theta = this.velocity.heading() + radians(90);

        // Shape Color
        fill('#03DAC6');
        stroke('#000000');
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();

        // vertex(2, this.r * -2);
        // vertex(-this.r, this.r * 2);
        // vertex(2, this.r * 2);
        // vertex(this.r, this.r * 2);

        vertex(-10 / 5, 10 / 5);
        vertex(0, 35 / 5);
        vertex(10 / 5, 10 / 5);
        vertex(35 / 5, 0);
        vertex(10 / 5, -8 / 5);
        vertex(0, -35 / 5);
        vertex(-10 / 5, -8 / 5);
        vertex(-35 / 5, 0);
        endShape(CLOSE);
        pop();
    }





}





// Add a new boid into the System
// function mouseDragged() {
//     flock.addBoid(new Boid(mouseX, mouseY));
// }

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flock object
// Does very little, simply manages the array of all the boids
/*
function Flock() {
    // An array for all the boids
    this.boids = []; // Initialize the array
}

Flock.prototype.run = function () {
    // TODO: Fix this (Very Bad Performance O(n^2))



    for (let i = 0; i < this.boids.length; i++) {



        this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
    }
}

Flock.prototype.addBoid = function (b) {
    this.boids.push(b);
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.position = createVector(x, y);
    this.r = 1.0;
    this.maxspeed = 3;    // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
}

Boid.prototype.run = function (boids) {
    this.flock(boids);
    this.update();
    this.borders();
    this.render();
}

Boid.prototype.applyForce = function (force) {
    // We could add mass here if we want A = F / M
    this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function (boids) {
    let sep = this.separate(boids);   // Separation
    let ali = this.align(boids);      // Alignment
    let coh = this.cohesion(boids);   // Cohesion
    // Arbitrarily weight these forces
    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(0.8);
    // Add the force vectors to acceleration
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
}

// Method to update location
Boid.prototype.update = function () {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelertion to 0 each cycle
    this.acceleration.mult(0);
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function (target) {
    let desired = p5.Vector.sub(target, this.position);  // A vector pointing from the location to the target
    // Normalize desired and scale to maximum speed
    desired.normalize();
    desired.mult(this.maxspeed);
    // Steering = Desired minus Velocity
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);  // Limit to maximum steering force
    return steer;
}

Boid.prototype.render = function () {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.velocity.heading() + radians(90);

    // Shape Color
    fill('#03DAC6');
    stroke('#000000');
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();

    // vertex(2, this.r * -2);
    // vertex(-this.r, this.r * 2);
    // vertex(2, this.r * 2);
    // vertex(this.r, this.r * 2);

    vertex(-10 / 5, 10 / 5);
    vertex(0, 35 / 5);
    vertex(10 / 5, 10 / 5);
    vertex(35 / 5, 0);
    vertex(10 / 5, -8 / 5);
    vertex(0, -35 / 5);
    vertex(-10 / 5, -8 / 5);
    vertex(-35 / 5, 0);
    endShape(CLOSE);
    pop();
}

// Wraparound
Boid.prototype.borders = function () {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function (boids) {
    let desiredseparation = 25.0;
    let steer = createVector(0, 0);
    let count = 0;
    // For every boid in the system, check if it's too close
    for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
        if ((d > 0) && (d < desiredseparation)) {
            // Calculate vector pointing away from neighbor
            let diff = p5.Vector.sub(this.position, boids[i].position);
            diff.normalize();
            diff.div(d);        // Weight by distance
            steer.add(diff);
            count++;            // Keep track of how many
        }
    }
    // Average -- divide by how many
    if (count > 0) {
        steer.div(count);
    }

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
        // Implement Reynolds: Steering = Desired - Velocity
        steer.normalize();
        steer.mult(this.maxspeed);
        steer.sub(this.velocity);
        steer.limit(this.maxforce);
    }
    return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function (boids) {
    let neighbordist = 50;
    let sum = createVector(0, 0);
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        if ((d > 0) && (d < neighbordist)) {
            sum.add(boids[i].velocity);
            count++;
        }
    }
    if (count > 0) {
        sum.div(count);
        sum.normalize();
        sum.mult(this.maxspeed);
        let steer = p5.Vector.sub(sum, this.velocity);
        steer.limit(this.maxforce);
        return steer;
    } else {
        return createVector(0, 0);
    }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function (boids) {
    let neighbordist = 50;
    let sum = createVector(0, 0);   // Start with empty vector to accumulate all locations
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        if ((d > 0) && (d < neighbordist)) {
            sum.add(boids[i].position); // Add location
            count++;
        }
    }
    if (count > 0) {
        sum.div(count);
        return this.seek(sum);  // Steer towards the location
    } else {
        return createVector(0, 0);
    }
}

*/

