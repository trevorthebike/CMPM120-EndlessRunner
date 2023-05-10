// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        // this.points = pointValue;
        this.setScale(2);
        this.moveSpeed = 100;
        scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setAllowGravity(false);
        //this.body.onWorldBounds = true;
    }

    update() {
        this.body.setVelocityX(100, true);
        if(this.x < 35) {
             this.reset();
        }
    }
}