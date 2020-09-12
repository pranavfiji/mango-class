class SlingShot{
    constructor(bodyA,pointBObject,){
        var options = {
            bodyA: bodyA,
            pointB: pointBObject,
            stiffness: 0.04,
            length: 10
        }
        this.fixedPoint=pointBObject;
        this.chain = Constraint.create(options);

        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA!= null){
            var pointA = this.chain.bodyA.position;
       
            strokeWeight(5);
            line(pointA.x, pointA.y,this.fixedPoint.x,this.fixedPoint.y);
        }
      
    }
    swingShot(){
        this.chain.bodyA=null;
    }
}