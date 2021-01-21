class Umbrella{
constructor(x,y){
    this.body=Bodies.circle(400,800,20);
    World.add(world, this.body);
    this.image=loadImage("/images/Walking Frame/walking_1.png");
}

display(){
    push();
    imageMode(CENTER)
    image(this.image,this.body.position.x+100,this.body.position.y-100,350,350);

    
    pop();
}
}