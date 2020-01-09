gameDemo.state1 = function(){};

let cursors, vel = 500, rocks, grass;

gameDemo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemap/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'assets/tilemap/grassTiles.png');
        game.load.image('rockTiles', 'assets/tilemap/rockTiles.png');
        game.load.spritesheet('player', 'assets/spritesheet/voidyDoge_walk.png', 199, 376);
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateListeners();

        const map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');

        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');

        map.setCollisionBetween(1, 9, true, 'rocks');
        map.setCollision(11, true, 'grass');

        player = game.add.sprite(200, 200, 'player');
        player.scale.setTo(0.2, 0.2);
        game.physics.enable(player);
        player.animations.add('walk', [1, 2]);

        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(player, rocks, function(){ console.log('hitting rocks!'); });
        game.physics.arcade.collide(player, grass, function(){ console.log('hitting grass!'); });

        if(cursors.up.isDown){
            player.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            player.body.velocity.y = vel;
        }
        else{
            player.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            player.body.velocity.x = -vel;
            player.scale.setTo(-0.2, 0.2);
            player.animations.play('walk', 4, true);
        }
        else if(cursors.right.isDown){
            player.body.velocity.x = vel;
            player.scale.setTo(0.2, 0.2);
            player.animations.play('walk', 4, true);
        }
        else{
            player.body.velocity.x = 0;
            player.animations.stop('walk');
            player.frame = 0;
        }
    }
};
