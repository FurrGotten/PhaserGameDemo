gameDemo.state9 = function () {};
gameDemo.state9.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#808080';
        console.log('state9');
        addChangeStateListeners();
    },
    update: function () {}
};
