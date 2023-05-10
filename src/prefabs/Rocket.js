// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, frame);
        texture = 'rocket';
        // Add physics properties
        scene.physics.add.existing(this);  
        this.body.setCollideWorldBounds(true);
        this.body.onWorldBounds = true;
        this.isFiring = false;      
        this.moveSpeed = 500;  
        this.jumping = true; 

    }

    update() {
        //console.log(this.x);
        console.log(this.y);
        if(keySPACE.isDown && this.jumping == false) {
            this.body.setVelocityY(-300);
            this.jumping = true;
        }
       // else{
        //    this.body.setVelocityY(0);
        //}
        if(keyLEFT.isDown) {
            this.body.setVelocityX(-100);
        } else if (keyRIGHT.isDown) {
            this.body.setVelocityX(100);
        }
        else{
            this.body.setVelocityX(0);
        }
        if(this.y > 440){
            this.jumping = false;  
        }
    }

    reset() {
        this.isFiring = false;
        this.body.setVelocity(0);
        this.y = 440;
        this.x = 100;
    }
}
