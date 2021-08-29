class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      this.visibility = 255;
      this.removed = false;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed>3) {      
        if(this.removed === false){
          World.remove(world, this.body);
          this.removed = true
        }
        push();
        tint(255, this.visibility) 
        this.visibility = this.visibility -5
      imageMode(CENTER);
      image(this.image, pos.x,pos.y,this.width, this.height);
      pop();
    }
    else{
      imageMode(CENTER);
      image(this.image, pos.x,pos.y,this.width, this.height); 
    }
    }
}