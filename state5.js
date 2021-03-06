var accel = 400, platform, platformGroup;

gameDemo.state5 = function(){};
gameDemo.state5.prototype = {
    preload: function(){
        game.load.image('platform', 'assets/sprites/platform.png');
    },
    create: function(){
        game.stage.backgroundColor = '#ff99dd';
        addChangeStateListeners();

        player = game.add.sprite(centerX, 500, 'player');
        player.anchor.setTo(0.5, 0.5);
        platform = game.add.sprite(0, 800, 'platform');
        platformGroup = game.add.group();
        platformGroup.create(650, 400, 'platform');
        platformGroup.create(1300, 400, 'platform');

        game.physics.enable([player, platform, platformGroup]);

        player.body.gravity.y = 500;
        player.body.bounce.y = 0.3;
        player.body.drag.x = 400;
        player.body.collideWorldBounds = true;

        platform.body.immovable = true;

        platformGroup.setAll('body.immovable', true);
    },
    update: function(){
        game.physics.arcade.collide(player, [platform, platformGroup]);
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            player.body.acceleration.x = -accel;
            player.scale.setTo(-1, 1);
            player.animations.play('walk', 4, true);
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            player.body.acceleration.x = accel;
            player.scale.setTo(1, 1);
            player.animations.play('walk', 4, true);
        } else {
            player.body.acceleration.x = 0;
            player.animations.stop('walk');
            player.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            player.body.velocity.y = -300;
        }
    }
};
