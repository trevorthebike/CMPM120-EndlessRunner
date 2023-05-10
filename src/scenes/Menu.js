class Menu extends Phaser.Scene {
  constructor() {
      super("startScene");
  }

  preload() {
      this.load.image('start', 'assets/startscene.png');
  }

  create() {
      let startimage = this.add.image( 500, 350, 'start');
      keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
      //if(Phaser.Input.Keyboard.JustDown(keyR)), mainTransition, this);
      //Phaser.Input.Keyboard.JustDown(keyR)
  }
  update(){
    if(Phaser.Input.Keyboard.JustDown(keyR)){ this.scene.start('playScene')};
  }
}