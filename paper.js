class paper{
    constructor(){
    var options = {
    isStatc : false, 
    restitution:0.3,
    friction:0,
    density: 1.8
    }
    
    
    this.body=Bodies.circle(250,540,20 , options);
    this.width = 33
    this.image = loadImage("paper.png")
    World.add(world, this.body);
}
display(){

var pos = this.body.position;
var angle = this.body.angle

fill("white")
rotate (angle)
imageMode(CENTER);
image(this.image,pos.x,pos.y,33,33)
    }
}