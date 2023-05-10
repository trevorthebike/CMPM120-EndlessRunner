class Play2 extends Phaser.Scene
{
    constructor(){
        super("playScene");
    }
    scoreText;
    gameOver = false;
    score = 0;
    cursors;
    platforms;
    bombs;
    stars;
    player;

    preload ()
    {
        this.load.image('bg', 'assets/bg.png');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('ground', 'assets/platform1.png');
    }

    create ()
    {
        this.ocean = this.add.image(400, 300, 'bg');
        //this.platforms = this.physics.add.group();
        let platformGroup = this.physics.add.group({
            classType: Platform,
            runChildUpdate: true
        });
        for(let i = 0; i < 1; i++){
            let platform = platformGroup.get(this, 250, 150, 'ground').body.setAllowGravity(false);
            
        }
        //this.platforms.create(150, 220, 'ground').body.setAllowGravity(false).setVelocityX(-100);
        let playerGroup = this.physics.add.group({
            classType: Rocket,
            runChildUpdate: true
        });
        for(let i = 0; i < 1; i++){
            let player = playerGroup.get(this, 240, 440 , 'rocket').body.setCollideWorldBounds(true);
            player.reset();
        }
        this.physics.add.collider(platformGroup, playerGroup);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update ()
    {   
      //  if(!this.gameOver) {
            this.ocean.tilePositionX -= 3; 

       // }
        if (this.gameOver){
            return;
        }
    }
}
