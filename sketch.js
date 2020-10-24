let system;
let scale;

const mean = 0.08;
const std = 0.01;
const scaledDiameter = 10; //px

function setup() {
  createCanvas(400, 400);
  const origin = createVector(width / 2, height / 2);
  system = new ParticleSystem(origin, mean, std);
  scale = new Scale( scaledDiameter, mean, 50);
}

function draw() {
  background(0);

  system.addParticle();
  system.run();
  
  scale.draw();

}

/** References
 * 
 * https://editor.p5js.org/amaralc/sketches/PT2bTpBzU
 * https://editor.p5js.org/amaralc/sketches/Ds3BU_0Jv
 * 
 * https://p5js.org/examples/simulate-particle-system.html
 * https://www.w3schools.com/js/js_object_prototypes.asp
 * https://p5js.org/reference/#/p5.Vector/random2D
 * https://www.youtube.com/watch?v=T84AWnntxZA&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=15&ab_channel=TheCodingTrain
 * https://p5js.org/reference/#/p5/randomGaussian
 * 
 */