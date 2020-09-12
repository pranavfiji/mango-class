class Boy{
    constructor(x,y,width,height)  {
        this.image=loadImage("boy.png");
        this.height=height;
        this.width=width;
        this.body= Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
    displaly(){
      push();
      translate(this.Body.position.x, this.Body.position.y);
     
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }