let system;
let particle;

function setup() {
  createCanvas(400, 400);
  let origin = createVector(width/2, height/2);
  system = new ParticleSystem(origin);
  //particle = new Particle(origin);
}

function draw() {
  background(0);
  
  //particle.update();
  //particle.display();
  
  system.addParticle();
  system.run();
  
}

/** References

https://p5js.org/examples/simulate-particle-system.html
https://www.w3schools.com/js/js_object_prototypes.asp
https://p5js.org/reference/#/p5.Vector/random2D
https://www.youtube.com/watch?v=T84AWnntxZA&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=15&ab_channel=TheCodingTrain

*/