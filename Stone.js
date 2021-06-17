class Stone {
    constructor(x, y,height, width) {
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':12
      }
      this.body = Bodies.rectangle(x, y, 20,width, options);
      this.width = width;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        stroke("yellow")
          strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();
    }
  };
  