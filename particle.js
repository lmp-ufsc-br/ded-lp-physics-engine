function Particle(position){
  this.diameter = random(5, 15);
  this.pos = position.copy();
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.lifeSpan = 255;
  
  this.isDead = () => {
    return this.lifeSpan < 0; 
  }
  
  this.update = () => {
    this.acc = p5.Vector.random2D().setMag(0.2);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifeSpan -= 1;
  }
  
  this.display = () => {
    fill(255, this.lifeSpan);
    ellipse(this.pos.x, this.pos.y, this.diameter);
  }
  
}