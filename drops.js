class Drops{
constructor(x,y){
    var options={
        restitution: 0.4,
    friction : 0.2,
    }
    this.body=Bodies.circle(x,y,20,options);
    World.add(world, this.body);

}


display(mode){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        
        if (mode == 0) {
            fill("black");
        } else {
            fill("blue");
        }
        
        ellipseMode(CENTER);
        ellipse(0, 0, 5,5);

        //imageMode(CENTER);
        //image(this.image,0,0,10,10);
        pop();
}

}
