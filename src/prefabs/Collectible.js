// Rocket prefab
class Collectible extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, frame);
        scene.physics.add.existing(this); 
        this.body.setCollideWorldBounds(true);
        //this.moveSpeed = Math.random() * (200 - 350) + 350;
        this.setPosition(this.y, game.config.height-100);
}

update() {
    if(this.x < 0){ 
        this.y = game.config.height-400 * Math.random();
        this.x = game.config.width;
    }
    this.body.setVelocityX(-100-100*(currtime*0.1));
}

}