let config = {
    type: Phaser.CANVAS,
    zoom: 1, 
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 640,
        height: 480,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
        }
    },
    scene: [ Menu, Play2, Death ]
}

let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = 1;
let keyLEFT, keyRIGHT, keyDOWN, keyUP, keyR, keySPACE;
let spaceship;
let num_enemies = 5;
let currtime = 0;
let inti;
let gamemusic;
let bounce;
let try1;
let try2;
let collectibleitem;
let score = 1;
let scoretext;
/*
function collectitem(){
    console.log("collided!");
   // console.log(player.x)
    collect = this.sound.add('collectsound');
    collect.play({
    volume: 1,
    loop: false}   );
   // player.body.disableBody(true,true);
    score++;
   // scoretext.setText('Current Score: ' + score);
}*/