let game;

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    }, 

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 450 },
            debug: false
        }
    },
    
    scene: [menu,creditos,instrucciones,selecniveles,nivel1,scenenivsup,scene4,endgame]
};



//-game = new Phaser.Game(config);

var platforms;
var piso;
var robot;
var cursors;

var medallas;
var vidas;
var powerup;
var background;
var WorldWalls;
var enemigos;
var respawn;
var respawn1;
var misiles;
var informacion;
var infovalor;
var vidavalor;

var tiempoEvent;
var tiempoini;
var tiempoText;
var tiemposeg;
var scoreText;
var infotext;
var vidastext;

var score;
var gameOver;
var gameWin;

var spaceBar;
var balas;
var lastFired= 0;
var Bala;

var balas2;
var lastFired2= 0;
var Bala2;

var balas3;
var lastFired3= 0;
var Bala3;
var v= Phaser.Math.Between(4,8);
var v1= Phaser.Math.Between(9,12);

var musicamen;
var musica;
var musicasup;
var perdido;
var sfxboton;
var sfxmed;
var sfxinfo;
var sfxvida;
var sfxdaño;
var sfxdisp;
var sfxdispen;
var sfxmuerten;




window.onload = function(){
    game = new Phaser.Game(config)
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame());
}
var resizeGame = function(){
    let canvas = document.querySelector("canvas");
    const {innerWidth,innerHeight} = window;
    const ratio = innerWidth / innerHeight;
    const gameRatio = game.config.width / game.config.height;
    
    if(ratio < gameRatio){
        canvas.style.width = innerWidth + "px";
        canvas.style.height = innerHeight / gameRatio + "px";
    }
    else{
        canvas.style.width = innerWidth - gameRatio + "px";
        canvas.style.height = innerWidth + "px";
    }
}
