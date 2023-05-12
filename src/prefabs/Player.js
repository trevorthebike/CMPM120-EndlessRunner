// Rocket prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, frame);
        //texture = 'rocket';
        // Add physics properties
        scene.physics.add.existing(this);  
        this.body.setCollideWorldBounds(true);
        this.body.onWorldBounds = true; 
        this.moveSpeed = 200; 
        this.setScale(0.5);
    }

    update() {
        this.moveSpeed = 200 + (currtime*0.1);
        if(keySPACE.isDown && this.body.touching.down) {
            this.body.setVelocityY(-this.moveSpeed);
        }
        if(keyLEFT.isDown) {
            this.body.setVelocityX(-this.moveSpeed);
        } else if (keyRIGHT.isDown) {
            this.body.setVelocityX(this.moveSpeed);
        }
        else{
            this.body.setVelocityX(0);
        }
    }

}
