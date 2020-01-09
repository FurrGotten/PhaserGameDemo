gameDemo.state8 = function () {};
gameDemo.state8.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#000000';
        console.log('state8');
        addChangeStateListeners();
    },
    update: function () {}
};
