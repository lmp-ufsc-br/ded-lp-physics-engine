function Scale(px, mm, scaleSize){
  
  this.pxPerMilimeter = px / mm;
  this.pixelsPerMicrometer = pixels / mm / 1000;   
  this.label = {    
    milimeters: `${scaleSize / this.pxPerMilimeter} mm`,
    micrometers: `${scaleSize / this.pxPerMicrometer} &micro;m`,    
  }
  
  this.draw = () => {       
    stroke(255);
    strokeWeight(4);
    line(25,25, 25 + scaleSize, 25);   
    
    noStroke();    
    text(`${this.label.milimeters}`, 25, 45);    
  }
  
}
  
  
