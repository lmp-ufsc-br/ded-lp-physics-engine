function ParticleSystem(position){
  
  this.origin = position.copy();
  this.particles = [];
  
  this.addParticle = () => {
    this.particles.push(new Particle(this.origin));
  }
  
  this.run = () => {
    
    this.particles.forEach((particle, index) => {
      particle.update();
      if(particle.isDead()){
        this.particles.splice(index,1);
      } 
      particle.display();      
    })
    
    /**
    for (let i = this.particles.length - 1; i>=0; i--){
      let p = this.particles[i];
      p.update();
      if(p.isDead()){
        this.particles.splice(i,1);
      }
      p.display();      
    }
    */
  }
  
  
}