class Play2 extends Phaser.Scene
{
    constructor(){
        super("playScene");
    }
    scoreText;
    gameOver = false;
    score = 0;
    currtime  = 0;
    inti = 0;
   
    preload () {
    }

    create () {  
        this.ocean = this.add.tileSprite(0,0,1920,1080, 'bg').setOrigin(0,0);
        let platformGroup = this.physics.add.group({
            classType: Platform,
            runChildUpdate: true
        });

        let playerGroup = this.physics.add.group({
            classType: Player,
            runChildUpdate: true
        });
        
        for(let i = 0; i < num_enemies; i++){
            let platform = platformGroup.get(this, 500*i, 500-i, 'platform').body.setAllowGravity(false);
            platform.setImmovable(true);
        }
        let collectibleGroup = this.physics.add.group({
            classType: Collectible,
            runChildUpdate: true
        });
        
        for(let i = 0; i < num_enemies/2; i++){
            let collectible = collectibleGroup.get(this, 500*i, 500-i, 'collectible').body.setAllowGravity(false);
            collectible.setImmovable(true);
        }
        this.player = playerGroup.get(this, 240, 440 , 'rocket').body.setCollideWorldBounds(true);
        this.player.reset();
        this.physics.add.collider(platformGroup, playerGroup);
        this.physics.add.overlap(collectibleGroup, playerGroup, collectitem, null, this);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        let scoreConfig = {
            fontFamily: 'Sans Serif',
            fontSize: '20px',
            backgroundColor: '#000000',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.timeLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.currtime, scoreConfig);
        this.scoreLeft = this.add.text(game.config.width-100, borderUISize + borderPadding*2, this.score, scoreConfig);
        gamemusic = this.sound.add('bgmusic');
        gamemusic.play({
            volume: 0.5,
            loop: true}   );
    }

    update ()
    {   
        if(this.inti < 100){
            this.inti++
        }
        else if(this.inti == 100){
            currtime++;
            this.inti = 0;
        }
        this.timeLeft.text = currtime; 
        this.scoreLeft.text = score; 
        if(this.player.y > this.game.config.height-40){
           this.scene.start('deathScene');
        }
        this.ocean.tilePositionX += 1 + 0.1 * currtime; 
    }
}