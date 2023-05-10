/*
Mountian biking infite runner (haha)
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
            gravity: { y: 300 },
        }
    },
    scene: [ Menu, Play2, Death, Win ]
}

let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = 1;
let keyLEFT, keyRIGHT, keyDOWN, keyUP, keyR, keySPACE;
let enemys;
let enemy;
let spaceship;
let num_enemies = 1;
/*
function startTransition() {this.scene.start('MenuScene')};
function mainTransition() {this.scene.start('PlayScene')};
function winTransition() {this.scene.start('WinScene')};
function deathTransition() {this.scene.start('deathScene');};*/