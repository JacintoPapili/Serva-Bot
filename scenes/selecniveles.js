class selecniveles extends Phaser.Scene {
  constructor() {
    super('seleccion');
  }
    
    
    

  create (){
    this.add.image(960, 540,"fondomenu");
    this.add.image(960,540,"niveles")

    var niv1=this.add.image(580,640,"niv1")
    niv1.setInteractive()
    niv1.on('pointerdown', () => this.scene.start('nivel1'))

    this.a

    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    botonvolver.on('pointerdown', () => this.scene.start('inicio'))
  }

 update ()
 {
  
 }
}
