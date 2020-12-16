class Slingshot {
    constructor(Body, point) {
        var options= {
            bodyA:Body,
            pointB:point,
            stiffness:0.01,
            length:10
          }
        
          this.sling= Constraint.create(options);
          World.add(myworld, this.sling);
    }




    display() {
        
        push();
        if(this.sling.bodyA!= null) {
        var pointA= this.sling.bodyA.position;
        var pointB= this.sling.pointB;
        strokeWeight(10)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        pop();

    }


    fly() {
        this.sling.bodyA= null;



    }
}