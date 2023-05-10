class Win extends Phaser.Scene {
    constructor() {
        super("winScene");
    }

    preload() {
        this.load.image('deathimage1', 'assets/collectallcoins.png');
    }

    create() {
        gamemusic.stop();
        deathimage = this.add.image( 500, 350,'deathimage1');
        this.input.on('pointerup',startTransition, this);
    }
}