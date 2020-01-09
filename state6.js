gameDemo.state6 = function () {};
gameDemo.state6.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#ff0000';
        console.log('state6');
        addChangeStateListeners();
    },
    update: function () {}
};
