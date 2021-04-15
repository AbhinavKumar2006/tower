class Chain{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:10
        }
        this.pointB=pointB;
        this.chain = Constraint.create(option);
        World.add(world,this.chain);


    }
    display(){
        if(this.chain.bodyA){
        stroke("green");
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }

    fly(){
        this.chain.bodyA = null;
    }
}