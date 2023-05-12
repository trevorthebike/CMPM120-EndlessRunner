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
        score = 1;
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
        this.collectible = collectibleGroup.get(this, 100, 100, 'collectible').body.setAllowGravity(false);
        let enemyGroup = this.physics.add.group({
            classType: Enemies,
            runChildUpdate: true
        });
        this.enemy = enemyGroup.get(this, 100, 100, 'enemy').body.setAllowGravity(false);
        this.enemy.setImmovable(true);
        this.player = playerGroup.get(this, 240, 440 , 'rocket').body.setCollideWorldBounds(true);
        this.player.reset();
        this.physics.add.collider(platformGroup, this.player, makeSound), null, this;
        this.physics.add.overlap(this.collectible, playerGroup, collectitem, null, this);
        this.physics.add.collider(this.enemy, playerGroup, hitEnemy, null, this);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        let scoreConfig = {
            fontFamily: 'Sans Serif',
            fontSize: '20px',
            backgroundColor: '#FFFFFF',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.timeLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, "Time:  "   + this.currtime, scoreConfig);
        this.scoreLeft = this.add.text(game.config.width-100, borderUISize + borderPadding*2, "Heakth:  " + this.score, scoreConfig);
        gamemusic = this.sound.add('bgmusic');
        gamemusic.play({
            volume: 0.5,
            loop: true}   );
        bounce = this.sound.add('caught');
        try1= this.sound.add('try');
        try2= this.sound.add('try1');
        /*bounce.play({
            volume: 1,
            loop: false}   );*/
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
        this.timeLeft.text = "Time:  " +  currtime; 
        this.scoreLeft.text = "Health  " + score; 
        if(this.player.y > this.game.config.height-40){
            if(score <= 0){
                console.log(score);
                this.scene.start('deathScene');
            }
            else{
                this.player.y = 0;
                this.player.x = Math.random() * 500 + 100;
                score--;
                try1.play({
                    volume: 1,
                    loop: false}   );;
            }
        }
        this.ocean.tilePositionX += 1 + 0.1 * currtime; 
    }
}


function collectitem(){
    this.collectible.reset();
    collect = this.sound.add('collectsound');
    collect.play({
    volume: 1,
    loop: false}   );
    score++;
}

function hitEnemy(){;;
    if(score <= 0){
        console.log(score);
        this.scene.start('deathScene');
    }
    else{
        this.player.y = 0;
        this.player.x = Math.random() * 500 + 100;
        score--;
        try1.play({
            volume: 1,
            loop: false}   );;
    }
}

function makeSound(){
    bounce.play({
        volume: 1,
        loop: false}   );;
}