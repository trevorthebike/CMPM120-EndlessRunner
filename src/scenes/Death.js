class Death extends Phaser.Scene {
    constructor() {
        super("deathScene");
    }

    preload() {
        this.load.image('playerdeath', 'assets/death.png');
        this.load.audio('new', "assets/explosion.38.wav");
    }

    create() {
        gamemusic.stop();
        let playerdeathimage = this.add.image( game.config.width/2, game.config.height/2, 'playerdeath').setScale(0.7);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        let scoreConfig = {
            fontFamily: 'Sans Serif',
            fontSize: '30px',
            backgroundColor: '#000000',
            color: '#843605',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,
            },
            //fixedWidth: 300
        }
        this.scoreLeft = this.add.text(170, 250, "Final Score:    " + currtime, scoreConfig);
        currtime = 0;
        score  = 0;
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyR)){ this.scene.start('startScene')};
      }
}