function ParticleSystem(position, mean, std){
  
  this.origin = position.copy();
  this.particles = [];
  
  this.addParticle = () => {
    this.particles.push(new Particle(this.origin, 100*randomGaussian(mean, std)));
  }
  
  this.run = () => {
    
    this.particles.forEach((particle, index) => {
      particle.update();
      
      if(particle.isDead()){
        this.particles.splice(index,1);
      } 
      
      particle.display();      
    })
  }
  
  
}