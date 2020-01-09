gameDemo.state3 = function () {};
gameDemo.state3.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#66ff33';
        addChangeStateListeners();
    },
    update: function () {}
};
