class Ball{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10);
        this.radius = 10;
        World.add(world,this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        angleMode(RADIANS);
        ellipseMode(CENTER);
        ellipse(0,0,30,30);
        pop();
    }
}