/*

  container > triangleMC > triangleContainer > graphic1
                                             > triangle2
                                             > dot
                         > triangleMask

*/
Triangle_Hana_3 = function($debug){
    this.texture = PIXI.Texture.fromImage('assets/hana/hana_3.png');

    this.container = new PIXI.Container();

    this.triangleMC = new PIXI.Container();
    
    this.container.addChild(this.triangleMC);

    this.triangleContainer = new PIXI.Container();
    this.triangleMC.addChild(this.triangleContainer);

    this.triangleMask = new PIXI.Graphics();
    this.triangleMask.beginFill(0xffffff, .3);
    this.triangleMask.moveTo(0, 0);
    this.triangleMask.lineTo(Math.cos(60 * (-.5) * (Math.PI / 180)) * App.radius, Math.sin(60 * (-.5) * (Math.PI / 180)) * App.radius);
    this.triangleMask.lineTo(Math.cos(60 * ( .5) * (Math.PI / 180)) * App.radius, Math.sin(60 * ( .5) * (Math.PI / 180)) * App.radius);
    this.triangleMask.lineTo(0, 0);
    this.triangleMask.endFill();
    this.triangleMC.addChild(this.triangleMask);

    this.hana_1 = new PIXI.Sprite(this.texture);
    this.triangleContainer.addChild(this.hana_1);
    // this.hana_1.rotation = -30 * (Math.PI / 180); // from 63 * -.5
    // this.hana_1.x = -150;
    // this.hana_1.y = -40;
    this.hana_1.anchor.set(0.35);
    // this.hana_1.scale.x = 0.62;
    // this.hana_1.scale.y = 0.62;

    this.triangle2 = new PIXI.Graphics();
    // this.triangle2.beginFill(0xffffff, 0.4);
    this.triangle2.beginFill(0xff0000, 0.1);
    this.triangle2.moveTo(0, 0);
    this.triangle2.lineTo(Math.cos(60 * (-.5) * (Math.PI / 180)) * App.radius, Math.sin(60 * (-.5) * (Math.PI / 180)) * App.radius);
    this.triangle2.lineTo(Math.cos(60 * ( .5) * (Math.PI / 180)) * App.radius, Math.sin(60 * ( .5) * (Math.PI / 180)) * App.radius);
    this.triangle2.lineTo(0, 0);
    this.triangle2.scale.x = 1;
    this.triangle2.scale.y = 1;
    this.triangleContainer.addChild(this.triangle2);
    this.triangle2.alpha = 0;

    this.triangleContainer.mask = this.triangleMask;
    if($debug == true){
      this.triangleContainer.mask = null;
      this.triangleMask.alpha = 0;
      this.triangle2.alpha = 1;
    }
}

Triangle_Hana_3.prototype = {
  constructor: Triangle_Hana_3,
  build:function(){

  },
  update:function(){
    // console.log("update");

    var ctRange = Math.sin(App.ct * (Math.PI / 180));
    var ctPercent = ctRange * 0.5+0.5;
    // console.log("ctRange: "+ctRange);

    var ctRange2 = Math.sin(App.ct*0.5 * (Math.PI / 180));
    var ctPercent2 = ctRange2 * 0.5+0.5;
    // console.log("ctRange: "+ctRange);

    this.hana_1.rotation = Math.sin((5 + 40 * (1-ctPercent2)) * (Math.PI / 180));
    this.hana_1.scale.x = 0.8 * (1-ctPercent2) + 0.4;
    this.hana_1.scale.y = 0.8 * (1-ctPercent2) + 0.4;

    this.hana_1.x = 20 +20 * (1-ctPercent2);
    this.hana_1.y = 10 +30 * (1-ctPercent2);

    // this.hana_1.x = 50 +30 * (1-ctPercent2);
    // this.hana_1.y = 30 +20 * (1-ctPercent2);
    // -249,  -252

  },
  setX:function($x){
    this.hana_1.x = $x;
  },
  setY:function($y){
    this.hana_1.y = $y;
  },
  setRotation:function($rotate){
    this.hana_1.rotation = Math.sin($rotate * (Math.PI / 180));
  },
  setScale:function($scale){
    this.hana_1.scale.x = $scale;
    this.hana_1.scale.y = $scale;
  }
};
