// Rocket prefab
class Platform extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y);
        texture = 'platfrom';
        // Add physics properties
        scene.physics.add.existing(this);  
        //this.body.setCollideWorldBounds(true);
        //this.body.setVelocityY(0);
    }

    update() {
        //console.log("Platform x: " + this.x);
        console.log("Platform y: " + this.y);
       // this.body.setVelocityX(100);
    }
}
