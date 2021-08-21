class menu extends Phaser.Scene {
  constructor() {
    super('inicio');
  }
  preload ()
  { 
   
    this.load.image("fondomenu", "./assets/Sprites/Backgrounds/background_menus.png");
    this.load.image("logo", "./assets/Sprites/Logo/logo.png");
    this.load.image("botonInstrucciones","./assets/Sprites/Interface/Buttons/instructions.png");
    this.load.image("botonJugar","./assets/Sprites/Interface/Buttons/Play.png");
    this.load.image("botonCreditos","./assets/Sprites/Interface/Buttons/Play.png");
    this.load.image("creditos","./assets/Sprites/Interface/PopUps/credits.png");
    this.load.image("niveles","./assets/Sprites/Interface/PopUps/levels.png");
    this.load.image("volver","./assets/Sprites/Interface/Buttons/back.png");
    this.load.image("niv1","./assets/Sprites/Interface/Buttons/level_1.png");
    this.load.image("pausa","./assets/Sprites/Interface/Buttons/pause.png");
    this.load.image("nivelblock","./assets/Sprites/Interface/Buttons/level_blocked.png");
    this.load.image("mutear","./assets/Sprites/Interface/Buttons/sound_mute_v2.png");
    this.load.image("fondoniv1", "./assets/Sprites/Backgrounds/background_1.png");
    this.load.image("barrageneral","./assets/Sprites/Interface/Bars/general.png" )
    this.load.image("barrabasura","./assets/Sprites/Interface/Bars/cuota_up.png" )
    this.load.image("barravida","./assets/Sprites/Interface/Bars/life_up.png" )
    this.load.image("recuadro","./assets/Sprites/Interface/Extras/Frame.png" )
    this.load.image("ganchopunta","./assets/Sprites/Serva/grippesr_open.png")


    this.load.spritesheet('personaje', './assets/Sprites/Serva/´spritessheet.png', { frameWidth: 800, frameHeight: 150 });
  }

  create() {


    this.anims.create({
      key: 'feliz',
      frames: this.anims.generateFrameNumbers('personaje', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: 1
    });


    var fondo=this.add.image(960, 540,"fondomenu");
    var logo=this.add.image(960, 420,"logo")
    
    
    var botonins=this.add.image(220,950,"botonInstrucciones")
    botonins.setInteractive()
    botonins.on('pointerdown', () => this.scene.start('instrucciones'))
   
    var botonjugar=this.add.image(960,910,"botonJugar")
    botonjugar.setInteractive()
    botonjugar.on('pointerdown', () => this.scene.start('seleccion'))
   
    var botonCreditos=this.add.image(1690,950,"botonCreditos")
    botonCreditos.setInteractive()
    botonCreditos.on('pointerdown', () => this.scene.start('creditos'))

  }

}
