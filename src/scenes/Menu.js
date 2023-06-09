class Menu extends Phaser.Scene {
  constructor() {
      super("startScene");
  }

  preload() {
      this.load.image('start', 'assets/start.png');
      this.load.image('bg', 'assets/background1.png');
        this.load.image('rocket', 'assets/player.png');
        this.load.image('platform', 'assets/ground1.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.audio('bgmusic', "assets/bgsound.wav");
       this.load.audio('caught', 'assets/splash.wav');
        this.load.image('collectible', 'assets/flyingpoo.png');
        this.load.audio('collectsound', "assets/pickupCoin.wav");
        this.load.audio('try', "assets/audio.wav");
        this.load.audio('try1', "assets/audio1.wav");
  }

  create() {
      let startimage = this.add.image( game.config.width/2, game.config.height/2, 'start');
      keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  }

  update(){
    if(Phaser.Input.Keyboard.JustDown(keyR)){ this.scene.start('playScene')};
  }
}