class nivel1 extends Phaser.Scene {
  constructor() {
    super('nivel1');
  }
  create(){
    this.add.image(960, 540, "fondoniv1");

    this.add.image(960, 540, "recuadro");
    this.add.image(960, 40, "barrageneral");
    this.add.image(1000, 49, "barrabasura");
    this.add.image(960, 105, "barravida");
      
    
    var botonmute = this.add.image(60, 60,"mutear")
    .setInteractive()
    .on("pointerdown",() => this.mutear());

    var pausa = this.add.image(1860, 60,"pausa")
    .setInteractive()
    .on("pointerdown",() => this.pausar());
      

    //gancho= this.physics.add.staticGroup();

    robot = this.physics.add.sprite(960, 500, 'personaje')
  

  } 
  update(){






  }

  //mutear(){
  //  this.MúsicaLVL.stop()
  //}

  //pusar(){
  //  
  //}

}



