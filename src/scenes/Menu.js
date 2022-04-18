class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/squish.mp3');
        this.load.audio('sfx_explosion', './assets/collect.mp3');
        this.load.audio('sfx_rocket', './assets/buzz.mp3');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Tahoma',
            fontSize: '26px',
            backgroundColor: '#E1C699',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'HONEY HARVEST', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#FFCCCB';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fly', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#E1C699';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings ={
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings ={
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}