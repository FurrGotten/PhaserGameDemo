const gameDemo = {}, centerY = 1000/2, centerX = 1500/2;
let player, speed = 6;

gameDemo.state0 = function () {};
gameDemo.state0.prototype = {
    preload: function () {
        game.load.image('forest', 'assets/backgrounds/background.png');
        game.load.spritesheet('player', 'assets/spritesheet/voidyDoge_walk.png', 199, 376);
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#cc33ff';
        addChangeStateListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        let forestBG = game.add.sprite(0, 0, 'forest');
        game.world.setBounds(0, 0, 2974, 1005);
        player = game.add.sprite(centerX, centerY, 'player');
        player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(0.9, 0.9);
        game.camera.follow(player);
        game.physics.enable(player);
        player.body.collideWorldBounds = true;
        player.animations.add('walk', [1, 2]);
    },
    update: function () {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            player.x += speed;
            player.scale.setTo(0.9, 0.9);
            player.animations.play('walk', 4, true);
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            player.x -= speed;
            player.scale.setTo(-0.9, 0.9);
            player.animations.play('walk', 4, true);
        }else {
            player.animations.stop('walk');
            player.frame = 0;
        };
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            player.y += speed;
            if (player.y > 740){
                player.y = 740;
            };
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            player.y -= speed;
            if (player.y < 192){
                player.y = 192;
            };
        };
    }
};

function changeState(i, stateNumber) {
    game.state.start('state' + stateNumber);
    console.log('state' + stateNumber);
};
function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};
function addChangeStateListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
};
