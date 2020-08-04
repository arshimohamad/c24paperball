class Ball{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(100,300,50,options);
        this.radius = 50;
    
         World.add(world,this.body)   
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS)
    ellipse(0,0,this.width,this.height)
    pop()
}
}