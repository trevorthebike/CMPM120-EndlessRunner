/*
Trevor Gardner
Endless runner V700000
23 hours (physics aah)

Creative Tilt:
I added gravity that makes the players jumps feel much more realistic. 
I made the background and platfroms and the background move faster as the time increased,
increasing difficulty and the feeling of speed in the game.This also gives the cool visual effect 
of the vertically falling healths to appear to move sideways as it speeds up.
I added an ememy that flys at the the player in the horizontal direction and that takes one health away
from the player. The player also loses on health from hitting the ground. There are also falling health
pickups that give the player more health if they overlap. 


*/


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