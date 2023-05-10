class Death extends Phaser.Scene {
    constructor() {
        super("deathScene");
    }

    preload() {
        this.load.image('playerdeath', 'assets/death.png');
    }

    create() {
        gamemusic.stop();
        playerdeathimage = this.add.image( 500, 350,'playerdeath');
        this.input.on('pointerup',startTransition, this);
    }
}